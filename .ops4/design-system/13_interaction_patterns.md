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