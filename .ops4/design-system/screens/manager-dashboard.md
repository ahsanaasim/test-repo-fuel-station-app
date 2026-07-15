# Screen blueprint: Manager Dashboard

Route: `/manager`
Purpose: Manager's authenticated home. Shows today's sales, tank inventory, active shift status, cash variance, low tank alerts, and quick links to all workflows.
Layout: **two-column-main-rail**

## Required regions
- **main**: Manager's authenticated home. Shows today's sales, tank inventory, active shift status, cash variance, low tank alerts, and quick links to all workflows. — components: PageHeader, PrimaryContent
- **context-rail**: Related context, history, or secondary actions — components: RelatedInfo, ActivityOrMeta

## Forbidden collapses
- Do not implement this screen as a single Card containing only a basic form.
- Do not omit the context-rail when related entities or history exist in the product.

## ASCII wireframe
```
| main | context-rail |
```

## Acceptance
- All required regions are present in the implemented UI.
- Control types match the components listed (no downgrading to simpler widgets).