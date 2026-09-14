# Week 5 — Data Preparation

> Source: original Business Analytics 2 deck (`Week 5_ Data Preparation.pdf`), extracted to text. Each `---` marks a slide boundary; layout is approximate.

  DATA
PREPARATION

---

DATA PREPARATION

---

Presentation title  3

INTRODUCTION
Data preparation is the process of gathering, combining, structuring and organizing
data so it can be used in business intelligence (BI), analytics and data
visualization applications. The components of data preparation include data
preprocessing, profiling, cleansing, validation and transformation; it often also involves
pulling together data from different internal systems and external sources.

---

PURPOSES OF DATA
  PREPARATION

  One of the primary purposes of data preparation is to ensure
  that raw data being readied for processing and analysis is
  accurate and consistent so the results of BI and analytics
  applications will be valid. Data is commonly created with
  missing values, inaccuracies or other errors, and separate data
  sets often have different formats that need to be reconciled when
  they're combined. Correcting data errors, validating data quality
  and consolidating data sets are big parts of data preparation
  projects.

---

Presentation title  5

WHAT ARE THE
BENEFITS OF DATA
Data scientists often complain that they spend most of their time gathering, cleansing
PREPARATION?
and structuring data instead of analyzing it. A big benefit of an effective data
preparation process is that they and other end users can focus more on data
mining and data analysis -- the parts of their job that generate business value. For
example, data preparation can be done more quickly, and prepared data can
automatically be fed to users for recurring analytics applications.
Done properly, data preparation also helps an organization do the following:
• ensure the data used in analytics applications produces reliable results;
• identify and fix data issues that otherwise might not be detected;
• enable more informed decision-making by business executives and operational
  workers;
• reduce data management and analytics costs;
• avoid duplication of effort in preparing data for use in multiple applications; and
• get a higher ROI from BI and analytics initiatives.

---

  STEPS IN THE DATA
PREPARATION PROCESS

  Data preparation is done in a series of steps. There's some
  variation in the data preparation steps listed by different data
  professionals and software vendors, but the process typically
  involves the following tasks:

---

Presentation title  7

  STEPS IN THE DATA PREPARATION
  PROCESS

  DATA COLLECTION.  DATA DISCOVERY AND PROFILING

  Relevant data is gathered from operational  The next step is to explore the collected data to
  systems, data warehouses, data lakes and other  better understand what it contains and what needs
  data sources. During this step, data scientists,  to be done to prepare it for the intended uses. To
  members of the BI team, other data  help with that, data profiling identifies patterns,
  professionals and end users who collect  relationships and other attributes in the data, as
  data should confirm that it's a good fit for the  well as inconsistencies, anomalies, missing values
  objectives of the planned analytics applications.  and other issues so they can be addressed.

---

Presentation title  8

  STEPS IN THE DATA PREPARATION
  PROCESS

  DATA CLEANSING  DATA STRUCTURING

  Next, the identified data errors and issues are  At this point, the data needs to be modeled and
  corrected to create complete and accurate data  organized to meet the analytics requirements. For
  sets. For example, as part of cleansing data sets,  example, data stored in comma-separated values
  faulty data is removed or fixed, missing values  (CSV) files or other file formats has to be
  are filled in and inconsistent entries are  converted into tables to make it accessible to BI and
  harmonized.  analytics tools.

---

Presentation title  9

  STEPS IN THE DATA PREPARATION
  PROCESS

  DATA TRANSFORMATION AND  DATA VALIDATION AND PUBLISHING
  ENRICHMENT
  In addition to being structured, the data  In this last step, automated routines are run against
  typically must be transformed into a unified  the data to validate its consistency, completeness
  and usable format. For example, data  and accuracy. The prepared data is then stored in a
  transformation may involve creating new fields  data warehouse, a data lake or another repository
  or columns that aggregate values from existing  and either used directly by whoever prepared it or
  ones. Data enrichment further enhances and  made available for other users to access.
  optimizes data sets as needed, through measures
  such as augmenting and adding data.

---

  Presentation title  10
WHAT ARE THE
CHALLENGES OF DATA
PREPARATION?
 Data preparation is inherently complicated. Data sets pulled together from different
  source systems are highly likely to have numerous data quality, accuracy and
  consistency issues to resolve. The data also must be manipulated to make it usable, and
  irrelevant data needs to be weeded out. As noted above, it's a time-consuming process:
  The 80/20 rule is often applied to analytics applications, with about 80% of the work
  said to be devoted to collecting and preparing data and only 20% to analyzing it.

---

  Presentation title  11
WHAT ARE THE
CHALLENGES OF DATA
PREPARATION?
 In an article on common data preparation challenges, Rick Sherman, managing
  partner of consulting firm Athena IT Solutions, detailed the following seven challenges
  along with advice on how to overcome each of them:
  • Inadequate or nonexistent data profiling. If data isn't properly profiled, errors,
  anomalies and other problems might not be identified, which can result in flawed
  analytics.
  • Missing or incomplete data. Data sets often have missing values and other forms
  of incomplete data; such issues need to be assessed as possible errors and addressed
  if so.
  • Invalid data values. Misspellings, other typos and wrong numbers are examples of
  invalid entries that frequently occur in data and must be fixed to ensure analytics
  accuracy.

---

  Presentation title  12
WHAT ARE THE
CHALLENGES OF DATA
PREPARATION?
 • Name and address standardization. Names and addresses may be inconsistent in
  data from different systems, with variations that can affect views of customers and
  other entities.
  • Inconsistent data across enterprise systems. Other inconsistencies in data sets
  drawn from multiple source systems, such as different terminology and unique
  identifiers, are also a pervasive issue in data preparation efforts.
  • Data enrichment. Deciding how to enrich a data set -- for example, what to add to
  it -- is a complex task that requires a strong understanding of business needs and
  analytics goals.
  • Maintaining and expanding data prep processes. Data preparation work often
  becomes a recurring process that needs to be sustained and enhanced on an ongoing
  basis.

---

PREPARE YOUR
DATA FOR ANALYSIS
USING EXCEL

---

  14

INTRODUCTION

---

IMPORT DATA

---

  16
•  SPLIT DATA ALONG
  DELIMITERS

  When you import your data, you should be aware of a clean delimitation of your
  entries. IT systems usually define a delimiter such as a semicolon or a comma. In
  Microsoft Excel, we recommend to use the import function to get your data into a
  tabular shape, also if you import a csv and not a txt file. Compared to simply opening
  the csv file, the import function has the advantage that you can define the character
  encoding. Our animation shows you how to use the import function.

---

  17
•  SPLIT DATA ALONG
  DELIMITERS

---

  18
• EXTRACT PARTS FROM
  DATA ENTRIES

In case your import did not work well or you need only a part of a certain attribute
(such as a part from a nested ID), you have to perform more advanced split operations.
For example, if you want to extract the domains of email addresses, you have to extract
the part between the @ and the last dot. If you use original Excel functions, LEFT,
RIGHT will help you to extract text parts. With FIND, you can specify the delimiters
(in our case “@” and “.”), with LEN, you can define the length of the character
sequences you want to extract. You will have to workaround with a few combinations
to finally get the domain:

---

  19
• EXTRACT PARTS FROM
  DATA ENTRIES

---

  20
• REMOVE LEADING AND
  TRAILING SPACES
System exports or web-scraped data often cause unwanted leading and trailing spaces.
You can remove those spaces by using the Excel TRIM function (do not use find and
replace as this will also remove spaces between words!). The syntax is as follows:
=TRIM(text)
If you do not want to repeat this exercise for every single column, you can use PrepJet’s
Trim Spaces function which allows you to trim your whole sheet in a single click.

---

FORMAT ADJUSTMENTS

---

  22
•  STANDARDIZE FORMATS

  Before combining and analyzing data, it is crucial to harmonize the formats of your
  data. If your data comes from different countries or IT systems with different
  languages, you should make sure to have consistent decimal separators (comma vs.
  dot). The same applies for date formats (e.g. DD.MM.YYYY vs. MM/DD/YYYY)
  currencies (e.g. EUR vs. USD) or measurement units (e.g. miles vs. kilometers). In
  Excel, the best solution is to transform data sets with different formats into one
  standard before combining them. For date types, you can use Excel’s “Number”
  functionality. Click on the lower right arrow to define a custom format:

---

  23
•  STANDARDIZE FORMATS

---

  24
•  STORE DATA IN THE
  CORRECT FORMAT
  To make sure that your data is analyzed appropriately, you should store it in the correct format. For
  example, your data might contain a numerical Identifier which has however no numerical meaning. Tell
  Excel that this is not a number by classifying it as text. Excel helps you to specify the date format in the
  Home ribbon in the section “Number” (see above). To perform a final check on the format of your data,
  you can use PrepJet’s Find Inconsistencies function which highlights inconsistent data types
  automatically.

---

  25
•  REPLACE UNRECOGNIZED
  OR CORRUPTED
  CHARACTERS
  In case your import failed for some reason, some symbols might be corrupted after an
  export as the encoding of characters might differ between IT systems. Characters like
  “ÃŸ” might introduce problems if you want to work with your data. We recommend to
  correct them using the find and replace function.

---

  26
•  CHECK FOR TRUNCATED
  ENTRIES

  When exporting data from IT systems, a lot of annoying accidents can happen. One of
  them is truncations, i.e. data entries are cut off at a certain position. Some manual
  screening should quickly lead you to suspicious data. How to fix it? The best solution
  is probably to request a new and healthy export.

---

  CORRECT
INCONSISTENCIES

---

  28
•  CHECK FOR TRUNCATED
  ENTRIES
  The most valuable resource when preparing data for analysis is your own knowledge
  about the data. With custom rules (so-called Business Rules), you can detect wrong
  data. The whole process follows the principles of Boolean logic . You can define simple
  conditions. Before applying any rules to your data, it is always helpful to spell them in
  natural language, e.g.: “The entries in column ‘Age’ always have to be greater or equal
  zero.”
  PrepJet has a functionality that helps you to implement custom validation rules easily
  without a lot of nested formulas and additional validation columns. You can also
  implement validation rules in Excel using the IF function. You will have an additional
  validation column that indicates whether the rule is fulfilled or not (this is also the
  column into which you type your formula). Here, we want the output in our
  validation column to be “ok” if the Age is greater or equal zero and we want to have
  “error” if the Age is smaller than zero (assuming that column F contains Age):

  =IF(F2>=0; “ok”; “error”)

---

  29
•  CHECK FOR TRUNCATED
  ENTRIES
  You can also implement more complex conditions. For example, if you want to analyze
  your product range, you could apply the rule “The shipping weight of an article of the
  category pants is always smaller than 2kg.” To make the implementation in Excel easier,
  it is helpful to phrase the condition closer to logical terminology first:

  IF “category” EQUAL TO “pants” THEN “shipping_weight” SMALLER THAN
  “2”

  In Excel, we again have a validation column that indicates whether our rule is violated
  (“error”) or not (“ok”).

  To be prepared for Excel’s syntax, we have to rephrase the logical statement as follows:

---

  30
•  CHECK FOR TRUNCATED
  ENTRIES

  IF “category” EQUAL TO “pants” AND “shipping_weight” SMALLER THAN “2”
  THEN “ok” ELSE “error”

  Assuming that column B contains category and column C contains shipping weight,
  we insert the following formula into the validation column and drag it down to the end
  of our table:

  =IF(AND(B2=”pants”; C2<2); “ok”; ”error”)

  You can even go further and introduce conditions with more nestings, conditions that
  have to be fulfilled cumulatively (using the AND function) or conditions that can be
  fulfilled selectively (using the OR function). Again, you can make your live a little
  easier using PrepJet’s Rule-based Validation function.

---

  31
•  NUMERICAL DATA: CHECK
  FOR OUTLIERS

  If you work with numerical data, you should check your data for outliers. Outliers are
  values that deviate from the observed distribution of your data (learn more in our blog
  post on the basics of outlier detection). As statistical outlier detection is rather complex
  to be implemented in Excel, we recommend to sort the values by size and to check if
  there are any suspicious entries at the upper or lower bounds of your range.

---

  32
•  CATEGORICAL DATA:
  CHECK FOR WRONG
  CATEGORIES
  If you analyze categorical data, it is important to make sure that there are no different
  conventions for assigning categories. For example, if you want to analyze your product
  portfolio, make sure that similar products are not put into different categories (e.g. if
  you work with a grocery store, all apples, bananas and mangos might be classified as
  “fruits” while someone accidentally tagged pineapple as “exotic fruit”. There are
  different ways to detect those kind of miscategorizations in Excel. If you have a small
  number of categories, you can simply insert a filter and manually check all available
  categories. If you have a larger range of categories, it is more advisable to plot the
  frequency of occurrences in each categories (e.g. with a bar chart in Excel). You can
  focus on categories with low frequencies of occurrence. Here in our example chart, in a
  few cases “blu” has been entered instead of “blue”. You can easily fix this by using Find
  and Replace

---

  33
•  CATEGORICAL DATA:
  CHECK FOR WRONG
  CATEGORIES

---

  34
•  MISSING ENTRIES: ADD
  DATA OR REMOVE ROWS
  Missing values are an issue that is hard to fix. If you have the chance to get the original
  data without inappropriate efforts, the best solution is to add it. Otherwise, you might
  want to ignore the rows that contain empty cells when performing certain analyses. A
  more advanced option is to impute the data (e.g. by the mean or median or by a logistic
  regression). This is only recommendable for users with advanced statistical knowledge
  as it might bias your results.

---

  35
•  SURVEY DATA: DETECT
  SUSPICIOUS RESPONSE
  PATTERNS
  When analyzing survey data, you should be aware of response patterns that are not
  valid (e.g. because the respondent simply was too tired to answer all your questions
  appropriately …). This might be for example a person who always chooses the answer
  in the same position for each question — so-called straight-lining (e.g. always the most
  left option). More creative respondents also create alternating patterns when answering
  surveys (so-called “Christmas tree behavior”). If you use an online survey tool, as a first
  step you can try to identify those answers that have been filled in in very short time by
  looking at the response timers. Most online survey tools will export the time the
  respondents take to fill in the form with your survey data. In a second step, you can
  identify suspicious data by screening the replies in Excel. This will be easier once you
  translated categorical text responses into numbers (e.g. “I fully agree” = 1, “I agree” = 2
  etc.).

---

REMOVE DUPLICATES

---

  37
•  DEDUPLICATE YOUR DATA
  CONSIDERING FUZZY
  DUPLICATES
  Another important step before you combine and analyze data sets is to remove
  duplicate entries. This is simple if you only want to find exact duplicates. You can
  directly remove them with Excel’s Remove Duplicates function in the Data Ribbon. If
  you first want to check the duplicate entries to examine where they come from, you can
  highlight and sort them with PrepJet’s Detect Duplicates function.
  Often, however, actual duplicates are not exactly equal. They might differ slightly due
  to typos or different naming conventions. To detect these kind of duplicates, you either
  need a sophisticated fuzzy matching algorithm or a manual workaround (learn more in
  our introduction to fuzzy matching). One manual solution can be to include only a
  few attributes into your duplicate screening. For example, if you want to find
  duplicates in a customer list and names might have been spelled differently, you can in a
  separate step only have a look at the address fields. It should also help to standardize
  categorical data (see above) first before searching for duplicates.

---

COMBINE DATA SETS

---

  39
•  LOOKUP DATA FROM
  OTHER TABLES

  If you do not only want to analyze a single data set, the final step to get your data ready
  for analysis is to combine it. You could simply copy columns from one sheet to another
  if your data is sorted. However, this is not recommendable as you risk to copy the
  wrong data in case one data set misses a row. It is better to identify match criteria and
  pull your data based on these criteria from one table into another. If you have one
  match criterion that is unique for each row of your data set (a so-called unique
  identifier), you can use this match criterion and perform a VLOOKUP in Excel. If you
  have more than one match criteria, you have to use a combination of INDEX and
  MATCH (check out our blog post on this operation). Or you can use PrepJet’s
  Lookup Data function, which allows you to specify as many match criteria as you want
  in only a few clicks.
