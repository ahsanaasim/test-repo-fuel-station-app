"use client";

import { useState } from "react";
import Link from "next/link";
import { Gauge, Info } from "lucide-react";
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

export default function ShiftStartStep1Page() {
  const {
    showLoading,
    showEmpty,
    showPlanLimit,
    showPermissionDenied,
    showReady,
    showOffline,
  } = usePageReady();

  const [readings, setReadings] = useState<Record<string, string>>(() =>
    Object.fromEntries(pumps.map((p) => [p.id, String(p.openingMeter)])),
  );

  return (
    <AppShell navItems={operatorNav} homeHref="/operator">
      <StatusBanner />

      {showPlanLimit && <PlanLimitCard homeHref="/operator" />}
      {showPermissionDenied && <PermissionDeniedCard dashboardHref="/operator" />}
      {showLoading && <LoadingBlock label="Loading pumps…" />}
      {showEmpty && (
        <EmptyState
          title="No pumps configured"
          description="This station has no pumps to read. Ask a manager to set up tanks and pumps first."
          action={
            <Button asChild variant="outline">
              <Link href="/operator">Back to home</Link>
            </Button>
          }
        />
      )}

      {(showReady || showOffline) && (
        <WizardStepShell
          step={1}
          total={3}
          title="Opening meter readings"
          instructions="Record the meter on each pump before sales begin. Values should match the physical display."
          footer={
            <>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/operator">Cancel</Link>
              </Button>
              <Button asChild size="lg" className="w-full sm:ms-auto sm:w-auto">
                <Link href="/operator/shift-start/step-2">Next: Cash float</Link>
              </Button>
            </>
          }
          rail={
            <RelatedInfo title="Meter accuracy tips">
              <ul className="list-disc space-y-2 ps-4">
                <li>Read the totalizer display — not the price or volume on the nozzle screen.</li>
                <li>Enter the full number including decimals; do not round up.</li>
                <li>If a pump was reset, note it in the correction request after shift start.</li>
                <li>Double-check diesel and petrol pumps — labels can look similar in low light.</li>
              </ul>
              <p className="rounded-lg bg-[var(--muted)]/60 p-3 text-[var(--foreground)]">
                Opening readings lock when you confirm the shift. Managers use them to verify liters
                sold at close.
              </p>
            </RelatedInfo>
          }
        >
          <div className="space-y-4">
            {showOffline && (
              <Badge variant="warning" className="mb-1">
                Offline · readings save locally until sync
              </Badge>
            )}
            <div className="grid gap-4">
              {pumps.map((pump) => (
                <Card key={pump.id} className="overflow-hidden">
                  <CardHeader className="flex flex-row items-center justify-between gap-3 border-b border-[var(--border)] bg-[var(--accent)]/5 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--accent)] text-white">
                        <Gauge className="h-5 w-5" />
                      </span>
                      <div>
                        <CardTitle className="text-lg">{pump.number}</CardTitle>
                        <p className="text-sm text-[var(--muted-foreground)]">
                          Tank {pump.tankId.toUpperCase()}
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary">{pump.fuelType}</Badge>
                  </CardHeader>
                  <CardContent className="pt-5">
                    <div className="space-y-2">
                      <Label htmlFor={`meter-${pump.id}`}>Opening meter reading</Label>
                      <Input
                        id={`meter-${pump.id}`}
                        type="number"
                        inputMode="decimal"
                        step="0.1"
                        className="text-lg font-semibold"
                        value={readings[pump.id] ?? ""}
                        onChange={(e) =>
                          setReadings((prev) => ({ ...prev, [pump.id]: e.target.value }))
                        }
                      />
                      <p className="text-xs text-[var(--muted-foreground)]">
                        Last recorded: {pump.openingMeter.toLocaleString()} L
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </WizardStepShell>
      )}

      {showLoading && <SkeletonCards count={4} />}
    </AppShell>
  );
}
