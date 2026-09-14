# Project setup prompt — paste this to Claude Code to start

Copy everything below the line into Claude Code as your first message in this project.

---

I'm building course materials for two university-level Business Analytics courses (BA1 = foundations, BA2 = advanced/AI-oriented), delivered as live cohort sessions with a tutor + mentor model. My audience is women 18+, mostly university students.

This folder contains **reference source material only** — treat every file as read-only input, not something to edit in place:

- `ba1-recap.md` — a condensed recap of BA1's 11-week curriculum (framework, stats, regression, time series, optimisation). This is the authoritative summary of what BA1 already covers.
- `ba2-week-00.md` through `ba2-week-10.md` — the **original** BA2 deck content (pre-redesign), extracted from slides to text. Slide boundaries are marked with `---`.
- `ba2-final-project.md` — the original BA2 final project brief.
- `curricula-mapping.md` — BA1's official week-by-week topic titles, for cross-referencing against the recap.

### What I need you to do first

1. Read all the files above and build an internal picture of what BA1 already teaches and what the original BA2 covered.
2. **Do not start generating new course content yet.** First, propose a project folder structure for everything we'll build from here — new BA2 week decks, a BA2 Teacher's Handbook, HTML study guides (multi-language: English/Arabic now, Persian/Pashto later), and PowerPoint decks (English only for now) — and show it to me before creating anything.
3. Flag anything in the source material that looks inconsistent, incomplete, or contradictory (for example: the original BA2 deck's own Week 0 slide promises 12 weeks including a SWOT week and a full-workflow case study, but only 11 weeks of content exist in this folder).

### Known constraints to design around

- **Content strategy:** the new BA2 should *merge* the original BA2 content with new AI-augmented material, not replace it outright — weave AI-related framing into existing concepts rather than bolting a separate "AI section" onto each week. Redundant overlap with BA1 (see `ba1-recap.md`) should be trimmed or replaced with genuinely new content: SQL, classification/ML, domain-specific analytics modules, forecasting 2.0, and datasets/graded assignments.
- **Formats:** each week needs (a) a multi-language HTML study guide with a language switcher and RTL support for Arabic, printable to a clean PDF, and (b) an English-only `.pptx` teaching deck, visually consistent with BA1's existing brand (dark navy background, cyan `#33CCFF` / lavender `#D1A2D6` accents, Inter font — extracted from BA1's original `.pptx` files; ask me if you need the exact files).
- **Interactivity:** keep it lightweight — plain HTML/CSS/vanilla JS (tabs, click-to-reveal self-checks, small live demos like a slider). No build step, no framework, so the files stay portable and easy for me to host anywhere.
- **Translation:** English and Arabic first. Persian and Pashto later. Flag that non-English content should get a native-speaker review pass before it's used with students — especially Pashto.

### Ask me before you assume

- Whether to build week-by-week (each week approved before the next) or draft a full multi-week skeleton first
- The exact target week count for the new BA2 (draft plan so far: 12 weeks)
- Where the actual `.pptx`/`.pdf` source files for BA1 and old BA2 live if you need to re-extract anything beyond what's in these `.md` files (they're not included in this folder — only the extracted text is)
