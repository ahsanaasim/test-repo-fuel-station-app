# Screen blueprint: Login

Route: `/auth/login`
Purpose: User authentication for all roles. Handles shared operator login and individual accounts.
Layout: **single-column-form**

## Required regions
- **main**: Credential entry and authentication actions. — components: UsernameField, PasswordField, LoginButton, ForgotPasswordLink, RegisterLink

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