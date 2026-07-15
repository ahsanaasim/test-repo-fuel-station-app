"use client";

import { useState } from "react";
import Link from "next/link";
import { Banknote, Info, Wallet } from "lucide-react";
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
import { pumps } from "@/data/mock";
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

export default function ShiftStartStep2Page() {
  const {
    showLoading,
    showEmpty,
    showPlanLimit,
    showPermissionDenied,
    showReady,
    showOffline,
  } = usePageReady();

  const [cashFloat, setCashFloat] = useState("150.00");

  return (
    <AppShell navItems={operatorNav} homeHref="/operator">
      <StatusBanner />

      {showPlanLimit && <PlanLimitCard homeHref="/operator" />}
      {showPermissionDenied && <PermissionDeniedCard dashboardHref="/operator" />}
      {showLoading && <LoadingBlock label="Loading shift data…" />}
      {showEmpty && (
        <EmptyState
          title="No shift to continue"
          description="Complete opening meter readings first, then return here to set the cash float."
          action={
            <Button asChild>
              <Link href="/operator/shift-start/step-1">Go to meter readings</Link>
            </Button>
          }
        />
      )}

      {(showReady || showOffline) && (
        <WizardStepShell
          step={2}
          total={3}
          title="Starting cash float"
          instructions="Count the cash in the drawer before the first sale. This becomes your opening balance."
          footer={
            <>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/operator/shift-start/step-1">Back</Link>
              </Button>
              <Button asChild size="lg" className="w-full sm:ms-auto sm:w-auto">
                <Link href="/operator/shift-start/confirm">Next: Review</Link>
              </Button>
            </>
          }
          rail={
            <>
              <RelatedInfo title="Why cash float matters">
                <p>
                  The opening float is subtracted from counted cash at shift end to calculate sales
                  revenue. An accurate start prevents false variances.
                </p>
                <p className="rounded-lg bg-[var(--muted)]/60 p-3 text-[var(--foreground)]">
                  Count notes and coins separately. Include rolled change but exclude personal
                  wallets or IOUs.
                </p>
              </RelatedInfo>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Typical floats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[var(--muted-foreground)]">Day shift</span>
                    <span className="font-semibold">{formatCurrency(150)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--muted-foreground)]">Night shift</span>
                    <span className="font-semibold">{formatCurrency(100)}</span>
                  </div>
                </CardContent>
              </Card>
            </>
          }
        >
          <div className="space-y-4">
            {showOffline && <Badge variant="warning">Offline · float saves on this device</Badge>}

            <Card>
              <CardHeader className="border-b border-[var(--border)] bg-[var(--accent)]/5">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Wallet className="h-5 w-5 text-[var(--accent)]" />
                  Meters recorded
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 pt-5 sm:grid-cols-2">
                {pumps.map((pump) => (
                  <div
                    key={pump.id}
                    className="rounded-lg border border-[var(--border)] bg-[var(--muted)]/40 p-4"
                  >
                    <p className="text-sm font-semibold">{pump.number}</p>
                    <p className="font-heading mt-1 text-xl">
                      {pump.openingMeter.toLocaleString()} L
                    </p>
                    <Badge variant="secondary" className="mt-2">
                      {pump.fuelType}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Banknote className="h-5 w-5 text-[var(--accent)]" />
                  Starting cash float
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Label htmlFor="cash-float">Amount in drawer (USD)</Label>
                <Input
                  id="cash-float"
                  type="number"
                  inputMode="decimal"
                  step="0.01"
                  min="0"
                  className="text-2xl font-semibold"
                  value={cashFloat}
                  onChange={(e) => setCashFloat(e.target.value)}
                />
                <p className="text-sm text-[var(--muted-foreground)]">
                  Suggested float for this station: {formatCurrency(150)}
                </p>
              </CardContent>
            </Card>
          </div>
        </WizardStepShell>
      )}
    </AppShell>
  );
}
