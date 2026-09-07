// Page: /percentage-gain-calculator/
// Targets: percentage gain calculator, stock percentage increase calculator, stock percentage gain calculator,
//          percent gain calculator, calculate percentage gain, how to calculate percentage gain
module.exports = {
  slug: 'percentage-gain-calculator',
  name: 'Percentage Gain Calculator',
  title: 'Percentage Gain Calculator — Stocks, Crypto & Investments',
  description: 'Free percentage gain calculator for stocks and investments. Enter your buy price and sell price to see the gain or loss in percent and dollars, with steps.',
  lastmod: '2026-09-08',
  stickyLabel: 'Gain',
  terms: { inc: 'gain', dec: 'loss', incLabel: 'Percentage Gain', decLabel: 'Percentage Loss' },
  h1: 'Percentage Gain <span>Calculator</span>',
  heroP: 'Enter what you paid and what it is worth now. You get the gain or loss as a percentage and in dollars.',
  calcTitle: 'Gain or Loss',
  presets: [
    { label: 'Stock $142 → $185', o: 142, n: 185 },
    { label: 'ETF $310 → $298', o: 310, n: 298 },
    { label: 'Crypto $2,400 → $3,600', o: 2400, n: 3600 },
    { label: 'Home $320,000 → $385,000', o: 320000, n: 385000 },
  ],
  labels: { orig: 'Buy Price (Cost Basis)', new: 'Sell or Current Price', pct: 'Gain' },
  placeholders: { orig: 'e.g. 142.00', new: 'e.g. 185.00' },
  quick: {
    title: 'Target Price from a Gain %',
    desc: 'What price gives you a <strong>Y%</strong> gain on your buy price?',
    labelBase: 'Buy Price',
    labelPct: 'Target gain',
    phBase: 'e.g. 50',
    phPct: '20',
  },
  seo: `
<h2 class="s-main">What This Percentage Gain Calculator Does</h2>

<p>Put in the price you paid and the price now, or the price you sold at. You get the gain or loss as a percentage, the dollar amount, and the three steps behind it. It works for a single share, a whole position, a crypto coin, a fund, or a house. If you already have a target gain in mind and want to know what price gets you there, use the "Target Price from a Gain %" box.</p>

<p>People searching for a stock percentage increase calculator usually want exactly this: did it go up, by how much, and is that good. The first two are arithmetic. The third depends on how long you held it and what else you could have done with the money, which is covered further down.</p>

<h2>The Formula</h2>

<p>Sell price minus buy price, divided by the buy price, times 100.</p>

<p><code>((Sell − Buy) / Buy) × 100</code></p>

<p>The buy price is the base. If you bought at $142 and it is now $185, the gain is $43, and $43 divided by $142 is 0.3028, so 30.28%. If you divide by $185 instead you get 23.24%, which is the loss you would take going the other way. Same two numbers, different answer, because the base changed.</p>

<h2>Reading a Loss</h2>

<p>If the current price is below what you paid, the result comes back negative and the box turns red. An ETF bought at $310 and sitting at $298 is down $12, which is a 3.87% loss.</p>

<p>Losses and gains are not symmetric. A position that falls 20% needs a 25% gain to get back to even, not 20%. Down 33%, you need 50%. Down 50%, you need 100%. Down 75%, you need 300%. This is the single most useful thing to understand about percentages in investing, and it is why a stock that "only" dropped by half can take years to recover.</p>

<h2>Percentage Gain vs. Actual Return</h2>

<p>The number on the screen is the price gain. Your actual return is usually different, in both directions.</p>

<h3>Fees lower it</h3>

<p>Buy $1,000 of a stock with a $5 commission and sell at $1,100 with another $5. Headline gain: 10%. Real gain: you paid $1,005 and received $1,095, so $90 on $1,005, which is 8.96%. Put the all-in cost and the net proceeds into the calculator if you want the number that matches your brokerage statement.</p>

<h3>Dividends raise it</h3>

<p>A stock that went from $100 to $106 and paid $3 in dividends along the way returned 9%, not 6%. The price gain ignores the dividend. Add the dividends to the sell price if you want total return.</p>

<h3>Time changes what it means</h3>

<p>A 30% gain over one year and a 30% gain over three years are not the same result. Spread over three years, 30% works out to about 9.14% a year, because each year's gain builds on the last. When you compare two investments, compare them over the same period or convert both to an annual figure.</p>

<h2>Percent vs. Dollars</h2>

<p>A $43 gain on a $142 stock is 30.28%. A $43 gain on a $1,420 stock is 3.03%. The dollars are identical; the percentages say something completely different about how well the pick worked. That is why the calculator shows both, and why traders talk in percentages while accountants talk in dollars.</p>

<h2>Where This Gets Used</h2>

<h3>Stocks and ETFs</h3>

<p>Buy price is your average cost per share, which your broker shows on the position. Sell or current price is the last trade. If you bought in several lots at different prices, use the average cost, not the first lot.</p>

<h3>Crypto</h3>

<p>Same formula, bigger numbers. $2,400 to $3,600 is a 50% gain. Because crypto prices move so far, it is worth typing the numbers in rather than estimating; a coin that "roughly doubled" is often up 80% or 130% when you actually check.</p>

<h3>Property</h3>

<p>A house bought for $320,000 and appraised at $385,000 is up 20.31%. If you put $40,000 into a kitchen in between, your real cost basis is $360,000 and the gain is 6.94%. Improvements go into the buy price.</p>

<h2>Three Mistakes</h2>

<h3>Using the current price as the base</h3>

<p>$142 to $185 is a 30.28% gain. Dividing by $185 gives 23.24%. The error gets bigger the larger the move.</p>

<h3>Comparing gains across different holding periods</h3>

<p>A 15% gain in six months beat a 20% gain in two years. Always ask "over how long" before deciding which was the better trade.</p>

<h3>Confusing percentage points with percent</h3>

<p>A dividend yield going from 2% to 3% went up one percentage point and 50%. Both are correct. Headlines use whichever sounds more dramatic.</p>
`,
  faq: [
    {
      q: 'How do I calculate the percentage gain on a stock?',
      a: 'Subtract the buy price from the sell price, divide by the buy price, and multiply by 100. A stock bought at $50 and sold at $65 gained $15, and $15 divided by $50 is a 30% gain. Enter both prices above and the calculator does it for you.',
    },
    {
      q: 'How do I calculate a percentage loss?',
      a: 'Same formula. If the sell price is lower than the buy price, the result is negative. Bought at $185, sold at $142: the loss is $43, and $43 divided by $185 is a 23.24% loss. The calculator turns the result red.',
    },
    {
      q: 'Does the percentage gain include fees and dividends?',
      a: 'Not unless you put them in. Add commissions to the buy price and subtract them from the sell price to get the net gain. Add dividends received to the sell price to get total return.',
    },
    {
      q: 'What is a good percentage gain on a stock?',
      a: 'There is no single number. The honest comparison is against what a broad index fund did over the same period. If your stock gained 12% in a year when the index gained 20%, it underperformed even though it went up.',
    },
    {
      q: 'How do I find the sell price for a target gain?',
      a: 'Multiply the buy price by 1 plus the target as a decimal. For a 20% gain on a $50 stock, $50 × 1.20 = $60. The "Target Price from a Gain %" box above gives you the number as you type.',
    },
  ],
};
