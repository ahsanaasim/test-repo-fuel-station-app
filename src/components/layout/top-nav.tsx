"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fuel, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PRODUCT } from "@/data/mock";

export type NavItem = { href: string; label: string };

export function BrandMark({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="flex items-center gap-2.5">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)] text-white shadow-sm">
        <Fuel className="h-5 w-5" />
      </span>
      <span className="font-heading text-xl font-semibold tracking-tight">{PRODUCT.name}</span>
    </Link>
  );
}

export function TopNav({
  items,
  homeHref = "/",
  trailing,
}: {
  items?: NavItem[];
  homeHref?: string;
  trailing?: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <BrandMark href={homeHref} />
        {items && items.length > 0 && (
          <nav className="ms-2 hidden flex-1 items-center gap-1 overflow-x-auto md:flex">
            {items.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== homeHref && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                    active
                      ? "bg-[var(--muted)] text-[var(--foreground)]"
                      : "text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}
        <div className="ms-auto flex items-center gap-2">
          {trailing}
          <Button asChild variant="ghost" size="sm">
            <Link href="/">
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Sign out</span>
            </Link>
          </Button>
        </div>
      </div>
      {items && items.length > 0 && (
        <nav className="flex gap-1 overflow-x-auto border-t border-[var(--border)] px-4 py-2 md:hidden">
          {items.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== homeHref && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "shrink-0 rounded-md px-3 py-2 text-sm font-semibold",
                  active ? "bg-[var(--muted)]" : "text-[var(--muted-foreground)]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}

export const managerNav: NavItem[] = [
  { href: "/manager", label: "Dashboard" },
  { href: "/manager/shifts", label: "Shifts" },
  { href: "/manager/tanks", label: "Tanks" },
  { href: "/manager/deliveries", label: "Deliveries" },
  { href: "/manager/reconciliation", label: "Reconciliation" },
  { href: "/manager/expenses", label: "Expenses" },
  { href: "/manager/reports", label: "Reports" },
];

export const operatorNav: NavItem[] = [
  { href: "/operator", label: "Home" },
  { href: "/operator/shift-start/step-1", label: "Start shift" },
  { href: "/operator/sale-entry", label: "Add sale" },
  { href: "/operator/shift-end/step-1", label: "End shift" },
];

export const accountantNav: NavItem[] = [
  { href: "/accountant", label: "Home" },
  { href: "/manager/expenses", label: "Expenses" },
  { href: "/manager/reconciliation", label: "Reconciliation" },
  { href: "/manager/reports", label: "Reports" },
];

export const ownerNav: NavItem[] = [
  { href: "/owner", label: "Overview" },
  { href: "/manager/reports", label: "Reports" },
  { href: "/owner/audit-log", label: "Audit log" },
  { href: "/owner/settings", label: "Settings" },
];
