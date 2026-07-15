# Centered authentication card

Screen type: authentication
Primary task: Authenticate with email and password to access the application

### Pattern 1: Centered authentication card
- Screen type: authentication
- Primary task: Authenticate with email and password to access the application
- Composition archetype: centered-card
- Reading flow: brand-logo → form-title → form-fields → form-actions → secondary-links
- Density: comfortable
- Symmetry: symmetric
- Primary focal point: form-title and fields
- Secondary focal points: brand-logo, primary action button
- Spacing rhythm: page 32 / section 24 / card 16 / base 4
- Typography:
  - Page title: 28px / weight 600 / lh 34
  - Section title: 20px / weight 600 / lh 28
  - Body: 16px / weight 400 / lh 24
- Surfaces: canvas neutral; cards primary; borders subtle; shadows minimal
- Color roles (adapt roles; keep product brand hues):
  - canvas: #F8FAFC (page background)
  - surface: #FFFFFF (auth card)
  - border: #E2E8F0 (card border)
  - text-primary: #0F172A (titles / body)
  - text-muted: #64748B (meta / secondary)
  - accent: #2563EB (links / primary actions)
- Fonts:
  - Inter · ui · weights 400, 500, 600
- Radii:
  - lg: 32px
  - md: 24px
  - sm: 8px
  - pill: 999px
- Components: form-field (secondary), checkbox (secondary), button-primary (secondary), link-secondary (secondary)
- Interactions: form-validation, disabled-primary-action, show-hide-password
- Why it works: Centering and whitespace create a calm, focused entry point for authentication. Single-column, minimal distractions, and clear hierarchy reduce cognitive load and error risk. Card elevation and rounded corners reinforce separation from background and draw attention.
- Avoid when: Multi-step or highly transactional flows; When space is limited and vertical stacking would cause excessive scrolling
- Summary: This pattern is a centered authentication card for desktop SaaS apps, focusing user attention on a single sign-in task. The composition uses a single-column card with generous whitespace, clear hierarchy, and minimal distractions, making it suitable for login, registration, or password reset screens. Works best when authentication is the only task and branding is important. Avoid for multi-step onboarding or dense transactional flows.

## Application rules
- Apply this composition to matching product screens in the current change (auth/register/login/landing as relevant).
- Keep product brand colors/logo; adapt spacing/type/surface/hierarchy from this pattern.
- Do not ignore this file because a prior layout exists — the change request may intentionally restyle those screens.
