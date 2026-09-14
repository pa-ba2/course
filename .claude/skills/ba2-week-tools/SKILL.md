---
name: ba2-week-tools
description: Add or repair the "View original PDF" link and "Save as PDF" button on a BA2 week study guide page (ba2/study-guides/week-XX/index.html). Use when creating a new BA2 week from the template, or when a week page is missing these two buttons or has a broken/wrong PDF link.
---

# BA2 week tools: source-PDF link + Save-as-PDF button

Every BA2 week study guide page should have a small `.cover-tools` row under the `.kicker` line in the `.cover` header, with two buttons:

1. A link to that week's original source PDF in `ba-source-materials/Business Analytics 2/`.
2. A "Save as PDF" button that calls `window.print()` (the page's existing `@media print` CSS already produces a clean printable layout).

## Week → source PDF filename lookup table

Filenames in `ba-source-materials/Business Analytics 2/` do **not** follow a consistent pattern — never derive a filename programmatically (e.g. `` `Week ${n}.pdf` ``). Use this exact table:

| week id | source PDF filename (relative to `ba-source-materials/Business Analytics 2/`) |
|---|---|
| week-00 | `Introduction_week 0.pdf` |
| week-01 | `Week 1_ Statistics Overview .pdf` |
| week-02 | `Week 2_ Calculating Metrics in Excel.pdf` |
| week-03 | `Week 3_ Visualizing Data in Excel.pdf` |
| week-04 | `Week 4_  Data Preparation and Understanding, Data cleaning, Transforming .pdf` |
| week-05 | `Week 5_ Data Preparation.pdf` |
| week-06 | `Week 6_ Linear Regression.pdf` |
| week-07 | `Week 7 HypothesisTesting.pdf` |
| week-08 | `Week 8 Application.pdf` |
| week-09 | `Week 9.pdf` |
| week-10 | `Week 10.pdf` |
| week-11-swot | *(no source PDF exists — omit the PDF link entirely, keep only the Save-as-PDF button)* |
| week-12-case-study | *(no source PDF exists — omit the PDF link entirely, keep only the Save-as-PDF button)* |
| final project | `Business Analytics-2 Final Project Breakdown.pdf` |

Before relying on this table, verify the file still exists with `ls` — source materials could be renamed or reorganized later.

## Steps

1. Determine the target file's folder depth relative to the repo root. A standard week page lives at `ba2/study-guides/week-XX/index.html`, three levels deep, so the relative path back to source materials is `../../../ba-source-materials/Business Analytics 2/<filename>`. Adjust the `../` count if the file lives somewhere else.

2. URL-encode the PDF filename for use in an `href` (spaces → `%20`, keep other characters as-is). Do not URL-encode the human-readable link text.

3. Insert (or fix) this markup inside `<header class="cover" id="top">`, right after the bilingual `<h1>`/`<p class="lede">` blocks, before the closing `</header>`:

   ```html
   <div class="cover-tools">
     <a class="tool-btn" href="RELATIVE_PATH_TO_PDF" target="_blank" rel="noopener">
       <span data-lang="en" class="active">View original PDF</span>
       <span data-lang="ar">عرض ملف PDF الأصلي</span>
     </a>
     <button type="button" class="tool-btn" onclick="window.print()">
       <span data-lang="en" class="active">Save as PDF</span>
       <span data-lang="ar">حفظ كملف PDF</span>
     </button>
   </div>
   ```

   For week-11-swot / week-12-case-study (no source PDF), omit the `<a class="tool-btn">` element entirely and keep only the Save-as-PDF `<button>`.

4. Ensure this CSS exists in the `<style>` block (insert once per file if missing — check first, most week files copied from the template will already have it):

   ```css
   .cover-tools{ display:flex; gap:10px; margin:18px 0 0 0; flex-wrap:wrap; }
   .tool-btn{
     display:inline-flex; align-items:center; gap:6px; border:1px solid var(--rule); background:#fff;
     color:var(--ink); font-family:inherit; font-size:13px; font-weight:700; text-decoration:none;
     padding:8px 14px; border-radius:100px; cursor:pointer;
   }
   .tool-btn:hover{ border-color:var(--teal); color:var(--teal); }
   ```

5. Ensure `.cover-tools{ display:none; }` is added inside the file's existing `@media print{...}` block, alongside `.langbar{ display:none; }` and `.sidebar{ display:none; }` — the buttons themselves shouldn't appear in the printed/saved-PDF output.

6. Leave everything else in the file untouched. Don't touch content sections, language blocks unrelated to these two buttons, or other CSS.

## Notes

- `_shared/template/week-template.html` (the canonical template new weeks get duplicated from) uses the placeholder href `#SOURCE_PDF_RELATIVE_PATH` — replace that placeholder with the real path when authoring a new week from it.
- If a new week's own week id isn't in the lookup table above (e.g. content gets restructured later), check `ba-source-materials/Business Analytics 2/` directly with `ls` rather than guessing a filename.
- Per this project's `CLAUDE.md`, don't spin up a local server or screenshot-verify after applying this skill unless asked — just report which file(s) you changed.
