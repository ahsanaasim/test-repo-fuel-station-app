"use client";

import { useState } from "react";
import Link from "next/link";
import { CreditCard, Info, Wallet } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { dashboardMetrics } from "@/data/mock";
import { usePageReady } from "@/hooks/use-page-state";
import { formatCurrency } from "@/lib/utils";

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
        <WizardStepShell
          step={2}
          total={3}
          title="Cash & card totals"
          instructions="Verify counted cash and card terminal totals for the full shift."
          footer={
            <>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/operator/shift-end/step-1">Back</Link>
              </Button>
              <Button asChild size="lg" className="w-full sm:ms-auto sm:w-auto">
                <Link href="/operator/shift-end/step-3">Next: Review</Link>
              </Button>
            </>
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
        >
          <div className="space-y-4">
            {showOffline && <Badge variant="warning">Offline · totals save locally</Badge>}

            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader className="border-b border-[var(--border)] bg-[var(--accent)]/5">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Wallet className="h-5 w-5 text-[var(--accent)]" />
                    Cash total
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 pt-5">
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
                <CardHeader className="border-b border-[var(--border)] bg-[var(--accent)]/5">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <CreditCard className="h-5 w-5 text-[var(--accent)]" />
                    Card total
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 pt-5">
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

            <Card className="overflow-hidden border-[var(--accent)]/20">
              <CardContent className="flex flex-wrap items-center justify-between gap-4 bg-[var(--accent)]/5 p-5">
                <div>
                  <p className="text-sm text-[var(--muted-foreground)]">Combined sales</p>
                  <p className="font-heading text-2xl font-semibold">
                    {formatCurrency((parseFloat(cashTotal) || 0) + (parseFloat(cardTotal) || 0))}
                  </p>
                </div>
                <Badge variant="secondary">
                  Today&apos;s board: {formatCurrency(dashboardMetrics.todaysSales)}
                </Badge>
              </CardContent>
            </Card>
          </div>
        </WizardStepShell>
      )}
    </AppShell>
  );
}
