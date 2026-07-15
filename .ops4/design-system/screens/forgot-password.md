# Screen blueprint: Forgot Password

Route: `/auth/forgot`
Purpose: Password recovery for individual accounts (not for shared operator login).
Layout: **single-column-form**

## Required regions
- **header**: Page title and brief instructions — components: PageTitle, InstructionText
- **main**: Form for entering email address to reset password — components: EmailFormField, SubmitButton, BackToLoginLink

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