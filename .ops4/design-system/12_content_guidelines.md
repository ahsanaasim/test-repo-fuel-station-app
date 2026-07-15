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