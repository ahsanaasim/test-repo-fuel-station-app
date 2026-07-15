# Screen blueprint: Fuel Sale Entry (Modal)

Route: `/operator/sale-entry`
Purpose: Operator records a new fuel sale: fuel type, liters, amount, payment method.
Layout: **single-column-form**

## Required regions
- **main**: Minimal, fast-entry modal for fuel sale data — components: FormField:FuelType, FormField:LitersSold, FormField:Amount, FormField:PaymentMethod, TimestampDisplay, ConfirmButton, CancelButton

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