// Page: /how-to-calculate-percentage-increase/ (guide with a working calculator)
// Targets: how to calculate percentage increase, percent increase formula, percentage increase formula,
//          calculate percentage increase, how to find percent increase, percent increase between two numbers
module.exports = {
  slug: 'how-to-calculate-percentage-increase',
  name: 'How to Calculate Percentage Increase',
  title: 'How to Calculate Percentage Increase - Formula, Steps & Examples',
  description: 'How to calculate percentage increase: the percent increase formula, three steps, worked examples, decreases, Excel, and practice problems with answers. Try it below.',
  lastmod: '2026-11-12',
  schema: 'article',
  stickyLabel: 'Increase',
  h1: 'How to Calculate <span>Percentage Increase</span>',
  heroP: 'Learn how to calculate percentage increase with one formula and three steps, then try every example in the calculator below.',
  answer: `
<div class="nb-title">The Percent Increase Formula</div>
<p>To calculate percentage increase, subtract the original value from the new value, divide the result by the original value, and multiply by 100.</p>
<div class="formula">Percentage increase = (New − Original) ÷ Original × 100</div>
<p>Example: a price goes from $80 to $100. (100 − 80) ÷ 80 × 100 = 20 ÷ 80 × 100 = <strong>25%</strong>.</p>
`,
  calcTitle: 'Try It: Calculate Percentage Increase',
  presets: [
    { label: '$80 → $100', o: 80, n: 100 },
    { label: 'Rent $1,450 → $1,595', o: 1450, n: 1595 },
    { label: 'Salary $52,000 → $55,640', o: 52000, n: 55640 },
    { label: 'Visitors 3,200 → 4,000', o: 3200, n: 4000 },
  ],
  labels: { orig: 'Original Value', new: 'New Value', pct: 'Percentage Change' },
  placeholders: { orig: 'e.g. 80', new: 'e.g. 100' },
  quick: {
    title: 'Add a Percentage to a Number',
    desc: 'What is <strong>X</strong> after a <strong>Y%</strong> increase?',
    labelBase: 'Number',
    labelPct: 'Increase by',
    phBase: 'e.g. 250',
    phPct: '12',
  },
  seo: `
<h2 class="s-main">How to Calculate Percentage Increase Step by Step</h2>

<p>Percentage increase tells you how big a change is compared with where you started. A $15 rise means a lot on a $20 bill and very little on a $2,000 one, and the percentage is what makes that visible. To calculate percentage increase you only need two numbers, the original value and the new value, and three steps.</p>

<h3>Step 1: Find the difference</h3>
<p>Subtract the original value from the new value. Rent that went from $1,450 to $1,595 rose by 1,595 − 1,450 = $145.</p>

<h3>Step 2: Divide by the original value</h3>
<p>Divide the difference by the number you started with, not the new one: 145 ÷ 1,450 = 0.1.</p>

<h3>Step 3: Multiply by 100</h3>
<p>Turn the decimal into a percentage: 0.1 × 100 = 10%. The rent went up 10%. The calculator above shows these same three steps for any numbers you type, under Calculation Steps.</p>

<h2>The Percent Increase Formula Explained</h2>

<p>Written as one line, the percent increase formula is <code>(New − Original) ÷ Original × 100</code>. The top part is the size of the change. Dividing by the original turns it into a share of the starting amount, and multiplying by 100 expresses that share as a percentage.</p>

<p>There is a shorter form that gives the same answer: <code>(New ÷ Original − 1) × 100</code>. For the rent example, 1,595 ÷ 1,450 = 1.1, minus 1 is 0.1, times 100 is 10%. Some people find this version quicker on a phone calculator, because there is no subtraction to keep track of first. Both versions give exactly the same answer.</p>

<p>If the original value can be negative, as with profits or temperatures, divide by its absolute value instead: <code>(New − Original) ÷ |Original| × 100</code>. That keeps a rise from −100 to −90 showing as an increase of 10% rather than a decrease.</p>

<h2>Worked Examples</h2>

<p>Here is how to calculate percentage increase in a few situations people run into often. Type any row into the calculator to check it; the salary and visitor examples are also one-click presets.</p>

<table>
<thead><tr><th>Situation</th><th>Original</th><th>New</th><th class="wk">Working</th><th>Increase</th></tr></thead>
<tbody>
<tr><td>Salary raise</td><td>$52,000</td><td>$55,640</td><td class="wk">3,640 ÷ 52,000</td><td>7%</td></tr>
<tr><td>Subscription price</td><td>$24.99</td><td>$29.99</td><td class="wk">5 ÷ 24.99</td><td>20.01%</td></tr>
<tr><td>Website visitors</td><td>3,200</td><td>4,000</td><td class="wk">800 ÷ 3,200</td><td>25%</td></tr>
<tr><td>Share price</td><td>$18.40</td><td>$23.92</td><td class="wk">5.52 ÷ 18.40</td><td>30%</td></tr>
<tr><td>Test score</td><td>64</td><td>72</td><td class="wk">8 ÷ 64</td><td>12.5%</td></tr>
</tbody>
</table>

<h2>Percentage Decrease Uses the Same Formula</h2>

<p>When the new value is smaller, the same formula gives a negative answer, and the minus sign tells you it is a decrease. A jacket marked down from $150 to $120: (120 − 150) ÷ 150 × 100 = −20%, so the price fell 20%. You don't need a separate method, which is why many people simply calculate percentage increase and read a negative result as a drop.</p>

<h2>Working Backward to the Original Value</h2>

<p>If you know the new value and the percentage but not the starting point, divide instead of subtracting: <code>Original = New ÷ (1 + Percentage ÷ 100)</code>. A price is $69 after a 15% increase, so the original was 69 ÷ 1.15 = $60. A common mistake is to take 15% off $69, which gives $58.65 and is wrong, because the 15% was worked out on the old price.</p>

<h2>Adding a Percentage to a Number</h2>

<p>The reverse question, what a number becomes after a given increase, uses <code>New = Original × (1 + Percentage ÷ 100)</code>. A $250 bill going up 12% becomes 250 × 1.12 = $280. The "Add a Percentage to a Number" box above does this in one step.</p>

<h2>Percentage Increase Over Several Years</h2>

<p>Growth over several periods compounds, so you can't divide the total by the number of years. Revenue that grew from $10,000 to $14,641 in four years rose 46.41% in total. To calculate percentage increase per year on average, use <code>((End ÷ Start)^(1 ÷ Years) − 1) × 100</code>: (14,641 ÷ 10,000)^(1 ÷ 4) = 1.1, so 10% a year. Dividing 46.41% by four would suggest 11.6%, which overstates it. The <a href="#chained">Chained Changes</a> tool above works through year-by-year changes like this.</p>

<h2>Common Mistakes When You Calculate Percentage Increase</h2>

<p>These four slip-ups cause most of the wrong answers people get when they calculate percentage increase by hand.</p>

<ul>
<li><strong>Dividing by the new value.</strong> From 80 to 100, dividing 20 by 100 gives 20%, which is the drop from 100 back to 80. The increase is 20 ÷ 80 = 25%.</li>
<li><strong>Adding percentages in a row.</strong> A 10% rise followed by another 10% rise is 21% in total, not 20%, because the second step starts from the higher amount.</li>
<li><strong>Mixing up percent and percentage points.</strong> An interest rate moving from 4% to 5% rose by 1 percentage point, which is a 25% increase in the rate.</li>
<li><strong>Starting from zero.</strong> A change from 0 has no percentage increase, because you would be dividing by zero. Describe it as a plain amount instead.</li>
</ul>

<h2>How to Calculate Percentage Increase in Excel and Google Sheets</h2>

<p>Put the original value in A2 and the new value in B2, then type <code>=(B2-A2)/A2</code> in C2 and format C2 as a percentage. Drag the formula down to calculate percentage increase for a whole column at once. If the original can be negative, use <code>=(B2-A2)/ABS(A2)</code>. Spreadsheet cells formatted as percentages already multiply by 100, so leave the "× 100" out of the formula.</p>

<h2>Practice Problems</h2>

<p>Use these to practise how to calculate percentage increase on paper, then open each answer or check it with the calculator.</p>

<details><summary>1. A value rises from 40 to 50. What is the percentage increase?</summary><p>(50 − 40) ÷ 40 × 100 = 25%.</p></details>
<details><summary>2. Membership grows from 1,250 to 1,500 people. What is the increase?</summary><p>250 ÷ 1,250 × 100 = 20%.</p></details>
<details><summary>3. A price drops from $90 to $72. What is the percentage change?</summary><p>(72 − 90) ÷ 90 × 100 = −20%, a 20% decrease.</p></details>
<details><summary>4. After an 8% increase a ticket costs $54. What did it cost before?</summary><p>54 ÷ 1.08 = $50.</p></details>
<details><summary>5. A $3,000 salary gets a 3.5% raise. What is the new salary?</summary><p>3,000 × 1.035 = $3,105.</p></details>
<details><summary>6. A plant grows from 2.5 cm to 4 cm. What is the percentage increase?</summary><p>1.5 ÷ 2.5 × 100 = 60%.</p></details>

`,
  homeNote: 'For more everyday cases, from salaries to rent and subscriptions, see the <a href="/">homepage</a>.',
  faq: [
    { q: 'What is the formula for percent increase?', a: 'The percent increase formula is (New − Original) ÷ Original × 100. For example, from 80 to 100 is (100 − 80) ÷ 80 × 100 = 25%.' },
    { q: 'How do I calculate percentage increase between two numbers?', a: 'To calculate percentage increase between two numbers, subtract the original number from the new number, divide the difference by the original number, and multiply by 100. From 1,450 to 1,595 is 145 ÷ 1,450 × 100 = 10%.' },
    { q: 'Can a percentage increase be more than 100%?', a: 'Yes. Anything that more than doubles has risen by more than 100%. Going from 50 to 150 is a 200% increase, because the rise of 100 is twice the starting value.' },
    { q: 'What is the difference between percent increase and percentage points?', a: 'Percentage points measure the gap between two percentages; percent increase measures that gap relative to the starting one. A rate going from 4% to 5% is up 1 percentage point, or 25%.' },
    { q: 'Is there a quick way to calculate percentage increase in your head?', a: 'Compare the change with the original and look for an easy fraction. A rise of a quarter of the starting value is 25%, a fifth is 20%, a tenth is 10%. From 40 to 50 the change is 10, a quarter of 40, so 25%.' },
    { q: 'How do you calculate percentage increase with negative numbers?', a: 'Divide the change by the absolute value of the original. From −100 to −90 the change is +10, and 10 ÷ 100 × 100 = 10%, an increase. Dividing by −100 would wrongly show a decrease.' },
    { q: 'How do I calculate percentage increase in Excel?', a: 'To calculate percentage increase in Excel, put the original value in A2 and the new value in B2, enter =(B2-A2)/A2 and format the cell as a percentage. Fill the formula down to do a whole column.' },
  ],
};
