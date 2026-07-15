# Screen blueprint: Accountant Workspace

Route: `/accountant`
Purpose: Accountant's authenticated home. Focused on expenses, cash reconciliation, and reports.
Layout: **dashboard-grid**

## Required regions
- **header**: Page title and quick navigation. — components: PageTitle, UserMenu
- **main-dashboard**: Shows key financial metrics and quick links to core workflows. — components: MetricCard: Total Expenses (This Month), MetricCard: Cash Variance (This Month), MetricCard: Last Reconciliation Date, QuickLink: Enter Expense, QuickLink: View Reports, QuickLink: Cash Reconciliation
- **recent-activity**: Displays recent expense entries and reconciliation actions. — components: RecentExpensesList, RecentReconciliationsList
- **context-rail**: Shows help, tips, and accountant-specific notifications. — components: HelpPanel, NotificationsPanel

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