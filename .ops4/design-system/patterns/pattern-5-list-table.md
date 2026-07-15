# Sidebar + header + filterable table with pagination

Screen type: list_table
Primary task: Scan, filter, and manage a list of users or entities with row-level actions

### Pattern 1: Sidebar + header + filterable table with pagination
- Screen type: list_table
- Primary task: Scan, filter, and manage a list of users or entities with row-level actions
- Composition archetype: sidebar-header-content
- Reading flow: sidebar-navigation → page-header → filter-bar → main-table → pagination-controls
- Density: comfortable
- Symmetry: asymmetric
- Primary focal point: main-table
- Secondary focal points: page-header, filter-bar
- Spacing rhythm: page 32 / section 32 / card 16 / base 4
- Typography:
  - Page title: 28px / weight 600 / lh 34
  - Section title: 16px / weight 600 / lh 24
  - Body: 14px / weight 400 / lh 20
- Surfaces: canvas neutral; cards selective; borders subtle; shadows minimal
- Color roles (adapt roles; keep product brand hues):
  - canvas: #F8FAFC (page background)
  - surface: #FFFFFF (cards / panels)
  - border: #E2E8F0 (dividers)
  - text-primary: #0F172A (titles / body)
  - text-muted: #64748B (meta / secondary)
  - accent: #2563EB (primary actions)
  - success: #22C55E (active status)
  - danger: #EF4444 (inactive status)
- Fonts:
  - Inter · ui · weights 400, 500, 600
- Radii:
  - lg: 12px
  - md: 8px
  - sm: 4px
  - pill: 999px
- Components: summary-metric (secondary)
- Interactions: row-hover-actions, filter-dropdowns, pagination
- Why it works: Sidebar-header-content composition supports multitasking and persistent navigation. Filter bar above table enables quick segmentation and search. Table with clear row actions and status badges improves operational efficiency.
- Avoid when: Mobile-first or single-column layouts; Highly visual or card-based content; Complex inline editing requirements
- Summary: A desktop list_table pattern for user or entity management, featuring a sidebar for navigation, a prominent page header, filter/search controls, and a paginated table with row-level actions. The composition supports comfortable density, clear hierarchy, and operational efficiency for B2B SaaS admin tasks. Best for moderate to large datasets where filtering and quick actions are needed; avoid for mobile-first or highly visual content.

## Application rules
- Apply this composition to matching product screens in the current change (auth/register/login/landing as relevant).
- Keep product brand colors/logo; adapt spacing/type/surface/hierarchy from this pattern.
- Do not ignore this file because a prior layout exists — the change request may intentionally restyle those screens.
