# Design Pattern Brain briefs

Retrieved composition patterns — REQUIRED for matching screen types (esp. auth/register/login). Apply structure/spacing/hierarchy; keep product brand tokens. Do not copy proprietary branding.

- [Interactive 3D Configurator](./pattern-1-landing.md)
- [Real-Time / Operations Landing](./pattern-2-landing.md)
- [Centered authentication card](./pattern-3-authentication.md)
- [Centered authentication card](./pattern-4-authentication.md)
- [Sidebar + header + filterable table with pagination](./pattern-5-list-table.md)

## Design Pattern Brain (composition geometry only — keep locked product tokens)
These patterns are approved visual-memory references.
Apply archetype, reading flow, density, hierarchy, spacing rhythm, and surface structure only. DO NOT adopt reference hex colors or font families — use locked designMemory tokens.
KEEP this product's brand tokens (logo, primary brand color, locked Figma/product colors) — do not clone proprietary branding/copy from the reference product.
If a retrieved pattern is a centered auth/register card and the current screen is a heavier multi-panel auth layout, RESHAPE the auth/register screen to match the pattern archetype.

### Pattern 1: Interactive 3D Configurator
- Screen type: landing
- Primary task: Convert visitor / communicate value
- Composition archetype: Interactive 3D Configurator
- Reading flow: Hero (Configurator) → Feature Highlight (synced) → Price/Specs → Purchase
- Density: spacious
- Symmetry: symmetric
- Primary focal point: Hero / primary CTA
- Secondary focal points: Features, Social proof
- Surfaces: canvas light marketing page; cards Neutral studio background. Product: Realistic materials. UI: Minimal overlay.; borders soft; shadows subtle
- Components: hero (primary), primary_cta (primary), section (secondary)
- Interactions: Inside Configurator UI + Sticky Bottom Bar, Real-time rendering, material swap animation, camera rotate/zoom, light reflection
- Why it works: Increases ownership feeling. 360 view reduces return rates. Direct add-to-cart. Increases ownership feeling. 360 view reduces return rates. Direct add-to-cart.
- Summary: Landing pattern: Interactive 3D Configurator
3d, configurator, customizer, interactive, product, interactive product demo
1. Hero (Configurator), 2. Feature Highlight (synced), 3. Price/Specs, 4. Purchase
Inside Configurator UI + Sticky Bottom Bar
Neutral studio background. Product: Realistic materials. UI: Minimal overlay.
Increases ownership feeling. 360 view reduces return rates. Direct add-to-cart.
### Pattern 2: Real-Time / Operations Landing
- Screen type: landing
- Primary task: Convert visitor / communicate value
- Composition archetype: Real-Time / Operations Landing
- Reading flow: Hero (product + live preview or status) → Key metrics/indicators → How it works → CTA (Start trial / Contact)
- Density: spacious
- Symmetry: symmetric
- Primary focal point: Hero / primary CTA
- Secondary focal points: Features, Social proof
- Surfaces: canvas light marketing page; cards Dark or neutral. Status colors (green/amber/red). Data-dense but scannable.; borders soft; shadows subtle
- Components: hero (primary), primary_cta (primary), section (secondary)
- Interactions: Primary CTA in nav + After metrics, Live data ticker, status pulse, minimal decoration
- Why it works: For ops/security/iot products. Demo or sandbox link. Trust signals. For ops/security/iot products. Demo or sandbox link. Trust signals.
- Summary: Landing pattern: Real-Time / Operations Landing
real-time, real-time monitor, operations, dashboard, telemetry, live data
1. Hero (product + live preview or status), 2. Key metrics/indicators, 3. How it works, 4. CTA (Start trial / Contact)
Primary CTA in nav + After metrics
Dark or neutral. Status colors (green/amber/red). Data-dense but scannable.
For ops/security/iot products. Demo or sandbox link. Trust signals.
### Pattern 3: Centered authentication card
- Screen type: authentication
- Primary task: Authenticate with email and password to access the application
- Composition archetype: centered-card
- Reading flow: brand-logo → form-title → form-fields → form-actions → secondary-links
- Density: comfortable
- Symmetry: symmetric
- Primary focal point: form-title and fields
- Secondary focal points: brand-logo, primary action button
- Spacing rhythm: page 32 / section 24 / card 16 / base 4
- Surfaces: canvas neutral; cards primary; borders subtle; shadows minimal
- Components: form-field (secondary), checkbox (secondary), button-primary (secondary), link-secondary (secondary)
- Interactions: form-validation, disabled-primary-action, show-hide-password
- Why it works: Centering and whitespace create a calm, focused entry point for authentication. Single-column, minimal distractions, and clear hierarchy reduce cognitive load and error risk. Card elevation and rounded corners reinforce separation from background and draw attention.
- Avoid when: Multi-step or highly transactional flows; When space is limited and vertical stacking would cause excessive scrolling
- Summary: This pattern is a centered authentication card for desktop SaaS apps, focusing user attention on a single sign-in task. The composition uses a single-column card with generous whitespace, clear hierarchy, and minimal distractions, making it suitable for login, registration, or password reset screens. Works best when authentication is the only task and branding is important. Avoid for multi-step onboarding or dense transactional flows.
### Pattern 4: Centered authentication card
- Screen type: authentication
- Primary task: Create a new user account by entering email and password
- Composition archetype: centered-card
- Reading flow: page-header → primary-region
- Density: comfortable
- Symmetry: symmetric
- Primary focal point: authentication-card
- Secondary focal points: form-fields, primary-action
- Spacing rhythm: page 32 / section 24 / card 16 / base 4
- Surfaces: canvas neutral; cards primary; borders subtle; shadows minimal
- Components: form-field (secondary), primary-action (secondary), secondary-action (secondary)
- Interactions: form-validation, disabled-primary-action, show-hide-password
- Why it works: Centering and card containment reduce cognitive load and focus attention on the authentication task. Single-column layout is optimal for short forms and improves accessibility. Clear separation of primary and secondary actions prevents accidental navigation.
- Avoid when: Multi-step onboarding or marketing-heavy flows; Dense data input requirements
- Summary: A centered authentication card pattern for desktop SaaS apps, optimized for sign-up or sign-in flows. The primary task is account creation, with a single-column card containing form fields and clear primary/secondary actions. The composition uses generous whitespace, strong visual hierarchy, and minimal distractions, making it suitable for focused authentication tasks. Avoid for multi-step onboarding or marketing-heavy screens.
### Pattern 5: Sidebar + header + filterable table with pagination
- Screen type: list_table
- Primary task: Scan, filter, and manage a list of users or entities with row-level actions
- Composition archetype: sidebar-header-content
- Reading flow: sidebar-navigation → page-header → filter-bar → main-table → pagination-controls
- Density: comfortable
- Symmetry: asymmetric
- Primary focal point: main-table
- Secondary focal points: page-header, filter-bar
- Spacing rhythm: page 32 / section 32 / card 16 / base 4
- Surfaces: canvas neutral; cards selective; borders subtle; shadows minimal
- Components: summary-metric (secondary)
- Interactions: row-hover-actions, filter-dropdowns, pagination
- Why it works: Sidebar-header-content composition supports multitasking and persistent navigation. Filter bar above table enables quick segmentation and search. Table with clear row actions and status badges improves operational efficiency.
- Avoid when: Mobile-first or single-column layouts; Highly visual or card-based content; Complex inline editing requirements
- Summary: A desktop list_table pattern for user or entity management, featuring a sidebar for navigation, a prominent page header, filter/search controls, and a paginated table with row-level actions. The composition supports comfortable density, clear hierarchy, and operational efficiency for B2B SaaS admin tasks. Best for moderate to large datasets where filtering and quick actions are needed; avoid for mobile-first or highly visual content.
