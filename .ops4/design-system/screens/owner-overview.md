# Screen blueprint: Owner Overview

Route: `/owner`
Purpose: Owner's authenticated home. Full-access dashboard with all station data, workflows, and reports.
Layout: **dashboard-grid**

## Required regions
- **header**: Page title, station selector (future), quick links to settings and audit log — components: PageTitle, StationSelector, SettingsButton, AuditLogButton
- **main**: Owner dashboard with key metrics, charts, and workflow shortcuts — components: MetricCard, TankLevelCard, ActiveShiftCard, CashVarianceCard, LowTankAlertCard, SalesChart, QuickActionButton
- **context-rail**: Recent activity, quick reports, and notifications — components: RecentActivityList, QuickReportLinks, NotificationBadge

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