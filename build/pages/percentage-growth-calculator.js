// Page: /percentage-growth-calculator/
// Targets: percentage growth calculator, growth percentage calculator, percent growth calculator,
//          sales increase calculator, sales percentage increase calculator, calculate growth percentage
module.exports = {
  slug: 'percentage-growth-calculator',
  name: 'Percentage Growth Calculator',
  title: 'Percentage Growth Calculator - Sales, Revenue & Users',
  description: 'Free percentage growth calculator. Compare this period to last and get the growth rate in percent, with steps. Works for sales, revenue, users, any metric.',
  lastmod: '2026-11-11',
  stickyLabel: 'Growth',
  terms: { inc: 'increase', dec: 'decrease', incLabel: 'Percentage Growth', decLabel: 'Percentage Decline' },
  h1: 'Percentage Growth <span>Calculator</span>',
  heroP: 'Enter last period and this period. You get the growth rate as a percentage and the difference in units.',
  calcTitle: 'Growth Rate',
  presets: [
    { label: 'Revenue $48,000 → $61,000', o: 48000, n: 61000 },
    { label: 'Users 12,500 → 15,200', o: 12500, n: 15200 },
    { label: 'Traffic 8,400 → 7,900', o: 8400, n: 7900 },
    { label: 'Population 330,000 → 340,000', o: 330000, n: 340000 },
  ],
  labels: { orig: 'Starting Value (Last Period)', new: 'Ending Value (This Period)', pct: 'Growth or Decline' },
  placeholders: { orig: 'e.g. 48000', new: 'e.g. 61000' },
  quick: {
    title: 'Project the Next Period',
    desc: 'What does this number become after <strong>Y%</strong> growth?',
    labelBase: 'Current Value',
    labelPct: 'Growth rate',
    phBase: 'e.g. 61000',
    phPct: '10',
  },
  seo: `
<h2 class="s-main">What This Percentage Growth Calculator Does</h2>

<p>Put in last period's number and this period's number. You get the growth rate as a percentage, the raw difference, and the steps. It does not care what the number is: sales, revenue, users, orders, followers, headcount, website visits. If you want to project forward instead, use the "Project the Next Period" box with the current value and an expected growth rate.</p>

<h2>The Formula</h2>

<p>This period minus last period, divided by last period, times 100.</p>

<p><code>((This Period − Last Period) / Last Period) × 100</code></p>

<p>Revenue of $48,000 last quarter and $61,000 this quarter: the difference is $13,000, and $13,000 divided by $48,000 is 0.2708, so 27.08% growth. Users going from 12,500 to 15,200 is 2,700 more, which is 21.6%. Traffic falling from 8,400 to 7,900 is a 5.95% decline, and the box turns red.</p>

<h2>Sales Growth: Revenue vs. Units</h2>

<p>Sales can grow because you sold more things or because you charged more for the same things. Revenue up 10% with prices up 8% means unit volume grew about 1.85%, not 2%, because 1.10 divided by 1.08 is 1.0185. If the question is whether more people are buying, run the growth on units, not dollars. If the question is whether the business is bigger, run it on dollars. Most sales increase calculations that look surprising are mixing the two.</p>

<h2>Month over Month vs. Year over Year</h2>

<p>Month-over-month growth compares this month to last month. Year-over-year compares this month to the same month last year. For anything seasonal, retail, travel, ice cream, tax software, the year-over-year figure is the one that means something. December beating November by 40% is normal. December beating last December by 40% is news.</p>

<h2>Growth Compounds</h2>

<p>10% growth every month for a year is not 120%. Each month builds on the last, so twelve months of 10% is 1.10 to the twelfth power, which is 3.14 times the starting value, or 214% growth. A startup that reports "10% month over month" for a year has tripled. This cuts both ways: losing 5% of users every month for a year leaves you with 54% of what you started with, not 40%.</p>

<h3>Average Annual Growth Over Several Years</h3>

<p>If revenue went from $48,000 to $61,000 over three years, the total growth is 27.08%, but the average yearly growth is not 27.08 divided by 3. It is the rate that, compounded three times, gets you from 48 to 61: about 8.32% a year. Take the ending value divided by the starting value, raise it to the power of one over the number of years, and subtract one. Comparing a three-year total to someone else's one-year figure is the most common way growth numbers get misused in a pitch deck.</p>

<h2>Small Base, Big Percentage</h2>

<p>Going from 2 customers to 4 is 100% growth. Going from 20,000 to 22,000 is 10% growth and 2,000 new customers. The percentage says nothing about scale, which is why the calculator shows the difference in units next to it. When a growth rate looks impressive, look at the starting number before being impressed.</p>

<h2>Three Mistakes</h2>

<h3>Averaging growth rates</h3>

<p>Up 50% one year and down 50% the next does not average to zero. $100 becomes $150, then $75. Over the two years you lost 25%. Growth rates chain by multiplying, not by adding.</p>

<h3>Dividing by the new number</h3>

<p>12,500 to 15,200 is 21.6% growth. Dividing the 2,700 by 15,200 instead gives 17.76%, which understates it. Always divide by the period you started from.</p>

<h3>Mixing percentage points with percent</h3>

<p>Market share going from 10% to 12% is a two-point gain and a 20% increase. Both are correct. Pick the one that answers the question being asked and say which one you used.</p>
`,
  faq: [
    {
      q: 'How do I calculate growth percentage?',
      a: 'Subtract last period from this period, divide by last period, multiply by 100. Sales of $48,000 growing to $61,000 is $13,000 more, and $13,000 divided by $48,000 is 27.08% growth. Enter both numbers above and read the result.',
    },
    {
      q: 'How do I calculate a sales increase percentage?',
      a: 'Same formula. This period’s sales minus last period’s, divided by last period’s, times 100. Decide first whether you are measuring dollars or units, because a price change makes them grow at different rates.',
    },
    {
      q: 'Is growth rate the same as percentage increase?',
      a: 'The arithmetic is identical. "Growth rate" usually implies a fixed period, monthly, quarterly, or yearly, and is often reported repeatedly, while "percentage increase" is a one-off comparison between two numbers.',
    },
    {
      q: 'How do I calculate average annual growth over several years?',
      a: 'Divide the ending value by the starting value, raise the result to the power of 1 divided by the number of years, and subtract 1. $48,000 to $61,000 over three years works out to about 8.32% per year, not 27.08% divided by 3.',
    },
    {
      q: 'What does negative growth mean?',
      a: 'The number went down. Traffic falling from 8,400 to 7,900 is a growth rate of −5.95%. The calculator shows it as a decline and turns the result red.',
    },
  ],
};
