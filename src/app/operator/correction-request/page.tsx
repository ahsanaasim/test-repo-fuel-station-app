"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FilePenLine } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { operatorNav } from "@/components/layout/top-nav";
import {
  EmptyState,
  LoadingBlock,
  PermissionDeniedCard,
  PlanLimitCard,
  StatusBanner,
} from "@/components/shared/status-frames";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sales } from "@/data/mock";
import { usePageReady } from "@/hooks/use-page-state";
import { formatCurrency, formatLiters } from "@/lib/utils";

function formatSaleOption(sale: (typeof sales)[number]) {
  const time = new Date(sale.timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${sale.fuelType} · ${formatLiters(sale.liters)} · ${formatCurrency(sale.amount)} · ${sale.paymentMethod} · ${time}`;
}

export default function CorrectionRequestPage() {
  const router = useRouter();
  const {
    showLoading,
    showEmpty,
    showPlanLimit,
    showPermissionDenied,
    showReady,
    showOffline,
  } = usePageReady();

  const [selectedEntry, setSelectedEntry] = useState(sales[0]?.id ?? "");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const hasEntries = sales.length > 0;

  const handleSubmit = () => {
    if (!selectedEntry || !reason.trim()) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    router.push("/operator");
  };

  return (
    <AppShell navItems={operatorNav} homeHref="/operator">
      <div className="fixed inset-0 z-30 bg-black/20 backdrop-blur-[2px]" aria-hidden />

      <div className="relative z-40 mx-auto flex min-h-[70vh] max-w-lg items-center justify-center px-2 py-8">
        <StatusBanner />

        {showPlanLimit && <PlanLimitCard homeHref="/operator" />}
        {showPermissionDenied && <PermissionDeniedCard dashboardHref="/operator" />}
        {showLoading && <LoadingBlock label="Loading entries…" />}

        {showEmpty && (
          <EmptyState
            title="No entries to correct"
            description="There are no sales or meter readings available for correction on this shift."
            action={
              <Button variant="outline" onClick={handleClose}>
                Close
              </Button>
            }
          />
        )}

        {(showReady || showOffline) && !showEmpty && (
          <Card className="w-full overflow-hidden shadow-[var(--shadow-soft)]">
            <div className="bg-[linear-gradient(135deg,#ff385c_0%,#e31c5f_100%)] px-6 py-8 text-white">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <CardTitle className="flex items-center gap-2 text-3xl text-white">
                  <FilePenLine className="h-7 w-7" />
                  Correction request
                </CardTitle>
                {submitted && <Badge variant="warning">Pending review</Badge>}
              </div>
              <p className="mt-2 text-sm text-white/85">
                Select a sale entry and describe what needs to be fixed.
              </p>
            </div>
            <CardHeader className="sr-only">
              <CardTitle>Correction request</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 pt-6">
              {showOffline && (
                <Badge variant="warning" className="w-full justify-center py-2">
                  Offline · request queues until sync
                </Badge>
              )}

              {!hasEntries ? (
                <EmptyState
                  title="No entries to correct"
                  description="Record sales during your shift, then return here if something needs adjustment."
                  action={
                    <Button variant="outline" onClick={handleClose}>
                      Close
                    </Button>
                  }
                />
              ) : (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="entry-select">Entry to correct</Label>
                    <Select
                      value={selectedEntry}
                      onValueChange={setSelectedEntry}
                      disabled={submitted}
                    >
                      <SelectTrigger id="entry-select">
                        <SelectValue placeholder="Choose a sale entry" />
                      </SelectTrigger>
                      <SelectContent>
                        {sales.map((sale) => (
                          <SelectItem key={sale.id} value={sale.id}>
                            {formatSaleOption(sale)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason">Correction reason</Label>
                    <Textarea
                      id="reason"
                      placeholder="Describe the error — wrong liters, payment type, pump reset, etc."
                      className="min-h-[120px]"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      disabled={submitted}
                    />
                  </div>

                  {submitted && (
                    <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                      Your correction request is pending manager review. You&apos;ll be notified
                      when it&apos;s approved or rejected.
                    </div>
                  )}

                  <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                    <Button variant="outline" size="lg" onClick={handleClose}>
                      Close
                    </Button>
                    {!submitted ? (
                      <Button
                        size="lg"
                        onClick={handleSubmit}
                        disabled={!selectedEntry || !reason.trim()}
                      >
                        Submit correction
                      </Button>
                    ) : (
                      <Button size="lg" variant="secondary" onClick={handleClose}>
                        Done
                      </Button>
                    )}
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </AppShell>
  );
}
