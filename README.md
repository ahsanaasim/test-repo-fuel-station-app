# Flowboard

Fuel station operations dashboard built with **Next.js 15** (App Router), **React 19**, and **Tailwind CSS 4**. Warm paper canvas, Fredoka headings, and accent `#FF385C`.

## Scripts

```bash
npm run dev    # Start development server (http://localhost:3000)
npm run build  # Production build
npm run start  # Run production server
npm run lint   # ESLint
```

## Roles & routes

| Role | Home | Focus |
|------|------|-------|
| **Operator** | `/operator` | Shift start/end, fuel sales, corrections |
| **Manager** | `/manager` | Shifts, tanks, deliveries, reconciliation, expenses, reports |
| **Accountant** | `/accountant` | Monthly expenses, cash variance, reconciliation shortcuts |
| **Owner** | `/owner` | Multi-station overview, audit log, settings |

Sign in from the landing page (`/`) or use role-specific login links.

## Demo state preview

Use the floating **States** FAB (bottom-right) to preview loading, empty, error, plan limit, permission denied, and offline UI variants on any dashboard page.

## Stack

- Next.js 15 App Router · TypeScript · Tailwind CSS 4
- Radix UI primitives · Lucide icons · Mock data in `src/data/mock.ts`
