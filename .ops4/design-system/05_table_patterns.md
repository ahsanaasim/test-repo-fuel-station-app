# 05_table_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines when and how tables should be generated.

Tables display comparable records. They are not a default layout for every screen.

If this document conflicts with aesthetics, this document wins.
For visual tokens and components, follow `01_design_system.md`.
For conflict priority across all guidelines, follow `README.md`.

---

# Design Philosophy

Users scan tables to compare, find, and act on records.

Every column must earn its place.

Every interactive table feature (search, sort, filter, pagination) must match the dataset size and task—not be added by default.

---

# Choose the right control

| Need | Use |
|------|-----|
| Read-only comparable data, few rows, no sort/filter | **Table** (static) |
| Sort, filter, search, selection, or pagination | **Data Table** |
| Precise values matter more than shape | Table / Data Table over Chart |
| Card list on mobile when columns collapse poorly | Stacked rows / card list (see Responsive) |

Never use tables for page layout.

---

# Static Table (simple)

Required

- Native `<table>` semantics (`th` with scope, optional `<caption>`)
- Clear column headers
- Numbers right-aligned
- Status via badge + text (never color alone)

Optional

- Row actions as secondary/ghost icon buttons with labels

Do **not** require search, sort, filters, or pagination on small static tables (e.g. &lt; ~20 rows of reference data).

---

# Data Table (interactive)

Use when any of the following are true:

- More than ~20 rows expected
- Users need to find a specific record quickly
- Users need to compare by sorting a column
- Users need to narrow the set (filters)
- Server- or client-paginated datasets

When a Data Table is used, include the features the task needs:

| Feature | Required when |
|---------|----------------|
| Column sort | Users compare or rank by a field |
| Search | Directory/list of many named entities |
| Filters | Multiple facets (status, owner, date) |
| Pagination or virtualization | Large datasets |
| Row selection | Bulk actions exist |
| Empty state | Zero rows possible |
| Loading skeleton | Async fetch |

Automatic failure for Data Tables only:

- Unsortable columns when comparison is the primary task
- No search on large entity directories
- Pagination without totals / position when paginated
- Missing empty or loading states

---

# Column rules

- Prefer 4–7 visible columns on desktop; hide secondary columns on tablet/mobile.
- Pin identity column (name/id) when horizontal space is tight.
- Truncate long text with title/tooltip; never clip without affordance.
- Put primary row action at end (secondary button or menu); never multiple primary fills in a row.

---

# Toolbar pattern

Place above the table:

Search (if needed) → Filters → View options → Primary create action (page header preferred; table toolbar uses secondary unless this is a focused embedded task surface—see README Primary CTA rule).

Allow clear/reset of filters.

Preserve filter/sort state when returning to the page when practical.

---

# Row actions

- Single common action → icon button or text button (`ghost` / `secondary`)
- Multiple actions → Dropdown Menu
- Destructive row action → follow Destructive actions policy in README:
  - Recoverable → Undo toast
  - Irreversible → Alert Dialog

Never hide the only path to a critical action inside an unlabeled icon.

---

# Responsive behaviour

Desktop

- Full columns + toolbar

Tablet

- Hide lowest-priority columns; keep identity + status + actions

Mobile (&lt; 640px)

- Prefer stacked row cards or horizontally scrollable table with sticky first column
- Move filters into Sheet→Drawer pattern (bottom Drawer)
- Keep search reachable without horizontal scroll

Never rely on tiny unreadable multi-column grids on small screens.

---

# Accessibility

- Use real table markup for tabular data
- Sort controls expose `aria-sort`
- Select-all and row checkboxes have accessible names
- Keyboard reaches sort headers and row actions
- Announce loading and empty states

---

# Content

- Header labels: Title Case for column names that act as headings (`Status`, `Created At`)
- Cell values: sentence case for prose; preserve proper nouns and IDs
- Empty: “No [entities] yet” + recovery CTA (see `08_feedback_patterns.md`)

---

# Do

✓ Prefer Data Table only when interaction is needed  
✓ Right-align numeric columns  
✓ Pair status color with label  
✓ Provide empty + loading states for async tables  
✓ Match features to dataset size  

# Don’t

✗ Force search/sort/pagination on tiny static tables  
✗ Use layout tables  
✗ Encode status by color alone  
✗ Overflow without a mobile strategy  
✗ Put multiple primary buttons in each row  

---

# Final Principle

Tables exist to help users decide and act on records.

Add power features when the task needs them—not because tables “usually” have them.
