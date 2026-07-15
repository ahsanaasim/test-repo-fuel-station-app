"use client";

import { TopNav, type NavItem } from "@/components/layout/top-nav";
import { StatePreviewFab } from "@/components/shared/state-preview-fab";

export function AppShell({
  children,
  navItems,
  homeHref,
  trailing,
}: {
  children: React.ReactNode;
  navItems?: NavItem[];
  homeHref: string;
  trailing?: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--canvas)]">
      <TopNav items={navItems} homeHref={homeHref} trailing={trailing} />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">{children}</main>
      <StatePreviewFab />
    </div>
  );
}

export function TwoColumn({
  main,
  rail,
}: {
  main: React.ReactNode;
  rail: React.ReactNode;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div className="min-w-0 space-y-6">{main}</div>
      <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">{rail}</aside>
    </div>
  );
}
