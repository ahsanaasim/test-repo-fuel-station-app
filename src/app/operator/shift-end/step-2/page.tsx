"use client";

import { useState } from "react";
import Link from "next/link";
import { CreditCard, Info, Wallet } from "lucide-react";
import { AppShell, TwoColumn } from "@/components/layout/app-shell";
import { operatorNav } from "@/components/layout/top-nav";
import { Stepper } from "@/components/shared/stepper";
import {
  EmptyState,
  LoadingBlock,
  PermissionDeniedCard,
  PlanLimitCard,
  StatusBanner,
} from "@/components/shared/status-frames";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { dashboardMetrics } from "@/data/mock";
import { usePageReady } from "@/hooks/use-page-state";
import { formatCurrency } from "@/lib/utils";

const SHIFT_END_STEPS = ["Closing meters", "Totals", "Review", "Done"];

function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h1 className="font-heading text-3xl font-semibold">{title}</h1>
      <p className="mt-1 text-[var(--muted-foreground)]">{description}</p>
    </div>
  );
}

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

export default function ShiftEndStep2Page() {
  const {
    showLoading,
    showEmpty,
    showPlanLimit,
    showPermissionDenied,
    showReady,
    showOffline,
  } = usePageReady();

  const [cashTotal, setCashTotal] = useState("101.50");
  const [cardTotal, setCardTotal] = useState("104.90");

  return (
    <AppShell navItems={operatorNav} homeHref="/operator">
      <Stepper steps={SHIFT_END_STEPS} current={2} />
      <PageHeader
        title="Cash &amp; card totals"
        description="Verify counted cash and card terminal totals for the full shift."
      />

      <StatusBanner />

      {showPlanLimit && <PlanLimitCard homeHref="/operator" />}
      {showPermissionDenied && <PermissionDeniedCard dashboardHref="/operator" />}
      {showLoading && <LoadingBlock label="Calculating totals…" />}
      {showEmpty && (
        <EmptyState
          title="No totals to enter"
          description="Complete closing meter readings before entering shift payment totals."
          action={
            <Button asChild>
              <Link href="/operator/shift-end/step-1">Back to meters</Link>
            </Button>
          }
        />
      )}

      {(showReady || showOffline) && (
        <TwoColumn
          main={
            <div className="space-y-4">
              {showOffline && (
                <Badge variant="warning">Offline · totals save locally</Badge>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Wallet className="h-5 w-5 text-[var(--accent)]" />
                      Cash total
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Label htmlFor="cash-total">Counted cash in drawer (USD)</Label>
                    <Input
                      id="cash-total"
                      type="number"
                      inputMode="decimal"
                      step="0.01"
                      className="text-2xl font-semibold"
                      value={cashTotal}
                      onChange={(e) => setCashTotal(e.target.value)}
                    />
                    <p className="text-sm text-[var(--muted-foreground)]">
                      System expected: {formatCurrency(101.5)}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <CreditCard className="h-5 w-5 text-[var(--accent)]" />
                      Card total
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Label htmlFor="card-total">Card terminal batch total (USD)</Label>
                    <Input
                      id="card-total"
                      type="number"
                      inputMode="decimal"
                      step="0.01"
                      className="text-2xl font-semibold"
                      value={cardTotal}
                      onChange={(e) => setCardTotal(e.target.value)}
                    />
                    <p className="text-sm text-[var(--muted-foreground)]">
                      System expected: {formatCurrency(104.9)}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-[var(--muted)]/40">
                <CardContent className="flex flex-wrap items-center justify-between gap-4 p-5">
                  <div>
                    <p className="text-sm text-[var(--muted-foreground)]">Combined sales</p>
                    <p className="font-heading text-2xl font-semibold">
                      {formatCurrency(
                        (parseFloat(cashTotal) || 0) + (parseFloat(cardTotal) || 0),
                      )}
                    </p>
                  </div>
                  <Badge variant="secondary">
                    Today&apos;s board: {formatCurrency(dashboardMetrics.todaysSales)}
                  </Badge>
                </CardContent>
              </Card>

              <div className="sticky bottom-0 z-10 -mx-4 mt-6 border-t border-[var(--border)] bg-white/95 px-4 py-4 backdrop-blur-md sm:-mx-6 sm:px-6">
                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                    <Link href="/operator/shift-end/step-1">Back</Link>
                  </Button>
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="/operator/shift-end/step-3">Next: Review</Link>
                  </Button>
                </div>
              </div>
            </div>
          }
          rail={
            <RelatedInfo title="Reconciliation tip">
              <p>
                Cash total should be physical notes and coins minus the opening float of{" "}
                {formatCurrency(150)}. Card total comes from the terminal end-of-day report.
              </p>
              <p className="rounded-lg bg-amber-50 p-3 text-amber-900">
                A variance under {formatCurrency(5)} is usually acceptable. Larger gaps trigger
                manager review.
              </p>
            </RelatedInfo>
          }
        />
      )}
    </AppShell>
  );
}
