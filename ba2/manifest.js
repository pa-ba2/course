// Course visibility control — flip "published" to true/false and push to show/hide an entry on the course hub.
// "href" is repo-root-relative (no leading slash, no leading "../") for entries that don't live under
// study-guides/<id>/index.html — each consumer (hub page, week.js) prepends its own "../" depth to it.
window.BA2_MANIFEST = {
  "weeks": [
    { "id": "ba1-recap", "title": "Foundations — BA1 Recap", "published": true, "href": "BA1-Recap-Study-Guide.html" },
    { "id": "week-00", "title": "Introduction to Business Analytics 2", "published": true },
    { "id": "week-01", "title": "Statistics Overview & SQL Foundations", "published": false },
    { "id": "week-02", "title": "Calculating Metrics in Excel & SQL", "published": false },
    { "id": "week-03", "title": "Visualizing Data", "published": false },
    { "id": "week-04", "title": "Data Preparation, Cleaning & Transforming", "published": false },
    { "id": "week-05", "title": "Introduction to Types of Models", "published": false },
    { "id": "week-06", "title": "Linear Regression & Classification", "published": false },
    { "id": "week-07", "title": "Hypothesis Testing", "published": false },
    { "id": "week-08", "title": "Applied Session", "published": false },
    { "id": "week-09", "title": "Error Analysis & Forecasting 2.0", "published": false },
    { "id": "week-10", "title": "Communicating Findings", "published": false },
    { "id": "week-11-swot", "title": "SWOT Analysis", "published": false },
    { "id": "week-12-case-study", "title": "Full Workflow Case Study", "published": false }
  ]
};
