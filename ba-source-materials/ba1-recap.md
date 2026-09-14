# BA1 Recap — Your Analytics Field Guide

> Source: authored recap of Business Analytics 1, condensed from the original 11-week deck (Weeks 0–10) plus the BA1 Teacher's Handbook. Originally built as an illustrated web/PDF guide (`BA1-Recap-Study-Guide.html`); this is the plain-text/markdown version of the same content, for use as project reference material. Diagram descriptions are kept as captions — the visuals themselves live only in the HTML/PDF version.

## How to use this guide

This is a recap, not a textbook — it assumes you sat through BA1 and is here to bring it back fast.

Each topic below follows the same shape:
- **The idea** — what the concept actually is, in plain language
- **An analogy** — something from ordinary life with the same shape as the maths
- **A worked example** — real numbers, so it stops being abstract
- **Common mistakes** — errors people genuinely make
- **Self-check** — questions to answer from memory before moving on

---

## 1. The PED Framework

The loop behind every week of BA1 — and still the backbone of BA2.

1. **P — Process.** Collect the data and clean it. Roughly 80% of an analyst's actual work.
2. **E — Explain.** Visualise it and communicate what it means — not just "here is a chart" but *why* the chart looks like that.
3. **D — Decide.** Turn the insight into an action. If nothing changes as a result, the analysis didn't happen.

> "An analysis that doesn't lead to a decision is just a fun fact — interesting, but nothing changes." — BA1, Week 0

**Diagram 1 — The PED loop:** a circular (not linear) flow: Process → Explain → Decide → back to Process, driven by new questions each cycle.

**Analogy:** Think of a doctor. *Process* is running the blood tests correctly. *Explain* is reading the results to find the cause. *Decide* is writing the prescription. A doctor who runs perfect tests and sends you home with nothing hasn't treated you.

**Values that carry forward:**
- Human-in-the-loop — the algorithm is the engine, your judgement is the steering wheel
- Correlation isn't causation — statistics find the link, humans find the logic
- AI is a co-pilot, not an autopilot

**Self-check:**
1. Which stage of PED eats most of an analyst's time, and why does that surprise people?
2. Your report is beautiful and nobody acts on it. Which stage failed?
3. Why is PED drawn as a loop rather than a line?

---

## 2. The Four Levels of Analytics

| Level | Asks | Tool |
|---|---|---|
| Descriptive | What happened? | Reports, dashboards |
| Diagnostic | Why did it happen? | Drill-down, correlation |
| Predictive | What will happen? | Regression, forecasting |
| Prescriptive | What should we do? | Optimisation, Solver |

**Diagram 2 — The analytics value ladder:** an ascending staircase of the four levels; value and difficulty both increase moving up.

**Analogy:** You're driving. Descriptive is the rear-view mirror. Diagnostic is looking under the bonnet when something rattles. Predictive is the sat-nav estimating arrival time. Prescriptive is the sat-nav saying "turn left now to avoid the jam."

**Common mistake:** Jumping straight to predictive because it sounds impressive. If the descriptive layer is wrong (bad definitions, dirty data), the forecast is confidently wrong — worse than no forecast.

**Self-check:**
1. "Sales fell 12% in March." Which level is that?
2. "Sales fell because a competitor opened two branches nearby." Which level?
3. Which level did BA1 finish on, and in which week?

---

## 3. KPIs vs. Metrics

Every KPI is a metric. Almost no metric is a KPI.

A **metric** is anything measurable. A **KPI** is a metric tied directly to a goal you're trying to move — someone should change their behaviour when it moves. A usable KPI is **simple** (one sentence to explain), **relevant** (tied to a real goal), and **timely** (measured often enough to act on).

**Worked example:** An online shop tracks *page views* (a metric) and *cart abandonment rate* (a KPI). Page views can double while revenue stays flat; abandonment rate can't move without someone caring.

**Common mistake:** The vanity metric — a number that only ever goes up and tells you nothing (e.g. total registered users since launch). If a metric can't deliver bad news, it isn't a KPI.

**Self-check:**
1. Name a metric from your own life that's pure vanity.
2. Turn "total followers" into something that could actually deliver bad news.
3. Why does a KPI need to be *timely* to be useful?

---

## 4. Finding the Centre (Mean, Median, Mode)

**Analogy:** A birthday cake cut into uneven slices, one per person. The **mean** is what you'd get if you mashed every slice together and redistributed it equally. The **median** is the person standing in the middle when everyone lines up by slice size. The **mode** is the slice size you see most often.

| Measure | Use when |
|---|---|
| Mean | Data is fairly even, no extreme values |
| Median | Outliers exist — salaries, house prices, rent |
| Mode | Categories, or "most common" questions |

**Worked example:** Six graduates report starting salaries (in thousands): 32, 34, 35, 36, 38, and 480 (one founded a startup that sold). Mean = 109k. Median = 35.5k. The mean is technically correct and useless — it describes nobody in the room.

**Diagram 3 — How one outlier drags the mean:** a number line with five salaries clustered low and one far out at 480k; the median sits inside the cluster, the mean is stranded near the outlier.

**Common mistake:** Reading "average" in a headline and assuming it means "typical." It usually means the mean, which is the measure most easily distorted.

**Self-check:**
1. A country's average income rises but the median doesn't move. What happened?
2. Which measure would you use for "most popular dress size sold"?
3. Why is the median unaffected by how extreme the outlier is?

---

## 5. Measuring the Spread

The centre tells you where. The spread tells you how much to trust it.

**Analogy:** Range is a race — the gap between the fastest and slowest runner. Easy to grasp, fragile (one straggler changes it entirely). Standard deviation asks how far the *typical* runner finishes from the average time.

**Worked example:** Two cafés both average 100 customers a day. Café A ranges 95–105 (low SD). Café B ranges 20–300 (high SD). Same mean, totally different businesses — Café A can staff on a schedule, Café B can't.

**Diagram 4 — Same mean, different spread:** two bell curves sharing one centre line at 100 — one tall and narrow (Café A), one short and wide (Café B).

**Common mistake:** Reporting an average with no measure of spread beside it. Any average alone should make you suspicious.

**Self-check:**
1. Why is range considered a fragile measure of spread?
2. Two delivery firms both average 30 minutes. One has a much higher SD. Which do you order from?
3. What does a standard deviation of nearly zero tell you?

---

## 6. Choosing the Right Chart

| Question | Chart | Rule |
|---|---|---|
| Which is bigger? | Bar / column | Sort largest to smallest |
| How is it distributed? | Histogram / box plot | Check for skew |
| What are the parts? | Pie / treemap | Never more than 5 slices |
| How has it changed? | Line / area | Time on the x-axis |
| Are these related? | Scatter | Tight diagonal = strong link |

**The golden rule:** start the y-axis at zero on bar charts. A truncated axis doesn't visualise data — it manufactures a story.

**Diagram 5 — The same data, honest and dishonest:** two bar charts of the identical values (98, 99, 100); one with a zero-based axis looks nearly flat, one with an axis starting at 97 looks dramatic.

**Common mistake:** The overloaded pie chart — nine near-identical slices with a legend to match. More than five categories → use a sorted bar chart instead.

**Self-check:**
1. You want to show whether study hours relate to exam marks. Which chart?
2. Why should bar charts be sorted rather than left alphabetical?
3. Name two ways a technically accurate chart can still mislead.

---

## 7. Telling the Story

1. **Context** — what situation are we in?
2. **Evidence** — what does the data show? One chart, one message.
3. **Conclusion** — what should we do now?

**Worked example:**
- Weak: "Here's a dashboard of Q3 churn by segment."
- Strong: "We're losing customers faster than we're winning them *(context)*. Almost all of it is first-month users on the basic plan *(evidence)*. I'd move onboarding support to week one and re-measure in six weeks *(conclusion)*."

**Common mistake:** Presenting everything you found because it took effort to find. The audience needs the decision, not the working — keep the rest for the appendix.

**Self-check:**
1. Which of the three stages do analysts most often skip?
2. Rewrite "engagement is down 8%" as a full context-evidence-conclusion statement.
3. Why is a conclusion you can argue with better than a safe one?

---

## 8. Systems Thinking

A number never explains itself. "Orders take nine days" only becomes useful once you can see the steps an order passes through and spot which one is idle.

**Process mapping** draws the steps in order. A **swimlane diagram** adds who is responsible for each step — usually where the delay hides, in the handover between teams.

**Analogy:** A doctor doesn't treat a fever by cooling the thermometer. Business metrics work the same way — the late-delivery number is the thermometer, the broken handover between warehouse and courier is the infection.

**Diagram 6 — A swimlane map with a bottleneck:** three lanes (Customer, Sales, Warehouse), a process flowing across them, with one cross-lane handover highlighted as a multi-day delay.

**Self-check:**
1. What does a swimlane diagram add that a plain flowchart doesn't?
2. Why do bottlenecks so often appear at handovers between teams?
3. Give your own example of "cooling the thermometer" in a business.

---

## 9. Data Governance & Ethics

- **Single source of truth (SSOT)** — one agreed number, in one agreed place.
- **Internal vs. external data** — internal (CRM, payroll) is high-trust; external (APIs, scraped data) adds context but needs verifying.
- **Anonymisation** — identifying details permanently destroyed (irreversible).
- **Pseudonymisation** — identifiers swapped for codes, with a key held separately (reversible — still personal data).
- Under GDPR and similar laws: **right to be forgotten** and **right to portability**.

**Diagram 7 — Anonymisation vs. pseudonymisation:** anonymised data has no route back to identity; pseudonymised data has a separate key file, meaning it's still legally personal data.

**The ethical floor:** being legally permitted to use data isn't the same as it being right to. If the person whose data it is wouldn't be comfortable seeing what you're doing with it, that's a real problem no compliance checklist catches.

**Self-check:**
1. Why is pseudonymised data still treated as personal data?
2. What breaks in a company with no single source of truth?
3. Give an example of something legal but ethically questionable.

---

## 10. Cleaning Dirty Data

**Four faces of dirty data:** duplicates, inconsistencies ("UAE" vs. "U.A.E." vs. "Dubai"), missing values, outliers.

**Analogy:** Cleaning data is preparing ingredients, not cooking. Nobody praises you for washing the vegetables — but grit in the salad is the only thing anyone remembers about the meal.

**The ETL loop:** Extract (pull from source, never edit the original) → Transform (clean, filter, reshape) → Load (ready to analyse; refresh next month).

| Tool | What it does |
|---|---|
| `TRIM()` / `CLEAN()` | Strips extra spaces / non-printable characters |
| `Ctrl+E` | Flash Fill — learns a pattern, fills the rest |
| `Ctrl+H` | Find & Replace across thousands of rows |
| Text to Columns | Splits one cell into many |
| Unpivot | Wide table → tall table (makes Pivot Tables work) |

**The sum test:** total your dataset before and after cleaning. If the total changed in a way you can't explain, you broke the data, not cleaned it.

**Common mistake:** Deleting outliers because they're inconvenient. Investigate first — delete only if you can say why it isn't real.

**Self-check:**
1. Why is Power Query better than cleaning cells by hand?
2. What does the sum test catch?
3. When is it legitimate to delete an outlier?

---

## 11. Probability & the Normal Curve

**The empirical rule:** 68% of data falls within 1 standard deviation of the mean, 95% within 2, 99.7% within 3.

**Diagram 8 — The empirical rule:** a bell curve with shaded bands at ±1, ±2, ±3 SD, labelled 68% / 95% / 99.7%.

```
Z = (x − μ) / σ
```
Z-score: how many standard deviations a value sits from the mean.

**Analogy:** You already calculate Z-scores instinctively. A shopper sees her usual coffee jump in price and thinks "that's unusually steep" — comparing the rise both to the normal price and to how much prices normally wobble. That instinct is exactly a Z-score.

**Worked example:** A test has mean 70, SD 8. You scored 86. Z = (86−70)/8 = **2.0** — two SDs above the mean, roughly top 2.5%.

**Self-check:**
1. What fraction of data sits within two standard deviations of the mean?
2. Why is a Z-score more comparable across datasets than a raw score?
3. Your Z-score is −1.5. In plain words, where do you stand?

---

## 12. Samples, CLT & Confidence

You'll almost never have all the data. The **Central Limit Theorem** is what makes reasoning from a sample legitimate: repeated sample averages form a normal distribution around the true value, even when the underlying data is messy.

**Analogy:** You don't drink the whole pot of soup to check the seasoning — one spoonful will do, as long as you stirred first. Stirring is random sampling; a spoonful from an unstirred pot only tells you about that corner.

| | Measures | With more data |
|---|---|---|
| Standard deviation (SD) | Spread of individual values | Stays roughly the same |
| Standard error (SE) | Spread of sample means | Shrinks |

**Confidence intervals** are a range, not a point: "95% confident the true average is between 42 and 48" is honest; "the average is 45" hides how much you don't know.

**Diagram 9 — Why sample size narrows the interval:** three error bars centred on the same true value, widest at n=30, narrowest at n=3,000.

**Common mistake:** Assuming a big sample fixes a biased one. Size never repairs bias — only better sampling does.

**Self-check:**
1. In the soup analogy, what does "stirring" represent?
2. Which shrinks when you collect more data — SD or SE?
3. Why is reporting a range more honest than a single number?

---

## 13. Simple Linear Regression

```
Y = a + bX
```
a = intercept (baseline). b = slope (change in Y per 1-unit of X).

**Analogy:** Pin a piece of string across a scatter of dots and slide it until it sits as close to all of them as possible. Regression finds that line arithmetically.

**Worked example:** A café models `Revenue = 400 + 3.2 × (ad spend)`. With zero advertising, revenue is ~400/day; every extra $1 of ad spend is associated with ~$3.20 more revenue.

| Metric | Meaning | Rule of thumb |
|---|---|---|
| R² | Share of variation in Y explained by X | Closer to 1 = tighter fit |
| p-value | Could this be coincidence? | p < 0.05 = significant |
| Residual | Actual − predicted | Should scatter randomly |

**Diagram 10 — The line of best fit and its residuals:** a scatter with a fitted line; short vertical segments from each point to the line are the residuals.

**Common mistakes:**
- Treating the slope as proof of cause (ice cream sales predict drowning deaths — summer causes both).
- **Extrapolation** — a model built on ad spends of 50–500 says nothing trustworthy about spending 50,000.

**Self-check:**
1. In `Y = 400 + 3.2X`, what does 400 represent?
2. Your R² is high but residuals show a clear curve. What's wrong?
3. Why can't a low p-value prove causation?

---

## 14. Multiple Regression

Reality has more than one cause. Multiple regression isolates each input's contribution **holding the others constant** (*ceteris paribus*).

**What's new at this level:**
- **Adjusted R²** — only rises if a variable actually helps (plain R² always rises with more variables, even useless ones)
- **Multicollinearity** — two inputs too correlated with each other; drop one
- **Dummy variables** — turning categories into 0/1 columns
- **F-test** — does the whole model beat guessing the average?

**Analogy:** Multicollinearity is two people carrying one sofa through a door — something's doing the lifting, but you can't credit either one individually.

**Common mistake — overfitting:** enough variables and a model will explain historical data almost perfectly by memorising noise, then fail on new data. A simpler model that generalises better is the better model.

**Self-check:**
1. Why does plain R² always rise when you add a variable?
2. What does *ceteris paribus* mean when reading a coefficient?
3. How would you spot an overfitted model?

---

## 15. Time Series & Growth

**Four components:** Trend (long-term direction), Seasonality (repeating, calendar-linked), Cyclical (longer economic waves), Noise (unexplained randomness).

**Diagram 11 — Decomposing a time series:** the observed series shown as the sum of a trend line, a repeating seasonal wave, and residual noise.

**Common mistake:** Comparing December to November and declaring a collapse on seasonal data. Compare like with like — this December against last December.

```
72 ÷ growth rate = years to double   (Rule of 72)
```

**Analogy:** Fold paper in half 42 times and it would reach the moon — human intuition doesn't accept exponential growth naturally, which is why an "small" 8% monthly growth rate is actually enormous.

A **log transformation** turns an exponential curve into a straight line, so ordinary regression tools work on it again.

**Self-check:**
1. Name the four components of a time series.
2. At 6% growth a year, roughly how long to double?
3. Why take logs before running a regression on exponential data?

---

## 16. Optimisation & Solver

Linear programming answers: what's the best possible choice, given what limits me?

- **Objective function** — the one thing you're maximising or minimising
- **Decision variables** — the levers you can pull
- **Constraints** — the walls: time, budget, materials

**Analogy:** Packing a suitcase to a weight limit. The objective is bringing the most useful set of things; decision variables are what you pack; the constraint is the airline's 23kg.

| Term | Meaning |
|---|---|
| Feasible region | Every combination satisfying all constraints |
| Corner point theorem | The best answer always sits at a corner of that region |
| Binding constraint | The one you've hit — your real bottleneck |
| Shadow price | Extra profit from one more unit of a scarce resource |

**Diagram 12 — The feasible region:** a two-axis graph with constraint lines enclosing a shaded polygon; the optimal solution marked at one corner.

**Self-check:**
1. What's the difference between a binding and non-binding constraint?
2. Why is it wasteful to buy more of a non-binding resource?
3. In the suitcase analogy, what's the shadow price of 1kg more allowance?

---

## 17. Excel Reference

**Core functions:** `SUM`, `AVERAGE`, `MEDIAN`, `MODE`, `STDEV`, `AVERAGEIF`, `IF`, `NORM.DIST`, `NORM.INV`, `FORECAST.LINEAR`

**Shortcuts & tools:** `Ctrl+Arrows` (jump to edge of data), `Ctrl+Shift+L` (toggle filters), `Ctrl+E` (Flash Fill), `Ctrl+H` (Find & Replace), Analysis ToolPak, Solver, Slicers, Sparklines

**Diagram 13 — Relative vs. absolute references:** dragging a formula using `A1` shifts the reference each row (often wrong); using `$A$1` keeps it locked (usually right).

`A1` shifts when dragged. `$A$1` stays locked. Half of all broken spreadsheets are a missing dollar sign.

---

## 18. Glossary

| Term | Definition |
|---|---|
| KPI | A metric tied to a goal, that someone acts on |
| SSOT | Single source of truth — one agreed number |
| ETL | Extract, transform, load — the prep pipeline |
| Outlier | A value far from the rest — investigate, don't assume |
| SD | Typical distance of a value from the mean |
| SE | Spread of sample means; shrinks with more data |
| Z-score | Distance from the mean, in standard deviations |
| CLT | Sample means trend normal, whatever the source data |
| Confidence interval | An honest range rather than a false point |
| R² | Share of variation your model explains (0–1) |
| p-value | Probability the result is chance; under 0.05 = significant |
| Residual | Actual minus predicted |
| Multicollinearity | Two predictors too alike to separate |
| Overfitting | Memorising noise; fails on new data |
| Extrapolation | Predicting beyond the range you have data for |
| Ceteris paribus | All else held constant |
| Seasonality | Repeating, calendar-linked pattern |
| Feasible region | All solutions satisfying every constraint |
| Shadow price | Value of one more unit of a scarce resource |
| Anonymisation | Irreversible removal of identifying data |
| Pseudonymisation | Reversible with a key — still personal data |

---

## 19. Where BA2 Picks Up

New in BA2:
- **SQL** — querying data at the source, beyond what a spreadsheet can hold
- **Classification & machine learning** — predicting categories, and judging whether a model deserves trust
- **Domain analytics** — marketing, people, operations & finance
- **Forecasting 2.0** — past Excel's forecast sheet, into AI-assisted methods

> "You're not starting over. You're adding a second engine to a car you already know how to drive." — Welcome to BA2

**One rule carries forward unchanged:** AI is a co-pilot, not an autopilot. It speeds up *Process*. It never replaces judgement on *Explain* and *Decide*. If you can't explain why the AI's answer is right, you're not done yet.

---

## 20. Panic Sheet — One Screen, Screenshot It

**Formulas**

| | |
|---|---|
| Z-score | (x − μ) ÷ σ |
| Empirical rule | 68 / 95 / 99.7 at 1 / 2 / 3 SD |
| Regression | Y = a + bX |
| Residual | actual − predicted |
| Rule of 72 | 72 ÷ growth% = years to double |
| Significant | p < 0.05 |

**Excel**

| | |
|---|---|
| `=AVERAGE` / `=MEDIAN` | centre |
| `=STDEV` | spread |
| `=FORECAST.LINEAR` | predict |
| `$A$1` | lock a reference |
| `Ctrl+E` / `Ctrl+H` | flash fill / replace |

**Before you present, ask:**
- Does the y-axis start at zero?
- Did I quote a median alongside the mean?
- Did I give a range, not just a point?
- Am I claiming cause from a correlation?
- Does this end in a decision?
