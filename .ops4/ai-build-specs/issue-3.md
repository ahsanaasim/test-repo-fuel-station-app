# AI Build Task

## Objective
Build a full-featured preview of the Fuel Station app using the locked 'Editorial Commerce Flow' design system and archetype. Follow the provided Design Brain prompt exactly, implementing every screen, layout, and component as described, with all editorial, merchandising, and workflow requirements.

## Context
## business_rule:approved
- id=663ac383-131a-4258-8218-db1fe6e0f207 title="English only, minimal UI, fast to use" confidence=1.00 description="Client specified language and simplicity requirements for the UI."
- id=a2171b38-fbb9-4484-88e8-4ba4f8847b5e title="Correction workflow" confidence=0.98 description="Operators can request corrections to sales or meter readings; managers review and approve or reject."
- id=bc1a4070-b018-4f7f-a8e8-bc5143c5cdb8 title="Manual entry for v1" confidence=0.95 description="Client confirmed manual entry is sufficient for the first version."
- id=c814711e-3dfd-49ae-b4d1-a87680e6b0c7 title="Offline capability required" confidence=0.95 description="Client stated the system should work during temporary internet loss."
- id=d1034651-1de4-4fc1-b2c6-3f972eff649f title="Device usage by role" confidence=0.98 description="Client specified which devices are used by each role, which is critical for UI/platform design."
- id=21f411fc-78b9-4881-a52d-eea22794f85f title="Pump operators share login per shift" confidence=0.95 description="Client clarified that pump operators use a shared login per shift, which impacts authentication and user tracking."
- id=aa350846-bd17-4e40-ac33-dbf491fbf565 title="Simplicity requirement" confidence=1.00 description="Client explicitly requests a simple, non-complicated system."
## data_object:approved
- id=6035a848-5f88-47bb-a315-4f3d22bf919a title="Low tank alerts (dashboard)" confidence=0.98 description="Client wants low tank alerts on the dashboard."
- id=925e41f5-c4f5-440c-906f-9f1a211a8403 title="Cash variance (dashboard)" confidence=0.98 description="Client wants cash variance visible on the dashboard."
- id=a3638355-3b4b-48ad-9f43-fe31400f43fa title="Active shift (dashboard)" confidence=0.98 description="Client wants active shift status on the dashboard."
- id=3b566d69-2963-4320-83d9-f2e841a8810e title="Fuel left (dashboard)" confidence=0.98 description="Client wants fuel left visible on the dashboard."
- id=b25711ff-a143-4fa3-a356-f149fce942eb title="Today's sales (dashboard)" confidence=0.98 description="Client wants today's sales visible on the dashboard."
- id=39387f26-7a33-444d-977b-96320691d7fe title="Invoice number (delivery)" confidence=1.00 description="Client specified this as a tracked field for fuel delivery."
- id=5ba2e3ed-065e-4e96-a873-0d9e0da43d81 title="Tank (delivery)" confidence=1.00 description="Client specified this as a tracked field for fuel delivery."
- id=e8c4756d-022f-4ea9-b67b-1a85fd7fddae title="Liters delivered" confidence=1.00 description="Client specified this as a tracked field for fuel delivery."
- id=2a4ec79c-d031-433e-9e33-5f1e8dd43b0b title="Fuel type (delivery)" confidence=1.00 description="Client specified this as a tracked field for fuel delivery."
- id=66d9340a-46d9-49a2-84b0-b0724a03da18 title="Delivery date/time" confidence=1.00 description="Client specified this as a tracked field for fuel delivery."
- id=d75ad00d-e4ce-4aec-8a65-6556743ecb7d title="Supplier (delivery)" confidence=1.00 description="Client specified this as a tracked field for fuel delivery."
- id=b13335c7-a5e6-41a4-a72b-3b4ad50b4642 title="Variance" confidence=1.00 description="Client specified this as a tracked field for cash reconciliation."
- id=86183ab2-302b-4533-8e3c-29a9c9ffb3c2 title="Card amount (reconciliation)" confidence=1.00 description="Client specified this as a tracked field for cash reconciliation."
- id=7ef69233-44c1-44ba-8726-9b425e4b12fa title="Counted cash" confidence=1.00 description="Client specified this as a tracked field for cash reconciliation."
- id=b16653ee-1acd-481a-9bea-d1d8b6bcdbed title="Expected cash" confidence=1.00 description="Client specified this as a tracked field for cash reconciliation."
## screen:approved
- id=bd301514-db47-443d-816c-e72248b801d4 title="Dashboard" confidence=0.98 description="Landing screen for managers/owners showing today's sales, fuel left, active shift, cash variance, and low tank alerts."
- id=fc6631e1-869c-475e-862c-70f88572e94a title="Shift Verification" confidence=0.90 description="Manager verifies shift data; this requires a review/approval screen."
- id=0e962504-44bf-4705-9c22-968b0eb9eafd title="Shift End" confidence=0.90 description="Operators enter closing meter, cash, and card amounts at shift end; this requires a dedicated screen."
- id=75f58bc2-ad28-40f2-8703-6744250a7407 title="Fuel Sale Entry" confidence=0.90 description="Operators need to record each fuel sale; this requires a dedicated entry screen."
- id=c778f4c0-9784-446f-bb35-1f825382a3d5 title="Shift Start" confidence=0.90 description="Operators start shift with meter reading; this requires a dedicated screen."
## decision:approved
- id=e90b810e-88de-4e21-8b1a-c499804cf493 title="Platform: Android tablet, browser-based" confidence=0.98 description="Client specified Android tablet, browser-based for pump operators."
## feature:approved
- id=b2bae716-5daa-43e6-bf8f-786959fa06db title="Fuel sale and shift management process" confidence=0.97 description="Client described the step-by-step process for fuel sales and shift management, which is foundational for UI design."
- id=ae6615d6-773d-41df-a087-ef03c6e78c1c title="Reports" confidence=1.00 description="Listed as a main workflow."
- id=07a2bcd1-ac84-4e81-8069-b4c4d0050dc4 title="Expenses" confidence=1.00 description="Listed as a main workflow."
- id=55e7a6e9-0e02-4826-b24f-eb6240e200d0 title="Cash reconciliation" confidence=1.00 description="Listed as a main workflow."
- id=197738f7-847e-4607-84fd-572cbbfbd13b title="Fuel delivery from suppliers" confidence=1.00 description="Listed as a main workflow."
- id=aed52407-a6b9-4c45-9dfb-77edb404fcb7 title="Tank inventory" confidence=1.00 description="Listed as a main workflow."
- id=ebf433dd-2535-461d-9e49-ae720278f4f2 title="Shift management" confidence=1.00 description="Listed as a main workflow."
- id=021f663a-04ee-49e1-957b-1aba02d2c538 title="Fuel sales" confidence=1.00 description="Listed as a main workflow."
## user_role:approved
- id=702ede76-15ee-42c7-93d3-919528bcfd0a title="Manager" confidence=1.00 description="Explicitly listed as a user role."
- id=c10792ff-e134-4571-877c-8904f08bdf11 title="Accountant" confidence=1.00 description="Explicitly listed as a user role."
- id=c9f263dc-3a6f-493f-a242-c8fe76932abc title="Pump operator" confidence=1.00 description="Explicitly listed as a user role."
- id=ec52ff34-0f76-4520-91ac-8994c1642593 title="Owner" confidence=1.00 description="Explicitly listed as a user role."

## Existing Design Rules
Variation: Editorial Commerce Flow
A magazine-style, editorial layout with immersive hero regions, vertical storytelling, and feature-rich content blocks — all commerce/ops flows presented as editorial sections, not gallery cards.
Screens: Landing, Login, Forgot Password, Register, Operator Home (Active Shift Dashboard), Shift Start (all steps), Fuel Sale Entry (Modal), Correction Request (Modal), Shift End (all steps), Manager Dashboard, Shift Verification (List/Detail), Tank Inventory (List/Detail), Fuel Delivery (List/Entry), Cash Reconciliation (List/Entry), Expenses (List/Entry), Reports, Accountant Workspace, Owner Overview, Audit Log, Settings
Design system: Vibrant merchandising / gallery storefront
Components: 
PREVIEW BUILD: isolated feature branch — do not merge to main; Ops4 will promote the chosen variation.
Fourteen Aperture UI/UX guideline documents are included for tokens/a11y — locked build prompt + screen blueprints win for composition.
Colors: accent: #FF385C; neutrals: warm paper / soft neutrals with premium merchandising contrast
Typography: Fredoka / Nunito

## 1. Locked Design Brain build prompt (PRIMARY — implement verbatim)
LOCKED DESIGN SYSTEM (DO NOT ALTER):
- Product category: commerce/operations hybrid (fuel station, operator-first)
- Aesthetic: Vibrant merchandising / gallery storefront
- Palette: Airbnb (accent: #FF385C, secondary: #E31C5F, background: #FFFFFF, neutrals: warm paper/soft neutrals)
- Typography: Fredoka (headings) / Nunito (body)
- Radius: rounded-lg cards, rounded-md buttons
- App shell: Top marketing/commerce nav (never sidebar as primary shell)
- Components: shadcn/ui (New York) + lucide-react
- NO admin rails, NO visible 'workspace' jargon, NO dense CRM/table as primary browse

This UI is for Web Application (responsive, Android tablet and desktop optimized) — design all screens for browser conventions, with touch-friendly targets and responsive breakpoints for tablets and desktops. Use top navigation, not sidebar, for primary navigation. All operator flows must be fast, clear, and visually engaging.

---

ARCHETYPE: Editorial Commerce Flow
- Main content is a vertically stacked, magazine-style editorial layout.
- Each workflow (dashboard, shift, sale, reconciliation, inventory, etc.) is presented as a distinct editorial section with a large heading, immersive hero region (e.g., full-width metric, illustration, or status), and contextual CTAs.
- Instead of a gallery grid, use vertical storytelling: each section flows into the next, separated by color blocks, illustrations, or summary banners.
- For dashboards (operator, manager, owner):
  - Hero region at top: "Today's Sales" as a large, immersive metric with background illustration or color block.
  - Below: vertical editorial sections for "Fuel Left", "Active Shift", "Cash Variance", "Low Tank Alerts" — each with a prominent heading, summary metric, and contextual CTA (e.g., "Add Sale", "End Shift").
  - Quick actions are presented as large, editorial buttons within each section, not as floating or modal-only triggers.
- For workflow wizards (shift start/end):
  - Each step is a full-page editorial section with a large step number, instructions, and a vertical stack of form fields.
  - Confirmation steps use a hero checkmark and summary in a color block.
- For entry modals (sale entry, correction request):
  - Modal overlays use editorial card styling: large heading, vertical stack, and immersive accent color.
- For lists (shift verification, tank inventory, deliveries, expenses, reports):
  - Editorial section header with large title and summary metric or badge.
  - Table or list is presented as a content block within the section, with clear separation from the rest of the page.
  - Filters are presented as horizontal facet chips or a filter drawer above the list, not as a dense filter bar.
- All status variants (empty, loading, error, plan limit, permission denied) use distinct, editorial-style banners or hero regions with friendly, non-technical English.
- Offline status and unsynced data are shown as editorial banners at the top of the relevant section.

---

Build a working Next.js app (App Router) using Shadcn/ui and Tailwind CSS, with realistic sample data matching the Page by Page Data Points. Implement every page from the page list below, with correct routes, layouts, and components. For each screen, use the layout archetype and regions described. Implement all status variants (empty, loading, error, plan limit, permission denied) with distinct UI. Use Shadcn components appropriate to the category — Card/Image galleries for dashboards, Table only for true operational lists (e.g., shift verification for managers).

2020s senior product-designer / ecommerce-polished prototype — beautiful hierarchy, intentional whitespace, strong visual merchandising for operator and manager dashboards; never a dated admin CRM or thin CRUD shell.

---

PAGES AND LAYOUTS:

1. Landing ("/")
   - Layout: Editorial hero at top (Logo, ProductTitle, ProductOverviewText), followed by vertically stacked editorial sections for each role (Operator, Manager, Accountant, Owner) with large CTA buttons. FeatureHighlights as an editorial block with icons and short descriptions. Footer as a soft color block with CopyrightNotice and SupportLink.
   - Status variants: loading (hero region with spinner), error (hero region with error banner + retry), plan_limit (hero region with plan message + contact support), permission_denied (hero region with message + GoToDashboard).
   - No credential forms here. Use immersive hero, large CTAs, and editorial-style feature highlights.

2. Login ("/auth/login")
   - Layout: Centered editorial card with large Fredoka heading, UsernameField, PasswordField, LoginButton (primary accent), links for ForgotPassword and Register below. Card uses a soft neutral background and subtle shadow.
   - Status variants: loading (form disabled, spinner in card), error (error banner above form), plan_limit (plan message in card), permission_denied (card with message + GoToDashboard).

3. Forgot Password ("/auth/forgot")
   - Layout: Editorial card, Fredoka heading, InstructionText, EmailFormField, SubmitButton, BackToLoginLink. Confirmation screen: hero checkmark, "Check your email" title, ConfirmationText, BackToLoginLink.
   - Status variants: loading (form disabled, spinner), error (error banner), plan_limit (plan message), permission_denied (message).

4. Register ("/auth/register")
   - Layout: Editorial card, Fredoka heading, InstructionText, Name, Email, Password, Role (if allowed), Submit, BackToLoginLink. Use accent for primary actions.
   - Status variants: loading (form disabled, spinner), error (error banner), plan_limit (plan message), permission_denied (message).

5. Operator Home ("/operator")
   - Layout: Editorial vertical flow. Hero region at top: "Today's Sales" as a large, immersive metric with accent color block and illustration. Below: vertical editorial sections for "Fuel Left" (progress bars by tank/type), "Active Shift" (status badge), "Cash Variance" (badge, green/red), "Low Tank Alerts" (alert banner). Each section has a large heading, summary metric, and contextual CTA (e.g., "Add Sale" button in Fuel Left section, "End Shift" in Active Shift section, "Correction Request" in Cash Variance section).
   - Status variants: loading (hero region with skeletons, offline banner if offline), error (hero region with error banner, retry), plan_limit (hero region with plan message), permission_denied (hero region with message).
   - Offline: show editorial banner and unsynced data indicator at top.

6. Shift Start Wizard ("/operator/shift-start/step-1", "/step-2", "/confirm")
   - Layout: Each step is a full-page editorial section. Step 1: Large step number, instructions, vertical list of pumps/tanks (Pump/Tank Number, Fuel Type, Opening Meter Reading field). Step 2: Editorial section for Starting Cash Float entry. Confirm: Hero summary card with all entered data, Confirm/Back.
   - Status variants: empty (editorial empty state), loading (hero spinner), error (hero error banner), plan_limit (hero plan message), permission_denied (hero message).

7. Fuel Sale Entry (Modal, "/operator/sale-entry")
   - Layout: Editorial modal card, large heading, FuelType select, LitersSold, Amount, PaymentMethod, Timestamp (auto), Confirm/Cancel. Modal uses accent color block at top.
   - Status variants: loading (modal disabled, spinner), error (error banner, retry/close), plan_limit (plan message), permission_denied (message).

8. Correction Request (Modal, "/operator/correction-request")
   - Layout: Editorial modal card, EntrySelectDropdown, ReasonTextArea, Submit, Close. Status after submit (pending/approved/rejected badge) shown as an editorial banner.
   - Status variants: loading (modal disabled, spinner), error (error banner, retry/close), empty (editorial empty state), plan_limit (plan message), permission_denied (message).

9. Shift End Wizard ("/operator/shift-end/step-1", "/step-2", "/step-3", "/confirmation")
   - Layout: Each step is a full-page editorial section. Step 1: List of pumps/tanks (Closing Meter Reading, Cash Amount, Card Amount). Step 2: Editorial section for Cash/Card totals. Step 3: Hero summary card (sales, cash/card, variances, corrections), Submit/Back. Confirmation: Hero checkmark, summary, Logout/Return to Dashboard.
   - Status variants: empty (editorial empty state), loading (hero spinner), error (hero error banner), plan_limit (hero plan message), permission_denied (hero message).

10. Manager Dashboard ("/manager")
    - Layout: Editorial vertical flow. Hero region at top: "Today's Sales" as a large, immersive metric. Below: editorial sections for "Fuel Left" (all tanks), "Active Shift" (all shifts), "Cash Variance", "Low Tank Alerts". Each section has a large heading, summary metric, and quick links to workflows.
    - Status variants: loading (hero region with skeletons), error (hero region with error banner, retry), plan_limit (hero region with plan message), permission_denied (hero region with message).

11. Shift Verification ("/manager/shifts")
    - Layout: Editorial section header with large title and summary badge. Filters as horizontal facet chips above the list. Main region: Table (shadcn Table) with columns: Shift Date/Time, Operator Name, Status (badge), Opening/Closing Meter, Total Liters Sold, Total Sales, Cash/Card, Variance, Correction Requested (badge), row actions (Verify, Reject, View Details). Pagination below table.
    - Status variants: empty (editorial empty state), loading (skeleton rows), error (editorial error banner, retry), plan_limit (editorial plan message), permission_denied (editorial message).

12. Shift Verification Detail ("/manager/shifts/:shiftId")
    - Layout: Editorial drawer or modal with full shift details, approve/reject/correction actions, summary cards for sales, meters, cash/card, variance, correction status.

13. Tank Inventory ("/manager/tanks")
    - Layout: Editorial section header, vertical list of tank cards (Tank Number, Fuel Type, Capacity, Current Level, Last Updated, Low Alert badge if needed). Click tank for detail drawer.
    - Status variants: empty (editorial empty state), loading (skeleton cards), error (editorial error banner), plan_limit (editorial plan message), permission_denied (editorial message).

14. Fuel Delivery ("/manager/deliveries")
    - Layout: Editorial section header, Table (Supplier, Date/Time, Fuel Type, Liters, Tank, Invoice Number), Add Delivery button as a large editorial CTA.
    - Status variants: empty (editorial empty state), loading (skeleton rows), error (editorial error banner), plan_limit (editorial plan message), permission_denied (editorial message).

15. Cash Reconciliation ("/manager/reconciliation")
    - Layout: Editorial section header, Table (Shift, Expected Cash, Counted Cash, Card Amount, Variance), Add Reconciliation button as a large editorial CTA.
    - Status variants: empty (editorial empty state), loading (skeleton rows), error (editorial error banner), plan_limit (editorial plan message), permission_denied (editorial message).

16. Expenses ("/manager/expenses")
    - Layout: Editorial section header, Table (Date, Category, Amount, Note, Entered By), Add Expense button as a large editorial CTA.
    - Status variants: empty (editorial empty state), loading (skeleton rows), error (editorial error banner), plan_limit (editorial plan message), permission_denied (editorial message).

17. Reports ("/manager/reports")
    - Layout: Editorial section header, report cards (Sales, Inventory, Reconciliation, Expenses, Variances), export buttons (CSV/PDF) as editorial CTAs.
    - Status variants: loading (hero spinner), error (editorial error banner), plan_limit (editorial plan message), permission_denied (editorial message).

18. Accountant Workspace ("/accountant")
    - Layout: Editorial vertical flow. Hero region at top: "Expenses" as a large, immersive metric. Below: editorial sections for "Cash Reconciliation" and "Reports". No access to shift or sales workflows.

19. Owner Overview ("/owner")
    - Layout: Editorial vertical flow. Hero region at top: "All Stations Overview" as a large, immersive metric. Below: editorial sections for "Sales", "Inventory", "Shifts", "Expenses", "Reports", "Settings", "Audit Log". Each section has a large heading and summary metric.

20. Audit Log ("/owner/audit-log")
    - Layout: Editorial section header, Table (Timestamp, User, Action, Details).

21. Settings (Drawer, "owner/settings")
    - Layout: Editorial drawer with role management, station config.

---

GENERAL RULES:
- All screens use the locked palette, typography, and radius. No admin rails or dense CRM tables as the primary shell.
- All filters per page are implemented (facet chips or filter drawer for commerce, filter bar for ops lists).
- All status variants (empty, loading, error, plan limit, permission denied) are visually distinct and use friendly, non-technical English.
- Use shadcn/ui Cards, Badges, Alerts, Tables, Drawers, Modals, Steppers, and Inputs as appropriate. Use lucide-react icons for status, alerts, and actions.
- All sample data must match the Page by Page Data Points (e.g., tanks, sales, shifts, expenses, deliveries, variances, correction requests).
- No visible UI chrome labels like "Master-Detail Workspace" or "Inspector". No admin panel anti-patterns. No generic dark navy SaaS look.
- All screens are responsive and touch-friendly for Android tablets and desktop browsers.

---

pagesCovered: ["Landing", "Login", "Forgot Password", "Register", "Operator Home (Active Shift Dashboard)", "Shift Start (all steps)", "Fuel Sale Entry (Modal)", "Correction Request (Modal)", "Shift End (all steps)", "Manager Dashboard", "Shift Verification (List/Detail)", "Tank Inventory (List/Detail)", "Fuel Delivery (List/Entry)", "Cash Reconciliation (List/Entry)", "Expenses (List/Entry)", "Reports", "Accountant Workspace", "Owner Overview", "Audit Log", "Settings"]

## 2. Design Pattern Brain (REQUIRED for matching screens)

Design Pattern Brain briefs (REQUIRED composition for matching screen types — esp. auth/register/login):
- `.ops4/design-system/patterns/pattern-1-landing.md`
- `.ops4/design-system/patterns/pattern-2-landing.md`
- `.ops4/design-system/patterns/pattern-3-authentication.md`
- `.ops4/design-system/patterns/pattern-4-authentication.md`
- `.ops4/design-system/patterns/pattern-5-list-table.md`
Apply composition, density, hierarchy, spacing, and surfaces from these briefs. Keep product brand tokens; do not clone reference branding.
If patterns specify centered auth and the current auth UI is multi-panel, reshape auth screens to match.

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
### Pattern 2: Horizontal Scroll Journey
- Screen type: landing
- Primary task: Convert visitor / communicate value
- Composition archetype: Horizontal Scroll Journey
- Reading flow: Intro (Vertical) → The Journey (Horizontal Track) → Detail Reveal → Vertical Footer
- Density: spacious
- Symmetry: symmetric
- Primary focal point: Hero / primary CTA
- Secondary focal points: Features, Social proof
- Surfaces: canvas light marketing page; cards Continuous palette transition. Chapter colors. Progress bar #000000.; borders soft; shadows subtle
- Components: hero (primary), primary_cta (primary), section (secondary)
- Interactions: Floating Sticky CTA or End of Horizontal Track, Scroll-jacking (careful), parallax layers, horizontal slide, progress indicator
- Why it works: Immersive product discovery. High engagement. Keep navigation visible. Immersive product discovery. High engagement. Keep navigation visible.
- Summary: Landing pattern: Horizontal Scroll Journey
horizontal, scroll, journey, gallery, storytelling, panoramic, storytelling-driven
1. Intro (Vertical), 2. The Journey (Horizontal Track), 3. Detail Reveal, 4. Vertical Footer
Floating Sticky CTA or End of Horizontal Track
Continuous palette transition. Chapter colors. Progress bar #000000.
Immersive product discovery. High engagement. Keep navigation visible.
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

## 3. Screen composition blueprints

Screen composition blueprints (REQUIRED layouts — do not collapse):
- `.ops4/design-system/screens/landing.md`
- `.ops4/design-system/screens/login.md`
- `.ops4/design-system/screens/forgot-password.md`
- `.ops4/design-system/screens/register.md`
- `.ops4/design-system/screens/operator-home-active-shift-dashboard.md`
- `.ops4/design-system/screens/shift-start-all-steps.md`
- `.ops4/design-system/screens/fuel-sale-entry-modal.md`
- `.ops4/design-system/screens/correction-request-modal.md`
- `.ops4/design-system/screens/shift-end-all-steps.md`
- `.ops4/design-system/screens/manager-dashboard.md`
- `.ops4/design-system/screens/shift-verification-list-detail.md`
- `.ops4/design-system/screens/tank-inventory-list-detail.md`
- `.ops4/design-system/screens/fuel-delivery-list-entry.md`
- `.ops4/design-system/screens/cash-reconciliation-list-entry.md`
- `.ops4/design-system/screens/expenses-list-entry.md`
- `.ops4/design-system/screens/reports.md`
- `.ops4/design-system/screens/accountant-workspace.md`
- `.ops4/design-system/screens/owner-overview.md`
- `.ops4/design-system/screens/audit-log.md`
- `.ops4/design-system/screens/settings.md`
# Screen blueprint: Landing

Route: `/`
Purpose: Public entry point with product overview, role-based CTAs (Operator Login, Manager Login, etc.), and links to authentication flows.
Layout: **two-column-main-rail**

## Required regions
- **header**: Branding and minimal navigation (if any). — components: Logo, ProductTitle
- **main**: Product overview and clear CTAs for each user role. — components: ProductOverviewText, RoleCTAButtons, FeatureHighlights
- **footer**: Legal and support links. — components: CopyrightNotice, SupportLink

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

---

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

---

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

---

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

---

# Screen blueprint: Operator Home (Active Shift Dashboard)

Route: `/operator`
Purpose: Operator's authenticated home. Shows current shift summary, tank levels, sales, cash/card breakdown, low tank alerts.
Layout: **two-column-main-rail**

## Required regions
- **main**: Operator's authenticated home. Shows current shift summary, tank levels, sales, cash/card breakdown, low tank alerts. — components: PageHeader, PrimaryContent
- **context-rail**: Related context, history, or secondary actions — components: RelatedInfo, ActivityOrMeta

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

---

# Screen blueprint: Shift Start (all steps)

Layout: **two-column-main-rail**

## Required regions
- **main**: Primary workflow for this screen — components: PageHeader, PrimaryContent
- **context-rail**: Related context, history, or secondary actions — components: RelatedInfo, ActivityOrMeta

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

---

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

---

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

---

# Screen blueprint: Shift End (all steps)

Layout: **two-column-main-rail**

## Required regions
- **main**: Primary workflow for this screen — components: PageHeader, PrimaryContent
- **context-rail**: Related context, history, or secondary actions — components: RelatedInfo, ActivityOrMeta

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

---

# Screen blueprint: Manager Dashboard

Route: `/manager`
Purpose: Manager's authenticated home. Shows today's sales, tank inventory, active shift status, cash variance, low tank alerts, and quick links to all workflows.
Layout: **two-column-main-rail**

## Required regions
- **main**: Manager's authenticated home. Shows today's sales, tank inventory, active shift status, cash variance, low tank alerts, and quick links to all workflows. — components: PageHeader, PrimaryContent
- **context-rail**: Related context, history, or secondary actions — components: RelatedInfo, ActivityOrMeta

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

---

# Screen blueprint: Shift Verification (List/Detail)

Layout: **two-column-main-rail**

## Required regions
- **main**: Primary workflow for this screen — components: PageHeader, PrimaryContent
- **context-rail**: Related context, history, or secondary actions — components: RelatedInfo, ActivityOrMeta

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

---

# Screen blueprint: Tank Inventory (List/Detail)

Layout: **two-column-main-rail**

## Required regions
- **main**: Primary workflow for this screen — components: PageHeader, PrimaryContent
- **context-rail**: Related context, history, or secondary actions — components: RelatedInfo, ActivityOrMeta

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

---

# Screen blueprint: Fuel Delivery (List/Entry)

Layout: **two-column-main-rail**

## Required regions
- **main**: Primary workflow for this screen — components: PageHeader, PrimaryContent
- **context-rail**: Related context, history, or secondary actions — components: RelatedInfo, ActivityOrMeta

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

---

# Screen blueprint: Cash Reconciliation (List/Entry)

Layout: **two-column-main-rail**

## Required regions
- **main**: Primary workflow for this screen — components: PageHeader, PrimaryContent
- **context-rail**: Related context, history, or secondary actions — components: RelatedInfo, ActivityOrMeta

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

---

# Screen blueprint: Expenses (List/Entry)

Layout: **two-column-main-rail**

## Required regions
- **main**: Primary workflow for this screen — components: PageHeader, PrimaryContent
- **context-rail**: Related context, history, or secondary actions — components: RelatedInfo, ActivityOrMeta

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

---

# Screen blueprint: Reports

Layout: **two-column-main-rail**

## Required regions
- **main**: Primary workflow for this screen — components: PageHeader, PrimaryContent
- **context-rail**: Related context, history, or secondary actions — components: RelatedInfo, ActivityOrMeta

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

---

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

---

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

---

# Screen blueprint: Audit Log

Layout: **two-column-main-rail**

## Required regions
- **main**: Primary workflow for this screen — components: PageHeader, PrimaryContent
- **context-rail**: Related context, history, or secondary actions — components: RelatedInfo, ActivityOrMeta

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

---

# Screen blueprint: Settings

Layout: **two-column-main-rail**

## Required regions
- **main**: Primary workflow for this screen — components: PageHeader, PrimaryContent
- **context-rail**: Related context, history, or secondary actions — components: RelatedInfo, ActivityOrMeta

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

## 4. Page-by-page data points
Implement screens using this field-level inventory.

Summary: 49 pages, 351 data points, 13 filters.

### Landing (/) [default] layout=two-column-main-rail
Regions:
- header — Branding and minimal navigation (if any). [Logo, ProductTitle]
- main — Product overview and clear CTAs for each user role. [ProductOverviewText, RoleCTAButtons, FeatureHighlights]
- footer — Legal and support links. [CopyrightNotice, SupportLink]
Fields:
- Logo (navigation-item · header · required)
- ProductTitle (text · header · required)
- ProductOverviewText (text · main · required)
- RoleCTAButtons (action · main · required)
- FeatureHighlights (text · main)
- CopyrightNotice (text · footer · required)
- SupportLink (navigation-item · footer)
- LoadingIndicator (badge · main)
- ErrorMessage (text · main)
- RetryButton (action · main)
- PlanLimitMessage (text · main)
- ContactSupportLink (navigation-item · main)
- PermissionDeniedMessage (text · main)
- GoToDashboard (action · main)
Statuses: default, loading, error, plan_limit, permission_denied

### Login (/auth/login) [default] layout=single-column-form
Regions:
- main — Credential entry and authentication actions. [UsernameField, PasswordField, LoginButton, ForgotPasswordLink, RegisterLink]
Fields:
- UsernameField (form-field · main · required)
- PasswordField (form-field · main · required)
- LoginButton (action · main · required)
- ForgotPasswordLink (navigation-item · main · required)
- RegisterLink (navigation-item · main · required)
- LoadingIndicator (badge · main)
- ErrorMessage (text · main)
- PlanLimitMessage (text · main)
- ContactSupportLink (navigation-item · main)
- PermissionDeniedMessage (text · main)
- GoToDashboard (action · main)
Statuses: default, loading, error, plan_limit, permission_denied

### Login (Error) (/auth/login) [error] layout=single-column-form
Regions:
- main — Show error message and allow retry. [UsernameField, PasswordField, LoginButton, ForgotPasswordLink, RegisterLink, ErrorMessage]
Fields:
- UsernameField (form-field · main · required)
- PasswordField (form-field · main · required)
- LoginButton (action · main · required)
- ForgotPasswordLink (navigation-item · main · required)
- RegisterLink (navigation-item · main · required)
- ErrorMessage (text · main · required)
- LoadingIndicator (badge · main)
- PlanLimitMessage (text · main)
- ContactSupportLink (navigation-item · main)
- PermissionDeniedMessage (text · main)
- GoToDashboard (action · main)
Statuses: error, loading, plan_limit, permission_denied

### Forgot Password (/auth/forgot) [default] layout=single-column-form
Regions:
- header — Page title and brief instructions [PageTitle, InstructionText]
- main — Form for entering email address to reset password [EmailFormField, SubmitButton, BackToLoginLink]
Fields:
- Page Title (text · header · required)
- Instruction Text (text · header · required)
- Email Address (form-field · main · required)
- Submit (action · main · required)
- Back to Login (navigation-item · main · required)
- Error Message (text · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Forgot Password (Confirmation) (/auth/forgot) [confirmation] layout=single-column-form
Regions:
- header — Confirmation title and icon [ConfirmationIcon, PageTitle]
- main — Clear next steps for user [ConfirmationText, BackToLoginLink]
Fields:
- Confirmation Icon (icon · header)
- Page Title (text · header · required)
- Confirmation Text (text · main · required)
- Back to Login (navigation-item · main · required)
- Loading Indicator (icon · main)
- Error Message (text · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Statuses: default, loading, error, plan_limit, permission_denied

### Register (/auth/register) [default] layout=single-column-form
Regions:
- header — Page title and brief instructions [PageTitle, InstructionText]
- main — Form for entering registration details [NameFormField, EmailFormField, PasswordFormField, RoleSelectField, SubmitButton, BackToLoginLink]
Fields:
- Page Title (text · header · required)
- Instruction Text (text · header · required)
- Name (form-field · main · required)
- Email Address (form-field · main · required)
- Password (form-field · main · required)
- Role (form-field · main)
- Submit (action · main · required)
- Back to Login (navigation-item · main · required)
- Error Message (text · main)
- Plan Limit Message (text · main)
- Permission Denied Message (text · main)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Operator Home (Active Shift Dashboard) (/operator) [default]
Fields:
- Low tank alerts (dashboard) (badge · panel · required)
- Cash variance (dashboard) (metric · panel · required)
- Active shift (dashboard) (metric · panel · required)
- Fuel left (dashboard) (metric · panel · required)
- Today's sales (dashboard) (metric · panel · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Operator Home (Loading) (/operator) [loading] layout=dashboard-grid
Regions:
- main — Shows loading progress and offline status if relevant. [ProgressIndicator, OfflineStatusBanner]
Fields:
- Progress indicator (text · main · required)
- Offline status (badge · main)
- Error message (text · main)
- Plan limit message (text · main)
- Permission denied message (text · main)
Statuses: loading, error, plan_limit, permission_denied

### Operator Home (Offline Mode) (/operator) [offline] layout=dashboard-grid
Regions:
- main — Shows offline status, unsynced data indicator, and limited actions. [OfflineStatusBanner, UnsyncedDataIndicator, LimitedActionsNotice]
Fields:
- Offline status (badge · main · required)
- Unsynced data indicator (badge · main)
- Error message (text · main)
- Plan limit message (text · main)
- Permission denied message (text · main)
Statuses: offline, error, plan_limit, permission_denied

### Shift Start (Step 1: Meter Readings) (/operator/shift-start/step-1) [default] layout=single-column-form
Regions:
- header — Step indicator and instructions for the operator. [WizardStepIndicator, StepInstructions]
- main — Form for entering opening meter readings for each pump/tank and confirming fuel types. [PumpTankList, OpeningMeterReadingField, FuelTypeDisplay, FormValidationMessage]
- footer — Navigation actions for the wizard step. [NextButton, CancelButton]
Fields:
- Opening meter reading (form-field · main · required)
- Pump/tank number (text · main · required)
- Fuel type (text · main · required)
- Empty state message (text · main)
- Progress indicator (text · main)
- Error message (text · main)
- Plan limit message (text · main)
- Permission denied message (text · main)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Shift Start (Step 2: Cash Float) (/operator/shift-start/step-2) [default] layout=single-column-form
Regions:
- header — Step indicator and page title for orientation [StepIndicator, PageTitle]
- main — Form for entering opening meter reading and starting cash float [FormField:OpeningMeterReading, FormField:StartingCashFloat, ConfirmButton, BackButton]
Fields:
- Opening meter reading (form-field · table · required)
- Starting cash float (form-field · table · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Shift Start (Confirmation) (/operator/shift-start/confirm) [default] layout=single-column-form
Regions:
- header — Step indicator and page title for orientation [StepIndicator, PageTitle]
- main — Summary of entered shift start data for review and confirmation [SummaryList:ShiftStartEntries, ConfirmButton, BackButton]
Fields:
- Opening meter reading (form-field · table · required)
- Starting cash float (form-field · table · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Fuel Sale Entry (Modal) (/operator/sale-entry) [default] layout=single-column-form
Regions:
- main — Minimal, fast-entry modal for fuel sale data [FormField:FuelType, FormField:LitersSold, FormField:Amount, FormField:PaymentMethod, TimestampDisplay, ConfirmButton, CancelButton]
Fields:
- Payment method (sale entry) (form-field · table · required)
- Amount (sale entry) (form-field · table · required)
- Liters sold (sale entry) (form-field · table · required)
- Fuel type (sale entry) (form-field · table · required)
- Timestamp (text · table · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Fuel Sale Entry (Error) (/operator/sale-entry) [error] layout=single-column-form
Regions:
- main — Shows error message, failed entry details, and retry/close actions. [ErrorBanner, FormFieldGroup, RetryButton, CloseButton]
Fields:
- Payment method (sale entry) (form-field · table · required)
- Amount (sale entry) (form-field · table · required)
- Liters sold (sale entry) (form-field · table · required)
- Fuel type (sale entry) (form-field · table · required)
- Error message (text · main · required)
- Retry action (action · main · required)
- Close action (action · main · required)
- Loading spinner (badge · main)
- Plan limit message (text · main)
- Permission denied message (text · main)
- Empty state message (text · main)
Statuses: default, error, loading, plan_limit, permission_denied, empty

### Correction Request (Modal) (/operator/correction-request) [default] layout=single-column-form
Regions:
- main — Allows operator to select entry, enter reason, and submit correction request. [EntrySelectDropdown, ReasonTextArea, SubmitButton, StatusBanner, CloseButton]
Fields:
- Entry to correct (form-field · main · required)
- Correction reason (form-field · main · required)
- Submit correction request (action · main · required)
- Correction request status (badge · main)
- Loading spinner (badge · main)
- Error message (text · main)
- Empty state message (text · main)
- Plan limit message (text · main)
- Permission denied message (text · main)
- Close action (action · main · required)
Statuses: default, loading, error, empty, plan_limit, permission_denied

### Shift End (Step 1: Closing Meter Readings) (/operator/shift-end/step-1) [default] layout=single-column-form
Regions:
- main — Lists all pumps/tanks, allows entry of closing meter readings, cash, and card amounts. [PumpList, ClosingMeterReadingField, CashAmountField, CardAmountField, ContinueButton, StatusBanner]
Fields:
- Card amount (end of shift) (form-field · table · required)
- Cash amount (end of shift) (form-field · table · required)
- Closing meter reading (form-field · table · required)
- Continue action (action · main · required)
- Loading spinner (badge · main)
- Error message (text · main)
- Empty state message (text · main)
- Plan limit message (text · main)
- Permission denied message (text · main)
Statuses: default, loading, error, empty, plan_limit, permission_denied

### Shift End (Step 2: Cash & Card Totals) (/operator/shift-end/step-2) [default] layout=single-column-form
Regions:
- header — Step indicator and page title for user orientation [StepIndicator, PageTitle]
- main — Form for entering end-of-shift cash, card, and closing meter readings [FormField:CashAmount, FormField:CardAmount, FormField:ClosingMeterReading, FormErrorBanner]
- footer — Navigation actions for the wizard step [BackButton, NextButton, OfflineStatusIndicator]
Fields:
- Card amount (end of shift) (form-field · table · required)
- Cash amount (end of shift) (form-field · table · required)
- Closing meter reading (form-field · table · required)
- Offline status (badge · footer)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Shift End (Step 3: Review & Submit) (/operator/shift-end/step-3) [default] layout=single-column-form
Regions:
- header — Step indicator and page title for user orientation [StepIndicator, PageTitle]
- main — Summary of entered shift data, variances, and corrections for review [SummaryTable:ShiftTotals, VarianceBadge, CorrectionRequestBanner, FormErrorBanner]
- footer — Actions to submit or go back [BackButton, SubmitButton, OfflineStatusIndicator]
Fields:
- Card amount (end of shift) (form-field · table · required)
- Cash amount (end of shift) (form-field · table · required)
- Closing meter reading (form-field · table · required)
- Variance (badge · main)
- Correction request (badge · main)
- Offline status (badge · footer)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Shift End (Confirmation) (/operator/shift-end/confirmation) [default] layout=single-column-form
Regions:
- main — Confirmation message and summary of submitted shift data [ConfirmationIcon, ConfirmationMessage, SummaryTable:ShiftTotals, VarianceBadge]
- footer — Actions to logout or return to dashboard [LogoutButton, ReturnToDashboardButton, OfflineStatusIndicator]
Fields:
- Card amount (end of shift) (form-field · table · required)
- Cash amount (end of shift) (form-field · table · required)
- Closing meter reading (form-field · table · required)
- Variance (badge · main)
- Offline status (badge · footer)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Manager Dashboard (/manager) [default]
Fields:
- Low tank alerts (dashboard) (badge · panel · required)
- Cash variance (dashboard) (metric · panel · required)
- Active shift (dashboard) (metric · panel · required)
- Fuel left (dashboard) (metric · panel · required)
- Today's sales (dashboard) (metric · panel · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Manager Dashboard (Loading) (/manager) [loading]
Fields:
- Low tank alerts (dashboard) (badge · panel · required)
- Cash variance (dashboard) (metric · panel · required)
- Active shift (dashboard) (metric · panel · required)
- Fuel left (dashboard) (metric · panel · required)
- Today's sales (dashboard) (metric · panel · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Manager Dashboard (Error) (/manager) [error]
Fields:
- Low tank alerts (dashboard) (badge · panel · required)
- Cash variance (dashboard) (metric · panel · required)
- Active shift (dashboard) (metric · panel · required)
- Fuel left (dashboard) (metric · panel · required)
- Today's sales (dashboard) (metric · panel · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Shift Verification (List) (/manager/shifts) [default] layout=list-detail
Regions:
- header — Page title, quick summary, and navigation context. [PageTitle, ShiftPendingCountBadge, BackToDashboardButton]
- filters — Filter and search shifts to verify. [DateRangePicker, OperatorMultiSelect, StatusSelect, StationSelect]
- main — Displays the list of shifts pending verification with key details and actions. [ShiftVerificationTable, TablePagination, TableEmptyState, TableErrorState]
Fields:
- Shift Date/Time (table-column · table · required)
- Operator Name (table-column · table · required)
- Shift Status (table-column · table · required)
- Opening Meter Reading (table-column · table · required)
- Closing Meter Reading (table-column · table · required)
- Total Liters Sold (table-column · table · required)
- Total Sales Amount (table-column · table · required)
- Cash Amount (table-column · table · required)
- Card Amount (table-column · table · required)
- Variance (table-column · table · required)
- Correction Requested Badge (badge · table)
- Verify Shift Action (action · table · required)
- Reject Shift Action (action · table · required)
- View Shift Details Action (action · table · required)
- Empty State Message (text · main · required)
- Loading Indicator (text · main · required)
- Table Error State (text · main · required)
- Plan Limit Message (text · main · required)
- Permission Error Message (text · main · required)
- ShiftPendingCountBadge (badge · header)
- BackToDashboardButton (navigation-item · header)
Filters:
- Date Range (date-range)
- Operator (multi-select)
- Status (multi-select)
- Station (multi-select)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Shift Verification (Loading) (/manager/shifts) [loading] layout=list-detail
Regions:
- main — Shows loading indicator while data is fetched. [LoadingIndicator]
Fields:
- Loading Indicator (text · main · required)
Statuses: loading

### Shift Verification (Empty) (/manager/shifts) [empty] layout=list-detail
Regions:
- main — Shows empty state message when no shifts are pending. [EmptyStateMessage]
Fields:
- Empty State Message (text · main · required)
Statuses: empty

### Shift Verification (Detail) (/manager/shifts/:shiftId) [default] layout=two-column-main-rail
Regions:
- header — Displays shift summary and status, key actions. [ShiftSummaryCard, StatusBadge, ApproveButton, RejectButton, RequestClarificationButton]
- main — Presents detailed shift data for review. [SalesTable, MeterReadingsPanel, CashCardBreakdownPanel, VariancePanel, CorrectionRequestsList]
- context-rail — Shows operator info, shift timeline, and audit log. [OperatorInfoCard, ShiftTimeline, AuditTrailList]
Fields:
- Shift ID (text · header · required)
- Shift Date (date · header · required)
- Operator Name (text · header · required)
- Shift Status (badge · header · required)
- Opening Meter Reading (number · main · required)
- Closing Meter Reading (number · main · required)
- Total Sales (Liters) (number · main · required)
- Total Sales (Amount) (number · main · required)
- Sales by Fuel Type (table-column · main · required)
- Cash Amount (Counted) (number · main · required)
- Card Amount (Counted) (number · main · required)
- Expected Cash (number · main · required)
- Variance (Cash) (number · main · required)
- Correction Requests (list · main)
- Approve Action (action · header · required)
- Reject Action (action · header · required)
- Request Clarification Action (action · header)
- Audit Trail (list · context-rail)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Shift Verification (Approve Modal) (/manager/shifts/:shiftId/approve) [default] layout=single-column-form
Regions:
- main — Confirm approval and optionally add a note. [ConfirmationText, OptionalNoteField, ApproveConfirmButton, CancelButton]
Fields:
- Shift ID (text · main · required)
- Operator Name (text · main · required)
- Shift Date (date · main · required)
- Approval Confirmation Text (text · main · required)
- Optional Approval Note (form-field · main)
- Approve Confirm Action (action · main · required)
- Cancel Action (action · main · required)
Statuses: default, loading, error, plan_limit, permission_denied

### Shift Verification (Reject Modal) (/manager/shifts/:shiftId/reject) [default] layout=single-column-form
Regions:
- main — Collect rejection reason and confirm rejection. [RejectionReasonField, RejectConfirmButton, CancelButton]
Fields:
- Shift ID (text · main · required)
- Operator Name (text · main · required)
- Shift Date (date · main · required)
- Rejection Reason (form-field · main · required)
- Reject Confirm Action (action · main · required)
- Cancel Action (action · main · required)
Statuses: default, loading, error, plan_limit, permission_denied

### Tank Inventory (List) (/manager/tanks) [default]
Fields:
- Last updated (tank) (table-column · table · required)
- Current level (tank) (table-column · table · required)
- Capacity (tank) (table-column · table · required)
- Fuel type (tank) (table-column · table · required)
- Tank number (table-column · table · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Tank Inventory (Loading) (/manager/tanks) [loading]
Fields:
- Last updated (tank) (table-column · table · required)
- Current level (tank) (table-column · table · required)
- Capacity (tank) (table-column · table · required)
- Fuel type (tank) (table-column · table · required)
- Tank number (table-column · table · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Tank Inventory (Empty) (/manager/tanks) [empty]
Fields:
- Last updated (tank) (table-column · table · required)
- Current level (tank) (table-column · table · required)
- Capacity (tank) (table-column · table · required)
- Fuel type (tank) (table-column · table · required)
- Tank number (table-column · table · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Tank Inventory (Detail Drawer) (/manager/tanks/:tankId) [default]
Fields:
- Last updated (tank) (table-column · table · required)
- Current level (tank) (table-column · table · required)
- Capacity (tank) (table-column · table · required)
- Fuel type (tank) (table-column · table · required)
- Tank number (table-column · table · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Fuel Delivery (List) (/manager/deliveries) [default]
Fields:
- Invoice number (delivery) (form-field · form)
- Tank (delivery) (form-field · form · required)
- Liters delivered (form-field · form · required)
- Fuel type (delivery) (form-field · form · required)
- Delivery date/time (form-field · form · required)
- Supplier (delivery) (form-field · form · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Fuel Delivery (Loading) (/manager/deliveries) [loading]
Fields:
- Invoice number (delivery) (form-field · form)
- Tank (delivery) (form-field · form · required)
- Liters delivered (form-field · form · required)
- Fuel type (delivery) (form-field · form · required)
- Delivery date/time (form-field · form · required)
- Supplier (delivery) (form-field · form · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Fuel Delivery (Empty) (/manager/deliveries) [empty]
Fields:
- Invoice number (delivery) (form-field · form)
- Tank (delivery) (form-field · form · required)
- Liters delivered (form-field · form · required)
- Fuel type (delivery) (form-field · form · required)
- Delivery date/time (form-field · form · required)
- Supplier (delivery) (form-field · form · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Fuel Delivery Entry (Modal) (/manager/deliveries/new) [default]
Fields:
- Invoice number (delivery) (form-field · form)
- Tank (delivery) (form-field · form · required)
- Liters delivered (form-field · form · required)
- Fuel type (delivery) (form-field · form · required)
- Delivery date/time (form-field · form · required)
- Supplier (delivery) (form-field · form · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Cash Reconciliation (List) (/manager/reconciliation) [default]
Fields:
- Variance (form-field · form · required)
- Card amount (reconciliation) (form-field · form · required)
- Counted cash (form-field · form · required)
- Expected cash (form-field · form · required)
- Reconciliation shift (form-field · form · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Cash Reconciliation (Loading) (/manager/reconciliation) [loading]
Fields:
- Variance (form-field · form · required)
- Card amount (reconciliation) (form-field · form · required)
- Counted cash (form-field · form · required)
- Expected cash (form-field · form · required)
- Reconciliation shift (form-field · form · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Cash Reconciliation (Empty) (/manager/reconciliation) [empty]
Fields:
- Variance (form-field · form · required)
- Card amount (reconciliation) (form-field · form · required)
- Counted cash (form-field · form · required)
- Expected cash (form-field · form · required)
- Reconciliation shift (form-field · form · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Expenses (List) (/manager/expenses) [default]
Fields:
- Expense entered by (form-field · form · required)
- Expense note (form-field · form)
- Expense amount (form-field · form · required)
- Expense category (form-field · form · required)
- Expense date (form-field · form · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Expenses (Loading) (/manager/expenses) [loading]
Fields:
- Expense entered by (form-field · form · required)
- Expense note (form-field · form)
- Expense amount (form-field · form · required)
- Expense category (form-field · form · required)
- Expense date (form-field · form · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Expenses (Empty) (/manager/expenses) [empty]
Fields:
- Expense entered by (form-field · form · required)
- Expense note (form-field · form)
- Expense amount (form-field · form · required)
- Expense category (form-field · form · required)
- Expense date (form-field · form · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Expense Entry (Modal) (/manager/expenses/new) [default]
Fields:
- Expense entered by (form-field · form · required)
- Expense note (form-field · form)
- Expense amount (form-field · form · required)
- Expense category (form-field · form · required)
- Expense date (form-field · form · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Reports (List) (/manager/reports) [default] layout=two-column-main-rail
Regions:
- header — Page title, quick actions, and export controls. [PageTitle, ExportDropdown, HelpTooltip]
- filters — Filter and select report type, date range, and station (future-ready). [ReportTypeSelect, DateRangePicker, StationSelect]
- main — Displays the list of available/generated reports with summary and actions. [ReportListTable, ReportStatusBadge, DownloadAction, NoReportsEmptyState]
- context-rail — Shows recent exports, quick tips, and report generation history. [RecentExportsList, QuickTipsPanel]
Fields:
- Report Type (filter · filters · required)
- Date Range (filter · filters · required)
- Station (filter · filters)
- Report Name (table-column · table · required)
- Report Period (table-column · table · required)
- Generated On (table-column · table · required)
- Status (badge · table · required)
- Download (action · table · required)
- Export to CSV (action · header · required)
- Export to PDF (action · header · required)
- No Reports Message (text · main · required)
- Loading Spinner (action · main · required)
- Error Message (text · main · required)
- Retry Action (action · main · required)
- Plan Limit Message (text · main · required)
- Permission Denied Message (text · main · required)
Filters:
- Report Type (multi-select)
- Date Range (date-range)
- Station (multi-select)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Reports (Loading) (/manager/reports) [loading] layout=two-column-main-rail
Regions:
- main — Shows loading spinner while reports are fetched. [LoadingSpinner]
Fields:
- Loading Spinner (action · main · required)
Statuses: loading

### Accountant Workspace (/accountant) [default] layout=dashboard-grid
Regions:
- header — Page title and quick navigation. [PageTitle, UserMenu]
- main-dashboard — Shows key financial metrics and quick links to core workflows. [MetricCard: Total Expenses (This Month), MetricCard: Cash Variance (This Month), MetricCard: Last Reconciliation Date, QuickLink: Enter Expense, QuickLink: View Reports, QuickLink: Cash Reconciliation]
- recent-activity — Displays recent expense entries and reconciliation actions. [RecentExpensesList, RecentReconciliationsList]
- context-rail — Shows help, tips, and accountant-specific notifications. [HelpPanel, NotificationsPanel]
Fields:
- Total Expenses (This Month) (metric · main-dashboard · required)
- Cash Variance (This Month) (metric · main-dashboard · required)
- Last Reconciliation Date (metric · main-dashboard · required)
- Recent Expenses (list · recent-activity · required)
- Recent Reconciliations (list · recent-activity · required)
- Enter Expense (action · main-dashboard · required)
- View Reports (action · main-dashboard · required)
- Cash Reconciliation (action · main-dashboard · required)
- No Expenses Message (text · recent-activity · required)
- No Reconciliations Message (text · recent-activity · required)
- Loading Spinner (action · main-dashboard · required)
- Error Message (text · main-dashboard · required)
- Retry Action (action · main-dashboard · required)
- Plan Limit Message (text · main-dashboard · required)
- Permission Denied Message (text · main-dashboard · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Owner Overview (/owner) [default] layout=dashboard-grid
Regions:
- header — Page title, station selector (future), quick links to settings and audit log [PageTitle, StationSelector, SettingsButton, AuditLogButton]
- main — Owner dashboard with key metrics, charts, and workflow shortcuts [MetricCard, TankLevelCard, ActiveShiftCard, CashVarianceCard, LowTankAlertCard, SalesChart, QuickActionButton]
- context-rail — Recent activity, quick reports, and notifications [RecentActivityList, QuickReportLinks, NotificationBadge]
Fields:
- Today's Sales (Amount) (metric · main · required)
- Liters Sold (by Fuel Type) (metric · main · required)
- Active Shift Status (metric · main · required)
- Cash Variance (metric · main · required)
- Low Tank Alerts (badge · main · required)
- Tank Inventory (by Tank) (table · main · required)
- Recent Activity (list · context-rail · required)
- Quick Reports (action · context-rail · required)
- Date Range (filter · filters · required)
- Station (filter · filters)
Filters:
- Date Range (date-range)
- Station (multi-select)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Audit Log (List) (/owner/audit-log) [default] layout=list-detail
Regions:
- header — Page title and filters for narrowing audit log [PageTitle, DateRangeFilter, UserFilter, ActionTypeFilter, StationFilter]
- main — Audit log table with details and expandable rows [AuditLogTable, ExpandableRowDetail, PaginationControls]
Fields:
- Timestamp (table-column · main · required)
- User (table-column · main · required)
- Role (table-column · main · required)
- Action (table-column · main · required)
- Details (table-column · main · required)
- Station (table-column · main)
- Date Range (filter · filters · required)
- User Filter (filter · filters)
- Action Type (filter · filters)
- Station Filter (filter · filters)
Filters:
- Date Range (date-range)
- User (multi-select)
- Action Type (multi-select)
- Station (multi-select)
Statuses: default, empty, loading, error, plan_limit, permission_denied

### Settings (Drawer) (/owner/settings) [default] layout=single-column-form
Regions:
- header — Drawer title and close button [DrawerTitle, CloseButton]
- main — Settings form: station config, user management, multi-station (future) [StationConfigSection, UserManagementSection, MultiStationSection, SaveButton]
Fields:
- Station Name (form-field · main · required)
- Station Address (form-field · main · required)
- Station Timezone (form-field · main · required)
- Low Tank Alert Threshold (form-field · main · required)
- User List (list · main · required)
- User Role (form-field · main · required)
- Add User (action · main · required)
- Edit User (action · main · required)
- Remove User (action · main · required)
- Multi-Station Enabled (form-field · main)
- Save Changes (action · main · required)
Statuses: default, empty, loading, error, plan_limit, permission_denied

## 5. Design guidelines (tokens / UX validation — secondary to §1–§3)

Guideline files in the repo under `.ops4/design-system/` (validation / tokens / a11y — do NOT override screen composition in the locked build prompt):
- `.ops4/design-system/01_design_system.md` — Design system
- `.ops4/design-system/02_ux_principles.md` — UX principles
- `.ops4/design-system/03_screen_composition.md` — Screen composition
- `.ops4/design-system/04_form_patterns.md` — Form patterns
- `.ops4/design-system/05_table_patterns.md` — Table patterns
- `.ops4/design-system/06_dashboard_patterns.md` — Dashboard patterns
- `.ops4/design-system/07_navigation_patterns.md` — Navigation patterns
- `.ops4/design-system/08_feedback_patterns.md` — Feedback patterns
- `.ops4/design-system/09_layout_patterns.md` — Layout patterns
- `.ops4/design-system/10_responsive_patterns.md` — Responsive patterns
- `.ops4/design-system/11_accessibility_rules.md` — Accessibility rules
- `.ops4/design-system/12_content_guidelines.md` — Content guidelines
- `.ops4/design-system/13_interaction_patterns.md` — Interaction patterns
- `.ops4/design-system/14_ai_validation_rules.md` — AI validation rules
Also: `.ops4/design-system/README.md` (conflict priority) and `.ops4/design-system/DESIGN_SYSTEM.md` (index).
Index URL: https://github.com/ahsanaasim/test-repo-fuel-station-app/blob/ai-build/preview-var2-issue-3-implement-editorial-commerce-flow-ui-full-app-pr/.ops4/design-system/DESIGN_SYSTEM.md
# Aperture UI/UX guideline pack

This file concatenates all guideline slots for the coding agent.
Prefer individual files under `.ops4/design-system/` when available.

## Conflict priority (README)

# UI / UX guidelines (Aperture Design Governance)

Version: 1.1

These files are the **default** source of truth for Design Brain / Build Now / Cursor.

## Design Brain

Each project Design Brain shows **14 slots** (one per file below).

- If a slot has **no upload**, the matching default file from this folder is used.
- If a user **uploads** a `.md`/`.txt` file for a slot, that override is stored on the project baseline and used instead.
- **Preview** always shows the *effective* content (override or default).
- Build Now / Cursor always receives all 14 effective documents under `.ops4/design-system/`.

## File index

| File | Role |
|------|------|
| `01_design_system.md` | Visual tokens, components, motion, casing matrix |
| `02_ux_principles.md` | UX philosophy (when other docs are silent) |
| `03_screen_composition.md` | Page anatomy (header, filters, content, footer) |
| `04_form_patterns.md` | Forms, fields, validation timing |
| `05_table_patterns.md` | Tables / data tables (when features are required) |
| `06_dashboard_patterns.md` | Dashboard structure & KPI patterns |
| `07_navigation_patterns.md` | App nav, breadcrumbs, wayfinding |
| `08_feedback_patterns.md` | Loading, toasts, empty, confirm, undo |
| `09_layout_patterns.md` | Grid, widths, spacing, placement |
| `10_responsive_patterns.md` | Breakpoints & device adaptations |
| `11_accessibility_rules.md` | WCAG 2.1 AA, keyboard, ARIA |
| `12_content_guidelines.md` | Copy tone, labels, microcopy |
| `13_interaction_patterns.md` | States, gestures, animation behavior |
| `14_ai_validation_rules.md` | Pre-ship checklist (must not invent new policy) |

Optional companion: `tokens.css` (CSS variables mirroring `01`).

## Conflict priority (highest wins)

When two files disagree, apply in this order:

1. **`11_accessibility_rules.md`** — accessibility blockers always win  
2. **`01_design_system.md`** — tokens, components, Sheet/Drawer, casing matrix  
3. **Domain patterns** — `04` forms · `05` tables · `06` dashboards · `07` nav · `08` feedback  
4. **Structure** — `03` composition · `09` layout · `10` responsive  
5. **`12_content_guidelines.md`** — copy (must match `01` casing matrix)  
6. **`13_interaction_patterns.md`** — interaction polish  
7. **`02_ux_principles.md`** — philosophy only when others are silent  
8. **`14_ai_validation_rules.md`** — checklist only; never overrides higher docs  

## Canonical reconciled rules (v1.1)

Agents must treat these as authoritative:

### Primary CTA
- Exactly **one** orange `primary` button in the **page header** (page chrome).
- Nested cards/panels use `secondary` / `ghost`.
- **Exception:** a focused task surface (dialog, sheet/drawer body, or empty-state recovery) may contain **one** primary.
- Never show two or more primary fills in the same viewport.

### Sheet vs Drawer
- **≥ 640px:** edge panel = shadcn **Sheet** (desktop/tablet secondary panels, filters, details).
- **&lt; 640px:** same pattern = shadcn **Drawer** (bottom sheet).
- Do not put full multi-step workflows inside Sheet/Drawer.
- “Right drawer” in older wording means **Sheet** on desktop.

### Destructive actions
- **Recoverable** (soft delete, archive, dismiss) → perform action + **Undo toast** (~10s). No modal.
- **Irreversible / high-impact** (permanent delete, purge, cancel subscription) → **Alert Dialog**. Cancel is the safe default focus. Never toast-only.

### Validation timing (forms)
1. Do **not** validate aggressively on every keystroke before first blur.
2. After a field is touched/blurred → validate that field on subsequent changes.
3. On submit → validate all; move focus to first invalid; announce errors accessibly.
4. Success → toast or inline confirmation.

### Capitalization
Follow the matrix in `01` §8 (mirrored in `12`):
- Actions, form labels, toasts → **sentence case** (`Email address`, `Save changes`)
- Page titles, section headers, nav labels → **Title Case** (`Account Settings`)

### Motion
- Interactive transitions: **150–200ms** on named easings.
- Overlay enter/exit: up to **300ms** allowed.
- Continuous indicators (spinner ~700ms loop, skeleton shimmer) are exempt; honor `prefers-reduced-motion`.

### Spacing
Use the 4px rail in `01`. Mapped common values:
- 8 / 16 / 24 / 32 / 48 → `space-2` / `space-4` / `space-6` / `space-8` / `space-12`
- Page section-to-section = **48px** (`space-12`), not invented values.

### Typography floor
- Primary reading body ≥ **16px**.
- `body-small` **14px** = metadata/captions only.
- `label` **13px** = form labels, chips, button text — OK.

### Error feedback
- Recoverable / non-blocking → toast (assertive OK) with retry when useful.
- Critical / blocking → persistent Alert or modal — **never toast-only**.

---

## 01_design_system — Design system

Source: default (01_design_system.md)

# Aperture — Design System Guidelines

Version: 1.1  
Part of: Aperture Design Governance

**Source of truth for visual UI.** Coding agents (Cursor / Build Now) and humans must follow this file over generic aesthetics, invented palettes, or ad-hoc component styles.

For cross-file conflict priority and the canonical CTA / Sheet-Drawer / delete / validation rules, see `README.md`.

| Item | Value |
|------|--------|
| System name | **Aperture** |
| Stack | React + Tailwind CSS + **shadcn/ui** patterns |
| Icons | **Phosphor Icons** (`@phosphor-icons/web`) |
| Themes | Light + Dark (`class` strategy) |
| Direction | LTR + RTL (`dir` on `<html>`) |
| Contrast | WCAG 2.1 AA |

---

## 1. Non‑negotiable rules

1. **Do not invent a new visual language.** Use Aperture tokens, zinc neutrals, and orange brand accents below.
2. **One primary CTA in page chrome.** Exactly one orange `primary` in the page header. Nested cards use `secondary`/`ghost`. Focused task surfaces (dialog, sheet/drawer, empty-state) may have one primary. Never two primary fills in one viewport.
3. **Never encode meaning by color alone.** Pair status with icon + text.
4. **Focus rings are mandatory.** Orange 2px ring + 2px offset — never remove without a visible replacement.
5. **Sentence case for actions and form labels;** Title Case for page/nav headers (see §8).
6. **Motion:** interactive transitions **150–200ms**; overlay enter/exit up to **300ms**; spinner/shimmer loops exempt. Honor `prefers-reduced-motion`.
7. **≥ 640px** secondary panels use **Sheet**; **&lt; 640px** the same pattern uses bottom **Drawer**.
8. Use **logical CSS** (`ms`/`me`, `border-s`, `start`/`end`) — no hard-coded left/right that breaks RTL.
9. Prefer existing **shadcn/ui** components over custom one-offs.
10. When this file conflicts with a generic “make it pretty” instinct, **this file wins** (accessibility in `11` still outranks this file).

---

## 2. Brand & aesthetic

- **Look:** Clean product UI — zinc surfaces, subtle borders, restrained elevation, orange accent.
- **Not:** Purple gradients, glassmorphism noise, neon glow, heavy multi-layer shadows, random decorative cards.
- **Canvas:** Light `#fafafa` / Dark `#09090b`
- **Surfaces:** Light `#ffffff` / Dark `#18181b` (cards, panels)
- **Brand / primary fill:** `#f97316` (orange-500/600 family); hover darkens in light, lightens in dark
- **Destructive:** Rose (`#e11d48` light / `#fb7185` dark)
- **Fonts:** System UI sans (`ui-sans-serif`, system-ui, Segoe UI, Roboto, Helvetica, Arial); mono for code chips

### Shared shell primitives (Tailwind)

```
CARD = rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900
RING = focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
       focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950
```

---

## 3. Color tokens

### Semantic roles

| Token | Role | Light | Dark | Use |
|-------|------|-------|------|-----|
| `bg/canvas` | Page canvas | `#fafafa` | `#09090b` | Lowest layer; don’t put long-form text directly on canvas without a surface |
| `bg/surface` | Card / panel | `#ffffff` | `#18181b` | Default elevated container; pair with `border/subtle` |
| `bg/muted` | Inset fill | `#f4f4f5` | `#27272a` | Wells, code blocks, secondary rows |
| `fg/default` | Primary action fill | `#f97316` | `#f97316` | Primary buttons; **white** label/icons for AA |
| `fg/hover` | Primary hover | `#ea580c` | `#fb923c` | Darken in light; lighten in dark |
| `fg/neutral` | Secondary fill | `#e4e4e7` | `#3f3f46` | Secondary / ghost resting fill |
| `text/primary` | Body & headings | `#18181b` | `#fafafa` | ≥ 4.5:1 on surface |
| `text/secondary` | Supporting copy | `#52525b` | `#a1a1aa` | Metadata, helpers (≥ 4.5:1) |
| `text/disabled` | Disabled label | `#a1a1aa` | `#52525b` | Always pair with non-color disabled cues |
| `icon/interactive` | Actionable icon | `#ea580c` | `#fb923c` | ≥ 3:1 graphical contrast |
| `icon/neutral` | Informational icon | `#52525b` | `#a1a1aa` | ≥ 3:1; pair with text if status |
| `border/subtle` | Structural line | `#e4e4e7` | `#27272a` | Cards, dividers |
| `border/strong` | Input border | `#a1a1aa` | `#52525b` | Form affordance (~3:1 vs surface) |
| `border/focus` | Focus ring | `#f97316` | `#f97316` | Keyboard focus only — never structure |
| `status/success` | Success | `#059669` | `#34d399` | + check glyph |
| `status/info` | Info | `#2563eb` | `#60a5fa` | Tips, in-progress |
| `status/warning` | Warning | `#d97706` | `#fbbf24` | + warning glyph |
| `status/error` | Error | `#e11d48` | `#fb7185` | Blocking; announce with `aria-live` |

### Charts (Okabe–Ito–derived — color-blind safe)

| Token | Hex | Name |
|-------|-----|------|
| `charts/1` | `#0072b2` | Blue |
| `charts/2` | `#e69f00` | Orange |
| `charts/3` | `#009e73` | Green |
| `charts/4` | `#cc79a7` | Pink |
| `charts/5` | `#56b4e9` | Sky |
| `charts/6` | `#d55e00` | Vermillion |
| `charts/7` | `#f0e442` | Yellow |
| `charts/8` | `#525252` | Grey |

Always encode series with **color + label/pattern**, never hue alone.

### Badge / pill tones

`zinc` | `orange` | `emerald` | `rose` | `blue` | `amber` — soft filled pills with matching border; map to status semantics.

---

## 4. Typography

| Token | Desktop | Tablet | Mobile | Weight | Tracking | Rule |
|-------|---------|--------|--------|--------|----------|------|
| `display1` | 60/64 | 52/56 | 40/44 | 700 | -0.02em | Marketing heroes only — never dense product UI |
| `display2` | 48/52 | 40/44 | 34/38 | 700 | -0.02em | Secondary marketing splash |
| `h1` | 36/40 | 32/36 | 28/32 | 700 | -0.01em | **One per page/view** |
| `h2` | 28/34 | 26/32 | 24/30 | 600 | -0.01em | Module / major section titles |
| `title` | 20/28 | 18/26 | 18/26 | 600 | 0 | Card headers, dialog titles |
| `body` | 16/24 | 16/24 | 16/24 | 400 | 0 | Default reading size |
| `body-small` | 14/20 | 14/20 | 14/20 | 400 | 0 | Secondary metadata only |
| `label` | 13/16 | 13/16 | 13/16 | 500 | 0.01em | Form labels, buttons, chips — sentence case |
| `overline` | 11/16 | 11/16 | 11/16 | 600 | 0.12em | Eyebrows — uppercase + tracked |

Contrast: body/label ≥ **4.5:1**; large headings ≥ **3:1**.

**Size floor:** primary reading body ≥ **16px**. `body-small` (14px) is metadata only. `label` (13px) is OK for controls.

---

## 5. Spacing, radius, elevation

### Spacing (4px rail)

| Token | px | Use |
|-------|-----|-----|
| `space-1` | 4 | Icon–label gap |
| `space-2` | 8 | Chip / badge padding |
| `space-3` | 12 | Compact control padding (S) |
| `space-4` | 16 | Default container / M control padding |
| `space-5` | 20 | Card internal padding |
| `space-6` | 24 | Section gaps / card gutters |
| `space-8` | 32 | Grouped blocks; desktop page padding |
| `space-10` | 40 | Tablet region gaps |
| `space-12` | 48 | Page section-to-section rhythm |

### Radius

| Token | px | Tailwind | Use |
|-------|-----|----------|-----|
| `radius-sm` | 6 | `rounded-md` | Inputs, small buttons, checkboxes |
| `radius-md` | 8 | `rounded-lg` | Default buttons, menus, alerts |
| `radius-lg` | 12 | `rounded-xl` | Cards, dialogs, sheets, popovers |
| `radius-xl` | 16 | `rounded-2xl` | Large marketing / media |
| `radius-full` | 9999 | `rounded-full` | Pills, avatars, switch thumbs |

### Shadows

| Token | Use |
|-------|-----|
| `shadow-xs` / `shadow-sm` | Resting buttons, inputs, chips |
| `shadow` | Cards on canvas |
| `shadow-md` | Dropdowns, popovers, hover cards |
| `shadow-lg` | Menus, comboboxes, toasts |
| `shadow-xl` | Modals, sheets, drawers |

---

## 6. Iconography (Phosphor)

- Library: [phosphoricons.com](https://phosphoricons.com/)
- Weights: `thin` | `light` | `regular` | `bold` | `fill` | `duotone`
- Usage: **Regular** resting · **Bold/Fill** active/selected
- Sizes: **16 / 20 / 24 / 28** (4px steps)
- Custom icons: 24×24 grid, 2px stroke, 2px live padding, rounded terminals, optical center
- Roles:
  - **Actionable** — 3:1 + accessible name
  - **Informational** — pair with text
  - **Decorative** — `aria-hidden="true"`
- RTL: directional icons use `.flip-x` (`scaleX(-1)`)

---

## 7. Motion & interaction states

### Easing (Tailwind / CSS)

| Name | Curve | Typical duration |
|------|-------|------------------|
| `standard` | `cubic-bezier(0.2, 0, 0, 1)` | 150–200ms |
| `emphasized` | `cubic-bezier(0.05, 0.7, 0.1, 1)` | 200ms |
| `decelerate` | `cubic-bezier(0, 0, 0, 1)` | 150ms |
| `accelerate` | `cubic-bezier(0.3, 0, 1, 1)` | 150ms |

### Motion presets

| Preset | Duration | Behavior |
|--------|----------|----------|
| Press | 150ms | `scale(0.98)` on active |
| Fade | 150ms | Opacity 0→1 |
| Expand | 200ms | Height + chevron |
| Slide | 200ms | `translateY(8–12px)` + fade |
| Overlay | 200–300ms | Scrim fade + panel slide (**exception** to 200ms cap) |
| Thumb | 150ms | Switch knob travel |
| Shimmer | 1400ms | Skeleton sweep (**continuous**; disable if reduced-motion) |
| Spin | 700ms linear | Spinner (**continuous**; slow/fade if reduced-motion) |

**Rule:** UI state transitions stay in 150–200ms. Overlay entrance may use up to 300ms. Continuous loops are not “transitions” but must respect reduced motion.

### Control states (all interactive controls)

`Default` · `Hover` · `Focus` · `Active` · `Disabled` · `Loading`

Sizes: **S** `h-8` · **M** `h-9` · **L** `h-11`

### Buttons

| Variant | Style |
|---------|--------|
| `primary` | Orange fill, white text |
| `secondary` | Surface + zinc border |
| `ghost` | Transparent, zinc text, muted hover |
| `destructive` | Rose fill, white text |
| `link` | Orange text, underline on hover |

Labels: sentence-case **verbs** (“Save changes”). Loading → spinner + `aria-busy` + disabled.

### Inputs

- Radius `rounded-md`, strong border; invalid → rose border + `aria-invalid`
- Always visible `<label>` — **never** placeholder-as-label
- **Validation timing** (canonical — also in `04` / README):
  1. Do not validate aggressively on every keystroke before first blur
  2. After touch/blur → validate that field on subsequent changes
  3. On submit → validate all; focus first invalid; announce errors
  4. Success → toast or inline confirmation

### Overlays

- Scrim: `bg-black/50` + light blur
- Esc + outside click dismiss (except alert dialogs where Cancel is explicit)
- Focus trap; restore focus to trigger on close
- Toasts: bottom-end stack, `aria-live="polite"` (assertive OK for **recoverable** errors), max ~3, pause on hover
- **Never toast-only for irreversible/blocking failures** — use Alert Dialog or persistent Alert
- **Destructive policy:** recoverable → Undo toast (~10s); irreversible/high-impact → Alert Dialog

---

## 8. Editorial / copy

### Tone

| Do | Don’t |
|----|--------|
| Clear, direct, human (“Your changes are saved.”) | Robotic (“Operation completed successfully.”) |
| Confident, not boastful (“Deploy in one click.”) | Hype (“The world’s most powerful…”) |
| Blame-free errors (“We couldn’t reach the server.”) | Accusatory (“You entered an invalid value.”) |
| Concise active voice (“Add a member.”) | Passive padding |

### Capitalization

| Surface | Style | Example |
|---------|--------|---------|
| Buttons & actions | Sentence case | Save changes |
| Tooltips & helpers | Sentence case | Add to your library |
| Page & section headers | Title Case | Account Settings |
| Navigation labels | Title Case | Billing & Plans |
| Form labels | Sentence case | Email address |
| Toast / banner titles | Sentence case | Event created |

### Length limits

| Surface | Max chars |
|---------|-----------|
| Toast title | 60 |
| Banner body | 120 |
| Notification card | 90 |

---

## 9. Accessibility & i18n

- WCAG 2.1 AA contrast (see §3)
- Keyboard: Tab order intact; Esc closes top overlay; menus/tabs/radios follow WAI-ARIA patterns
- Icon-only controls need `aria-label`
- Status / errors: text + icon; errors use `role="alert"` / `aria-live="assertive"` when injected
- Charts: provide summary/`role="img"` + data table alternative when practical
- **RTL:** set `dir="rtl"`; mirror arrows/carets; sheets slide from logical end; pagination arrows flip
- Reduced motion: no infinite shimmer/pulse; prefer opacity fades

### Global keyboard expectations

| Context | Key | Behavior |
|---------|-----|----------|
| Global | Tab / Shift+Tab | Move focus |
| Global | Esc | Dismiss top overlay |
| Buttons | Enter / Space | Activate |
| Menus | ↑ ↓ · Home/End | Navigate items |
| Tabs | ← → | Move tabs |
| Radio | Arrows | Move selection |
| Combobox | Alt+↓ | Open listbox |
| Calendar/Grid | Arrows · PageUp/Down | Navigate |
| Slider | ← → · Home/End | Step / jump |
| Dialog | Tab | Cycle inside only |

---

## 10. Layout & responsive behavior

- App shell: often **sidebar nav** + main content; collapse to icons / off-canvas on narrow screens
- Cards: `radius-lg`, `space-5` padding; card actions are `secondary`/`ghost` unless the card is a focused task surface
- Tables: see `05_table_patterns.md` — Data Table features only when the task needs them
- Empty states: icon in soft circle + title + why + **one recovery CTA**
- **Viewport rule:** `≥ 640px` → side **Sheet**; `< 640px` → bottom **Drawer** for secondary panels/filters

---

## 11. Component inventory

Prefer **shadcn/ui** docs for implementation. Use each component for its intended job.

### Core (shadcn)

Accordion · Alert · Alert Dialog · Aspect Ratio · Avatar · Badge · Breadcrumb · Button · Button Group · Calendar · Card · Carousel · Chart · Checkbox · Collapsible · Combobox · Command · Context Menu · Data Table · Date Picker · Dialog · Drawer · Dropdown Menu · Empty · Hover Card · Input · Input Group · Input OTP · Label · Menubar · Native Select · Navigation Menu · Pagination · Popover · Progress · Radio Group · Resizable · Scroll Area · Select · Separator · Sheet · Sidebar · Skeleton · Slider · Sonner (Toast) · Spinner · Switch · Table · Tabs · Textarea · Toggle · Toggle Group · Tooltip

### Brand / chat / media (Aperture)

| Component | When |
|-----------|------|
| Attachment | Inline file chip (type + name + size + action) |
| AttachmentNew | Post-upload confirmed / emphasized attachment |
| Bubble | Compact chat bubble (own = end, other = start) |
| BubbleNew | Emphasized bubble (ring/shadow) — sparingly |
| Message | Avatar + author + timestamp + body |
| MessageNew | Carded / pinned message |
| Message Scroller | Live thread `role="log"`; stick to bottom only if already at bottom |
| Message ScrollerNew | + typing indicator |
| Marker | Map/timeline annotation |
| MarkerNew | Live/now marker (pulse; respect reduced-motion) |

**Chat a11y:** message list = `aria-live="polite"` log; sender via alignment + label, not color alone; timestamps use `<time datetime>`.

### Component selection cheatsheet

| Need | Use | Avoid |
|------|-----|--------|
| Primary action | One `primary` in page header (or focused task surface) | Multiple primaries in one viewport |
| Confirm irreversible destroy | Alert Dialog | Toast-only |
| Recoverable delete/archive | Undo toast (~10s) | Alert Dialog fatigue |
| Transient feedback | Sonner | Blocking Alert Dialog |
| Persistent inline notice | Alert | Toast |
| Blocking / critical failure | Alert or modal | Toast-only |
| Short text | Input | Textarea |
| Choices ≤ ~6 visible | Radio / Select | Combobox |
| Searchable long list | Combobox | Select |
| Instant setting | Switch | Checkbox + Save |
| Form multi-select | Checkbox | Switch |
| Side panel desktop (≥640) | Sheet | Drawer |
| Side panel mobile (&lt;640) | Drawer | Sheet |
| Page sections peers | Tabs | Accordion (unless stack needed) |
| Dense sort/filter data | Data Table | static Table |

---

## 12. Implementation checklist (for agents)

When building or changing UI:

- [ ] Zinc + orange Aperture palette (light/dark classes)
- [ ] Phosphor icons at 16/20/24/28; decorative icons `aria-hidden`
- [ ] Focus ring on all interactive controls
- [ ] Labels on every input; errors linked via `aria-describedby`
- [ ] Spacing on the 4px scale; section-to-section `space-12` (48px); cards `rounded-xl` + subtle border
- [ ] One primary in page header; no stacked primaries
- [ ] Sheet (≥640) / Drawer (&lt;640) for secondary panels
- [ ] Motion: 150–200ms transitions; overlays ≤300ms; reduced-motion safe
- [ ] Status colors always with icon + text
- [ ] Prefer shadcn components from §11 over custom widgets
- [ ] Validation timing per Inputs section / README

---

## 13. Optional CSS variables (tokens.css)

Agents may commit a companion `tokens.css` mapping the semantic tokens above, e.g.:

```css
:root {
  --bg-canvas: #fafafa;
  --bg-surface: #ffffff;
  --bg-muted: #f4f4f5;
  --fg-default: #f97316;
  --fg-hover: #ea580c;
  --text-primary: #18181b;
  --text-secondary: #52525b;
  --border-subtle: #e4e4e7;
  --border-strong: #a1a1aa;
  --border-focus: #f97316;
  --status-success: #059669;
  --status-info: #2563eb;
  --status-warning: #d97706;
  --status-error: #e11d48;
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --space-1: 4px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
}
.dark {
  --bg-canvas: #09090b;
  --bg-surface: #18181b;
  --bg-muted: #27272a;
  --fg-hover: #fb923c;
  --text-primary: #fafafa;
  --text-secondary: #a1a1aa;
  --border-subtle: #27272a;
  --border-strong: #52525b;
  --status-success: #34d399;
  --status-info: #60a5fa;
  --status-warning: #fbbf24;
  --status-error: #fb7185;
}
```

---

*Derived from the Aperture Design System Showroom (`design-system-showroom.html` / `.md`). Treat this document as the visual and behavioral contract for product UI.*

---

## 02_ux_principles — UX principles

Source: default (02_ux_principles.md)

# 02_ux_principles.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines the mandatory User Experience (UX) principles that govern every interface generated within the Aperture ecosystem.

Unlike the Design System, which defines visual appearance, this document defines how interfaces should behave, communicate, and guide users.

Every generated page, component, workflow, and interaction must comply with these principles.

These principles are mandatory.

If any UX principle conflicts with aesthetics, animations, or personal preference, the UX principle always wins.

---

# UX Philosophy

Software exists to help people complete tasks.

Users should spend their time solving business problems—not learning how to use the interface.

Every screen should reduce friction.

Every interaction should increase confidence.

Every workflow should minimize effort.

Good UX is invisible.

The best interface is one that users barely notice because everything feels obvious.

---

# Core Objectives

Every interface must optimize for:

- Clarity
- Simplicity
- Speed
- Predictability
- Consistency
- Learnability
- Accessibility
- Error Prevention
- Confidence
- Efficiency

Never optimize for visual complexity.

---

# UX-001 — Clarity Above Everything

## Objective

The purpose of every screen must be obvious within three seconds.

Users should never wonder:

- Where am I?
- What is this page for?
- What should I do next?

## Rules

- Every page must have one clear purpose.
- Every page must have a descriptive title.
- Primary content must appear before secondary content.
- Decorative elements must never compete with functional elements.
- Every important action must be visible.

## AI MUST

- Prioritize clarity over aesthetics.
- Remove unnecessary visual elements.
- Keep labels simple and descriptive.

## AI MUST NEVER

- Hide primary actions.
- Use vague labels.
- Add decorative components without purpose.

---

# UX-002 — One Primary Goal Per Screen

Every page should help users complete one primary objective.

Examples

Good

Customer Details

Goal:
Manage customer information.

Bad

Customer Details

Analytics

Reports

Calendar

Marketing

Invoices

Support

Everything mixed together.

## Rules

- One dominant workflow.
- One dominant call-to-action.
- Secondary actions must support the primary workflow.

---

# UX-003 — Reduce Cognitive Load

Users should think about their work.

Not the interface.

## Rules

- Show only necessary information.
- Group related information.
- Hide advanced options until needed.
- Break complex workflows into smaller steps.
- Remove unnecessary decisions.

## AI MUST

Ask before adding every component:

Does this help complete the primary task?

If not,

Remove it.

---

# UX-004 — Recognition Over Recall

Interfaces should help users recognize information.

Never require memory.

Examples

Good

Autocomplete

Recent searches

Recent projects

Breadcrumbs

Current filters

Bad

Remember IDs

Remember commands

Remember previous page values

---

# UX-005 — Progressive Disclosure

Complexity should appear only when necessary.

Rules

- Show essential information first.
- Hide advanced settings behind expansion panels.
- Reveal complexity gradually.
- Default experience should be beginner-friendly.

---

# UX-006 — Visual Hierarchy

Users should know what deserves attention first.

Hierarchy

1. Page Title

2. Primary Action

3. Primary Content

4. Supporting Content

5. Metadata

6. Footer

Never create competing visual focal points.

---

# UX-007 — Information Hierarchy

Information should appear in this order.

Overview

↓

Current Task

↓

Important Information

↓

Supporting Information

↓

History

↓

Metadata

Never reverse this order.

---

# UX-008 — Consistency

Users should never relearn the interface.

Everything should behave consistently.

Including:

- Buttons
- Colors
- Icons
- Terminology
- Navigation
- Dialogs
- Forms
- Tables
- Error Messages

Example

Never rename the same action.

Delete

Remove

Erase

Discard

Choose one.

Use it everywhere.

---

# UX-009 — User Control

Users should always feel in control.

Provide

- Cancel
- Back
- Undo
- Retry
- Close

Never trap users.

Always allow recovery whenever possible.

---

# UX-010 — Feedback

Every user action deserves feedback.

Loading

Saving

Success

Failure

Empty

Retry

Progress

Users should never wonder whether something happened.

---

# UX-011 — Error Prevention

Prevent mistakes instead of reporting mistakes.

Examples

Disable impossible actions.

Validate before submission (and per-field after blur — see `04` / README).

Warn before irreversible destructive actions (Alert Dialog). Prefer Undo for recoverable deletes.

Autosave drafts.

Suggest corrections.

Good UX prevents errors.

---

# UX-012 — Forgiveness

Humans make mistakes.

Software should help recover.

Examples

Undo

Restore

Version History

Draft Recovery

Confirmation Dialogs

Never punish mistakes.

---

# UX-013 — Trust

Interfaces should always explain what is happening.

Users should understand

- Why something happened.
- Why something failed.
- What changed.
- What will happen next.

Never perform destructive actions silently.

Never surprise users.

---

# UX-014 — Accessibility

Accessibility is mandatory.

Every interface must support:

- Keyboard navigation
- Screen readers
- Color blindness
- Low vision
- Motor impairments
- Reduced motion

Accessibility failures block release.

---

# UX-015 — Perceived Performance

Fast interfaces feel trustworthy.

Rules

Always prefer

- Skeleton loading
- Progressive loading
- Optimistic updates
- Lazy loading
- Background refresh

Never show blank screens while waiting.

---

# UX-016 — Decision Economy

Reduce unnecessary decisions.

Software should remember:

- Previous selections
- Recent searches
- Filters
- Sorting
- Preferred views
- Default values

Never ask users the same question repeatedly.

---

# UX-017 — Discoverability

Important functionality should be easy to discover.

Users should not need documentation to complete common tasks.

Frequently used actions should always remain visible.

Rare actions may be hidden behind menus.

---

# UX-018 — Predictability

Interfaces should behave exactly as users expect.

Buttons should look clickable.

Links should look like links.

Menus should open consistently.

Dialogs should close consistently.

Never surprise users.

---

# UX-019 — Task Efficiency

Optimize for completing tasks quickly.

Reduce:

- Clicks
- Typing
- Navigation
- Waiting
- Scrolling

Never increase interaction count without clear value.

---

# UX-020 — Simplicity

Simple interfaces outperform complicated ones.

Whenever multiple solutions exist,

Choose the simplest solution that solves the problem.

Simple does not mean fewer features.

Simple means fewer unnecessary decisions.

---

# AI Decision Rules

Before generating any screen, AI must answer:

1. What is the user's primary goal?

2. What information is required?

3. What information can be removed?

4. What information can be hidden?

5. What action should be primary?

6. Can anything be automated?

7. Can defaults be inferred?

8. Can the workflow be simplified?

If yes,

Simplify before generating the interface.

---

# AI Anti-Patterns

Never:

- Create multiple primary buttons.
- Add decorative cards without purpose.
- Mix different interaction styles.
- Use inconsistent spacing.
- Overcrowd dashboards.
- Hide important actions.
- Use placeholder text as labels.
- Depend on color alone.
- Require horizontal scrolling for normal workflows.
- Invent custom components when existing components exist.
- Create unnecessary clicks.
- Duplicate information.
- Display advanced settings by default.

---

# UX Validation Checklist

Every screen must satisfy all of the following.

## Purpose

✓ Screen purpose immediately obvious.

✓ Primary task clearly identifiable.

---

## Content

✓ Only necessary information displayed.

✓ Information grouped logically.

✓ No redundant content.

---

## Actions

✓ One primary action.

✓ Secondary actions clearly differentiated.

✓ Destructive actions separated.

---

## Navigation

✓ User knows current location.

✓ Navigation predictable.

✓ Back navigation available.

---

## Feedback

✓ Loading state.

✓ Empty state.

✓ Success state.

✓ Error state.

---

## Accessibility

✓ Keyboard accessible.

✓ Screen reader friendly.

✓ WCAG AA compliant.

✓ Touch targets large enough.

---

## Performance

✓ No unnecessary rendering.

✓ Loading feedback visible.

✓ Responsive interactions.

---

## Overall

The interface should feel:

- Obvious
- Predictable
- Trustworthy
- Fast
- Simple

If any of these qualities are missing, the design should be revised before implementation.

---

# Final Principle

The goal of UX is not to impress users.

The goal is to help users accomplish meaningful work with the least possible effort.

If removing an element improves the experience,

remove it.

---

## 03_screen_composition — Screen composition

Source: default (03_screen_composition.md)

# 03_screen_composition.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how every application screen should be structured.

The goal is to ensure every generated interface follows a predictable, consistent and user-friendly layout regardless of feature or module.

This document does **not** define colors, typography or component styling. Those are covered in the Design System.

This document defines **where things belong**.

---

# Design Philosophy

Users should never spend time figuring out where information is located.

Every page should follow familiar patterns.

Layouts should feel predictable across the entire application.

Every section must have a purpose.

Every component must support the primary workflow.

---

# Core Principles

Every screen should:

- Have one clear purpose
- Have one primary workflow
- Follow a predictable reading order
- Minimize scrolling
- Prioritize important information
- Group related information
- Maintain visual balance
- Be responsive across all devices

---

# Standard Reading Flow

Every screen should follow this hierarchy.

```

Header
↓

Page Information

↓

Primary Actions

↓

Primary Content

↓

Supporting Content

↓

Secondary Information

↓

Footer (optional)

```

Never reverse this order unless a documented pattern explicitly requires it.

---

# Standard Page Anatomy

Every application page should contain the following sections when applicable.

## 1. Global Navigation

Purpose

Provide application-wide navigation.

Examples

- Sidebar
- Top Navigation
- Workspace Switcher

Rules

- Always accessible.
- Current page clearly highlighted.
- Never hide navigation unexpectedly.

---

## 2. Page Header

Purpose

Introduce the current page.

Contains

- Page Title
- Description (optional)
- Primary Action
- Secondary Actions

Rules

- Exactly one page title.
- Exactly one primary CTA in the page header (orange `primary`).
- Nested content actions use secondary/ghost — see README Primary CTA rule.
- Keep descriptions concise.

---

## 3. Filters / Search

Only display if content can be filtered.

Contains

- Search
- Filters
- Sort
- View Options

Rules

- Place above content.
- Preserve previous selections.
- Allow quick reset.

---

## 4. Main Content

Purpose

Primary task area.

Examples

- Table
- Form
- Dashboard
- Cards
- Timeline
- Editor

Rules

- Occupies most of the viewport.
- Must remain visually dominant.
- Never compete with side content.

---

## 5. Supporting Information

Examples

- Statistics
- Related Items
- Notes
- Activity
- Comments

Rules

Support—not replace—the primary content.

---

## 6. Footer

Optional.

Only include if additional actions or legal information are required.

Never place important actions exclusively in the footer.

---

# Screen Types

Every generated screen should belong to one of the following categories.

---

# Dashboard

Purpose

Provide a high-level overview.

Structure

```

Header

↓

KPI Cards

↓

Charts

↓

Primary Workflow

↓

Recent Activity

↓

Supporting Information

```

Rules

- KPIs always appear before charts.
- Recent activity near bottom.
- Maximum six KPI cards.
- Maximum three charts.
- Never overload dashboards.

---

# List Page

Purpose

Browse multiple records.

Structure

```

Header

↓

Search

↓

Filters

↓

Bulk Actions

↓

Table / Cards

↓

Pagination

```

Rules

- Search always before filters.
- Bulk actions appear only when items are selected.
- Pagination always below content.

---

# Detail Page

Purpose

Display one entity.

Structure

```

Header

↓

Summary

↓

Primary Information

↓

Related Information

↓

History

↓

Actions

```

Rules

Keep primary information visible before supporting information.

---

# Create / Edit Page

Purpose

Create or modify data.

Structure

```

Header

↓

Instructions (optional)

↓

Grouped Form Sections

↓

Validation

↓

Primary Actions

```

Rules

Never present one long unstructured form.

Group related fields.

---

# Settings

Purpose

Configure application behavior.

Structure

```

Category Navigation

↓

Section

↓

Settings

↓

Save Bar

```

Rules

Always group settings.

Never mix unrelated settings.

---

# Wizard

Purpose

Guide users through complex tasks.

Structure

```

Progress Indicator

↓

Current Step

↓

Navigation Buttons

```

Rules

- Clearly indicate progress.
- One step at a time.
- Preserve entered information.

---

# Empty State

Purpose

Guide users when no data exists.

Contains

- Illustration/Icon
- Title
- Explanation
- Primary CTA

Rules

Always explain why the page is empty.

Always provide a recovery action.

---

# Error State

Purpose

Recover from failures.

Contains

- Error Message
- Explanation
- Retry Button

Rules

Never expose technical errors.

Always explain what users can do next.

---

# Loading State

Purpose

Communicate progress.

Rules

- Use skeletons whenever possible.
- Preserve layout during loading.
- Avoid layout shifts.

---

# Section Rules

Every page section must have:

- Clear heading
- Related content
- Consistent spacing
- Visual separation
- Logical grouping

Never create sections without purpose.

---

# Visual Balance

Content should feel balanced.

Avoid:

- Large empty spaces
- Uneven columns
- Floating buttons
- Random card sizes
- Misaligned content

---

# White Space

Whitespace improves readability.

Rules

- Separate unrelated sections.
- Avoid excessive compression.
- Avoid excessive spacing.

Whitespace should communicate structure.

---

# CTA Placement

Primary CTA

Top-right of page header.

Secondary Actions

Beside primary action.

Destructive Actions

Separated from primary actions.

Never place destructive actions beside Save.

---

# Sticky Elements

Allowed

- Navigation
- Filters
- Table Header
- Save Bar
- Wizard Navigation

Avoid excessive sticky elements.

---

# Responsive Composition

Desktop

Multiple columns allowed.

Tablet

Reduce secondary panels.

Mobile

Single-column layout.

Stack vertically.

Never require horizontal scrolling.

---

# AI MUST

- Follow the appropriate page template.
- Use consistent reading flow.
- Prioritize primary workflows.
- Group related content.
- Remove unnecessary sections.

---

# AI MUST NEVER

- Invent page layouts.
- Mix multiple screen types.
- Create multiple primary workflows.
- Scatter actions randomly.
- Create visually unbalanced layouts.

---

# Validation Checklist

Every generated screen must satisfy:

✓ One page purpose

✓ One page title

✓ One primary workflow

✓ One primary CTA

✓ Logical reading order

✓ Related information grouped

✓ Appropriate screen template used

✓ Proper empty state

✓ Proper loading state

✓ Proper error state

✓ Responsive layout

✓ Balanced spacing

✓ Consistent section hierarchy

✓ No unnecessary components

---

# Final Principle

Users should never have to learn where information is located.

If two screens perform similar jobs, they should have similar layouts.

Consistency is more valuable than creativity.

---

## 04_form_patterns — Form patterns

Source: default (04_form_patterns.md)

# 04_form_patterns.md

Version: 1.1

Part of: Aperture Design Governance

---

# Purpose

This document defines how forms should be designed, structured, validated, and generated.

Forms are the primary interaction pattern in enterprise software.

Every generated form must minimize user effort, reduce errors, and maximize completion rate.

Whenever this document conflicts with aesthetics, this document wins.

---

# Design Philosophy

Forms exist to collect information.

They should never feel like paperwork.

Users should always understand:

• What information is needed.

• Why it is needed.

• Which fields are required.

• What happens after submission.

A good form reduces effort.

A great form feels effortless.

---

# Core Principles

Every form must be

• Easy to scan

• Easy to complete

• Easy to validate

• Easy to recover

• Easy to edit

---

# Form Anatomy

Every form should follow this structure.

Header

↓

Description (optional)

↓

Section 1

↓

Section 2

↓

Section 3

↓

Review (optional)

↓

Primary Actions

---

# Form Header

Contains

• Form Title

• Short description (optional)

Rules

One title only.

Descriptions should explain purpose—not implementation.

Good

Create Customer

Bad

Customer Creation Interface

---

# Form Sections

Large forms must be divided into logical sections.

Examples

Personal Information

Contact Information

Billing Information

Emergency Contact

Employment

Preferences

Never create one long list of fields.

---

# Field Ordering

Fields should appear in the same order users naturally think.

Example

Name

↓

Email

↓

Phone

↓

Address

↓

Notes

Never ask for detailed information before basic identity.

---

# Labels

Every input requires a visible label.

Never use placeholders as labels.

Good

Email address

[text field]

Bad

[text field]

Placeholder:
Email address

---

# Required Fields

Only require information that is absolutely necessary.

Mark required fields clearly.

Avoid making every field required.

---

# Optional Fields

Optional fields should be labeled.

Example

Company (optional)

Middle name (optional)

---

# Helper Text

Use helper text only when necessary.

Explain

• Expected format

• Restrictions

• Why information is needed

Never duplicate labels.

---

# Validation

Prefer inline validation.

Validate

• Required

• Format

• Length

• Range

• Duplicate values

**Timing (canonical — matches README / `01`):**

1. Do not validate aggressively on every keystroke before the field is first blurred.
2. After the field is touched or blurred → validate that field on subsequent changes.
3. On submit → validate all fields; move focus to the first invalid control; announce errors accessibly (`aria-invalid`, `aria-describedby`, assertive live region for blocking failures).
4. On success → toast or inline confirmation.

Show helpful errors as soon as the user has finished with a field—not while they are still typing the first character.

---

# Error Messages

Good

Email address is required.

Password must contain at least 8 characters.

Bad

Invalid Input

Error 5002

---

# Input Types

Always use the correct control.

Short text

Input

Long text

Textarea

Date

Date Picker

Boolean

Switch

One choice

Radio

Many choices

Checkbox

Large searchable list

Combobox

Never substitute incorrect controls.

---

# Default Values

Pre-fill information whenever safe.

Examples

Country

Timezone

Current User

Today's Date

Remember previous choices.

---

# Grouping

Related fields belong together.

Never mix unrelated topics.

Good

Address

City

State

ZIP

Bad

Address

Phone

ZIP

Email

---

# Long Forms

If more than 15 fields

Group into sections.

If more than 30 fields

Consider multi-step wizard.

---

# Multi-step Forms

Use only when complexity requires it.

Every step should contain one logical group.

Always show progress.

Never lose entered information.

---

# Save Behaviour

Support

Auto Save (where appropriate)

Save Draft

Cancel

Reset

Warn before leaving with unsaved changes.

---

# Primary Actions

Preferred

Save

Create

Submit

Update

Secondary

Cancel

Back

Reset

Destructive actions must remain separated.

---

# Mobile Behaviour

Fields stack vertically.

Minimum touch target 44px.

Avoid side-by-side inputs unless necessary.

Keyboard should never hide focused fields.

---

# Accessibility

Every field requires

Visible Label

Keyboard Access

Focus Indicator

ARIA Labels

Error Association

Screen Reader Support

---

# AI MUST

Use the correct input type.

Group related fields.

Use inline validation.

Generate clear labels.

Generate meaningful errors.

Support keyboard navigation.

Preserve entered values.

---

# AI MUST NEVER

Create placeholder-only labels.

Create giant ungrouped forms.

Use generic error messages.

Require unnecessary information.

Reset completed forms after validation errors.

---

# Validation Checklist

✓ Visible title

✓ Logical grouping

✓ Correct input types

✓ Labels

✓ Helper text

✓ Validation

✓ Error handling

✓ Mobile friendly

✓ Accessible

✓ Clear primary action

✓ Unsaved change protection

✓ Consistent spacing

---

# Final Principle

The best form is not the one with the fewest fields.

The best form is the one that feels the easiest to complete.

---

## 05_table_patterns — Table patterns

Source: default (05_table_patterns.md)

# 05_table_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines when and how tables should be generated.

Tables display comparable records. They are not a default layout for every screen.

If this document conflicts with aesthetics, this document wins.
For visual tokens and components, follow `01_design_system.md`.
For conflict priority across all guidelines, follow `README.md`.

---

# Design Philosophy

Users scan tables to compare, find, and act on records.

Every column must earn its place.

Every interactive table feature (search, sort, filter, pagination) must match the dataset size and task—not be added by default.

---

# Choose the right control

| Need | Use |
|------|-----|
| Read-only comparable data, few rows, no sort/filter | **Table** (static) |
| Sort, filter, search, selection, or pagination | **Data Table** |
| Precise values matter more than shape | Table / Data Table over Chart |
| Card list on mobile when columns collapse poorly | Stacked rows / card list (see Responsive) |

Never use tables for page layout.

---

# Static Table (simple)

Required

- Native `<table>` semantics (`th` with scope, optional `<caption>`)
- Clear column headers
- Numbers right-aligned
- Status via badge + text (never color alone)

Optional

- Row actions as secondary/ghost icon buttons with labels

Do **not** require search, sort, filters, or pagination on small static tables (e.g. &lt; ~20 rows of reference data).

---

# Data Table (interactive)

Use when any of the following are true:

- More than ~20 rows expected
- Users need to find a specific record quickly
- Users need to compare by sorting a column
- Users need to narrow the set (filters)
- Server- or client-paginated datasets

When a Data Table is used, include the features the task needs:

| Feature | Required when |
|---------|----------------|
| Column sort | Users compare or rank by a field |
| Search | Directory/list of many named entities |
| Filters | Multiple facets (status, owner, date) |
| Pagination or virtualization | Large datasets |
| Row selection | Bulk actions exist |
| Empty state | Zero rows possible |
| Loading skeleton | Async fetch |

Automatic failure for Data Tables only:

- Unsortable columns when comparison is the primary task
- No search on large entity directories
- Pagination without totals / position when paginated
- Missing empty or loading states

---

# Column rules

- Prefer 4–7 visible columns on desktop; hide secondary columns on tablet/mobile.
- Pin identity column (name/id) when horizontal space is tight.
- Truncate long text with title/tooltip; never clip without affordance.
- Put primary row action at end (secondary button or menu); never multiple primary fills in a row.

---

# Toolbar pattern

Place above the table:

Search (if needed) → Filters → View options → Primary create action (page header preferred; table toolbar uses secondary unless this is a focused embedded task surface—see README Primary CTA rule).

Allow clear/reset of filters.

Preserve filter/sort state when returning to the page when practical.

---

# Row actions

- Single common action → icon button or text button (`ghost` / `secondary`)
- Multiple actions → Dropdown Menu
- Destructive row action → follow Destructive actions policy in README:
  - Recoverable → Undo toast
  - Irreversible → Alert Dialog

Never hide the only path to a critical action inside an unlabeled icon.

---

# Responsive behaviour

Desktop

- Full columns + toolbar

Tablet

- Hide lowest-priority columns; keep identity + status + actions

Mobile (&lt; 640px)

- Prefer stacked row cards or horizontally scrollable table with sticky first column
- Move filters into Sheet→Drawer pattern (bottom Drawer)
- Keep search reachable without horizontal scroll

Never rely on tiny unreadable multi-column grids on small screens.

---

# Accessibility

- Use real table markup for tabular data
- Sort controls expose `aria-sort`
- Select-all and row checkboxes have accessible names
- Keyboard reaches sort headers and row actions
- Announce loading and empty states

---

# Content

- Header labels: Title Case for column names that act as headings (`Status`, `Created At`)
- Cell values: sentence case for prose; preserve proper nouns and IDs
- Empty: “No [entities] yet” + recovery CTA (see `08_feedback_patterns.md`)

---

# Do

✓ Prefer Data Table only when interaction is needed  
✓ Right-align numeric columns  
✓ Pair status color with label  
✓ Provide empty + loading states for async tables  
✓ Match features to dataset size  

# Don’t

✗ Force search/sort/pagination on tiny static tables  
✗ Use layout tables  
✗ Encode status by color alone  
✗ Overflow without a mobile strategy  
✗ Put multiple primary buttons in each row  

---

# Final Principle

Tables exist to help users decide and act on records.

Add power features when the task needs them—not because tables “usually” have them.

---

## 06_dashboard_patterns — Dashboard patterns

Source: default (06_dashboard_patterns.md)

# 06_dashboard_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how dashboards should be designed and structured.

Dashboards exist to help users quickly understand the current state of a system, identify problems, monitor progress, and take action.

Dashboards are not reports.

Dashboards are not data dumps.

Every dashboard must prioritize clarity, actionability, and decision making.

---

# Design Philosophy

Users should understand the health of the system within five seconds.

The dashboard should answer:

• What is happening?

• Is everything okay?

• What needs my attention?

• What should I do next?

If a dashboard cannot answer these questions immediately, it should be redesigned.

---

# Core Principles

Every dashboard should be

- Actionable
- Focused
- Scannable
- Real-time
- Role-specific
- Minimal
- Prioritized

Never build dashboards that simply display data.

---

# Dashboard Anatomy

Every dashboard should follow this structure.

Page Header

↓

Primary KPI Summary

↓

Alerts & Important Notifications

↓

Primary Business Metrics

↓

Supporting Analytics

↓

Recent Activity

↓

Quick Actions

---

# Page Header

Contains

- Dashboard Title
- Date Range
- Filters
- Refresh Action

Optional

- Export
- Share

Rules

Keep filters close to the title.

Do not overload the header.

---

# KPI Summary

Purpose

Provide an instant overview.

Rules

Display the most important business metrics first.

Examples

Revenue

Active Users

Orders

Open Tickets

System Health

Pending Approvals

Rules

Maximum six KPI cards.

Never display more than two rows of KPIs.

Every KPI must include

Current Value

↓

Trend

↓

Comparison

↓

Status

Example

1,245 Orders

↑ 12%

Compared to last week

---

# Alerts

Critical information appears immediately after KPIs.

Examples

Payment failures

System outage

Pending approvals

Security issues

Inventory shortage

Rules

Critical alerts first.

Warnings second.

Informational messages last.

Do not mix alerts with analytics.

---

# Charts

Charts answer questions.

They do not decorate pages.

Every chart must answer one business question.

Example

Revenue by Month

Orders by Region

New Users per Week

Support Resolution Time

Bad

Random Pie Chart

Random Line Graph

No context.

---

# Chart Selection

Use

Line Chart

Trends

Bar Chart

Comparison

Stacked Bar

Composition

Area Chart

Growth

Donut

Simple proportions

Table

Detailed information

Avoid

3D Charts

Decorative Charts

Gauge Charts

Radar Charts

Unless explicitly required.

---

# Supporting Analytics

Examples

Top Customers

Top Products

Recent Sales

Conversion Funnel

Team Performance

These should support the primary KPIs.

Never compete with them.

---

# Recent Activity

Purpose

Show what happened recently.

Examples

Recent Orders

Recent Logins

Recent Tickets

Recent Payments

Rules

Newest first.

Provide quick access.

Allow navigation to details.

---

# Quick Actions

Frequently used actions should appear near the bottom or side.

Examples

Create Customer

Add User

Generate Report

Create Invoice

Approve Request

Rules

Maximum six quick actions.

Never replace navigation.

---

# Dashboard Layout

Preferred layout

Desktop

```

KPI Row

↓

Charts

↓

Tables

↓

Activity

```

Tablet

```

KPIs

↓

Charts

↓

Activity

```

Mobile

```

KPIs

↓

Alerts

↓

Charts

↓

Activity

```

---

# Visual Priority

Highest

Critical Alerts

↓

KPIs

↓

Charts

↓

Tables

↓

Activity

↓

Supporting Information

Never reverse this order.

---

# Refresh Behaviour

Support

Manual Refresh

Auto Refresh (where appropriate)

Last Updated timestamp

Loading indicators

Never refresh unexpectedly while users interact.

---

# Empty Dashboard

Display

Illustration

↓

Explanation

↓

Primary Action

↓

Helpful Resources

Never show empty widgets.

---

# Loading Dashboard

Use skeleton cards.

Preserve layout.

Load critical metrics first.

Progressively load charts.

Avoid layout shifting.

---

# Error Handling

Dashboard failures should clearly explain

What failed.

What still works.

How users can recover.

Never display technical errors.

---

# Personalization

Allow users to

Choose date ranges.

Save filters.

Remember layout preferences.

Choose density.

Pin favorite widgets.

Do not require personalization for usability.

---

# Performance

Load KPIs first.

Lazy load charts.

Cache previous results.

Load secondary widgets after primary information.

Never block the entire dashboard.

---

# Accessibility

Every chart requires

Title

Description

Keyboard access

Data summary

Accessible colors

Charts must not depend only on color.

---

# AI MUST

Prioritize business decisions.

Display KPIs before analytics.

Separate alerts from reports.

Group related widgets.

Keep dashboards focused.

Use meaningful chart types.

Support loading states.

Support empty states.

Support error states.

---

# AI MUST NEVER

Create dashboards with random widgets.

Display more than six KPI cards.

Place charts before critical alerts.

Mix unrelated business metrics.

Use decorative charts.

Duplicate information.

Display unnecessary statistics.

Overwhelm users.

---

# Validation Checklist

✓ Clear dashboard purpose

✓ Maximum six KPI cards

✓ Alerts separated

✓ Meaningful charts

✓ Recent activity visible

✓ Quick actions available

✓ Loading state

✓ Empty state

✓ Error state

✓ Responsive

✓ Accessible

✓ Fast initial loading

✓ Logical visual hierarchy

✓ Business-focused metrics

---

# Final Principle

A dashboard should help users make decisions.

If users have to search for important information, the dashboard has failed.

---

## 07_navigation_patterns — Navigation patterns

Source: default (07_navigation_patterns.md)

# 07_navigation_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how navigation should be designed throughout the application.

Navigation exists to help users move between workflows with the least possible effort.

Navigation should always feel predictable.

Users should never wonder:

- Where am I?
- Where can I go?
- How do I go back?

---

# Design Philosophy

Navigation is not decoration.

Navigation is a map.

Users should always understand their current location and available destinations.

Navigation should disappear mentally.

Users should focus on their work—not on finding pages.

---

# Core Principles

Every navigation system must be

- Predictable
- Consistent
- Discoverable
- Minimal
- Scalable
- Responsive
- Accessible

---

# Navigation Hierarchy

Every application should follow this hierarchy.

Application

↓

Module

↓

Page

↓

Section

↓

Component

Never exceed four navigation levels.

---

# Primary Navigation

Purpose

Move between major application modules.

Examples

Dashboard

Customers

Orders

Reports

Settings

Rules

- Always visible on desktop.
- Highlight current module.
- Use icons with labels.
- Sort modules by importance.
- Keep names short.

Maximum recommended items:

8

If more than eight,

group related modules.

---

# Secondary Navigation

Purpose

Navigate inside a module.

Examples

Profile

Security

Notifications

Billing

Rules

Keep navigation contextual.

Never mix unrelated sections.

---

# Breadcrumbs

Purpose

Show current location.

Structure

Home

>

Customers

>

John Smith

Rules

Show only when navigation depth exceeds one level.

Breadcrumbs should always be clickable.

Current page should not be clickable.

---

# Sidebar

Preferred for desktop applications.

Contains

- Logo
- Navigation
- Workspace Switcher
- Collapse Button
- User Profile

Rules

Support collapse.

Collapsed state shows icons.

Expanded state shows icons and labels.

Remember user preference.

---

# Top Navigation

Use for

Global search

Notifications

Help

Profile

Workspace switching

Do not place page-specific actions in global navigation.

---

# Mobile Navigation

Preferred

Bottom Navigation

or

Drawer Navigation

Maximum bottom navigation items

5

Additional pages belong in the drawer.

---

# Search

Global search should always remain accessible.

Search should locate

Pages

Users

Projects

Reports

Settings

Commands

Support keyboard shortcut.

Ctrl + K

or

⌘ + K

---

# Quick Navigation

Frequently used actions should be accessible.

Examples

Recent Pages

Favorites

Pinned Items

Recent Searches

Never require users to repeatedly navigate deep hierarchies.

---

# Navigation Labels

Labels should describe destinations.

Good

Customers

Invoices

Projects

Bad

Manage

Open

Start

Module

Keep labels noun-based whenever possible.

---

# Current Location

Users must always know where they are.

Highlight

Current module

Current page

Current tab

Current section

Never allow multiple active items.

---

# Tabs

Use tabs only for sibling content.

Good

Overview

Activity

Documents

History

Bad

Customers

Reports

Settings

Orders

Those belong in navigation.

---

# Back Navigation

Support

Browser Back

Back Button

Breadcrumbs

Cancel

Never trap users inside workflows.

---

# External Links

Always indicate when users leave the application.

Examples

Documentation

Support Portal

Company Website

Open external links in new tabs when appropriate.

---

# Icons

Icons support labels.

Icons never replace labels.

Exception

Collapsed sidebar.

---

# Notifications

Notifications belong in the global navigation.

Never interrupt workflows unless necessary.

Critical notifications should appear separately from standard notifications.

---

# Workspace Switching

For multi-tenant applications,

workspace switching should remain accessible from every page.

Switching workspaces should clearly indicate the active workspace.

---

# Responsive Navigation

Desktop

Persistent Sidebar

Tablet

Collapsed Sidebar

Mobile

Bottom Navigation

+

Drawer

Never force horizontal scrolling.

---

# Accessibility

Navigation must support

Keyboard navigation

Screen readers

Focus indicators

ARIA landmarks

Skip Navigation links

Visible active states

---

# AI MUST

Use consistent navigation across every page.

Keep navigation shallow.

Highlight current location.

Use descriptive labels.

Remember navigation preferences.

Support keyboard navigation.

---

# AI MUST NEVER

Invent different navigation systems.

Mix unrelated modules.

Hide important pages.

Use icons without labels.

Nest navigation excessively.

Create dead-end pages.

---

# Validation Checklist

✓ Current page highlighted

✓ Maximum four navigation levels

✓ Sidebar consistent

✓ Breadcrumbs where appropriate

✓ Global search available

✓ Mobile navigation supported

✓ Keyboard accessible

✓ Icons paired with labels

✓ Responsive

✓ Workspace clearly identified

✓ No dead ends

---

# HARD RULES — Product app entry & navigation (Ops4)

These rules are mandatory for generated product applications (Build Now / Cursor).

## Auth entry journey (MUST)

Default flow for web products:

Landing → Login → (Forgot password | Register) → Role home / first authenticated page

1. The application **always starts on a Landing** page (marketing/product entry), not an empty dashboard.
2. Landing CTAs navigate to **Login**. If the product has multiple roles, Landing may show per-role CTAs (e.g. “Continue as Buyer”) that still route to Login — **do not** put real username/password forms on the Landing.
3. Login **must** expose working links to **Forgot password** and **Register**.
4. After successful login, route the user to the **first page for that role** from discovery (`primary_user_role` + sitemap), typically that role’s dashboard or primary workspace.
5. Multi-role products: one Login form (optional role selector on Login is fine); credentials resolve role and destination. Never place separate password boxes per role on Landing.

## Navigation structure (MUST)

1. Provide a clear, predictable primary navigation model (top nav, sidebar, or tabs) appropriate to the product category.
2. Authenticated shells must keep navigation consistent across screens for the same role.
3. Every nav destination must resolve to a real route — no dead ends or placeholder “#” links for primary journeys.
4. Users must always know where they are (active nav item, breadcrumbs where nested).

## Design Pattern Brain / Screens (MUST)

1. When Design Pattern Brain or Screens library briefs exist for a matching screen type (especially landing, login, register, password), **apply that composition**.
2. Keep product brand tokens from the locked design system — do not clone reference branding.
3. UI must remain visually consistent across the app (same shell, density, control types, tokens).

## AI MUST NEVER (navigation)

- Start the app on a blank authenticated dashboard with no Landing/Login path.
- Ship Login without Forgot password and Register links.
- Leave primary navigation as inert chrome.
- Ignore matching Pattern Brain / Screens composition for auth/landing when briefs are present.

---

# Final Principle

Users should never think about navigation.

If users stop to figure out where to click next, the navigation has failed.

---

## 08_feedback_patterns — Feedback patterns

Source: default (08_feedback_patterns.md)

# 08_feedback_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how applications communicate with users.

Every user action should receive appropriate feedback.

Users should always know:

- What is happening.
- What has happened.
- What will happen next.
- Whether an action succeeded or failed.

Feedback should reduce uncertainty.

Never leave users guessing.

---

# Design Philosophy

Silence creates confusion.

Every interaction deserves a response.

Feedback should be:

- Immediate
- Clear
- Contextual
- Helpful
- Actionable

Never interrupt users unless absolutely necessary.

---

# Core Principles

Every interface must provide feedback for:

- Loading
- Success
- Failure
- Warning
- Progress
- Empty State
- Confirmation
- Background Processing
- Validation

---

# Feedback Hierarchy

Use the least disruptive feedback possible.

Information

↓

Success

↓

Warning

↓

Error

↓

Blocking Confirmation

Never interrupt users unnecessarily.

---

# Loading States

Users should immediately know that work is in progress.

Preferred order

1. Skeleton Loading
2. Inline Spinner
3. Progress Indicator
4. Full Page Loading (last resort)

Rules

- Preserve layout during loading.
- Never show blank pages.
- Never hide existing content while refreshing.
- Show loading immediately.

---

# Skeleton Loading

Use for

- Cards
- Tables
- Dashboards
- Lists
- Forms

Rules

Skeleton should closely resemble final layout.

Avoid flashing between loading and loaded states.

---

# Spinner

Use only for

- Small actions
- Inline loading
- Button loading

Avoid fullscreen spinners whenever possible.

---

# Progress Indicators

Use for operations longer than three seconds.

Examples

File Upload

Data Import

Report Generation

Export

Migration

Display

Current Progress

↓

Estimated Time (optional)

↓

Cancel (if possible)

---

# Success Feedback

Users should know when actions complete successfully.

Preferred methods

Toast

↓

Inline Success

↓

Success Screen

Rules

Success messages should be brief.

Example

Customer created.

Profile updated.

Invoice sent.

Avoid

Operation completed successfully.

---

# Error Feedback

Errors should help users recover.

Every error must answer

What happened?

Why?

How can I fix it?

Never expose

Stack traces

Technical IDs

Database errors

API messages

---

# Warning Feedback

Warnings communicate risk.

Examples

Unsaved changes

Low inventory

Expiring subscription

Delete confirmation

Warnings should not block users unless necessary.

---

# Empty States

Never display empty tables or blank pages.

Every empty state should include

Illustration or Icon

↓

Title

↓

Explanation

↓

Primary Action

Example

No customers yet.

Create your first customer to get started.

[Create customer]

---

# Confirmation Dialogs

Use **Alert Dialog** only for

Irreversible actions

High-impact actions that cannot be undone easily

Examples

Permanent delete / purge

Cancel subscription

Wipe data

Never confirm simple or easily reversible actions.

---

# Undo

For **recoverable** destructive actions, prefer Undo over a confirmation modal.

Examples

Soft delete

Archive

Dismiss

Flow

Action completes

↓

Toast with Undo (~10 seconds)

Do not use Undo-only for irreversible/high-impact actions — those require Alert Dialog (see README Destructive actions).

---

# Notifications

Notification types

Information

Success

Warning

Error

Rules

Keep notifications concise.

Automatically dismiss success messages.

Persistent errors require user action.

---

# Toasts

Use for

Short-lived feedback.

Examples

Saved

Copied

Updated

Sent

Rules

Maximum three visible.

Disappear automatically.

Pause on hover.

Never use toasts for irreversible or blocking critical failures (use Alert Dialog or persistent Alert).

Recoverable errors may use an assertive toast with retry when useful.

---

# Inline Feedback

Use inside forms.

Examples

Email available.

Password strength.

Invalid date.

Keep messages close to the related field.

---

# Background Processing

Long-running operations should continue in the background.

Users should be informed

Work started.

↓

Work in progress.

↓

Completed.

Allow users to continue working.

---

# Offline Feedback

Applications should detect connectivity changes.

Display

Offline

↓

Reconnecting

↓

Connected

Queue user actions when possible.

---

# Auto Save Feedback

When autosave exists,

display

Saving...

↓

Saved

↓

Last saved 2 minutes ago

Users should never wonder if data is safe.

---

# Retry

Whenever possible,

provide Retry.

Examples

Failed Upload

Network Error

Sync Failure

Never require users to restart workflows.

---

# AI MUST

Provide feedback for every user action.

Use skeleton loading.

Generate meaningful errors.

Generate meaningful success messages.

Support retry.

Support undo where possible.

Generate empty states.

Generate loading states.

---

# AI MUST NEVER

Leave users waiting silently.

Display blank pages while loading.

Expose technical errors.

Use generic messages.

Interrupt users unnecessarily.

Require page refreshes after actions.

---

# Validation Checklist

✓ Loading state exists

✓ Empty state exists

✓ Error state exists

✓ Success state exists

✓ Warning state exists

✓ Retry supported

✓ Undo supported where applicable

✓ Progress shown for long tasks

✓ Autosave feedback

✓ Background tasks communicated

✓ Notifications concise

✓ Feedback contextual

---

# HARD RULES — Functional product apps (Ops4)

Mandatory for Build Now / Cursor-generated applications.

## No dead controls (MUST)

1. Every visible interactive element must be functional: search fields, filters, tabs, menus, buttons, pagination, toggles.
2. If a control is shown, wiring it to dummy data or a mock handler is required — never leave decorative inert chrome that looks clickable.
3. Prefer removing a control over shipping a non-working one.

## Dummy data (MUST)

1. Provide local fixtures (`src/data/*.json` or equivalent) and/or a thin mock API so lists, search, and filters operate on real-shaped data.
2. Search and filter must update visible results against that data.
3. Role-specific demos may use seeded accounts documented in README (e.g. buyer@demo / seller@demo) that route to the correct home.

## Real async UX (MUST)

1. Treat the app like production: show a **loader/skeleton first**, then populate with data (even when data is local/mock).
2. Do not flash blank content that looks broken while loading.
3. Errors must be recoverable (retry) and human-readable.

## State preview FAB (MUST)

1. Include a small **rounded floating button** in a corner (prefer bottom-right), visually distinct from product chrome (label “States” or similar).
2. On press, open a menu to force the **current screen** into: **Loading · Empty · Error · Ready** (plus screen-specific states when relevant).
3. Default runtime mode is Ready (async loader → data). Forced states are for review / QA of generated UIs.
4. The FAB must not replace primary product navigation or compete with the page’s primary CTA hierarchy.

## AI MUST NEVER (functional apps)

- Ship searching/filtering UI that does nothing.
- Skip loading states on data-driven screens.
- Omit empty or error treatment for list/detail screens.
- Leave reviewers with no way to inspect non-ready states.

---

# Final Principle

Every user action should receive an immediate and meaningful response.

If users wonder whether the application is working,

the interface has failed.

---

## 09_layout_patterns — Layout patterns

Source: default (09_layout_patterns.md)

# 09_layout_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how content should be arranged across every page of the application.

Good layouts reduce cognitive load, improve readability, and make applications feel professional.

Every generated interface must follow these layout standards.

This document defines **where components should be placed**, **how much space they require**, and **how content should flow**.

---

# Design Philosophy

Layout is communication.

Users should understand page structure before reading any content.

Good layouts create rhythm.

Good layouts create balance.

Good layouts naturally guide attention.

Users should never feel lost because of poor positioning.

---

# Core Principles

Every layout must be

- Predictable
- Balanced
- Consistent
- Responsive
- Spacious
- Readable
- Purposeful

---

# Layout Hierarchy

Every page follows this order.

Application Shell

↓

Navigation

↓

Page Header

↓

Page Content

↓

Supporting Content

↓

Footer (Optional)

Never change this hierarchy without good reason.

---

# Page Width

Use consistent maximum content widths.

Recommended

Small Content

640px

Forms

768px

Standard Pages

1280px

Analytics

1440px

Never stretch content across the entire monitor.

Large screens should improve readability—not increase line length.

---

# Grid System

Use a 12-column grid.

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

All layouts should align to the grid.

Never position components arbitrarily.

---

# Containers

Every page should use containers.

Container responsibilities

- Alignment
- Padding
- Responsive resizing
- Visual consistency

Never place content directly against browser edges.

---

# Page Padding

Desktop

32px

Tablet

24px

Mobile

16px

Maintain consistent page padding.

---

# Section Spacing

Separate sections using the 4px spacing rail from `01_design_system.md`.

Recommended (token-mapped)

Section to Section

48px (`space-12`)

Section Heading to Content

24px (`space-6`)

Cards inside section

24px (`space-6`)

Related Components

16px (`space-4`)

Small Controls

8px (`space-2`)

Desktop page padding

32px (`space-8`)

Never invent spacing values outside the rail.

---

# Alignment

Align everything to the same vertical grid.

Examples

Good

Titles

↓

Cards

↓

Buttons

↓

Tables

All share the same left edge.

Bad

Floating cards.

Random margins.

Misaligned buttons.

Uneven columns.

---

# Reading Direction

Users naturally scan

Desktop

Top Left

↓

Top Right

↓

Middle

↓

Bottom

Mobile

Top

↓

Bottom

Place important information accordingly.

---

# White Space

Whitespace is intentional.

Whitespace separates meaning.

Do not fill empty areas simply because space exists.

Never sacrifice readability to reduce whitespace.

---

# Visual Balance

Every screen should feel balanced.

Avoid

Large empty regions

↓

Crowded regions

↓

Uneven component sizes

↓

Misaligned sections

Balance is more important than symmetry.

---

# Cards

Cards should group related information.

Use cards only when they create meaning.

Do not wrap everything in cards.

Avoid nested cards.

Maximum nesting

2 Levels

---

# Columns

Multiple columns should only exist when they improve readability.

Examples

Dashboard

2–4 columns

Form

1–2 columns

Settings

1–2 columns

Detail Page

2 columns

Mobile

1 column

Never create narrow unreadable columns.

---

# Sidebar Width

Expanded

280px

Collapsed

72px

Never resize sidebar unpredictably.

---

# Content Density

Support three density modes.

Comfortable

Default

Compact

Remember user preference.

Do not mix densities on the same page.

---

# Section Headers

Every major section requires

Title

Optional Description

Optional Action

Never place unrelated actions inside section headers.

---

# Dividers

Use dividers sparingly.

Prefer whitespace before borders.

Borders should reinforce structure—not replace spacing.

---

# Sticky Layouts

Allowed

Navigation

Table Header

Filter Bar

Save Bar

Wizard Footer

Avoid excessive sticky regions.

---

# Modals

Small

Confirmation

Medium

Standard Forms

Large

Complex Forms

Extra Large

Advanced Workflows

Never use fullscreen modals on desktop unless the task truly requires it.

On mobile (&lt; 640px), dialogs may go fullscreen for usability (see `10_responsive_patterns.md`).

---

# Sheets & Drawers

Use the Sheet / Drawer pattern for

Filters

Secondary editing

Quick details

**Breakpoint rule (canonical):**

- **≥ 640px** → shadcn **Sheet** (edge panel; “right drawer” means Sheet)
- **&lt; 640px** → shadcn **Drawer** (bottom)

Avoid placing entire multi-step workflows inside sheets or drawers.

---

# Master-Detail Layout

Preferred

List

↓

Details

Desktop

Side-by-side

Tablet

Adjustable

Mobile

Navigate between screens

---

# Dashboard Layout

Preferred order

KPIs

↓

Alerts

↓

Charts

↓

Tables

↓

Activity

↓

Quick Actions

Never reverse importance.

---

# Form Layout

Preferred

One column

↓

Grouped Sections

↓

Actions

Use two columns only when fields are naturally related.

---

# Table Layout

Toolbar

↓

Filters

↓

Table

↓

Pagination

↓

Bulk Actions

Bulk actions appear only after selection.

---

# Detail Layout

Header

↓

Summary

↓

Primary Information

↓

Related Information

↓

History

↓

Actions

---

# Responsive Layout

Desktop

Multiple columns.

Tablet

Reduce secondary panels.

Mobile

Single column.

Stack vertically.

No horizontal scrolling.

---

# Accessibility

Layouts must support

200% Zoom

Keyboard Navigation

Screen Readers

Reduced Motion

Large Text

No layout should break under accessibility settings.

---

# Performance

Avoid rendering hidden content.

Lazy load secondary panels.

Load above-the-fold content first.

Prevent layout shifts.

---

# AI MUST

Use the 12-column grid.

Maintain consistent spacing.

Align components.

Keep layouts balanced.

Use whitespace intentionally.

Group related information.

Optimize for readability.

Support all breakpoints.

---

# AI MUST NEVER

Create floating components.

Invent spacing values.

Stretch content edge-to-edge.

Nest unnecessary cards.

Mix layout patterns.

Create inconsistent alignments.

Depend on absolute positioning.

Create visually unbalanced pages.

---

# Validation Checklist

✓ Uses standard grid

✓ Consistent page padding

✓ Proper section spacing

✓ Balanced layout

✓ Logical reading flow

✓ Appropriate column usage

✓ Responsive

✓ Accessible

✓ Proper whitespace

✓ Components aligned

✓ No unnecessary cards

✓ No layout shifts

---

# Final Principle

Layout should disappear.

Users should notice the information—not the arrangement.

If the layout distracts users from completing their work, it has failed.

---

## 10_responsive_patterns — Responsive patterns

Source: default (10_responsive_patterns.md)

# 10_responsive_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how every interface must adapt across different screen sizes and devices.

Responsive design is not about shrinking a desktop interface.

Responsive design is about delivering the best possible experience for every device.

Every generated interface must work equally well on desktop, laptop, tablet, and mobile.

---

# Design Philosophy

Content is constant.

Presentation changes.

The user's task remains the same regardless of screen size.

Layouts should adapt.

Workflows should not.

Never remove critical functionality simply because the screen becomes smaller.

---

# Supported Breakpoints

Small Mobile

320px – 479px

Mobile

480px – 639px

Tablet

640px – 1023px

Laptop

1024px – 1439px

Desktop

1440px+

Every generated interface must support every breakpoint.

---

# Core Principles

Every responsive layout must be

- Readable
- Touch Friendly
- Consistent
- Accessible
- Efficient

Never create a mobile version with fewer capabilities unless technically necessary.

---

# Responsive Priority

When screen space decreases, preserve information in this order.

Primary Task

↓

Primary Actions

↓

Primary Content

↓

Supporting Content

↓

Secondary Information

↓

Decorative Elements

Decorative elements disappear first.

Never remove primary workflows.

---

# Navigation

Desktop

Persistent Sidebar

Tablet

Collapsible Sidebar

Mobile

Bottom Navigation

+

Drawer

Rules

Desktop navigation should never appear on mobile unchanged.

---

# Page Width

Desktop

Centered Container

Tablet

Fluid Container

Mobile

Full Width

Always maintain consistent page padding.

---

# Columns

Desktop

2–4 Columns

Tablet

1–2 Columns

Mobile

Single Column

Never create narrow unreadable columns.

---

# Cards

Desktop

Grid Layout

Tablet

2 Columns

Mobile

Single Column

Cards should expand vertically instead of shrinking horizontally.

---

# Forms

Desktop

Two-column layout where appropriate.

Tablet

Reduce to one or two columns.

Mobile

Single column only.

Never place multiple unrelated inputs on the same row on mobile.

---

# Tables

Desktop

Full Table

Tablet

Hide low-priority columns

Mobile

Convert to cards

or

Horizontal scroll only when absolutely necessary.

Never require horizontal scrolling for standard CRUD workflows.

---

# Dashboard

Desktop

KPIs

↓

Charts

↓

Tables

↓

Activity

Tablet

KPIs

↓

Charts

↓

Activity

Mobile

KPIs

↓

Alerts

↓

Charts

↓

Activity

↓

Actions

---

# Sidebar

Desktop

Expanded

Tablet

Collapsed

Mobile

Drawer

Remember previous state on larger devices.

---

# Dialogs

Desktop

Centered Modal

Tablet

Large Modal

Mobile

Fullscreen Dialog

Avoid tiny dialogs on mobile.

---

# Drawers / Sheets

Canonical overlay pattern for secondary panels (filters, details, quick edit):

Desktop / Tablet (≥ 640px)

**Sheet** (edge panel). Older docs may say “Right Drawer” — that means Sheet.

Mobile (&lt; 640px)

**Drawer** (bottom)

Never put full multi-step workflows in Sheet/Drawer.

---

# Buttons

Desktop

Standard Size

Mobile

Minimum Height

44px

Minimum Width

44px

Buttons should stretch full width only when it improves usability.

---

# Touch Targets

Minimum

44 × 44 px

Recommended

48 × 48 px

Never place interactive controls too close together.

---

# Typography

Never reduce body text below

16px

Headings may scale.

Body text should remain readable.

---

# Images

Scale proportionally.

Never crop important content.

Lazy load large images.

---

# Charts

Desktop

Full Charts

Tablet

Simplified Legends

Mobile

Prioritize readability over detail.

Provide table alternative when needed.

---

# Search

Desktop

Full Search Bar

Mobile

Expandable Search

Search should remain available on every device.

---

# Filters

Desktop

Sidebar or toolbar

Tablet / Desktop secondary panel (≥ 640px)

**Sheet**

Mobile (&lt; 640px)

**Drawer** (bottom)

Never permanently hide filters.

---

# Sticky Elements

Desktop

Allowed

Mobile

Use sparingly.

Too many sticky regions reduce usable space.

---

# Keyboard

When the mobile keyboard opens,

Focused fields must remain visible.

Never hide primary actions behind the keyboard.

---

# Orientation

Portrait

Default

Landscape

Improve content density

Do not require landscape mode.

---

# Performance

Load only visible content.

Lazy load secondary sections.

Optimize images.

Avoid unnecessary animations.

Reduce network requests on mobile.

---

# Accessibility

Support

Zoom

Screen Readers

Keyboard Navigation

Voice Control

Reduced Motion

High Contrast

Responsive layouts must remain accessible.

---

# AI MUST

Generate layouts for every breakpoint.

Maintain one primary workflow.

Stack content logically.

Prioritize readability.

Convert layouts—not simply resize them.

Use touch-friendly controls.

Optimize performance.

---

# AI MUST NEVER

Scale desktop layouts directly.

Hide critical functionality.

Create unreadable tables.

Reduce touch targets.

Break navigation.

Require horizontal scrolling unnecessarily.

Reduce accessibility on mobile.

---

# Validation Checklist

✓ Desktop supported

✓ Laptop supported

✓ Tablet supported

✓ Mobile supported

✓ Navigation adapts

✓ Forms adapt

✓ Tables adapt

✓ Dashboards adapt

✓ Touch targets ≥44px

✓ Body text ≥16px for primary reading (14px metadata / 13px labels OK)

✓ No unnecessary horizontal scrolling

✓ Performance optimized

✓ Accessibility preserved

---

# Final Principle

Responsive design is adaptation—not reduction.

Users should feel that the application was designed specifically for the device they are using.

---

## 11_accessibility_rules — Accessibility rules

Source: default (11_accessibility_rules.md)

# 11_accessibility_rules.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines the accessibility standards that every generated interface must follow.

Accessibility is not a feature.

Accessibility is a minimum quality requirement.

Every user, regardless of ability, should be able to successfully complete every supported workflow.

All generated interfaces must meet WCAG 2.1 AA standards at minimum.

---

# Design Philosophy

Accessible software is better software.

Accessibility improves usability for everyone.

Interfaces should never assume users:

- Can see perfectly
- Can hear perfectly
- Can use a mouse
- Can distinguish colors
- Can use a touchscreen precisely
- Can process information quickly

Design for everyone.

---

# Core Principles

Every interface must be

- Perceivable
- Operable
- Understandable
- Robust

Accessibility is mandatory.

Accessibility issues block release.

---

# Keyboard Navigation

Every feature must be usable without a mouse.

Users must be able to

- Navigate
- Select
- Submit
- Close dialogs
- Open menus
- Switch tabs
- Complete forms

using only the keyboard.

---

# Focus Management

Keyboard focus must always be visible.

Rules

- Never remove focus outlines.
- Focus order must match visual order.
- Focus should never become trapped.
- Focus returns to the triggering element when dialogs close.

Every interactive component requires a visible focus state.

---

# Focus Order

Focus should move logically.

Preferred order

Header

↓

Navigation

↓

Primary Content

↓

Secondary Content

↓

Footer

Never create random focus jumps.

---

# Skip Navigation

Every application should provide

Skip to Content

at the beginning of the page.

Keyboard users should bypass repeated navigation quickly.

---

# Touch Targets

Minimum size

44 × 44 px

Recommended

48 × 48 px

Interactive elements should never overlap.

Spacing between touch targets should prevent accidental taps.

---

# Color Contrast

All text must satisfy WCAG AA.

Minimum contrast

Normal Text

4.5 : 1

Large Text

3 : 1

Icons

3 : 1

Never reduce contrast for aesthetic purposes.

---

# Color Usage

Never communicate meaning using color alone.

Every status should include

Color

+

Icon

+

Text

Good

✓ Success

Bad

Green text only

---

# Typography

Minimum **primary reading** body text

16px

Secondary metadata may use 14px (`body-small`). Form labels/control text may use 13px (`label`) per `01_design_system.md`.

Maintain comfortable line height.

Avoid decorative fonts.

Never justify paragraphs.

Keep line lengths readable.

---

# Images

Every meaningful image requires alternative text.

Decorative images

aria-hidden

or

empty alt text.

Never use images to display important text.

---

# Icons

Decorative icons

aria-hidden="true"

Action icons

Accessible label required.

Icons should support text.

Icons should not replace text.

---

# Links

Links should clearly describe their destination.

Good

Download Invoice

Bad

Click Here

Never rely on surrounding context.

---

# Buttons

Every button should describe its action.

Good

Save Changes

Delete User

Generate Report

Bad

OK

Yes

Continue

---

# Forms

Every input requires

Visible Label

Associated Label

Helper Text (when needed)

Error Message

Accessible Description

Never use placeholders as labels.

---

# Form Validation

Errors should

- Identify the field.
- Explain the problem.
- Explain how to fix it.

Follow validation timing in `04_form_patterns.md` / README (blur-after-touch, then submit-all).

Focus should move to the first invalid field after a failed submission.

---

# Error Messages

Error messages should be announced to screen readers.

Never rely on color.

Good

Email address is required.

Bad

Red border only.

---

# Tables

Tables require

Column Headers

Row Headers (when appropriate)

Scope attributes

Captions (when helpful)

Screen readers must understand relationships.

---

# Charts

Charts require

Title

Summary

Alternative data table

Never rely only on visual interpretation.

---

# Dialogs

Dialogs must

Trap keyboard focus.

Close using Escape.

Return focus to the triggering element.

Announce themselves properly.

---

# Notifications

Important notifications should be announced.

Use

aria-live

Appropriate urgency

Success

Polite

Errors

Assertive

---

# Motion

Respect

prefers-reduced-motion

Disable

Large animations

Parallax

Continuous motion

Flashing effects

Never trigger seizures or discomfort.

---

# Timing

Users should have enough time.

Never automatically log users out without warning.

Allow users to extend timeouts whenever possible.

---

# Language

Every page must define its language.

Example

lang="en"

Changes in language should also be identified.

---

# Reading Order

Screen readers should encounter content in the same order that visual users do.

Never create different logical and visual hierarchies.

---

# Zoom

Every page must remain usable at

200%

Zoom

without loss of functionality.

No horizontal scrolling should occur for normal content.

---

# Responsive Accessibility

Accessibility requirements remain identical on

Desktop

Tablet

Mobile

Never reduce accessibility because of screen size.

---

# Performance

Accessibility should not significantly reduce application performance.

Optimize

ARIA usage

Screen reader announcements

Keyboard interactions

Avoid excessive live regions.

---

# AI MUST

Generate semantic HTML.

Generate accessible labels.

Generate keyboard support.

Generate visible focus states.

Generate meaningful alt text.

Generate accessible error messages.

Support screen readers.

Maintain sufficient color contrast.

Support reduced motion.

Support zoom.

---

# AI MUST NEVER

Remove focus indicators.

Depend only on color.

Generate inaccessible forms.

Use placeholder-only labels.

Use generic button labels.

Hide content from assistive technology unnecessarily.

Ignore keyboard navigation.

Generate inaccessible custom components.

---

# Validation Checklist

✓ Keyboard accessible

✓ Visible focus indicators

✓ Proper tab order

✓ Skip navigation available

✓ Touch targets ≥44px

✓ WCAG AA contrast

✓ Images have alt text

✓ Buttons have meaningful labels

✓ Inputs have associated labels

✓ Errors announced

✓ Dialogs trap focus

✓ Reduced motion supported

✓ Zoom to 200% supported

✓ Screen reader compatible

✓ No accessibility blockers

---

# Accessibility Blockers

The following issues automatically fail accessibility validation.

✗ Missing form labels

✗ Missing keyboard navigation

✗ Invisible keyboard focus

✗ Insufficient color contrast

✗ Color-only status indicators

✗ Missing alternative text

✗ Inaccessible dialogs

✗ Broken tab order

✗ Keyboard traps

✗ Unreachable interactive elements

Accessibility blockers must be fixed before release.

---

# Final Principle

Accessibility is not about accommodating a minority of users.

Accessibility is about ensuring every user can successfully complete every task with confidence and independence.

---

## 12_content_guidelines — Content guidelines

Source: default (12_content_guidelines.md)

# 12_content_guidelines.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how every piece of text inside the application should be written.

Good content reduces confusion.

Good content reduces support requests.

Good content builds trust.

Every word should help users complete their task.

---

# Design Philosophy

Interfaces should speak like a knowledgeable colleague.

Not like a machine.

Not like a legal document.

Not like a developer.

Writing should always be

- Clear
- Short
- Friendly
- Professional
- Action-oriented

---

# Core Principles

Every piece of content must be

- Easy to understand
- Easy to scan
- Consistent
- Helpful
- Human

---

# Tone of Voice

The application should sound

Professional

Helpful

Confident

Respectful

Calm

Never sound

Robotic

Passive aggressive

Sarcastic

Overly technical

Marketing focused

---

# Writing Style

Prefer

Short sentences.

Active voice.

Simple words.

Common vocabulary.

Avoid

Long paragraphs.

Buzzwords.

Technical jargon.

Complex grammar.

---

# Page Titles

Titles should describe the page.

Good

Customers

Orders

Reports

Account Settings

Bad

Customer Management Interface

Report Administration Portal

---

# Page Descriptions

Only include descriptions when they add value.

Good

Manage your customer information and activity.

Bad

This page allows users to manage customer information within the system.

---

# Button Labels

Buttons describe actions.

Always begin with a verb.

Good

Save Changes

Create Customer

Generate Report

Approve Request

Invite Member

Bad

OK

Go

Continue

Click Here

Yes

---

# Navigation Labels

Navigation describes destinations.

Use nouns.

Good

Customers

Invoices

Projects

Reports

Bad

Manage

Go

Open

View

---

# Form Labels

Labels describe information. Use **sentence case** (see `01` casing matrix).

Good

Email address

Phone number

Billing address

Bad

Email

Input

Information

(Do not Title Case form labels. Page titles and nav use Title Case.)

---

# Placeholder Text

Placeholder text provides examples.

Never replace labels.

Good

example@email.com

Bad

Enter your email address here

---

# Helper Text

Use helper text only when necessary.

Explain

Accepted format

Restrictions

Why information is required

Keep helper text short.

---

# Required Fields

Mark only truly required fields.

Example

Email address *

Optional fields should say

(optional)

Never make every field required.

---

# Empty States

Every empty state should include

Title

Explanation

Action

Good

No invoices yet.

Create your first invoice to get started.

[Create Invoice]

Bad

No Data

---

# Success Messages

Keep success messages short.

Good

Customer created.

Profile updated.

Changes saved.

Bad

The operation completed successfully.

---

# Error Messages

Explain

What happened.

How to fix it.

Good

Password must contain at least 8 characters.

Bad

Validation Error.

---

# Warning Messages

Warn users before risky actions.

Good

Deleting this customer cannot be undone.

Bad

Warning!

---

# Confirmation Dialogs

Title

Action

Consequence

Primary Action

Cancel

Example

Delete Customer

This action cannot be undone.

Delete

Cancel

---

# Notifications

Keep notifications concise.

Good

Invoice sent.

Bad

Your invoice has been successfully processed and delivered.

---

# Search

Search placeholders should explain what can be searched.

Good

Search customers...

Search invoices...

Bad

Search...

---

# Filters

Labels should be obvious.

Good

Status

Department

Date Range

Bad

Options

Category

---

# Dates

Use consistent formats.

Prefer

12 Jul 2026

or

Jul 12, 2026

Never mix formats.

---

# Numbers

Use thousands separators.

Good

12,450

Bad

12450

Display currency appropriately.

Example

$12,450.00

---

# Time

Display relative time when useful.

Examples

5 minutes ago

Yesterday

Today

Display exact timestamps when precision matters.

---

# Tables

Column names should be short.

Good

Customer

Status

Amount

Created

Bad

Customer Full Name Information

---

# Tooltips

Explain

Why

Not

What

Good

Only administrators can edit this setting.

Bad

Admin Button

---

# Links

Link text should describe the destination.

Good

View Customer Details

Bad

Click Here

---

# Loading Text

Good

Loading customers...

Saving changes...

Generating report...

Bad

Loading...

---

# Login

Be welcoming.

Good

Welcome back.

Sign in to continue.

Bad

Authentication Required

---

# Logout

Good

You have signed out successfully.

Bad

Session terminated.

---

# Permissions

Explain why users cannot perform an action.

Good

Only administrators can delete projects.

Bad

Permission denied.

---

# Validation Messages

Explain exactly what needs to change.

Good

Phone number must contain 10 digits.

Bad

Invalid value.

---

# AI Writing Rules

AI MUST

Follow the capitalization matrix in `01_design_system.md` / README:

- Actions, form labels, toasts → sentence case (`Save changes`, `Email address`)
- Page titles, section headers, nav → Title Case (`Account Settings`)

Use active voice.

Keep sentences under 20 words when possible.

Write at approximately Grade 8 reading level.

Prefer verbs for actions.

Prefer nouns for navigation.

Be concise.

---

# AI MUST NEVER

Use technical jargon.

Write robotic messages.

Use exclamation marks excessively.

Use ALL CAPS.

Blame the user.

Use vague wording.

Duplicate information.

Write paragraphs longer than four lines inside the interface.

---

# Validation Checklist

✓ Sentence case for actions, labels, toasts

✓ Title Case for page titles and navigation

✓ Active voice

✓ Clear actions

✓ Short labels

✓ Helpful errors

✓ Helpful empty states

✓ Helpful success messages

✓ Consistent terminology

✓ Professional tone

✓ Human language

✓ Accessible reading level

---

# Final Principle

Users should never stop to understand the wording.

Good interface copy disappears into the experience.

If users notice the writing, it should be because it helped them—not because it confused them.

---

## 13_interaction_patterns — Interaction patterns

Source: default (13_interaction_patterns.md)

# 13_interaction_patterns.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines how users interact with every component in the application.

Interactions should feel predictable, responsive, and effortless.

Every interaction should provide immediate feedback and reinforce user confidence.

Users should never wonder whether an interaction worked.

---

# Design Philosophy

Interfaces should feel alive.

Every interaction should have a clear beginning, response, and completion.

Interactions should reduce effort—not increase it.

Animations exist to explain changes, not decorate the interface.

---

# Core Principles

Every interaction should be

- Predictable
- Responsive
- Consistent
- Accessible
- Forgiving
- Fast

---

# Interaction Lifecycle

Every interaction follows this sequence.

User Action

↓

Immediate Feedback

↓

Processing

↓

Completion

↓

Next Available Action

Never skip any stage.

---

# Click Interactions

Buttons should immediately indicate interaction.

Rules

- Show hover state.
- Show pressed state.
- Show loading when processing.
- Disable repeated submissions while processing.
- Restore normal state after completion.

Never leave buttons unchanged after clicking.

---

# Hover States

Use hover only to indicate interactivity.

Examples

- Buttons
- Links
- Cards
- Table Rows
- Menu Items

Never hide critical information behind hover.

Hover effects should never be required on touch devices.

---

# Focus States

Keyboard focus must always be visible.

Every interactive element requires a focus state.

Focus styling should be consistent across the application.

Never remove focus indicators.

---

# Active States

Selected items must remain visually distinct.

Examples

- Active Navigation
- Selected Card
- Selected Row
- Active Tab
- Selected Filter

Users should always know what is selected.

---

# Disabled States

Disabled controls must clearly communicate they are unavailable.

Rules

- Reduce emphasis.
- Maintain readability.
- Explain why when appropriate.

Never disable controls without explanation if the reason is not obvious.

---

# Loading Interactions

During processing

- Disable duplicate actions.
- Display progress.
- Preserve layout.
- Keep users informed.

Never freeze the interface.

---

# Optimistic Updates

Use optimistic updates when operations are highly likely to succeed.

Examples

- Like
- Favorite
- Archive
- Mark Complete

If an operation fails

Restore previous state

Display explanation

Offer retry

---

# Inline Editing

Allow inline editing only for simple changes.

Examples

- Name
- Status
- Tags

Complex editing should open a dedicated form.

Always support

Save

Cancel

Keyboard shortcuts

---

# Selection

Selection should always be visible.

Support

Single Selection

Multi Selection

Range Selection (Shift)

Select All

Never lose selections unexpectedly.

---

# Drag and Drop

Use only when it significantly improves productivity.

Examples

- Kanban Boards
- File Upload
- Reordering Lists

Always provide

Visual placeholder

Drop indicator

Success feedback

Alternative keyboard interaction

---

# Context Menus

Use for secondary actions.

Never hide primary actions inside context menus.

Keep menus concise.

Group related actions.

Separate destructive actions.

---

# Keyboard Shortcuts

Support shortcuts for frequently used actions.

Examples

Ctrl/Cmd + K

Search

Ctrl/Cmd + S

Save

Esc

Close

Enter

Submit

Delete

Delete Selected

Display shortcuts where appropriate.

---

# Undo

For **recoverable** actions (soft delete, archive, dismiss):

Prefer Undo over a confirmation modal.

Good

Delete customer

↓

Undo available for 10 seconds

For **irreversible / high-impact** actions (permanent delete, purge, cancel subscription):

Require **Alert Dialog**. Cancel is the safe default focus. Never toast-only.

---

# Confirmations

Require confirmation (Alert Dialog) only for

Irreversible

High-risk / high-impact

actions.

Do not confirm recoverable soft deletes when Undo is available.

Avoid confirmation fatigue.

---

# Auto Save

Where appropriate

Save automatically.

Communicate status.

Saving...

↓

Saved

Never make users wonder whether work has been lost.

---

# Refresh

Refreshing should preserve

Scroll position

Selection

Filters

Sorting

Expanded sections

Avoid resetting user context.

---

# Search Interaction

Search should

Respond immediately.

Debounce requests.

Highlight matches.

Remember recent searches.

Never require explicit search buttons unless necessary.

---

# Filter Interaction

Changing filters should

Update results quickly.

Display active filters.

Support clearing filters.

Remember preferences.

---

# Pagination

Users should remain oriented.

Preserve

Sorting

Filters

Search

Selection where possible

---

# Notifications

Do not interrupt users unnecessarily.

Success

Toast

Error

Persistent

Critical

Modal only if required

Choose the least disruptive feedback possible.

---

# Animations

Animations should explain

Movement

Expansion

Loading

State changes

Never animate for decoration.

Duration

Interactive transitions: 150–200ms

Overlay enter/exit: up to 300ms allowed

Continuous indicators (spinner, skeleton shimmer): exempt; honor prefers-reduced-motion

---

# Accessibility

Every interaction must support

Keyboard

Screen Readers

Reduced Motion

Touch

Mouse

No interaction should depend on only one input method.

---

# Performance

Interactions should feel immediate.

Target

Visual Response

<100ms

Loading Feedback

<200ms

Long Operations

Progress Indicator

Never leave users without feedback.

---

# AI MUST

Generate hover states.

Generate focus states.

Generate active states.

Generate loading states.

Generate disabled states.

Support keyboard interaction.

Support touch interaction.

Generate meaningful animations.

Support undo where possible.

Support retry where appropriate.

---

# AI MUST NEVER

Hide primary actions.

Require hover to reveal critical functionality.

Create inconsistent interaction patterns.

Remove keyboard accessibility.

Use excessive animations.

Interrupt users unnecessarily.

Reset user context unexpectedly.

Ignore loading states.

---

# Validation Checklist

✓ Hover states

✓ Focus states

✓ Active states

✓ Disabled states

✓ Loading states

✓ Success feedback

✓ Error feedback

✓ Keyboard support

✓ Touch support

✓ Accessible interactions

✓ Animation duration appropriate

✓ Context preserved

✓ Undo where applicable

✓ Retry where applicable

---

# Final Principle

Users should feel confident interacting with the interface.

Every interaction should be predictable, immediate, and reassuring.

If users hesitate before clicking, the interaction design has failed.

---

## 14_ai_validation_rules — AI validation rules

Source: default (14_ai_validation_rules.md)

# 14_ai_validation_rules.md

Version: 1.1
Part of: Aperture Design Governance

---

# Purpose

This document defines the mandatory validation process that every AI-generated interface must pass before it is considered complete.

Generating an interface is only the first step.

Every generated screen must validate itself, identify problems, automatically fix problems where possible, and only then present the final result.

Never consider the first generated UI to be the final UI.

Generation → Validation → Improvement is mandatory.

Validation criteria must follow the reconciled rules in `README.md` and must not invent policies that contradict higher-priority docs (`11` → `01` → domain patterns → …).

---

# AI Design Review Process

Every generated screen follows this workflow.

Requirements

↓

Generate Initial UI

↓

Run Validation

↓

Identify Issues

↓

Fix Issues

↓

Run Validation Again

↓

Repeat Until Score ≥ 95

↓

Return Final UI

---

# Validation Categories

Every screen must be evaluated in the following areas.

1. UX

2. Layout

3. Visual Design

4. Accessibility

5. Content

6. Interaction

7. Responsive Design

8. Performance

9. Technical Quality

No category may fail.

---

# UX Validation

Validate

✓ Purpose obvious

✓ Primary workflow obvious

✓ One primary CTA in page header (no stacked primaries in viewport)

✓ Logical information hierarchy

✓ Low cognitive load

✓ Related information grouped

✓ Navigation predictable

✓ Error prevention exists

✓ Recovery exists

Automatic Failure

✗ Multiple primary workflows

✗ Multiple orange primary buttons in the same viewport

✗ Confusing layout

✗ Missing primary action

---

# Layout Validation

Validate

✓ Proper spacing

✓ Consistent alignment

✓ Grid respected

✓ Balanced layout

✓ No floating elements

✓ Proper section spacing

Automatic Failure

✗ Misaligned content

✗ Random spacing

✗ Broken layout

---

# Design Validation

Validate

✓ Design System followed

✓ Correct typography

✓ Proper colors

✓ Proper icons

✓ Proper shadows

✓ Proper radius

✓ Proper elevation

Automatic Failure

✗ Custom colors

✗ Inconsistent typography

✗ Mixed component styles

---

# Component Validation

Validate

✓ Correct component used

✓ Proper component hierarchy

✓ Existing component reused

✓ Proper variants used

Automatic Failure

✗ Reinventing components

✗ Incorrect controls

---

# Content Validation

Validate

✓ Good page title

✓ Clear labels

✓ Helpful helper text

✓ Meaningful buttons

✓ Good error messages

✓ Professional wording

Automatic Failure

✗ Placeholder labels

✗ Generic errors

✗ Technical jargon

---

# Form Validation

Validate

✓ Labels

✓ Validation

✓ Required fields

✓ Helper text

✓ Logical grouping

✓ Correct input types

Automatic Failure

✗ Placeholder-only labels

✗ Giant forms

✗ Missing validation

---

# Table Validation

Follow `05_table_patterns.md`.

For **static Table** (small read-only sets):

✓ Semantic headers

✓ Status with text (not color alone)

✓ Numbers right-aligned when numeric

Do **not** fail static tables for missing search/sort/pagination.

For **Data Table** (when task needs interaction / large sets):

✓ Search when browsing many named entities

✓ Sorting when comparison is required

✓ Filters when facets exist

✓ Pagination or virtualization for large datasets

✓ Empty / loading / error states for async data

Automatic Failure (Data Table only)

✗ Unsortable columns when comparison is the primary task

✗ No search on large entity directories

✗ Missing empty or loading states for async tables

---

# Dashboard Validation

Validate

✓ KPIs

✓ Alerts

✓ Charts

✓ Activity

✓ Quick Actions

✓ Proper hierarchy

Automatic Failure

✗ Too many widgets

✗ Decorative charts

✗ No business focus

---

# Navigation Validation

Validate

✓ Current location

✓ Breadcrumbs

✓ Search

✓ Responsive navigation

✓ Logical hierarchy

Automatic Failure

✗ Dead ends

✗ Hidden navigation

✗ Deep nesting

---

# Interaction Validation

Validate

✓ Hover

✓ Focus

✓ Active

✓ Loading

✓ Disabled

✓ Success

✓ Error

✓ Retry

✓ Undo

Automatic Failure

✗ No loading

✗ No focus

✗ Missing feedback

---

# Accessibility Validation

Validate

✓ Keyboard support

✓ Focus indicators

✓ Color contrast

✓ Alt text

✓ Labels

✓ ARIA

✓ Screen reader support

Automatic Failure

✗ Accessibility blocker

---

# Responsive Validation

Validate

Desktop

Tablet

Mobile

Landscape

Portrait

Automatic Failure

✗ Horizontal scrolling

✗ Broken layout

✗ Hidden functionality

---

# Performance Validation

Validate

✓ Lazy loading

✓ Skeletons

✓ Optimized images

✓ Progressive loading

✓ Efficient rendering

Automatic Failure

✗ Blank loading screens

✗ Large layout shifts

---

# Visual Inspection

AI should inspect

Text clipping

↓

Component overlap

↓

Broken alignment

↓

Overflow

↓

Uneven spacing

↓

Visual balance

↓

Empty space

↓

Crowding

Every issue should be corrected automatically.

---

# Content Inspection

AI should inspect

Grammar

↓

Consistency

↓

Terminology

↓

Tone

↓

Capitalization

↓

Readability

↓

Accessibility

---

# UX Inspection

AI should inspect

Can users understand this page?

↓

Can users finish their task?

↓

Can users recover from mistakes?

↓

Can users find important actions?

↓

Can users navigate easily?

---

# Automatic Improvements

AI should automatically fix

Spacing

Alignment

Typography

Button hierarchy

Missing labels

Missing loading states

Missing empty states

Missing errors

Missing helper text

Responsive issues

Accessibility issues

Poor wording

Do not require human approval for these fixes.

---

# AI MUST

Run every validation category.

Automatically fix detected issues.

Revalidate after fixes.

Continue until quality threshold is reached.

Never stop after the first generation.

---

# AI MUST NEVER

Skip validation.

Ignore accessibility.

Ignore responsiveness.

Ignore content quality.

Ignore UX.

Output low-quality UI.

Return UI with known issues.

---

# Quality Score

Each category contributes equally.

UX                         10

Layout                     10

Design System              10

Components                 10

Content                    10

Accessibility              10

Responsive                 10

Interaction                10

Performance                10

Technical Quality          10

-------------------------------

Total                     100

---

# Release Rules

Score

95–100

Ready

90–94

Improve Automatically

80–89

Major Revision Required

Below 80

Reject

Automatic release is prohibited below 95.

---

# Blocking Issues

The following automatically fail validation.

• Text clipping

• Overflow

• Component overlap

• Broken navigation

• Missing labels

• Accessibility failure

• Missing loading state

• Missing error state

• Broken responsive layout

• Missing primary action in page chrome

• Multiple primary CTAs in the same viewport

• Incorrect component usage

• Design System violation

• Placeholder-only labels

• Horizontal scrolling that hides critical content with no mobile strategy

• Hidden critical functionality

• Toast-only handling of irreversible destructive actions

• Sheet/Drawer breakpoint ignored (≥640 Sheet / &lt;640 Drawer)

• Missing required region from `.ops4/design-system/screens/` blueprint (collapsed multi-region screen into a single Card/form)

• Thin admin/CRUD scaffold where the locked build prompt specified production-grade multi-panel composition

• Missing Landing → Login → Forgot/Register → role-home journey for product web apps

• Login screen without working Forgot password and Register links

• Visible search/filter/menu control that does nothing (dead UI)

• Data screens without loading → data (or empty/error) treatment

• Missing corner States preview control (Loading / Empty / Error / Ready) in preview builds

A screen with any blocker must never be considered complete.

---

# Final Principle

Generating an interface is not success.

A successful interface is one that has been generated, validated, improved, validated again, and proven to meet the standards defined by Aperture Design Governance.

Quality is verified.

Never assumed.

---

## Requirements
- Implement every screen and modal listed in the locked Design Brain prompt, matching the Editorial Commerce Flow archetype and all specified layouts.
- Use the specified color palette (#FF385C accent, warm neutrals), Fredoka/Nunito typography, and shadcn/ui components as directed.
- Ensure all dashboards, workflows, and lists use the required editorial hero regions, vertical storytelling, and merchandising contrast.
- Include all status variants (empty, loading, error, plan limit, permission denied) with distinct editorial banners or hero regions.
- Implement all data points and fields for each page as summarized in the page-by-page data points.
- Build for responsive web (Android tablet and desktop), with top navigation and touch-friendly targets.
- Work in an isolated preview branch and open a PR (do not merge to main).

## Design Continuity Rules
- Implement the locked Design Brain build prompt as a production-grade full application.
- Implement every screen listed in the locked prompt / screen map — do not ship a subset of CRUD pages.
- Match the product CATEGORY in the locked prompt: commerce/marketplace → storefront (gallery, merchandising, PDP); ops/workspace → denser workflow chrome. Never force admin master-detail onto a consumer shop.
- Honor screen composition blueprints: required regions must exist; do not collapse multi-region layouts into a single Card/form.
- When Design Pattern Brain auth/register briefs are attached, apply their composition (e.g. centered card) even if prior auth screens were multi-panel.
- Prefer workflow-rich layouts (main + context rail, master-detail, inspector) ONLY when the locked prompt describes an ops/workspace product.
- For commerce: prioritize large imagery, product cards, clear price/CTA hierarchy, and marketing/top-nav shells — not CRM tables.
- Never render designer jargon as product chrome ("Master-Detail Workspace", "Inspector" as a primary header).
- Use correct control types from the prompt/blueprints (e.g. segmented EMAIL/SMS vs a generic select).
- Follow Aperture guidelines for tokens, accessibility, and interaction — they do not override locked composition or Pattern Brain.
- Do not invent a thinner admin scaffold or theme demo in place of the locked design.
- Web entry: Landing → Login → (Forgot password | Register) → role home. No credentials on Landing; Login links must work.
- Provide consistent primary nav per role; every nav destination is a real route.
- No dead controls — search/filters/menus work against dummy data or a mock API.
- Real async UX: loader/skeleton then data; empty and error states with retry.
- Include a corner States floating button to force Loading / Empty / Error / Ready on the current screen.

## Technical Rules
- Never push directly to main.
- Always create a dedicated feature or fix branch.
- Create the branch from the repository default branch, then open a PR into that default branch.
- Run lint/build before opening PR.
- Follow existing project structure.
- Follow existing coding conventions.
- Keep files under 400 lines where possible.
- Use proper TypeScript interfaces/types.
- Never allow a browser or screenshot operation to run indefinitely.
- Every browser action must use a maximum timeout of 30 seconds.
- Do not retry the same failed screenshot more than once.
- If visual capture fails, continue using HTTP checks, logs, DOM inspection, build validation, and terminal-based Playwright.
- Screenshot failure must never block implementation, commits, or pull-request creation.
- Base branch: main
- PR target: main
- Open `.ops4/design-system/README.md` plus `01`–`14` for tokens/a11y; locked build prompt + blueprints win for composition.
- Open `.ops4/design-system/patterns/` and APPLY retrieved composition to matching screens (esp. auth); keep product brand tokens.

## Acceptance Criteria
- All screens, modals, and workflows from the locked prompt are present and match the Editorial Commerce Flow archetype.
- UI uses the correct color palette, typography, and component library as specified.
- All editorial hero regions, vertical sections, and merchandising layouts are implemented per screen requirements.
- Status variants (empty, loading, error, plan limit, permission denied) are visually distinct and editorial.
- All listed fields and data points are present and functional on each page.
- App is responsive and optimized for Android tablet and desktop browsers.
- Lint passes
- Build passes
- PR is opened to the default branch (not merged)
- Screenshot/browser failures do not block commits or PR creation (max 30s browser timeout; one retry max).
- UI follows Aperture guideline docs under `.ops4/design-system/` for tokens/a11y; composition follows the locked build prompt and screen blueprints.
- In-scope screens (esp. auth/register/login/landing) visibly apply Design Pattern Brain composition under `.ops4/design-system/patterns/` while keeping product brand tokens.
- Web entry journey is Landing → Login → (Forgot|Register) → role home; Login links work; no credentials on Landing.
- Visible search/filters/menus work against dummy data or a mock API; no inert clickable chrome.
- Data screens show loader/skeleton then data; empty and error states are present and recoverable.
- Corner States floating button forces Loading / Empty / Error / Ready on the current screen without replacing product nav.

## Agent Instructions
Create a new branch named:
`ai-build/preview-var2-issue-3-implement-editorial-commerce-flow-ui-full-app-pr`

Base branch: `main`
PR target: `main`

Implement this issue only.
Never push directly to main.
Always create a dedicated feature or fix branch.
Open a Pull Request to the repository default branch.
PR title should be:
AI Build: Implement Editorial Commerce Flow UI (Full App Preview Build)

PR body should include:
- Summary
- Files changed
- Validation results
- Screenshots of key screens (required for UI builds)
- Checklist of blueprint regions implemented
- Closes #3

This is an INITIAL full-app build from the locked Design Brain.
Implement the locked build prompt fully — every screen, with the specified composition richness.
Do NOT ship a thinner generic admin/CRUD shell.
Do NOT collapse multi-region workspace screens into a single Card/form.
EXCEPTION: authentication/register/login screens follow Design Pattern Brain briefs when present (e.g. centered card).
Entry: Landing → Login → Forgot/Register → role home. No credentials on Landing. Consistent nav per role.
Wire search/filters/menus to dummy data or mock API. Loader then data. Include corner States FAB (Loading/Empty/Error/Ready).
Aperture guidelines under `.ops4/design-system/` govern tokens, a11y, and interaction — they do not replace screen composition in the locked prompt or Pattern Brain.
When page-by-page data points are provided, use them as the source of truth for fields, tables, filters, and statuses.
When screen blueprints are provided under `.ops4/design-system/screens/`, implement every required region for workspace screens.
When design pattern briefs are provided under `.ops4/design-system/patterns/`, APPLY their composition to matching screens — not optional taste.