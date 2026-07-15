"use client";

import Link from "next/link";
import { AlertTriangle, FilePenLine, Info } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { operatorNav } from "@/components/layout/top-nav";
import { WizardStepShell } from "@/components/shared/editorial";
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
import { dashboardMetrics, pumps, sales, shifts } from "@/data/mock";
import { usePageReady } from "@/hooks/use-page-state";
import { formatCurrency, formatLiters } from "@/lib/utils";

const activeShift = shifts[0];
const cashTotal = activeShift.cashAmount;
const cardTotal = activeShift.cardAmount;
const variance = activeShift.variance;
const totalSales = activeShift.totalSales;
const totalLiters = activeShift.totalLiters;

function RelatedInfo({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Info className="h-4 w-4 text-[var(--accent)]" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-[var(--muted-foreground)]">
        {children}
      </CardContent>
    </Card>
  );
}

function SummaryRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <span className="text-[var(--muted-foreground)]">{label}</span>
      <span className={highlight ? "font-heading text-xl font-semibold text-[var(--accent)]" : "font-semibold"}>
        {value}
      </span>
    </div>
  );
}

export default function ShiftEndStep3Page() {
  const {
    showLoading,
    showEmpty,
    showPlanLimit,
    showPermissionDenied,
    showReady,
    showOffline,
  } = usePageReady();

  const varianceVariant =
    variance === 0 ? "success" : Math.abs(variance) <= 5 ? "warning" : "danger";

  return (
    <AppShell navItems={operatorNav} homeHref="/operator">
      <StatusBanner />

      {showPlanLimit && <PlanLimitCard homeHref="/operator" />}
      {showPermissionDenied && <PermissionDeniedCard dashboardHref="/operator" />}
      {showLoading && <LoadingBlock label="Building review…" />}
      {showEmpty && (
        <EmptyState
          title="Nothing to review"
          description="Enter closing meters and payment totals before submitting your shift."
          action={
            <Button asChild>
              <Link href="/operator/shift-end/step-1">Start shift end</Link>
            </Button>
          }
        />
      )}

      {(showReady || showOffline) && (
        <WizardStepShell
          step={3}
          total={3}
          title="Review & submit"
          instructions="Check sales, payment totals, variance, and any correction requests before closing."
          footer={
            <>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/operator/shift-end/step-2">Back</Link>
              </Button>
              <Button asChild size="lg" className="w-full sm:ms-auto sm:w-auto">
                <Link href="/operator/shift-end/confirmation">Submit shift</Link>
              </Button>
            </>
          }
          rail={
            <>
              <RelatedInfo title="Before you submit">
                <ul className="list-disc space-y-2 ps-4">
                  <li>Manager receives meters, liters, and cash/card breakdown.</li>
                  <li>Variances over {formatCurrency(5)} may require approval.</li>
                  <li>Corrections can be filed after submit if you spot an error.</li>
                </ul>
              </RelatedInfo>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Today&apos;s board</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[var(--muted-foreground)]">Dashboard sales</span>
                    <span className="font-semibold">
                      {formatCurrency(dashboardMetrics.todaysSales)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--muted-foreground)]">Cash variance</span>
                    <Badge variant={varianceVariant}>
                      {formatCurrency(dashboardMetrics.cashVariance)}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </>
          }
        >
          <div className="space-y-4">
            {showOffline && <Badge variant="warning">Offline · submission queues until sync</Badge>}

            <Card className="overflow-hidden border-[var(--accent)]/20">
              <CardHeader className="bg-[linear-gradient(135deg,#ff385c_0%,#e31c5f_100%)] text-white">
                <CardTitle className="text-white">Shift totals</CardTitle>
              </CardHeader>
              <CardContent className="divide-y divide-[var(--border)] pt-2">
                <SummaryRow label="Total sales" value={formatCurrency(totalSales)} highlight />
                <SummaryRow label="Liters sold" value={formatLiters(totalLiters)} />
                <SummaryRow label="Cash collected" value={formatCurrency(cashTotal)} />
                <SummaryRow label="Card collected" value={formatCurrency(cardTotal)} />
                <div className="flex items-center justify-between gap-4 py-3">
                  <span className="text-[var(--muted-foreground)]">Variance</span>
                  <Badge variant={varianceVariant}>
                    {variance > 0 ? "+" : ""}
                    {formatCurrency(variance)}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recorded sales ({sales.length})</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 sm:grid-cols-2">
                {sales.map((sale) => (
                  <div
                    key={sale.id}
                    className="rounded-lg border border-[var(--border)] bg-[var(--muted)]/40 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">{sale.fuelType}</p>
                      <Badge variant="secondary">{sale.paymentMethod}</Badge>
                    </div>
                    <p className="font-heading mt-1 text-lg">{formatCurrency(sale.amount)}</p>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {formatLiters(sale.liters)}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Closing meters</CardTitle>
              </CardHeader>
              <CardContent className="divide-y divide-[var(--border)]">
                {pumps.map((pump) => (
                  <SummaryRow
                    key={pump.id}
                    label={pump.number}
                    value={`${(pump.openingMeter + totalLiters / pumps.length).toLocaleString(undefined, { maximumFractionDigits: 1 })} L`}
                  />
                ))}
              </CardContent>
            </Card>

            {Math.abs(variance) > 0 && (
              <Card className="border-amber-200 bg-amber-50/60">
                <CardContent className="flex items-start gap-3 p-5">
                  <AlertTriangle className="h-5 w-5 shrink-0 text-amber-700" />
                  <div className="flex-1">
                    <p className="font-semibold text-amber-900">Variance detected</p>
                    <p className="mt-1 text-sm text-amber-800">
                      Cash is {formatCurrency(Math.abs(variance))}{" "}
                      {variance < 0 ? "short" : "over"} expected. Submit a correction if needed.
                    </p>
                    <Button asChild variant="outline" size="sm" className="mt-3">
                      <Link href="/operator/correction-request">
                        <FilePenLine className="h-4 w-4" />
                        Request correction
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </WizardStepShell>
      )}
    </AppShell>
  );
}
