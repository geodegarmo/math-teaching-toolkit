# Math Teaching Toolkit — NC Math 8 & Math 1

An interactive, single-page teaching toolkit for 8th-grade math classrooms in
North Carolina, built around the NC Standard Course of Study and the current
EOG/EOC test emphases. It pulls a flagship daily instructional model and a set
of content-specific strategies into one place, with every strategy tagged to the
three problems it solves: **retention**, **differentiation** (mixed-ability), and
**pacing**.

## View it

- **Live page:** _add your GitHub Pages / Netlify URL here_
- **Locally:** download `index.html` and open it in any web browser. No server,
  build step, or install required.

## What's inside

- **The Sticky Math Block (Math 8)** — a consistent daily structure
  (Spiral Do-Now → Launch → Explore → Discuss → Exit Ticket) based on the NC2ML
  Launch–Explore–Discuss model, with Concrete→Representational→Abstract worked
  examples for the high-difficulty 8th-grade topics.
- **Math 1 strategies** — six content-specific moves organized around the three
  function families (linear, exponential, quadratic), anchored by the Rule of Four.
- **Differentiation toolkit** — six moves for reaching a mixed-ability room with
  one task instead of three lesson plans.
- **Pacing & structure** — decision rules that tie instructional time to test weights.
- **Lesson-planning checklist** — an interactive checklist that maps onto the block;
  prints cleanly for a binder.

## Editing

It's a single self-contained `.html` file — all CSS and JavaScript are inline,
with no dependencies except a Google Fonts link (which falls back to system fonts
offline). To edit:

- **In the browser:** open `index.html` in the GitHub repo and click the pencil
  icon, or use any text editor.
- **Locally:** edit in VS Code, then commit and push. A GitHub Pages site updates
  automatically on push.

The strategy content lives as plain HTML in the `<body>`; the tab-switching and
checklist logic is the small `<script>` block at the bottom.

## Notes

- The checklist tracks progress while the page is open but does not save across
  reloads — it's intended as an in-session planning aid.
- Standard codes (e.g., `NC.8.G.7`, `NC.M1.F-IF`) and test weights reflect the
  current NC Standard Course of Study and EOG/EOC test specifications. Verify exact
  code wording against the NCDPI unpacking documents at
  [dpi.nc.gov](https://www.dpi.nc.gov) when building actual units.

## Sources & framework

Draws on the NC2ML Launch–Explore–Discuss model; Smith & Stein's *5 Practices for
Orchestrating Productive Mathematics Discussions*; the Concrete–Representational–
Abstract instructional sequence; and retrieval/spaced-practice research.
