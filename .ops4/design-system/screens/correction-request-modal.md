# Screen blueprint: Correction Request (Modal)

Route: `/operator/correction-request`
Purpose: Operator submits a correction request for a sale or meter reading.
Layout: **single-column-form**

## Required regions
- **main**: Allows operator to select entry, enter reason, and submit correction request. — components: EntrySelectDropdown, ReasonTextArea, SubmitButton, StatusBanner, CloseButton

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