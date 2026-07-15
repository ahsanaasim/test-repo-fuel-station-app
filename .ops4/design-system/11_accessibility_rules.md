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