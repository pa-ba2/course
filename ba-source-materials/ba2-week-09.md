# Week 9 — Error Analysis

> Source: original Business Analytics 2 deck (`Week 9.pdf`), extracted to text. Each `---` marks a slide boundary; layout is approximate.

Week 9
Error analysis

---

Outline

1.  What is error and where does it come from?
2.  What are the consequences of errors in business analytics?
3.  How do we quantify error?
4.  What can we do with error analysis?

---

Consider the following…
  You work for a business selling plants and want a better understanding of your
  customers:
  -  What kinds of people are interested in buying plants?
  -  Can you recommend products to customers that they are most likely to purchase?

  You’ve collected some data by surveying several hundred people and recording:
  -  Demographic information (age, gender, income)
  -  Habits and preferences (time they wake up, how much they like animals, how often they buy groceries)
  -  Which of your products they are likely to buy (none, large houseplant, small cactus, both)

  You’ve “cleaned up” and analyzed the data:
  -  Calculated summary statistics (average age of cactus-buyer, range of shopping frequencies)
  -  Used regression to classify if a person will buy a plant as a function of animal opinion and income
  -  Performed hypothesis tests to determine if there is a significant difference in wake-up time between
  people who will or will not but a plant

  Now what? The next step is to understand how well your data and conclusions agree
  with the “truth.”

---

1. What is error and where does it come from?

---

Where and when can error come from?
  1.  Asking the question
  -  No relationship between variables you are modeling
  -  Poor conditioning: very small changes in x lead to large changes in y
  -  E.g. None of the data from your surveys affects plant purchasing

  2.  Collecting data (measurement error)
  -  Imperfect measurement instruments, random “noise”
  -  Inaccurate reporting or lack of precision of data
  -  E.g. Income is recorded in bins rather than exact amounts

  3.  Analyzing and modeling data (statistical error)
  -  Type I and II errors (false positive and false negative predictions)
  -  Uncertainty and variance of random variables
  -  E.g. Your model classifies people who rate animals 3/10 as never buying plants, but in
  reality 25% of them do

  4.  Drawing conclusions (logical or reasoning error)
  -  Assuming causation from correlation, ignoring potential “confounding” variables
  -  Over-generalization of results
  -  E.g. Your survey was only conducted on residents of one city but conclusions are applied to
  all people

---

2. What are the consequences of errors in business analytics?

---

Bias can lead to decisions that unfairly affect certain groups
Bias = systematic tendency of data collection & analysis leading to
inaccurate results

 -  Sampling/response bias – respondents don’t represent intended population
  E.g. You want to survey all customers but only your top customers answer
  the survey
 -  Social-desirability bias – respondents answering questions dishonestly
  E.g. People report that they are younger than their true age

When unaccounted for, bias can lead to not just inaccurate decisions but also unfair
treatment of groups of people and discrimination
 -  For example: In 2014, Amazon built an algorithm to automate hiring decisions, using past existing
  employee resumes to train the model. However, the model “learned” to discriminate against women
  for technical jobs, since most of the current employees were men and the model prefer language
  men use and reject terms like “women’s rugby team”

Do you know any other real-world examples or possible consequences of bias?

---

Other kinds of error can also have negative consequences,
depending on the context!
Sometimes, false positives are more harmful than false negatives:
 -  When identifying customers that can profit your business, investing in a non-profitable customer is more costly than
  missing a profitable one
 -  In the judicial system, it is usually worse to convict an innocent person than to not catch a guilty one

Other times, false negatives are more harmful than false positives
 -  When testing for HIV infection, sending a healthy patient for further testing is less dangerous than letting a patient
  with the virus to go untreated
 -  In security screening, the risk of allowing a potential threat to go undetected outweighs the inconvenience of delaying
  a low-risk individual

Make sure to think through the consequences of different kinds of error as you make
decisions that affect which ones are more likely in your analysis!

---

3. How do we quantify error?

---

Quantifying error of a measurement can help convey how confident
you are in its accuracy.
Standard deviation is the variation of a  Standard error of the mean captures
sample or true population around the mean  variance of sample means across samples
Not an error, but rather a descriptive statistic: “How spread  “How accurate is the mean of this sample of the true
out is the data?”  population mean?”

  = STDEV(A1:A10)/SQRT(COUNT(A1:A10))

---

Confidence in a model can be quantified with in many ways
Regression  Classifier
Report error using metrics like:  Calculate performance of the model using a
  confusion matrix and deciding what metrics are
R2: “How much variation in the predicted value can the
  important for your analysis
model explain?”

= RSQ(KNOWN_Y, KNOWN_X)

Mean Squared Error (MSE): “How different are the
predictions values from the true values?”

---

4. What can we do with error analysis?

---

What to do with error analysis?

 - Identify the scope of your analysis
  -  What groups of people does it apply to?
  -  How confident are you in your conclusions?

 - Iterate to improve and evaluate your analysis!
  -  Adjust analysis for systematic errors by collecting data from
  underrepresented groups
  -  Reduce random error by collecting data from more samples
