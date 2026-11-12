// Page: /price-increase-calculator/
// Targets: price increase calculator, pricing increase calculator,
//          price increase percentage calculator, increase price by percentage, cost increase calculator
module.exports = {
  slug: 'price-increase-calculator',
  name: 'Price Increase Calculator',
  title: 'Price Increase Calculator - Percentage & New Price Instantly',
  description: 'Free price increase calculator. Find the percentage a price went up, or apply a percentage increase to any price. Formula, steps, and real pricing examples.',
  lastmod: '2026-11-11',
  stickyLabel: 'Price change',
  h1: 'Price Increase <span>Calculator</span>',
  heroP: 'Enter the old price and the new price to get the percentage increase, or apply a percentage to any price.',
  calcTitle: 'Price Change',
  presets: [
    { label: 'Menu item $12 → $13.50', o: 12, n: 13.5 },
    { label: 'Subscription $9.99 → $12.99', o: 9.99, n: 12.99 },
    { label: 'Rent $1,500 → $1,650', o: 1500, n: 1650 },
    { label: 'Supplier cost $4.20 → $4.75', o: 4.2, n: 4.75 },
  ],
  labels: { orig: 'Original Price', new: 'New Price', pct: 'Price Change' },
  placeholders: { orig: 'e.g. 49.99', new: 'e.g. 54.99' },
  quick: {
    title: 'Apply a Price Increase',
    desc: 'What does a price become after a <strong>Y%</strong> increase?',
    labelBase: 'Current Price',
    labelPct: 'Raise by',
    phBase: 'e.g. 80',
    phPct: '12',
  },
  seo: `
<h2 class="s-main">What This Price Increase Calculator Does</h2>

<p>Type in the old price and the new price. You get the percentage increase, the difference in dollars, and the three steps used to get there. If you have the current price and a percentage instead, use the box labeled "Apply a Price Increase" and it gives you the new price. That covers both jobs a pricing increase calculator usually gets asked to do: checking a price that already went up, and setting a price that is about to.</p>

<h2>The Formula</h2>

<p>New price minus old price, divided by the old price, times 100.</p>

<p><code>((New − Old) / Old) × 100</code></p>

<p>The old price is the base. It is the number the change is measured against, and it is the number people most often get wrong, so Step 2 of the steps panel shows exactly which number you divided by.</p>

<h3>Example</h3>

<p>Coffee was $3.80. Now it is $4.25. The difference is $0.45. $0.45 divided by $3.80 is 0.1184. Times 100, that is an 11.8% increase. Divide by $4.25 by mistake and you get 10.6%, which looks close enough to pass and is still wrong.</p>

<h2>Raising a Price by a Percentage</h2>

<p>Multiply the current price by 1 plus the percentage as a decimal. An $80 service raised 12% is $80 × 1.12 = $89.60. Raised 5% it is $84. The quick box does this as you type, so you can try 8%, 10% and 12% in a row and look at all three before deciding.</p>

<h3>The .99 Problem</h3>

<p>A clean percentage rarely lands on a shelf price. 20% on $9.99 gives $11.99, which happens to work. 10% on $24.99 gives $27.49, and most stores would push that to $27.99. Fine, but that is a 12% increase, not 10%, and 12% is the number your customer will work out. After you round, put the old price and the final price back into the price increase calculator and check what you actually did.</p>

<h2>Where This Gets Used</h2>

<h3>Subscriptions</h3>

<p>$9.99 to $12.99 a month reads as "three dollars more" in the announcement email. It is a 30% increase. The customers who cancel will quote the 30%, not the $3. Know the percentage before you write the email.</p>

<h3>Menus</h3>

<p>A $12 dish going to $13.50 is 12.5%. If you adjust six items and one of them goes up 25% while the rest go up 8%, that one item is the one that ends up in a review. Run each item and keep the spread narrow.</p>

<h3>Rent</h3>

<p>$1,500 to $1,650 is 10%, or $150 a month, or $1,800 a year. Several US states and cities cap annual rent increases, and the cap is written as a percentage, so this is the number to compare against it. Landlords should check the cap before sending the notice. Tenants should check it after receiving one.</p>

<h3>Wholesale</h3>

<p>$4.20 to $4.75 a unit is 13.1%. Small on one unit. On 10,000 units it is $5,500, which is why purchasing departments track supplier prices in percent and not cents.</p>

<h2>Passing a Cost Increase Through</h2>

<p>Say an item costs you $6 and sells for $10. Your margin is 40%. The supplier raises the cost 10%, to $6.60. You have two options and they are not the same.</p>

<p>Add the $0.60 to your price. You sell at $10.60, keep $4 profit per unit, and your margin falls to 37.7%.</p>

<p>Add the 10% to your price. You sell at $11, make $4.40 per unit, and your margin stays at 40%.</p>

<p>Most people do the first without noticing it is a choice. If you want to hold margin, run the supplier's numbers through the calculator first, then apply the same percentage on your side.</p>

<h2>Three Mistakes</h2>

<h3>Stacking annual increases</h3>

<p>5% a year for three years is not 15%. It is 1.05 × 1.05 × 1.05, which is 15.76%. On $1,500 rent that is $1,736.44, not $1,725. The gap widens every year.</p>

<h3>Expecting a cut to undo a raise</h3>

<p>$50 raised 20% is $60. $60 cut 20% is $48. The percentage is taken from a different base each time. This is why the dollar difference is shown next to the percentage.</p>

<h3>Mixing up percentage points and percent</h3>

<p>A fee going from 2% to 3% went up one percentage point and 50%. Both are true. Whoever is announcing the change will pick the one that sounds smaller.</p>
`,
  faq: [
    {
      q: 'How do I work out the percentage increase of a price?',
      a: 'New price minus old price, divided by the old price, times 100. A price that went from $40 to $46 went up $6, and $6 divided by $40 is 15%. Or type both prices into the calculator above.',
    },
    {
      q: 'How do I add a percentage to a price?',
      a: 'Multiply the price by 1 plus the percentage as a decimal. Adding 12% to $80 is $80 × 1.12 = $89.60. The "Apply a Price Increase" box does this for you.',
    },
    {
      q: 'What is the difference between a cost increase and a price increase?',
      a: 'A cost increase is what your supplier charges you. A price increase is what you charge your customer. The formula is the same for both. Passing a cost increase through as a dollar amount lowers your margin percentage; passing it through as the same percentage keeps it where it was.',
    },
    {
      q: 'Does this work for price drops and discounts?',
      a: 'Yes. If the new price is lower than the old one, the percentage comes back negative and the result box turns red. Sales, markdowns and refunds all use the same formula.',
    },
    {
      q: 'Can I find the original price before an increase?',
      a: 'Yes. Leave the original price blank, enter the new price and the percentage, and the calculator solves for the starting price. Something that costs $57.50 after a 15% increase started at $50.',
    },
  ],
};
