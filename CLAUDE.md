# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A multi-page static teaching toolkit for NC Math 8 (EOG) and Math 1 (EOC) classrooms. No build step, no package manager, no server required — open `index.html` directly in a browser.

`math-teaching-toolkit.html` at the root is an old single-file version; the current toolkit is the multi-page structure below.

## Running locally

Open `index.html` in any browser. No install, no server.

## File structure

```
index.html              Hub / landing page
math8.html              Math 8 EOG content (all 4 domains, deep CRA sequences)
math1.html              Math 1 EOC content (function families spine, all 4 domains)
differentiation.html    6 differentiation moves
pacing.html             Pacing decision rules + unit calendars for both courses
checklist.html          17-item lesson planning checklist (persistent via localStorage)
donow.html              Spiral Do-Now generator (interactive)
timer.html              Block phase timer (interactive, projects on board)
exit-sort.html          Exit ticket sorter with reteach/advance recommendation
lesson-plan.html        Print-ready lesson plan template
reference-cards.html    Print-ready student reference cards (10 cards)

css/style.css           All styles — single stylesheet for entire project
js/app.js               Shared JS: nav initialization, localStorage helpers,
                          checklist persistence (initChecklist), notes persistence (initNotes)
js/problems.js          PROBLEM_BANK array — 18 topics × ~7 problems for Do-Now generator
```

## Architecture

**CSS:** One file (`css/style.css`). Design uses CSS custom properties (`--paper`, `--ink`, `--ochre`, `--teal`, `--plum`). Sidebar nav is `position:fixed`, 248px wide. Main content has `margin-left: var(--nav-w)`. Mobile: sidebar slides in via `.open` class; hamburger toggle in every page.

**Shared JS (`js/app.js`):**
- Nav: highlights active page link by matching `location.pathname` to `href`; handles mobile sidebar toggle via `#navToggle` / `#sidenav` / `#overlay`
- `store` object: thin localStorage wrapper (`store.get(key, fallback)`, `store.set(key, val)`)
- `initChecklist(namespace)`: wires all `.check input[data-id]` checkboxes to localStorage and updates progress bar (`#progLabel`, `#progFill`)
- `initNotes(namespace)`: wires all `textarea[data-note]` to localStorage

**Problem bank (`js/problems.js`):** Global `PROBLEM_BANK` array. Each entry: `{ id, name, course, domain, problems: [{q, a}] }`. Loaded only on `donow.html`.

**Content convention:** NC standard codes appear in `.ex .std` spans. Strategy tags use `.tag.t-ret` / `.t-dif` / `.t-pac` classes. Cards use `.card`, flow steps use `.step` (CSS counter), accordions use `.acc-trigger` / `.acc-body`.

**localStorage keys:** `checklist:<namespace>` (object of `{ [data-id]: bool }`), `note:<namespace>:<data-note>` (string).

**Print:** Every page has `@media print` styles in `css/style.css`. `.no-print` hides nav/buttons. `lesson-plan.html` and `reference-cards.html` are the primary print targets.
