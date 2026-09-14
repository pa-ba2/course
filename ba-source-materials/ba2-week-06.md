# Week 6 — Linear Regression

> Source: original Business Analytics 2 deck (`Week 6_ Linear Regression.pdf`), extracted to text. Each `---` marks a slide boundary; layout is approximate.

  Lesson 6:
  Linear Regression

Business Analytics Course | Spring 2024

---

01. Supervised and Unsupervised
  Learning

02. Simple Linear Regression
03. Excel Follow-Along
04. Multiple Linear Regression  TABLE OF
  CONTENT

---

01.

  Supervised and
  Unsupervised
  Learning

---

  Supervised vs Unsupervised Learning

●  Supervised learning algorithm uses
  a sample dataset to train itself to
  make predictions, iteratively
  adjusting itself to minimize error.
  These datasets are labeled for
  context, providing the desired
  output values to enable a model to
  give a “correct” answer.

●  Unsupervised learning algorithms
  work independently to learn the
  data's inherent structure without
  any speciﬁc guidance or instruction.
  You simply provide unlabeled input
  data and let the algorithm identify
  any naturally occurring patterns in  Supervised learning uses labeled training
  the dataset.  data, and unsupervised learning does not.

---

Supervised Learning Paradigm

 ●  Traditional statistics: domain experts work for many years to learn good features;
  they bring statisticians a small clean dataset

 ●  Today’s scenario: Domain knowledge is limited in new ﬁelds and large data sets are
  readily available. we (are sometimes forced to) start with a large dataset with many
  features

---

Supervised Learning Techniques

  Regression  Classiﬁcation

  Use regression techniques when Y  Use regression techniques when Y
  (dependent variable) is numerical  (dependent variable) is categorical

●  Predicting home prices based on
  ●  If a transaction is fraudulent or not
  features
  ●  If the cell is benign or malignant
●  Forecasting product demand based
  ●  If the email is spam or not
  on historical sales data

---

02.

  Simple Linear
  Regression

---

What is Simple Linear Regression

 Simple linear regression is used to estimate the relationship between two quantitative
 variables. You can use simple linear regression when you want to know:

  1.  How strong the relationship is between two variables (X and Y).
  2.  The value of the dependent variable (Y) at a certain value of the independent variable (X)

The formula for a simple linear regression is:

 ●  y is the predicted value of the dependent variable for any given value of x
 ●  B0 is the intercept, the predicted value of y when the x is 0.
 ●  B1 is the regression coefﬁcient – how much we expect y to change as x increases.
 ●  x is the independent variable ( the variable we expect is inﬂuencing y).
 ●  e is the error/variation of the estimate

---

Linear regression ﬁnds the line of best ﬁt line through your data by searching for the
regression coefﬁcient (B1) that minimizes the total error (e) of the model.

---

Assumptions of Linear Regression

Simple linear regression is a parametric test, meaning that it makes certain assumptions about
the data. These assumptions are:

 1.  Homogeneity of variance (homoscedasticity): the size of the error in our prediction
  doesn’t change signiﬁcantly across the values of the independent variable.
 2.  Independence of observations: the observations in the dataset were collected using
  statistically valid sampling methods, and there are no hidden relationships among
  observations.
 3.  Normality: The data follows a normal distribution.

Linear regression makes one additional assumption:

 4.  The relationship between the independent and dependent variable is linear: the line of
  best ﬁt through the data points is a straight line (rather than a curve or some sort of
  grouping factor).

---

03.

  Excel Example
  Follow-Along

---

Example: Direct Marketing Data

 ●  A direct marketing ﬁrm has a data set containing information on past customer
  behaviors
 ●  It wants to determine which customers to target
 ●  Question: “Which customer characteristics relate to AmountSpent, and how?”

 Please download the sheet here (File → Download → Microsoft Excel) and follow along :)

---

  Linear Regression on Excel - 1:

STEP 1: Go to the DATA ANALYSIS Under DATA Tab

STEP 2: Scroll down and choose REGRESSION

---

  Linear Regression on Excel - 2:

STEP 3: Input Y and Y Range and Choose desired output range

  X & Y Range  Which cell do you
  want your regression
  model to be at?
  Check Labels box if
  you include the header
  label in the range

  Check the plots if
  you want any plots
  along the
  regression model

---

Let’s explore the relationship of
AmountSpent (Y) & Salary (X)

---

 What Do We Learn from the Model?

R Square: About 48.94% of
the variability in Amount
Spent can be explained by
Salary

Intercept (β0): The
Average Amount Spent
when Salary is $0 is $-15.31

Salary (β1): If the salary of a
customer increases by $1,
the Amount Spent is
predicted to be increased
by $0.02
  AmountSpent = -15.31 + 0.021*Salary + ε

---

04.

  Multiple Linear
  Regression

---

What is Multiple Linear Regression

 Multiple linear regression is used to estimate the relationship between two or more
 independent variables and one dependent variable. You can use multiple linear regression
 when you want to know:

  1.  How strong the relationship is between two or more independent variables and one
  dependent variable
  2.  The value of the dependent variable at a certain value of the independent variables

The formula for a multiple linear regression is:

 ●  y = the predicted value of the dependent variable
 ●  B0 = the y-intercept (value of y when all other parameters are set to 0)
 ●  B1X1 = the regression coefﬁcient (B_1) of the ﬁrst independent variable (X_1) (a.k.a. the effect
  that increasing the value of the independent variable has on the predicted y value)
 ●  … = do the same for however many independent variables you are testing
 ●  BnXn = the regression coefﬁcient of the last independent variable
 ●  e = model error (a.k.a. how much variation there is in our estimate of y)

---

 What Do We Learn from the Model?
  R Square: About 65.84% of the variability in Amount
Intercept (β0): The
  Spent can be explained by Salary, Number of Catalog
Average Amount Spent
  sent to customers, and Number of Children
when Salary = $0, Catalog
  ●  Note that this model is better compared to the
= 0, and Children = 0 is
  previous one because it can capture more
$-442.76
  variability

Catalog (β1): Controlling for
salary and children, if we
send out 1 more Catalog,
the AmountSpent will be
increased by $47.70

Salary (β2): Controlling for
catalog and children, if the  Children (β3): Controlling
salary of a customer  for catalog and salary, if
increases by $1, the  AmountSpent = -442.76 +
  the customer has 1 more
Amount Spent is predicted  child, the Amount Spent is  (47.7*Catalog) + (0.02*Salary) +
to be increased by $0.02  predicted to be decreased  (-198.69*Children) + ε
  by $198.69

---

Assignment

Download a diamond dataset from here (File → Download → Microsoft Excel): Diamond Dataset

Given a dataset of diamonds detailing carat, price, cut, color, and other attributes:

 1.  Build a simple linear regression model with Price as the dependent variable (Y) and Carat
  as the only independent (X)
 2.  Find the R-squared value and interpret the result
 3.  Interpret the slope coefﬁcient B1

---

 Assignment Answer

R Square: About 90.71% of
the variability in Price can
be explained by Carat

Carat (β1): If the weight of
the diamond increases by 1
carat, the Price is
predicted to be increased
by $4329.86

---

THANK YOU
  Have any question?
