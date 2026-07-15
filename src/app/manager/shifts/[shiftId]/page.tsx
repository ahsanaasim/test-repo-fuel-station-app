"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { ArrowLeft, Check, MessageSquare, X } from "lucide-react";
import { AppShell, TwoColumn } from "@/components/layout/app-shell";
import { managerNav } from "@/components/layout/top-nav";
import { ActivityRail } from "@/components/shared/dashboard-gallery";
import {
  EmptyState,
  LoadingBlock,
  PermissionDeniedCard,
  PlanLimitCard,
  StatusBanner,
} from "@/components/shared/status-frames";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { auditLog, shifts, type Shift } from "@/data/mock";
import { usePageReady } from "@/hooks/use-page-state";
import { formatCurrency, formatLiters } from "@/lib/utils";

function statusVariant(status: Shift["status"]) {
  switch (status) {
    case "Pending":
      return "warning" as const;
    case "Verified":
      return "success" as const;
    case "Rejected":
      return "danger" as const;
    case "Active":
      return "info" as const;
    default:
      return "secondary" as const;
  }
}

export default function ShiftDetailPage() {
  const params = useParams<{ shiftId: string }>();
  const router = useRouter();
  const {
    showLoading,
    showEmpty,
    showPlanLimit,
    showPermissionDenied,
    showReady,
    showOffline,
  } = usePageReady();

  const shift = useMemo(
    () => shifts.find((s) => s.id === params.shiftId) ?? null,
    [params.shiftId],
  );
  const [status, setStatus] = useState<Shift["status"] | null>(null);
  const [approveOpen, setApproveOpen] = useState(false);
  const [rejectOpen, setRejectOpen] = useState(false);
  const [note, setNote] = useState("");
  const [rejectReason, setRejectReason] = useState("");

  const currentStatus = status ?? shift?.status ?? "Pending";

  return (
    <AppShell navItems={managerNav} homeHref="/manager">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <Button asChild variant="ghost" size="sm">
          <Link href="/manager/shifts">
            <ArrowLeft className="h-4 w-4" />
            Back to shifts
          </Link>
        </Button>
      </div>

      <StatusBanner />
      {showPlanLimit && <PlanLimitCard homeHref="/manager" />}
      {showPermissionDenied && <PermissionDeniedCard dashboardHref="/manager" />}
      {showLoading && <LoadingBlock label="Loading shift details…" />}
      {showEmpty && (
        <EmptyState
          title="Shift not found"
          description="This shift may have been removed or is outside your filter."
          action={
            <Button asChild>
              <Link href="/manager/shifts">Return to list</Link>
            </Button>
          }
        />
      )}

      {(showReady || showOffline) && !shift && !showEmpty && (
        <EmptyState
          title="Shift not found"
          description={`No shift matches id ${params.shiftId}.`}
          action={
            <Button asChild>
              <Link href="/manager/shifts">Return to list</Link>
            </Button>
          }
        />
      )}

      {(showReady || showOffline) && shift && (
        <TwoColumn
          main={
            <>
              <Card>
                <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[var(--muted-foreground)]">
                      Shift {shift.id}
                    </p>
                    <CardTitle className="font-heading text-3xl">
                      {shift.operatorName}
                    </CardTitle>
                    <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                      {new Date(shift.dateTime).toLocaleString()} · {shift.station}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant={statusVariant(currentStatus)}>{currentStatus}</Badge>
                    <Button size="sm" onClick={() => setApproveOpen(true)}>
                      <Check className="h-4 w-4" />
                      Approve
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => setRejectOpen(true)}>
                      <X className="h-4 w-4" />
                      Reject
                    </Button>
                    <Button size="sm" variant="outline">
                      <MessageSquare className="h-4 w-4" />
                      Request clarification
                    </Button>
                  </div>
                </CardHeader>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <Metric label="Total sales" value={formatCurrency(shift.totalSales)} />
                <Metric label="Liters sold" value={formatLiters(shift.totalLiters)} />
                <Metric label="Cash counted" value={formatCurrency(shift.cashAmount)} />
                <Metric
                  label="Cash variance"
                  value={formatCurrency(shift.variance)}
                  tone={shift.variance < 0 ? "danger" : shift.variance > 0 ? "warning" : "success"}
                />
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Meter readings</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg bg-[var(--muted)]/60 p-4">
                    <p className="text-sm text-[var(--muted-foreground)]">Opening meter</p>
                    <p className="font-heading text-2xl">{shift.openingMeter.toLocaleString()}</p>
                  </div>
                  <div className="rounded-lg bg-[var(--muted)]/60 p-4">
                    <p className="text-sm text-[var(--muted-foreground)]">Closing meter</p>
                    <p className="font-heading text-2xl">
                      {shift.closingMeter
                        ? shift.closingMeter.toLocaleString()
                        : "Still open"}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cash &amp; card breakdown</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-lg border border-[var(--border)] p-4">
                    <p className="text-sm text-[var(--muted-foreground)]">Expected cash</p>
                    <p className="font-heading text-xl">
                      {formatCurrency(shift.cashAmount - shift.variance)}
                    </p>
                  </div>
                  <div className="rounded-lg border border-[var(--border)] p-4">
                    <p className="text-sm text-[var(--muted-foreground)]">Card amount</p>
                    <p className="font-heading text-xl">{formatCurrency(shift.cardAmount)}</p>
                  </div>
                  <div className="rounded-lg border border-[var(--border)] p-4">
                    <p className="text-sm text-[var(--muted-foreground)]">Correction requested</p>
                    <Badge variant={shift.correctionRequested ? "warning" : "success"}>
                      {shift.correctionRequested ? "Yes — review notes" : "None"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </>
          }
          rail={
            <>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Operator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 text-sm">
                  <p className="font-semibold">{shift.operatorName}</p>
                  <p className="text-[var(--muted-foreground)]">{shift.station}</p>
                  <p className="text-[var(--muted-foreground)]">Shared shift login</p>
                </CardContent>
              </Card>
              <ActivityRail
                title="Shift timeline"
                items={[
                  { title: "Shift opened", meta: new Date(shift.dateTime).toLocaleString() },
                  {
                    title: "Sales posted",
                    meta: `${formatLiters(shift.totalLiters)} · ${formatCurrency(shift.totalSales)}`,
                  },
                  {
                    title: shift.correctionRequested
                      ? "Correction requested"
                      : "Awaiting verification",
                    meta: currentStatus,
                  },
                ]}
              />
              <ActivityRail
                title="Audit trail"
                items={auditLog.slice(0, 3).map((a) => ({
                  title: a.action,
                  meta: `${a.user} · ${new Date(a.timestamp).toLocaleTimeString()}`,
                }))}
              />
            </>
          }
        />
      )}

      <Dialog open={approveOpen} onOpenChange={setApproveOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Approve shift</DialogTitle>
            <DialogDescription>
              Confirm verification for {shift?.operatorName} on{" "}
              {shift ? new Date(shift.dateTime).toLocaleDateString() : ""}.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            <Label htmlFor="approve-note">Optional note</Label>
            <Input
              id="approve-note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Looks good — meters match sales"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setApproveOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                setStatus("Verified");
                setApproveOpen(false);
                router.refresh();
              }}
            >
              Confirm approval
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={rejectOpen} onOpenChange={setRejectOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Reject shift</DialogTitle>
            <DialogDescription>
              Tell the operator what needs fixing before they resubmit.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            <Label htmlFor="reject-reason">Rejection reason</Label>
            <Textarea
              id="reject-reason"
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              placeholder="Cash variance unexplained"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setRejectOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              disabled={!rejectReason.trim()}
              onClick={() => {
                setStatus("Rejected");
                setRejectOpen(false);
              }}
            >
              Confirm rejection
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AppShell>
  );
}

function Metric({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "danger" | "warning" | "success";
}) {
  return (
    <Card>
      <CardContent className="p-5">
        <p className="text-sm font-semibold text-[var(--muted-foreground)]">{label}</p>
        <p
          className={`font-heading mt-1 text-2xl font-semibold ${
            tone === "danger"
              ? "text-rose-700"
              : tone === "warning"
                ? "text-amber-700"
                : tone === "success"
                  ? "text-teal-700"
                  : ""
          }`}
        >
          {value}
        </p>
      </CardContent>
    </Card>
  );
}
