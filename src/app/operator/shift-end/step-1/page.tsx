"use client";

import { useState } from "react";
import Link from "next/link";
import { CreditCard, Gauge, Info, Wallet } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { operatorNav } from "@/components/layout/top-nav";
import { WizardStepShell } from "@/components/shared/editorial";
import {
  EmptyState,
  LoadingBlock,
  PermissionDeniedCard,
  PlanLimitCard,
  SkeletonCards,
  StatusBanner,
} from "@/components/shared/status-frames";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { pumps } from "@/data/mock";
import { usePageReady } from "@/hooks/use-page-state";

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

type PumpEntry = {
  closingMeter: string;
  cashAmount: string;
  cardAmount: string;
};

function defaultPumpEntries(): Record<string, PumpEntry> {
  return Object.fromEntries(
    pumps.map((p) => [
      p.id,
      {
        closingMeter: String((p.openingMeter + 145.5 / pumps.length).toFixed(1)),
        cashAmount: String((101.5 / pumps.length).toFixed(2)),
        cardAmount: String((104.9 / pumps.length).toFixed(2)),
      },
    ]),
  );
}

export default function ShiftEndStep1Page() {
  const {
    showLoading,
    showEmpty,
    showPlanLimit,
    showPermissionDenied,
    showReady,
    showOffline,
  } = usePageReady();

  const [entries, setEntries] = useState<Record<string, PumpEntry>>(defaultPumpEntries);

  const updateEntry = (pumpId: string, field: keyof PumpEntry, value: string) => {
    setEntries((prev) => ({
      ...prev,
      [pumpId]: { ...prev[pumpId], [field]: value },
    }));
  };

  return (
    <AppShell navItems={operatorNav} homeHref="/operator">
      <StatusBanner />

      {showPlanLimit && <PlanLimitCard homeHref="/operator" />}
      {showPermissionDenied && <PermissionDeniedCard dashboardHref="/operator" />}
      {showLoading && <LoadingBlock label="Loading shift data…" />}
      {showEmpty && (
        <EmptyState
          title="No active shift"
          description="Start a shift before recording closing meters and payment totals."
          action={
            <Button asChild>
              <Link href="/operator/shift-start/step-1">Start shift</Link>
            </Button>
          }
        />
      )}

      {(showReady || showOffline) && (
        <WizardStepShell
          step={1}
          total={3}
          title="Closing meter readings"
          instructions="Enter the closing totalizer, cash, and card amounts for each pump."
          footer={
            <>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/operator">Cancel</Link>
              </Button>
              <Button asChild size="lg" className="w-full sm:ms-auto sm:w-auto">
                <Link href="/operator/shift-end/step-2">Continue to totals</Link>
              </Button>
            </>
          }
          rail={
            <RelatedInfo title="Per-pump entry">
              <p>
                Enter closing meters from each pump display. Cash and card fields capture what was
                collected at that island if your station splits by pump.
              </p>
              <p className="rounded-lg bg-[var(--muted)]/60 p-3 text-[var(--foreground)]">
                Totals on the next step roll up across all pumps for manager reconciliation.
              </p>
            </RelatedInfo>
          }
        >
          <div className="space-y-4">
            {showOffline && <Badge variant="warning">Offline · entries queue until reconnect</Badge>}

            <div className="grid gap-4">
              {pumps.map((pump) => {
                const entry = entries[pump.id];
                return (
                  <Card key={pump.id}>
                    <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] bg-[var(--accent)]/5 pb-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--accent)] text-white">
                          <Gauge className="h-5 w-5" />
                        </span>
                        <div>
                          <CardTitle className="text-lg">{pump.number}</CardTitle>
                          <p className="text-sm text-[var(--muted-foreground)]">
                            Opened {pump.openingMeter.toLocaleString()} L · {pump.fuelType}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="grid gap-4 pt-5 sm:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor={`close-${pump.id}`}>Closing meter</Label>
                        <Input
                          id={`close-${pump.id}`}
                          type="number"
                          inputMode="decimal"
                          step="0.1"
                          value={entry?.closingMeter ?? ""}
                          onChange={(e) => updateEntry(pump.id, "closingMeter", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`cash-${pump.id}`} className="flex items-center gap-1.5">
                          <Wallet className="h-3.5 w-3.5" />
                          Cash amount
                        </Label>
                        <Input
                          id={`cash-${pump.id}`}
                          type="number"
                          inputMode="decimal"
                          step="0.01"
                          value={entry?.cashAmount ?? ""}
                          onChange={(e) => updateEntry(pump.id, "cashAmount", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`card-${pump.id}`} className="flex items-center gap-1.5">
                          <CreditCard className="h-3.5 w-3.5" />
                          Card amount
                        </Label>
                        <Input
                          id={`card-${pump.id}`}
                          type="number"
                          inputMode="decimal"
                          step="0.01"
                          value={entry?.cardAmount ?? ""}
                          onChange={(e) => updateEntry(pump.id, "cardAmount", e.target.value)}
                        />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </WizardStepShell>
      )}

      {showLoading && <SkeletonCards count={4} />}
    </AppShell>
  );
}
