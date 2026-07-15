"use client";

import Link from "next/link";
import { PlusCircle, FilePenLine, LogOut } from "lucide-react";
import { AppShell, TwoColumn } from "@/components/layout/app-shell";
import { operatorNav } from "@/components/layout/top-nav";
import { ActivityRail, EditorialDashboard } from "@/components/shared/editorial-dashboard";
import {
  EmptyState,
  PermissionDeniedCard,
  PlanLimitCard,
  SkeletonCards,
  StatusBanner,
} from "@/components/shared/status-frames";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { sales } from "@/data/mock";
import { usePageReady } from "@/hooks/use-page-state";
import { formatCurrency } from "@/lib/utils";

export default function OperatorHomePage() {
  const {
    showLoading,
    showEmpty,
    showPlanLimit,
    showPermissionDenied,
    showReady,
    showOffline,
  } = usePageReady();

  return (
    <AppShell navItems={operatorNav} homeHref="/operator">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-semibold">Operator home</h1>
          <p className="text-[var(--muted-foreground)]">
            Today&apos;s shift told as vertical editorial chapters.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild>
            <Link href="/operator/sale-entry">
              <PlusCircle className="h-4 w-4" />
              Add sale
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/operator/correction-request">
              <FilePenLine className="h-4 w-4" />
              Correction request
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/operator/shift-end/step-1">
              <LogOut className="h-4 w-4" />
              End shift
            </Link>
          </Button>
        </div>
      </div>

      <StatusBanner />

      {showPlanLimit && <PlanLimitCard homeHref="/operator" />}
      {showPermissionDenied && <PermissionDeniedCard dashboardHref="/operator" />}
      {showLoading && <SkeletonCards count={5} />}
      {showEmpty && (
        <EmptyState
          title="No active shift yet"
          description="Start a shift to unlock sales entry and tank tracking for this board."
          action={
            <Button asChild>
              <Link href="/operator/shift-start/step-1">Start shift</Link>
            </Button>
          }
        />
      )}

      {(showReady || showOffline) && (
        <TwoColumn
          main={
            <>
              {showOffline && (
                <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
                  <Badge variant="warning" className="mb-2">
                    Offline · unsynced
                  </Badge>
                  <p className="font-semibold">2 sales waiting to sync</p>
                  <p className="text-[var(--muted-foreground)]">
                    Keep working — we&apos;ll push entries when you reconnect.
                  </p>
                </div>
              )}
              <EditorialDashboard role="operator" />
              <section className="editorial-band rounded-lg bg-white px-6 py-8 shadow-[var(--shadow-card)]">
                <h2 className="font-heading text-3xl font-semibold">Latest sales</h2>
                <p className="mt-1 text-[var(--muted-foreground)]">
                  Most recent tickets from this shift.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {sales.map((sale) => (
                    <div
                      key={sale.id}
                      className="rounded-lg border border-[var(--border)] bg-[var(--muted)]/40 p-4"
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">{sale.fuelType}</p>
                        <Badge variant="secondary">{sale.paymentMethod}</Badge>
                      </div>
                      <p className="font-heading mt-2 text-2xl">
                        {formatCurrency(sale.amount)}
                      </p>
                      <p className="text-sm text-[var(--muted-foreground)]">
                        {sale.liters} L · {new Date(sale.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </>
          }
          rail={
            <>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Quick actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button asChild className="w-full" variant="secondary">
                    <Link href="/operator/shift-start/step-1">Start / resume shift</Link>
                  </Button>
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/operator/sale-entry">Record fuel sale</Link>
                  </Button>
                </CardContent>
              </Card>
              <ActivityRail
                items={[
                  { title: "Petrol 40 L recorded", meta: "Cash · 8:22 AM" },
                  { title: "Premium 25 L recorded", meta: "Card · 8:05 AM" },
                  { title: "Shift started", meta: "Opening float $150 · 6:00 AM" },
                ]}
              />
            </>
          }
        />
      )}
    </AppShell>
  );
}
