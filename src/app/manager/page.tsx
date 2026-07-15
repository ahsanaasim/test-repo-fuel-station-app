"use client";

import Link from "next/link";
import {
  ArrowRightLeft,
  ClipboardCheck,
  Droplets,
  FileBarChart,
  Receipt,
  Truck,
} from "lucide-react";
import { AppShell, TwoColumn } from "@/components/layout/app-shell";
import { managerNav } from "@/components/layout/top-nav";
import { ActivityRail, EditorialDashboard } from "@/components/shared/editorial-dashboard";
import {
  EmptyState,
  PermissionDeniedCard,
  PlanLimitCard,
  SkeletonCards,
  StatusBanner,
} from "@/components/shared/status-frames";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { auditLog, shifts } from "@/data/mock";
import { usePageReady } from "@/hooks/use-page-state";

const quickLinks = [
  { href: "/manager/shifts", label: "Shift verification", icon: ClipboardCheck },
  { href: "/manager/tanks", label: "Tank levels", icon: Droplets },
  { href: "/manager/deliveries", label: "Fuel deliveries", icon: Truck },
  { href: "/manager/reconciliation", label: "Cash reconciliation", icon: ArrowRightLeft },
  { href: "/manager/expenses", label: "Station expenses", icon: Receipt },
  { href: "/manager/reports", label: "Reports & exports", icon: FileBarChart },
];

export default function ManagerDashboardPage() {
  const {
    showLoading,
    showEmpty,
    showPlanLimit,
    showPermissionDenied,
    showReady,
    showOffline,
  } = usePageReady();

  const pendingShifts = shifts.filter((s) => s.status === "Pending").length;

  return (
    <AppShell navItems={managerNav} homeHref="/manager">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-semibold">Manager dashboard</h1>
          <p className="text-[var(--muted-foreground)]">
            Station overview, shift approvals, and daily operations at a glance.
          </p>
        </div>
        {pendingShifts > 0 && (
          <Badge variant="warning" className="text-sm">
            {pendingShifts} shift{pendingShifts !== 1 ? "s" : ""} awaiting review
          </Badge>
        )}
      </div>

      <StatusBanner />

      {showPlanLimit && <PlanLimitCard homeHref="/manager" />}
      {showPermissionDenied && <PermissionDeniedCard dashboardHref="/manager" />}
      {showLoading && <SkeletonCards count={6} />}
      {showEmpty && (
        <EmptyState
          title="No station data yet"
          description="Once operators start shifts and record sales, your dashboard will fill in here."
          action={
            <Button asChild>
              <Link href="/manager/shifts">Review shifts</Link>
            </Button>
          }
        />
      )}

      {(showReady || showOffline) && (
        <TwoColumn
          main={
            <>
              {showOffline && (
                <Badge variant="warning" className="mb-2">
                  Offline mode · changes sync when reconnected
                </Badge>
              )}
              <EditorialDashboard role="manager" />
              <section className="editorial-band rounded-lg bg-white px-6 py-8 shadow-[var(--shadow-card)]">
                <h2 className="font-heading text-3xl font-semibold">Workflow shortcuts</h2>
                <p className="mt-1 text-[var(--muted-foreground)]">
                  Jump into verification, inventory, and cash desks.
                </p>
                <div className="mt-6">
              <Card className="border-0 shadow-none">
                <CardHeader className="sr-only">
                  <CardTitle>Workflow shortcuts</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {quickLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex min-h-[4.5rem] items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--muted)]/40 p-4 transition-colors hover:border-[var(--accent)] hover:bg-white"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="font-semibold">{link.label}</span>
                      </Link>
                    );
                  })}
                </CardContent>
              </Card>
                </div>
              </section>
            </>
          }
          rail={
            <>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Quick links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {quickLinks.map((link) => (
                    <Button key={link.href} asChild className="w-full" variant="outline">
                      <Link href={link.href}>{link.label}</Link>
                    </Button>
                  ))}
                </CardContent>
              </Card>
              <ActivityRail
                items={auditLog.slice(0, 5).map((entry) => ({
                  title: entry.action,
                  meta: `${entry.user} · ${new Date(entry.timestamp).toLocaleString()}`,
                }))}
              />
            </>
          }
        />
      )}
    </AppShell>
  );
}
