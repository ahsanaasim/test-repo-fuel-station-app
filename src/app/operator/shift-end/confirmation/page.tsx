"use client";

import Link from "next/link";
import { LogOut } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { operatorNav } from "@/components/layout/top-nav";
import { EditorialConfirmHero } from "@/components/shared/editorial";
import {
  EmptyState,
  LoadingBlock,
  PermissionDeniedCard,
  PlanLimitCard,
  StatusBanner,
} from "@/components/shared/status-frames";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { pumps, shifts } from "@/data/mock";
import { usePageReady } from "@/hooks/use-page-state";
import { formatCurrency, formatLiters } from "@/lib/utils";

const activeShift = shifts[0];

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <span className="text-[var(--muted-foreground)]">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

export default function ShiftEndConfirmationPage() {
  const {
    showLoading,
    showEmpty,
    showPlanLimit,
    showPermissionDenied,
    showReady,
    showOffline,
  } = usePageReady();

  const variance = activeShift.variance;
  const varianceVariant =
    variance === 0 ? "success" : Math.abs(variance) <= 5 ? "warning" : "danger";

  return (
    <AppShell navItems={operatorNav} homeHref="/operator">
      <StatusBanner />

      {showPlanLimit && <PlanLimitCard homeHref="/operator" />}
      {showPermissionDenied && <PermissionDeniedCard dashboardHref="/operator" />}
      {showLoading && <LoadingBlock label="Finalizing submission…" />}
      {showEmpty && (
        <EmptyState
          title="No submission found"
          description="Complete the shift end wizard to see your confirmation summary."
          action={
            <Button asChild>
              <Link href="/operator/shift-end/step-1">End shift</Link>
            </Button>
          }
        />
      )}

      {(showReady || showOffline) && (
        <div className="mx-auto max-w-3xl animate-float-in space-y-6">
          {showOffline && (
            <Badge variant="warning" className="w-full justify-center py-2">
              Offline · shift saved locally and will sync when online
            </Badge>
          )}

          <EditorialConfirmHero
            title="Shift submitted"
            description={`${activeShift.operatorName}'s shift is with the manager for verification.`}
          >
            <Card>
              <CardHeader>
                <CardTitle>Summary</CardTitle>
              </CardHeader>
              <CardContent className="divide-y divide-[var(--border)]">
                <SummaryRow label="Total sales" value={formatCurrency(activeShift.totalSales)} />
                <SummaryRow label="Liters sold" value={formatLiters(activeShift.totalLiters)} />
                <SummaryRow label="Cash" value={formatCurrency(activeShift.cashAmount)} />
                <SummaryRow label="Card" value={formatCurrency(activeShift.cardAmount)} />
                <div className="flex items-center justify-between gap-4 py-3">
                  <span className="text-[var(--muted-foreground)]">Variance</span>
                  <Badge variant={varianceVariant}>
                    {variance > 0 ? "+" : ""}
                    {formatCurrency(variance)}
                  </Badge>
                </div>
                <SummaryRow
                  label="Closing meter (Pump 1)"
                  value={`${(pumps[0].openingMeter + activeShift.totalLiters / pumps.length).toLocaleString(undefined, { maximumFractionDigits: 1 })} L`}
                />
              </CardContent>
            </Card>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/">
                  <LogOut className="h-4 w-4" />
                  Logout
                </Link>
              </Button>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/operator">Return to dashboard</Link>
              </Button>
            </div>
          </EditorialConfirmHero>
        </div>
      )}
    </AppShell>
  );
}
