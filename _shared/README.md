# Shared assets
Cross-cutting assets referenced by relative path from every BA2 week (fonts, canonical template).

## Adding a new BA2 week

1. Copy `_shared/template/week-template.html` to `ba2/study-guides/week-NN/index.html`.
2. Replace the `#SOURCE_PDF_RELATIVE_PATH` placeholder (the "View original PDF" link) with the real relative path to that week's source PDF. The `ba2-week-tools` skill can do this step (and verify the print/PDF buttons) for you.
3. Fill in the week's content, translating each piece into English/Arabic/Persian with `data-lang="en|ar|fa"` triples, following the pattern already used throughout `ba2/study-guides/week-00/index.html`.
4. Create a matching `_shared/question-banks/week-NN.questions.js`, keyed by section id, in the same `{ answer, en: {...}, ar: {...}, fa: {...} }` shape as `_shared/question-banks/week-00.questions.js`.
5. Add/flip the week's entry in `ba2/manifest.js` from `published: false` to `true` once it's ready to go live — this is what makes it show up in the contents drawer and prev/next navigation on every other page.

No build step is involved — the site deploys as raw static files, so once these are in place the new week is live.
