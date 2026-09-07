// Static page generator for inner calculator pages.
// Usage: node build/build.js
// - Pulls CSS and JS from index.html (single source of truth)
// - Renders every build/pages/*.js into /<slug>/index.html
// - Rewrites sitemap.xml and the related-links block in index.html
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://percentageincreasecalculator.app';
const TODAY = new Date().toISOString().slice(0, 10);

const indexPath = path.join(ROOT, 'index.html');
let index = fs.readFileSync(indexPath, 'utf8');
const css = (index.match(/<style>([\s\S]*?)<\/style>/) || [])[1];
const js = (index.match(/<script>([\s\S]*?)<\/script>/) || [])[1];
if (!css || !js) throw new Error('Could not extract <style> or <script> from index.html');

const tpl = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');
const pagesDir = path.join(__dirname, 'pages');
const pages = fs.readdirSync(pagesDir)
  .filter(f => f.endsWith('.js'))
  .sort()
  .map(f => require(path.join(pagesDir, f)));

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = s => String(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

// Links to every page except the current one ('' = homepage)
function relatedLinks(currentSlug) {
  const all = [{ slug: '', name: 'Percentage Increase Calculator' }, ...pages.map(p => ({ slug: p.slug, name: p.name }))];
  return all.filter(r => r.slug !== currentSlug)
    .map(r => `<a href="/${r.slug ? r.slug + '/' : ''}">${esc(r.name)}</a>`).join('\n');
}

function render(p) {
  const url = `${SITE}/${p.slug}/`;
  const jsonld = [
    { '@context': 'https://schema.org', '@type': 'WebApplication', name: p.name, description: p.description, url, applicationCategory: 'UtilityApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' },
      { '@type': 'ListItem', position: 2, name: p.name, item: url },
    ] },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: p.faq.map(q => ({ '@type': 'Question', name: q.q, acceptedAnswer: { '@type': 'Answer', text: strip(q.a) } })) },
  ].map(o => `<script type="application/ld+json">\n${JSON.stringify(o)}\n</script>`).join('\n');

  const vars = {
    TITLE: esc(p.title),
    NAME: esc(p.name),
    DESCRIPTION: esc(p.description),
    URL: url,
    JSONLD: jsonld,
    CSS: css,
    JS: js,
    STICKY_LABEL: esc(p.stickyLabel || 'Result'),
    H1: p.h1,
    HERO_P: p.heroP,
    CALC_TITLE: esc(p.calcTitle),
    PRESETS: p.presets.map(x => `<button data-o="${x.o}" data-n="${x.n}">${esc(x.label)}</button>`).join('\n    '),
    LABEL_ORIG: esc(p.labels.orig), LABEL_NEW: esc(p.labels.new), LABEL_PCT: esc(p.labels.pct),
    PH_ORIG: esc(p.placeholders.orig), PH_NEW: esc(p.placeholders.new),
    QUICK_TITLE: esc(p.quick.title), QUICK_DESC: p.quick.desc,
    QUICK_LABEL_BASE: esc(p.quick.labelBase), QUICK_LABEL_PCT: esc(p.quick.labelPct),
    QUICK_PH_BASE: esc(p.quick.phBase), QUICK_PH_PCT: esc(p.quick.phPct),
    SEO: p.seo.trim(),
    FAQ: p.faq.map(q => `<h3>${esc(q.q)}</h3>\n<p>${q.a}</p>`).join('\n\n'),
    RELATED: relatedLinks(p.slug),
  };
  return tpl.replace(/\{\{(\w+)\}\}/g, (m, k) => {
    if (!(k in vars)) throw new Error(`Template placeholder {{${k}}} not provided by page ${p.slug}`);
    return vars[k];
  });
}

// 1. Render pages
for (const p of pages) {
  const outDir = path.join(ROOT, p.slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), render(p));
  console.log('built', `/${p.slug}/index.html`);
}

// 2. Related-links block in index.html (between markers)
const START = '<!-- related:start -->', END = '<!-- related:end -->';
if (index.includes(START) && index.includes(END)) {
  const block = `${START}\n${relatedLinks('')}\n${END}`;
  index = index.replace(new RegExp(START + '[\\s\\S]*?' + END), () => block);
  fs.writeFileSync(indexPath, index);
  console.log('updated related links in index.html');
} else {
  console.warn('WARN: related markers not found in index.html, skipped');
}

// 3. Sitemap
const urls = [
  { loc: SITE + '/', lastmod: TODAY, freq: 'monthly', pri: '1.0' },
  ...pages.map(p => ({ loc: `${SITE}/${p.slug}/`, lastmod: p.lastmod || TODAY, freq: 'monthly', pri: '0.8' })),
  ...['privacy', 'terms', 'cookie-policy'].map(s => ({ loc: `${SITE}/${s}.html`, lastmod: '2026-04-04', freq: 'yearly', pri: '0.2' })),
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(u => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.freq}</changefreq>\n    <priority>${u.pri}</priority>\n  </url>`).join('\n') +
  `\n</urlset>\n`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap);
console.log('wrote sitemap.xml with', urls.length, 'urls');
