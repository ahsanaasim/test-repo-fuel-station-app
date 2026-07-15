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