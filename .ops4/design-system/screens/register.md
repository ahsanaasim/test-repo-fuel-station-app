# Screen blueprint: Register

Route: `/auth/register`
Purpose: Account registration for new users (not for operators).
Layout: **single-column-form**

## Required regions
- **header**: Page title and brief instructions — components: PageTitle, InstructionText
- **main**: Form for entering registration details — components: NameFormField, EmailFormField, PasswordFormField, RoleSelectField, SubmitButton, BackToLoginLink

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