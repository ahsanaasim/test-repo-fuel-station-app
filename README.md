# Flowboard

Fuel station operations app using the **Editorial Commerce Flow** archetype — magazine-style vertical sections, immersive heroes, and role-based workflows.

Built with **Next.js 15** (App Router), **React 19**, **Tailwind CSS 4**, **shadcn/ui**, Fredoka + Nunito, and Airbnb accent `#FF385C`.

## Scripts

```bash
npm run dev    # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Entry journey

Landing (`/`) → Login (`/auth/login`) → Forgot (`/auth/forgot`) | Register (`/auth/register`) → role home.

## Roles & routes

| Role | Home | Focus |
|------|------|-------|
| **Operator** | `/operator` | Shift wizards, sale entry, corrections |
| **Manager** | `/manager` | Shifts, tanks, deliveries, reconciliation, expenses, reports |
| **Accountant** | `/accountant` | Expenses hero, reconciliation, reports |
| **Owner** | `/owner` | Station overview, audit log, settings |

## Demo state preview

Use the floating **States** FAB (bottom-right) to preview Ready, Loading, Empty, Error, Plan limit, Permission denied, and Offline variants.

## Stack

- Next.js 15 App Router · TypeScript · Tailwind CSS 4
- Radix UI / shadcn · Lucide icons · Mock data in `src/data/mock.ts`
