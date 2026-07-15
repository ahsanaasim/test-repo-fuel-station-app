"use client";

import Link from "next/link";
import { CheckCircle2, Info } from "lucide-react";
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
import { pumps } from "@/data/mock";
import { usePageReady } from "@/hooks/use-page-state";
import { formatCurrency } from "@/lib/utils";

const SHIFT_START_STEPS = ["Meters", "Cash float", "Confirm"];
const STARTING_CASH_FLOAT = 150;

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

export default function ShiftStartConfirmPage() {
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
      <StatusBanner />

      {showPlanLimit && <PlanLimitCard homeHref="/operator" />}
      {showPermissionDenied && <PermissionDeniedCard dashboardHref="/operator" />}
      {showLoading && <LoadingBlock label="Preparing summary…" />}
      {showEmpty && (
        <EmptyState
          title="Nothing to confirm"
          description="Complete the previous steps to see your shift start summary."
          action={
            <Button asChild>
              <Link href="/operator/shift-start/step-1">Start over</Link>
            </Button>
          }
        />
      )}

      {(showReady || showOffline) && (
        <WizardStepShell
          step={3}
          total={SHIFT_START_STEPS.length}
          title="Confirm shift start"
          instructions="Review opening readings and cash float before unlocking sales entry."
          footer={
            <>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/operator/shift-start/step-2">Back</Link>
              </Button>
              <Button asChild size="lg" className="w-full sm:ms-auto sm:w-auto">
                <Link href="/operator">
                  <CheckCircle2 className="h-4 w-4" />
                  Confirm &amp; start shift
                </Link>
              </Button>
            </>
          }
          rail={
            <RelatedInfo title="After you confirm">
              <ul className="list-disc space-y-2 ps-4">
                <li>Sales entry and tank tracking unlock on your dashboard.</li>
                <li>Opening readings are timestamped and sent to the manager board.</li>
                <li>You can still request corrections if a meter was mis-read.</li>
              </ul>
            </RelatedInfo>
          }
        >
          <div className="space-y-4">
            {showOffline && (
              <Badge variant="warning">Offline · shift starts locally and syncs later</Badge>
            )}

            <Card className="overflow-hidden border-[var(--accent)]/20">
              <div className="bg-[linear-gradient(135deg,#ff385c_0%,#e31c5f_100%)] px-5 py-6 text-white">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/20">
                    <CheckCircle2 className="h-7 w-7" />
                  </span>
                  <div>
                    <p className="font-heading text-2xl font-semibold">Ready to open shift</p>
                    <p className="mt-1 text-sm text-white/85">
                      {pumps.length} pumps · float {formatCurrency(STARTING_CASH_FLOAT)} ·{" "}
                      {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Opening meter readings</CardTitle>
              </CardHeader>
              <CardContent className="divide-y divide-[var(--border)]">
                {pumps.map((pump) => (
                  <div
                    key={pump.id}
                    className="flex flex-wrap items-center justify-between gap-3 py-3 first:pt-0 last:pb-0"
                  >
                    <div>
                      <p className="font-semibold">{pump.number}</p>
                      <Badge variant="secondary" className="mt-1">
                        {pump.fuelType}
                      </Badge>
                    </div>
                    <p className="font-heading text-xl">{pump.openingMeter.toLocaleString()} L</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Starting cash float</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-heading text-3xl font-semibold text-[var(--accent)]">
                  {formatCurrency(STARTING_CASH_FLOAT)}
                </p>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                  Counted and entered in drawer before first sale
                </p>
              </CardContent>
            </Card>
          </div>
        </WizardStepShell>
      )}
    </AppShell>
  );
}
