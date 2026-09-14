# Week 4 — Data Preparation and Understanding, Data Cleaning, Transforming

> Source: original Business Analytics 2 deck (`Week 4_  Data Preparation and Understanding, Data cleaning, Transforming .pdf`), extracted to text. Each `---` marks a slide boundary; layout is approximate.

Data Preparation
  and
 Understanding,
 Data cleaning,
  Transforming

---

  Contents
● Data Preparation
● Data Profiling
● Data Cleaning
● Data Integration
● Data Transformation

---

  Data Preparation
●  Data preparation is the process of cleaning and transforming raw data prior to processing
  and analysis. It is an important step prior to processing and often involves reformatting
  data, making corrections to data, and combining datasets to enrich data.

  ●  Data preparation is the process of gathering, combining, structuring and organizing data so it can
  be used in business intelligence (BI), analytics and data visualization applications.
  ●  The components of data preparation include data preprocessing, profiling, cleansing, validation
  and transformation; it often also involves pulling together data from different internal systems and
  external sources.

---

  Why Data Preparation?
There are several reasons why we need to prepare the data:

❖  By preparing data, we prepare the miner so that when using
  prepared data, the miner produces better models faster.

❖  Good data is essential for producing efficient models of any
  type.

❖  Data should be formatted according to the required software
  tool.

❖  Data need to be made adequate for the given method.

---

  Beneﬁts of Data Preparation
Data preparation helps:

Fix errors quickly- Data preparation helps catch errors before processing. After data has been
removed from its original source, these errors become more difficult to understand and correct.

Produce top-quality data- Cleaning and reformatting datasets ensures that all data used in
analysis will be high quality.

Make better business decisions- higher quality data that can be processed and analyzed more
quickly and efficiently leads to more timely, efficient and high quality business decisions.

---

  Data Preparation Steps
01  Data Profiling  02  Data discretization

03  Data cleaning  04  Data integration

05  Data transformation  06  Data reduction

---

Data Proﬁling

---

  Data Proﬁling
Data Profiling: Sourcing, selecting and auditing appropriate data

---

  Data Preprocessing
● Assuring and improving data quality are two of the primary
  reasons for data preprocessing.

● There are common criteria to measure and evaluate the quality
  of data, which can be categorized into two main elements:
  accuracy and uniqueness.

---

  Data Proﬁling
● Accuracy is described as an aggregated value over the quality criteria:
  Integrity, Consistency, and Density.

● Intuitively this describes the extent to which the data are an exact, uniform, and
  complete representation of the mini-world: the aspects of the world that the data
  describe.

---

  Data Proﬁling
● Integrity: An integral data collection contains representations of all the
  entities in the mini- world and only of those.

● Access data from any source no matter the origin, format or narrative and
  integrating them together. Increased access to data means less manual
  work, faster insights and faster time to value realized by your
  organization.

● Integrity requires both completeness and validity.

---

  Data Proﬁling
• Completeness: Complete data give a comprehensive representation of the mini-world
and contain no missing values.

●  We achieve completeness within data cleansing by correcting anomalies and not just
  deleting them.

●  It is also possible that additional data are generated, representing existing entities that
  are currently unrepresented in the data.

●  A problem with assessing completeness is that you don't know what you don't know.
  As a result, there are no known gold standard data, which can be used as a reference
  to measure completeness.

---

  Data Proﬁling

Validity: Data are valid when there are no constraints violated.

There are numerous mechanisms to increase validity including mandatory
fields, enforcing unique values, and data schema/structure.

---

  Data Proﬁling
Consistency: This quality concerns syntactic anomalies as well as contradictions.
The main challenge concerning data consistency is choosing which data source you
trust for reliable agreement among data across different sources.

❖  Schema conformance: This is especially true for the relational database
  systems where the adherence of domain formats relies on the user.
❖  Uniformity: is directly related to irregularities.

---

  Data Preparation tools
Microsoft Power BI. This powerful tool makes it easy to deal with large volumes of
data and then process it, creating insights automatically that will impact businesses.
It also integrates seamlessly with other products in the Microsoft suite.

Tableau. Tableau makes data visualization a seamless activity, making it friendly for
those who may not be as confident with the technical side of data. It also makes
spotting trends within KPI's easy.

SAP Data Intelligence. Despite being a large box solution, SAP Data Intelligence is
customizable to the organization's needs and KPI's.

---

Data Cleaning

---

Data cleaning is defined as the process of detecting and
correcting (or removing) corrupt or inaccurate records from a
record set, table, or database. Data cleansing can also be referred
to as data cleansing, data scrubbing, or data reconciliation

---

Data in the Real World Is Dirty: Lots of potentially incorrect data, e.g., instrument faulty, human
or computer error, transmission error
❖  incomplete: lacking attribute values, lacking certain attributes of interest, or containing
  only aggregate data
  e.g., Occupation=“ ” (missing data)
❖  noisy: containing noise, errors, or outliers
  e.g., Salary=“−10” (an error)
❖  inconsistent: containing discrepancies in codes or names, e.g.,
  Age=“42”, Birthday=“03/07/2010”
  Was rating “1, 2, 3”, now rating “A, B, C”
  discrepancy between duplicate records
❖  Intentional (e.g., disguised missing data)
N  Jan. 1 as everyone’s birthday?

---

More precisely, the process of data cleaning could be explained as a four-stage process:

  1  2  3  4
  Measure and
  Define and  Clean and  verify to see
  identify errors  rectify these  Document  whether the
 in data such as  cleansing meets
  errors by  error
incompleteness  the user's
, incorrectness,  replacing,  instances and  specified
  inaccuracy, or  modifying, or  error types  tolerance limits
  irrelevancy.  deleting them  in terms of
  cleanliness

---

  Incomplete (Missing) Data
  How to Handle Missing Data?
Data is not always available  ●  Ignore the tuple: usually done when the class
  n

 E.g., many tuples have no recorded value  label  is  missing  (when  doing
for several attributes, such as customer  classification)—not effective when the % of
income in sales data  missing values per attribute varies considerably.
  ●  Fill in the missing value manually: tedious +
Missing data may be due to  infeasible?
 ●  Equipment malfunction  ●  Fill in it automatically with
 ●  Inconsistent with other recorded data and
  thus deleted  a global constant : e.g., “unknown”, a new
  class?!
 ●  Data not entered due to a misunderstanding
 ●  Certain data may not be considered  the attribute mean
  important at the time of entry  the attribute mean for all samples belonging to
 ●  Not register history or changes of the data  the same class: smarter
Missing data may need to be inferred  most probable value: inference-based such as
  Bayesian formula or decision tree

---

  Noisy DataHow to Handle Noisy Data?
  ●  Binning
●  Noise: random error or variance in a  -  first sort data and partition it into
  measured variable  (equal-frequency) bins
●  Incorrect attribute values may be due to  -  then one can smooth by bin means,
  - faulty data collection instruments  smooth by bin median, smooth by bin
  - data entry problems  boundaries, etc.
  - data transmission problems  ●  Regression
  - technology limitation  -  smooth by fitting the data into
  - inconsistency in the naming convention  regression functions
●  Other data problems that require data  ●  Clustering
  cleaning  -  detect and remove outliers
  - duplicate records  ●  Combined computer and human
  - incomplete data  inspection
  - inconsistent data  -  detect suspicious values and check by
  humans (e.g., deal with possible
  outliers)

---

  Data anomalies
• The term data anomaly describes any distortion of data
resulting from the data collection process.

• From this perspective, anomalies include duplication,
inconsistency, missing values, outliers, noisy data or any kind
of distortion that can cause data imperfections.

---

  Data anomalies
Anomalies can be classified at a high level into three categories:

  01  Syntactic Anomalies:
  describe characteristics concerning the format and values used for the representation of the entities. Syntactic
  anomalies include lexical errors, domain format errors, syntactical errors, and irregularities.

  02  Semantic Anomalies:
  hinder the data collection from being a comprehensive and non-redundant representation of the mini-world.
  These types of anomalies include integrity constraint violations, contradictions, duplicates, and invalid tuples.

  03  Coverage Anomalies:
  decrease the number of entities and entity properties from the mini-world that is represented in the data
  collection. Coverage anomalies are categorized as missing values and missing tuples.

---

  Data Cleaning Process

1. Data Auditing: This first step mainly identifies the types of anomalies that reduce data quality. Data auditing
checks the data using validation rules that are pre-specified and then creates a report of the quality of the data and
its problems. We often apply some statistical tests in this step for examining the data.

2. Workflow specification: The next step is to detect and eliminate anomalies by a sequence of operations on
the data. The information collected from data auditing is then used to create a data-cleaning plan. It identifies the
causes of the dirty data and plans steps to resolve them.

3. Workflow execution: The data cleaning plan is executed, applying a variety of methods on the data set.

4. Post-processing and controlling: The post-processing or control step involves examination of the workflow
results and performs exception handling for the data mishandled by the workflow

---

Data Integration

---

  Data Integration
●  Existing data may be augmented through data enrichment. This commonly involves
  sourcing of additional information about the data points on which data are already held.
  For example, customer data might be enriched by obtaining socio-economic data about
  individual customers.

●  Data integration is a crucial task in data preparation. Combining data from different
  sources is not trivial especially when dealing with large amounts of data and
  heterogeneous sources. Data are typically presented in different forms (structured, semi-
  structured or unstructured) as well as from different sources (web, database) that could be
  stored locally or distributed.

---

  Data Integration
●  Data integration:
  Combines data from multiple sources into a coherent store

●  Schema integration: e.g., A.cust-id , B.cust-#

  Integrate metadata from different sources
●  Entity identification problem:
  Identify real world entities from multiple data sources, e.g., Bill Clinton = William
  Clinton
●  Detecting and resolving data value conflicts
  For the same real world entity, attribute values from different sources are different
  Possible reasons: different representations, different scales, e.g., metric vs. British
  units

---

Data Transformation

---

  Data Transformation
A function that maps the entire set of values of a given attribute to a new set of
replacement values s.t. each old value can be identified with one of the new values.

Methods:
❖ Smoothing: Remove noise from data
❖ Attribute/feature construction
  - New attributes constructed from the given ones
❖ Aggregation: Summarization, data cube construction
❖ Normalization: Scaled to fall within a smaller, specified range
  - min-max normalization
  - z-score normalization
  - normalization by decimal scaling
❖ Discretization: Concept hierarchy climbing

---

  Data Transformation
It is frequently necessary to transform data from one representation to another. There
are many reasons for changing representations:

 -  To generate symmetric distributions instead of the original skewed distributions:

 -  Transformation improves visualisation of data that might be tightly clustered relative to a
  few outliers.

 -  Data are transformed to achieve better interpretability.

 -  Transformations are often used to improve the compatibility of the data with assumptions
  underlying a modeling process, for example, to linearize (straighten) the relation between
  two variables whose relationship is non-linear. Some of the data mining algorithms
  require the relationship between data to be linear.

---

  Discretization
• Discretization transforms continuous data into a discrete form. This is useful in many
cases for: better data representation, data volume reduction, better data visualization and
representing data at a various level of granularity for data analysis. Data discretization
approaches are categorized as supervised, unsupervised, bottom-up or top down.
Approaches for data discretization include Binning, Entropy based, Nominal to numeric,
3-4-5 rule and Concept hierarchy.

---

  Discretization
Three types of attributes
Nominal—values from an unordered set, e.g., color, profession
Ordinal—values from an ordered set, e.g., military or academic rank
Numeric—real numbers, e.g., integer or real numbers
Discretization: Divide the range of a continuous attribute into intervals
Interval labels can then be used to replace actual data values
Reduce data size by discretization
Supervised vs. unsupervised
Split (top-down) vs. merge (bottom-up)
Discretization can be performed recursively on an attribute
Prepare for further analysis, e.g., classification

---

  Data Discretization Methods
Typical methods: All the methods can be applied recursively
Binning
Top-down split, unsupervised
Histogram analysis
Top-down split, unsupervised
Clustering analysis (unsupervised, top-down split or bottom-up merge)
Decision-tree analysis (supervised, top-down split)
Correlation (e.g., x^2) analysis (unsupervised, bottom-up merge)

---

  Concept Hierarchy Generation
●  Concept hierarchy organizes concepts (i.e., attribute values) hierarchically and
  is usually associated with each dimension in a data warehouse.
●  Concept hierarchies facilitate drilling and rolling in data warehouses to view data
  in multiple granularity
●  Concept hierarchy formation: Recursively reduce the data by collecting and
  replacing low level concepts (such as numeric values for age) by higher level
  concepts (such as youth, adult, or senior)
●  Concept hierarchies can be explicitly specified by domain experts and/or data
  warehouse designers
●  Concept hierarchy can be automatically formed for both numeric and nominal
  data. For numeric data, use discretization methods shown.

---

  Concept Hierarchy Generation for Nominal Data

Specification of a partial/total ordering of attributes explicitly at the schema level
by users or experts
street < city < state < country
Specification of a hierarchy for a set of values by explicit data grouping
{Urbana, Champaign, Chicago} < Illinois
Specification of only a partial set of attributes
E.g., only street < city, not others
Automatic generation of hierarchies (or attribute levels) by the analysis of the
number of distinct values
E.g., for a set of attributes: {street, city, state, country}

---

Automatic Concept Hierarchy Generation

---

Data Preparation Example
