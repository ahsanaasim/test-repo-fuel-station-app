"use client";

import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { managerNav } from "@/components/layout/top-nav";
import {
  EmptyState,
  PermissionDeniedCard,
  PlanLimitCard,
  SkeletonRows,
  StatusBanner,
} from "@/components/shared/status-frames";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { reconciliations as initialReconciliations, shifts, type Reconciliation } from "@/data/mock";
import { usePageReady } from "@/hooks/use-page-state";
import { formatCurrency } from "@/lib/utils";

const shiftOptions = shifts
  .filter((s) => s.status !== "Active")
  .map((s) => ({
    id: s.id,
    label: `${new Date(s.dateTime).toLocaleDateString("en-US", { month: "short", day: "numeric" })} · ${s.operatorName}`,
  }));

export default function ManagerReconciliationPage() {
  const {
    showLoading,
    showEmpty,
    showPlanLimit,
    showPermissionDenied,
    showReady,
    showOffline,
  } = usePageReady();

  const [reconList, setReconList] = useState(initialReconciliations);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState({
    shift: "",
    expectedCash: "",
    countedCash: "",
    cardAmount: "",
  });

  const computedVariance = useMemo(() => {
    const expected = parseFloat(form.expectedCash) || 0;
    const counted = parseFloat(form.countedCash) || 0;
    return counted - expected;
  }, [form.expectedCash, form.countedCash]);

  const resetForm = () => {
    setForm({ shift: "", expectedCash: "", countedCash: "", cardAmount: "" });
  };

  const handleAdd = () => {
    if (!form.shift || !form.expectedCash || !form.countedCash) return;
    const shiftLabel = shiftOptions.find((s) => s.id === form.shift)?.label ?? form.shift;
    const newRecon: Reconciliation = {
      id: `r${Date.now()}`,
      shift: shiftLabel,
      expectedCash: parseFloat(form.expectedCash),
      countedCash: parseFloat(form.countedCash),
      cardAmount: parseFloat(form.cardAmount) || 0,
      variance: computedVariance,
    };
    setReconList((prev) => [newRecon, ...prev]);
    resetForm();
    setDialogOpen(false);
  };

  return (
    <AppShell navItems={managerNav} homeHref="/manager">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-semibold">Cash reconciliation</h1>
          <p className="text-[var(--muted-foreground)]">
            Match counted cash and card totals against expected shift sales.
          </p>
        </div>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4" />
              Add reconciliation
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>New reconciliation</DialogTitle>
              <DialogDescription>
                Enter the counted cash drawer total and compare it to expected sales.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-2">
              <div className="space-y-1.5">
                <Label>Shift</Label>
                <Select
                  value={form.shift}
                  onValueChange={(v) => {
                    const matched = shifts.find((s) => s.id === v);
                    setForm((f) => ({
                      ...f,
                      shift: v,
                      expectedCash: matched ? String(matched.cashAmount) : f.expectedCash,
                      cardAmount: matched ? String(matched.cardAmount) : f.cardAmount,
                    }));
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select shift" />
                  </SelectTrigger>
                  <SelectContent>
                    {shiftOptions.map((s) => (
                      <SelectItem key={s.id} value={s.id}>
                        {s.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="expected">Expected cash</Label>
                <Input
                  id="expected"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="287.00"
                  value={form.expectedCash}
                  onChange={(e) => setForm((f) => ({ ...f, expectedCash: e.target.value }))}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="counted">Counted cash</Label>
                <Input
                  id="counted"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="290.00"
                  value={form.countedCash}
                  onChange={(e) => setForm((f) => ({ ...f, countedCash: e.target.value }))}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="card">Card amount</Label>
                <Input
                  id="card"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="285.00"
                  value={form.cardAmount}
                  onChange={(e) => setForm((f) => ({ ...f, cardAmount: e.target.value }))}
                />
              </div>
              <div className="rounded-lg bg-[var(--muted)]/60 p-4">
                <p className="text-sm text-[var(--muted-foreground)]">Computed variance</p>
                <Badge
                  className="mt-1"
                  variant={
                    computedVariance < 0
                      ? "danger"
                      : computedVariance > 0
                        ? "warning"
                        : "success"
                  }
                >
                  {formatCurrency(computedVariance)}
                </Badge>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAdd}>Save reconciliation</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <StatusBanner />

      {showPlanLimit && <PlanLimitCard homeHref="/manager" />}
      {showPermissionDenied && <PermissionDeniedCard dashboardHref="/manager" />}
      {showLoading && <SkeletonRows count={4} />}

      {showEmpty && (
        <EmptyState
          title="No reconciliations yet"
          description="After a shift ends, record the cash count to spot variances early."
          action={
            <Button onClick={() => setDialogOpen(true)}>
              <Plus className="h-4 w-4" />
              Add reconciliation
            </Button>
          }
        />
      )}

      {(showReady || showOffline) && (
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Shift</TableHead>
                  <TableHead>Expected cash</TableHead>
                  <TableHead>Counted cash</TableHead>
                  <TableHead>Card amount</TableHead>
                  <TableHead>Variance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reconList.map((recon) => (
                  <TableRow key={recon.id}>
                    <TableCell className="font-medium">{recon.shift}</TableCell>
                    <TableCell>{formatCurrency(recon.expectedCash)}</TableCell>
                    <TableCell>{formatCurrency(recon.countedCash)}</TableCell>
                    <TableCell>{formatCurrency(recon.cardAmount)}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          recon.variance < 0
                            ? "danger"
                            : recon.variance > 0
                              ? "warning"
                              : "success"
                        }
                      >
                        {formatCurrency(recon.variance)}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </AppShell>
  );
}
