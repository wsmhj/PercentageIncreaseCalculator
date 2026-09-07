# Percentage Increase Calculator

A free, instant percentage change calculator. No signup, no backend — just pure client-side math.

**Live:** [percentageincreasecalculator.app](https://percentageincreasecalculator.app/)

## Features

- **Three-field auto-solve** — Fill any two of Original Value, New Value, and Percentage Change; the third calculates automatically.
- **Quick calculator** — "What is X increased by Y%?" in one step.
- **Step-by-step formula** — Shows the full calculation breakdown.
- **Visual comparison** — Bar chart comparing original and new values.
- **Natural language result** — Plain English summary with one-click copy.
- **Preset scenarios** — Price increase, salary raise, stock growth, population change.
- **Works both ways** — Handles increases (green) and decreases (red) automatically.

## Tech

- Single HTML file, zero dependencies, zero build steps
- Vanilla JS — no frameworks
- Responsive design (mobile-friendly)
- SEO: Schema.org structured data, Open Graph, FAQ markup

## Usage

Open `index.html` in a browser. That's it.

## Inner pages (build step)

Inner calculator pages (e.g. `/price-increase-calculator/`) are generated from `build/pages/*.js` with:

```
node build/build.js
```

The script pulls the CSS and JS from `index.html` (single source of truth), renders each page into `/<slug>/index.html`, refreshes the related-links block in `index.html`, and rewrites `sitemap.xml`. Generated output is committed, so hosting needs no build command. To add a page, copy an existing file in `build/pages/`, edit it, and rerun the script.

## License

[Apache License 2.0](LICENSE)
