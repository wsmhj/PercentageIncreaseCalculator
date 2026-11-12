// Page: /rate-increase-calculator/
// Targets: rate increase calculator, premium increase calculator, increase rate calculator,
//          rate of increase calculator, percentage rate increase calculator
module.exports = {
  slug: 'rate-increase-calculator',
  name: 'Rate Increase Calculator',
  title: 'Rate Increase Calculator - Premiums, Rent & Interest Rates',
  description: 'Free rate increase calculator. Enter the old and new rate to get the increase in percent and dollars. Insurance premiums, rent, hourly rates, interest rates.',
  lastmod: '2026-11-11',
  stickyLabel: 'Rate change',
  terms: { inc: 'increase', dec: 'decrease', incLabel: 'Rate Increase', decLabel: 'Rate Decrease' },
  h1: 'Rate Increase <span>Calculator</span>',
  heroP: 'Enter the old rate and the new rate. You get the increase as a percentage and as an amount.',
  calcTitle: 'Rate Change',
  presets: [
    { label: 'Premium $1,240 → $1,395', o: 1240, n: 1395 },
    { label: 'Rent $1,850 → $1,980', o: 1850, n: 1980 },
    { label: 'Hourly rate $45 → $52', o: 45, n: 52 },
    { label: 'Interest 5.25% → 6.00%', o: 5.25, n: 6 },
  ],
  labels: { orig: 'Current Rate or Premium', new: 'New Rate or Premium', pct: 'Change' },
  placeholders: { orig: 'e.g. 1240', new: 'e.g. 1395' },
  quick: {
    title: 'Apply a Rate Increase',
    desc: 'What does the rate become after a <strong>Y%</strong> increase?',
    labelBase: 'Current rate',
    labelPct: 'Increase by',
    phBase: 'e.g. 1240',
    phPct: '8',
  },
  seo: `
<h2 class="s-main">What This Rate Increase Calculator Does</h2>

<p>A rate is any number you pay or charge on a recurring basis: an insurance premium, rent, an hourly rate, a utility tariff, a subscription, an interest rate. When it changes, this tool turns the old and new figures into a percentage and a difference. If you are the one setting the rate, the "Apply a Rate Increase" box goes the other way: current rate plus a percentage gives you the new rate.</p>

<h2>The Formula</h2>

<p>New rate minus old rate, divided by the old rate, times 100.</p>

<p><code>((New − Old) / Old) × 100</code></p>

<p>An annual premium going from $1,240 to $1,395 is $155 more, and $155 divided by $1,240 is 12.5%. Rent from $1,850 to $1,980 is $130 more, which is 7.03%. An hourly rate from $45 to $52 is 15.56%.</p>

<h2>Insurance Premium Increases</h2>

<p>Renewal letters usually give you the new amount and sometimes the dollar difference, rarely the percentage. $155 more on $1,240 is 12.5%. $155 more on $3,100 is 5%. The dollar figure alone does not tell you whether the increase is large.</p>

<p>Watch the billing period. $1,240 a year is $103.33 a month. If the renewal quotes $116.25 a month, that is the same 12.5% increase, but comparing $116.25 to $1,240 would tell you nothing. Put both numbers in the same units before you run them.</p>

<h2>Rent Increases</h2>

<p>$1,850 to $1,980 is 7.03%, or $130 a month, or $1,560 over a one-year lease. A number of US states and cities cap annual rent increases, and the cap is usually written as a percentage or as inflation plus a few points. The percentage from this calculator is the figure you compare against that cap. If your lease renews every year, remember the increases stack: three years of 7% is 22.5% on the original rent, not 21%.</p>

<h2>Raising Your Own Hourly Rate</h2>

<p>Freelancers and contractors put off rate increases because they expect to lose clients. Run the numbers first. Eight clients at $45 an hour is $360 for one hour each. Raise the rate to $52, lose one client, and seven clients bring in $364. You lost a client and made more money. The break-even is the point where clients lost equals the percentage increase; a 15.56% raise can absorb the loss of one client in eight and still come out ahead.</p>

<h2>Interest Rates: Points vs. Percent</h2>

<p>A mortgage rate going from 5.25% to 6.00% went up 0.75 percentage points and 14.29%. Both are true. The calculator gives you the 14.29%, because it treats 5.25 and 6.00 as two numbers like any other.</p>

<p>The percentage increase in the rate is not the percentage increase in your payment. On a $300,000 30-year mortgage, the monthly payment goes from $1,656.61 at 5.25% to $1,798.65 at 6.00%. That is 8.57% more per month, even though the rate rose 14.29%. If a headline says rates are up 14%, your payment is not up 14%.</p>

<h2>Three Mistakes</h2>

<h3>Comparing monthly to annual</h3>

<p>A $1,240 annual premium and a $116.25 monthly one look unrelated until both are annual: $1,395, a 12.5% increase. Match the period first.</p>

<h3>Adding up yearly increases</h3>

<p>7% a year for three years is 1.07 × 1.07 × 1.07, which is 22.5%, not 21%. On $1,850 rent that is $2,266.33 by the third year, not $2,238.50.</p>

<h3>Reading points as percent</h3>

<p>"Rates rose 1%" can mean from 5% to 6% (one point, a 20% increase) or from 5% to 5.05% (a 1% increase). Whoever wrote the sentence probably meant the first. Ask.</p>
`,
  faq: [
    {
      q: 'How do I calculate a premium increase percentage?',
      a: 'New premium minus old premium, divided by the old premium, times 100. $1,240 going to $1,395 is $155 more, and $155 divided by $1,240 is a 12.5% increase. Make sure both figures cover the same period, monthly or annual.',
    },
    {
      q: 'How do I calculate a rent increase percentage?',
      a: 'Same formula. Rent from $1,850 to $1,980 is $130 more, which is 7.03%. If you want the other direction, a 7% increase on $1,850 is $129.50, making the new rent $1,979.50. Use the "Apply a Rate Increase" box for that.',
    },
    {
      q: 'What is the difference between a rate increase in percent and in percentage points?',
      a: 'An interest rate going from 5.25% to 6.00% rose 0.75 percentage points. As a percentage of the original rate, it rose 14.29%. This calculator reports the second figure. Percentage points are simply the subtraction.',
    },
    {
      q: 'How do I calculate an hourly rate increase?',
      a: 'New rate minus old rate, divided by old rate, times 100. $45 to $52 an hour is $7 more, and $7 divided by $45 is a 15.56% increase.',
    },
    {
      q: 'Does a 14% interest rate increase mean my payment goes up 14%?',
      a: 'No. On a $300,000 30-year mortgage, moving from 5.25% to 6.00% is a 14.29% rate increase, but the monthly payment goes from $1,656.61 to $1,798.65, an 8.57% increase. Principal repayment does not change with the rate, so the payment rises less than the rate does.',
    },
  ],
};
