# Screen blueprint: Landing

Route: `/`
Purpose: Public entry point with product overview, role-based CTAs (Operator Login, Manager Login, etc.), and links to authentication flows.
Layout: **two-column-main-rail**

## Required regions
- **header**: Branding and minimal navigation (if any). — components: Logo, ProductTitle
- **main**: Product overview and clear CTAs for each user role. — components: ProductOverviewText, RoleCTAButtons, FeatureHighlights
- **footer**: Legal and support links. — components: CopyrightNotice, SupportLink

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