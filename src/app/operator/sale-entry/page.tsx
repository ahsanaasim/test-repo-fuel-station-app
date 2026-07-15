"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Clock, Fuel, RefreshCw } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FuelType } from "@/data/mock";
import { usePageReady } from "@/hooks/use-page-state";
import { useUiState } from "@/contexts/ui-state-context";

const FUEL_TYPES: FuelType[] = ["Petrol", "Diesel", "Premium"];
const PAYMENT_METHODS = ["Cash", "Card"] as const;

export default function SaleEntryPage() {
  const router = useRouter();
  const { isError, setScreenState } = useUiState();
  const {
    showLoading,
    showEmpty,
    showPlanLimit,
    showPermissionDenied,
    showReady,
    showOffline,
  } = usePageReady();

  const [fuelType, setFuelType] = useState<FuelType>("Petrol");
  const [liters, setLiters] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<(typeof PAYMENT_METHODS)[number]>("Cash");
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    setTimestamp(new Date().toISOString());
    const interval = window.setInterval(() => setTimestamp(new Date().toISOString()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  const formattedTime = timestamp
    ? new Date(timestamp).toLocaleString([], {
        dateStyle: "medium",
        timeStyle: "short",
      })
    : "—";

  const handleCancel = () => router.push("/operator");
  const handleConfirm = () => router.push("/operator");

  return (
    <AppShell navItems={operatorNav} homeHref="/operator">
      <div className="fixed inset-0 z-30 bg-black/25 backdrop-blur-[2px]" aria-hidden />

      <div className="relative z-40 mx-auto flex min-h-[70vh] max-w-lg items-center justify-center px-2 py-8">
        <StatusBanner />

        {showPlanLimit && <PlanLimitCard homeHref="/operator" />}
        {showPermissionDenied && <PermissionDeniedCard dashboardHref="/operator" />}
        {showLoading && <LoadingBlock label="Opening sale entry…" />}
        {showEmpty && (
          <EmptyState
            title="No active shift"
            description="Start a shift before recording fuel sales."
            action={
              <Button onClick={() => router.push("/operator/shift-start/step-1")}>
                Start shift
              </Button>
            }
          />
        )}

        {(showReady || showOffline) && (
          <Card className="w-full animate-float-in shadow-[var(--shadow-soft)]">
            <CardHeader className="border-b border-[var(--border)] bg-[var(--muted)]/30">
              <CardTitle className="flex items-center gap-2">
                <Fuel className="h-5 w-5 text-[var(--accent)]" />
                Record fuel sale
              </CardTitle>
              <p className="text-sm text-[var(--muted-foreground)]">
                Fast entry — confirm to add to today&apos;s board.
              </p>
            </CardHeader>
            <CardContent className="space-y-5 pt-6">
              {showOffline && (
                <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
                  Offline — sale saves on this device and syncs when you reconnect.
                </div>
              )}

              {isError && (
                <div className="flex flex-wrap items-center gap-3 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
                  <p className="flex-1 font-semibold">Could not save sale. Try again.</p>
                  <Button size="sm" variant="outline" onClick={() => setScreenState("ready")}>
                    <RefreshCw className="h-4 w-4" />
                    Retry
                  </Button>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="fuel-type">Fuel type</Label>
                <Select value={fuelType} onValueChange={(v) => setFuelType(v as FuelType)}>
                  <SelectTrigger id="fuel-type">
                    <SelectValue placeholder="Select fuel" />
                  </SelectTrigger>
                  <SelectContent>
                    {FUEL_TYPES.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="liters">Liters sold</Label>
                  <Input
                    id="liters"
                    type="number"
                    inputMode="decimal"
                    step="0.1"
                    min="0"
                    placeholder="0.0"
                    className="text-lg"
                    value={liters}
                    onChange={(e) => setLiters(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount (USD)</Label>
                  <Input
                    id="amount"
                    type="number"
                    inputMode="decimal"
                    step="0.01"
                    min="0"
                    placeholder="0.00"
                    className="text-lg"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="payment">Payment method</Label>
                <Select
                  value={paymentMethod}
                  onValueChange={(v) => setPaymentMethod(v as (typeof PAYMENT_METHODS)[number])}
                >
                  <SelectTrigger id="payment">
                    <SelectValue placeholder="Select payment" />
                  </SelectTrigger>
                  <SelectContent>
                    {PAYMENT_METHODS.map((method) => (
                      <SelectItem key={method} value={method}>
                        {method}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-[var(--muted)]/60 px-4 py-3 text-sm">
                <Clock className="h-4 w-4 text-[var(--accent)]" />
                <span className="text-[var(--muted-foreground)]">Timestamp</span>
                <span className="ms-auto font-semibold">{formattedTime}</span>
              </div>

              <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                <Button type="button" variant="outline" size="lg" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button type="button" size="lg" onClick={handleConfirm}>
                  Confirm sale
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </AppShell>
  );
}
