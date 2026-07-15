# Centered authentication card

Screen type: authentication
Primary task: Create a new user account by entering email and password

### Pattern 1: Centered authentication card
- Screen type: authentication
- Primary task: Create a new user account by entering email and password
- Composition archetype: centered-card
- Reading flow: page-header → primary-region
- Density: comfortable
- Symmetry: symmetric
- Primary focal point: authentication-card
- Secondary focal points: form-fields, primary-action
- Spacing rhythm: page 32 / section 24 / card 16 / base 4
- Typography:
  - Page title: 24px / weight 700 / lh 32
  - Section title: 16px / weight 600 / lh 24
  - Body: 14px / weight 400 / lh 20
- Surfaces: canvas neutral; cards primary; borders subtle; shadows minimal
- Components: form-field (secondary), primary-action (secondary), secondary-action (secondary)
- Interactions: form-validation, disabled-primary-action, show-hide-password
- Why it works: Centering and card containment reduce cognitive load and focus attention on the authentication task. Single-column layout is optimal for short forms and improves accessibility. Clear separation of primary and secondary actions prevents accidental navigation.
- Avoid when: Multi-step onboarding or marketing-heavy flows; Dense data input requirements
- Summary: A centered authentication card pattern for desktop SaaS apps, optimized for sign-up or sign-in flows. The primary task is account creation, with a single-column card containing form fields and clear primary/secondary actions. The composition uses generous whitespace, strong visual hierarchy, and minimal distractions, making it suitable for focused authentication tasks. Avoid for multi-step onboarding or marketing-heavy screens.

## Application rules
- Apply this composition to matching product screens in the current change (auth/register/login/landing as relevant).
- Keep product brand colors/logo; adapt spacing/type/surface/hierarchy from this pattern.
- Do not ignore this file because a prior layout exists — the change request may intentionally restyle those screens.
