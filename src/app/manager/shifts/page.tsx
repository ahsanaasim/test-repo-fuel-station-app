"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft, Check, Eye, X } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { managerNav } from "@/components/layout/top-nav";
import { EditorialListHeader, FacetChip, FacetRow } from "@/components/shared/editorial";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { operators, shifts as initialShifts, stations, type Shift } from "@/data/mock";
import { usePageReady } from "@/hooks/use-page-state";
import { formatCurrency, formatLiters } from "@/lib/utils";

const PAGE_SIZE = 5;
const STATUSES: Shift["status"][] = ["Pending", "Verified", "Rejected", "Active", "Submitted"];

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

function formatDateTime(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function ManagerShiftsPage() {
  const {
    showLoading,
    showEmpty,
    showPlanLimit,
    showPermissionDenied,
    showReady,
    showOffline,
  } = usePageReady();

  const [shiftList, setShiftList] = useState(initialShifts);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [operator, setOperator] = useState("all");
  const [status, setStatus] = useState("all");
  const [station, setStation] = useState("all");
  const [page, setPage] = useState(1);
  const [selectedShift, setSelectedShift] = useState<Shift | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  const filtered = useMemo(() => {
    return shiftList.filter((shift) => {
      const shiftDate = shift.dateTime.slice(0, 10);
      if (dateFrom && shiftDate < dateFrom) return false;
      if (dateTo && shiftDate > dateTo) return false;
      if (operator !== "all" && shift.operatorName !== operator) return false;
      if (status !== "all" && shift.status !== status) return false;
      if (station !== "all" && shift.station !== station) return false;
      return true;
    });
  }, [shiftList, dateFrom, dateTo, operator, status, station]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const pendingCount = shiftList.filter((s) => s.status === "Pending").length;

  const updateStatus = (id: string, newStatus: "Verified" | "Rejected") => {
    setShiftList((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: newStatus } : s)),
    );
    if (selectedShift?.id === id) {
      setSelectedShift((prev) => (prev ? { ...prev, status: newStatus } : null));
    }
  };

  const openDetails = (shift: Shift) => {
    setSelectedShift(shift);
    setSheetOpen(true);
  };

  const resetFilters = () => {
    setDateFrom("");
    setDateTo("");
    setOperator("all");
    setStatus("all");
    setStation("all");
    setPage(1);
  };

  return (
    <AppShell navItems={managerNav} homeHref="/manager">
      <EditorialListHeader
        title="Shift verification"
        description="Review operator shifts, meters, and cash before closing the books."
        badge={
          pendingCount > 0 ? (
            <Badge variant="warning">{pendingCount} pending</Badge>
          ) : undefined
        }
        actions={
          <Button asChild variant="outline" size="sm">
            <Link href="/manager">
              <ArrowLeft className="h-4 w-4" />
              Back to dashboard
            </Link>
          </Button>
        }
      />

      <div className="mt-6">
      <StatusBanner />

      {showPlanLimit && <PlanLimitCard homeHref="/manager" />}
      {showPermissionDenied && <PermissionDeniedCard dashboardHref="/manager" />}
      {showLoading && <SkeletonRows count={6} />}

      {showEmpty && (
        <EmptyState
          title="No shifts to verify"
          description="When operators end their shifts, they will appear here for your review."
          action={
            <Button asChild variant="outline">
              <Link href="/manager">Back to dashboard</Link>
            </Button>
          }
        />
      )}

      {(showReady || showOffline) && (
        <div className="space-y-4">
          <div className="rounded-lg bg-white p-4 shadow-[var(--shadow-card)]">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
              Facet filters
            </p>
            <FacetRow>
              <FacetChip active={status === "all"} onClick={() => { setStatus("all"); setPage(1); }}>
                All statuses
              </FacetChip>
              {STATUSES.map((s) => (
                <FacetChip
                  key={s}
                  active={status === s}
                  onClick={() => {
                    setStatus(s);
                    setPage(1);
                  }}
                >
                  {s}
                </FacetChip>
              ))}
            </FacetRow>
            <div className="mt-3">
              <FacetRow>
                <FacetChip
                  active={operator === "all"}
                  onClick={() => {
                    setOperator("all");
                    setPage(1);
                  }}
                >
                  All operators
                </FacetChip>
                {operators.map((op) => (
                  <FacetChip
                    key={op}
                    active={operator === op}
                    onClick={() => {
                      setOperator(op);
                      setPage(1);
                    }}
                  >
                    {op}
                  </FacetChip>
                ))}
              </FacetRow>
            </div>
            <div className="mt-3">
              <FacetRow>
                <FacetChip
                  active={station === "all"}
                  onClick={() => {
                    setStation("all");
                    setPage(1);
                  }}
                >
                  All stations
                </FacetChip>
                {stations.map((st) => (
                  <FacetChip
                    key={st}
                    active={station === st}
                    onClick={() => {
                      setStation(st);
                      setPage(1);
                    }}
                  >
                    {st}
                  </FacetChip>
                ))}
                <Button type="button" variant="ghost" size="sm" onClick={resetFilters}>
                  Clear
                </Button>
              </FacetRow>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="date-from">From date</Label>
                <Input
                  id="date-from"
                  type="date"
                  value={dateFrom}
                  onChange={(e) => {
                    setDateFrom(e.target.value);
                    setPage(1);
                  }}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="date-to">To date</Label>
                <Input
                  id="date-to"
                  type="date"
                  value={dateTo}
                  onChange={(e) => {
                    setDateTo(e.target.value);
                    setPage(1);
                  }}
                />
              </div>
            </div>
          </div>

          {filtered.length === 0 ? (
            <EmptyState
              title="No shifts match your filters"
              description="Try widening the date range or clearing one of the filters."
              action={
                <Button variant="outline" onClick={resetFilters}>
                  Clear filters
                </Button>
              }
            />
          ) : (
            <>
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date / Time</TableHead>
                        <TableHead>Operator</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="hidden md:table-cell">Meters</TableHead>
                        <TableHead className="hidden lg:table-cell">Liters</TableHead>
                        <TableHead>Sales</TableHead>
                        <TableHead className="hidden sm:table-cell">Cash / Card</TableHead>
                        <TableHead>Variance</TableHead>
                        <TableHead className="hidden md:table-cell">Correction</TableHead>
                        <TableHead className="text-end">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginated.map((shift) => (
                        <TableRow key={shift.id}>
                          <TableCell className="font-medium whitespace-nowrap">
                            {formatDateTime(shift.dateTime)}
                          </TableCell>
                          <TableCell>{shift.operatorName}</TableCell>
                          <TableCell>
                            <Badge variant={statusVariant(shift.status)}>{shift.status}</Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell text-sm text-[var(--muted-foreground)]">
                            {shift.openingMeter.toLocaleString()} →{" "}
                            {shift.closingMeter ? shift.closingMeter.toLocaleString() : "—"}
                          </TableCell>
                          <TableCell className="hidden lg:table-cell">
                            {formatLiters(shift.totalLiters)}
                          </TableCell>
                          <TableCell>{formatCurrency(shift.totalSales)}</TableCell>
                          <TableCell className="hidden sm:table-cell text-sm">
                            {formatCurrency(shift.cashAmount)} / {formatCurrency(shift.cardAmount)}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                shift.variance < 0
                                  ? "danger"
                                  : shift.variance > 0
                                    ? "warning"
                                    : "success"
                              }
                            >
                              {formatCurrency(shift.variance)}
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">
                            {shift.correctionRequested ? (
                              <Badge variant="warning">Requested</Badge>
                            ) : (
                              <span className="text-[var(--muted-foreground)]">—</span>
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="flex justify-end gap-1">
                              {shift.status === "Pending" && (
                                <>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => updateStatus(shift.id, "Verified")}
                                    aria-label="Verify shift"
                                  >
                                    <Check className="h-4 w-4" />
                                    <span className="hidden sm:inline">Verify</span>
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="destructive"
                                    onClick={() => updateStatus(shift.id, "Rejected")}
                                    aria-label="Reject shift"
                                  >
                                    <X className="h-4 w-4" />
                                    <span className="hidden sm:inline">Reject</span>
                                  </Button>
                                </>
                              )}
                              <Button size="sm" variant="ghost" asChild>
                                <Link href={`/manager/shifts/${shift.id}`}>
                                  <Eye className="h-4 w-4" />
                                  <span className="hidden sm:inline">Details</span>
                                </Link>
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="hidden xl:inline-flex"
                                onClick={() => openDetails(shift)}
                              >
                                Quick view
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-[var(--muted-foreground)]">
                  Showing {(page - 1) * PAGE_SIZE + 1}–
                  {Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page <= 1}
                    onClick={() => setPage((p) => p - 1)}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={page >= totalPages}
                    onClick={() => setPage((p) => p + 1)}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="right" className="overflow-y-auto">
          {selectedShift && (
            <>
              <SheetHeader>
                <SheetTitle>{selectedShift.operatorName}&apos;s shift</SheetTitle>
                <SheetDescription>
                  {formatDateTime(selectedShift.dateTime)} · {selectedShift.station}
                </SheetDescription>
              </SheetHeader>

              <div className="mt-6 space-y-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant={statusVariant(selectedShift.status)}>
                    {selectedShift.status}
                  </Badge>
                  {selectedShift.correctionRequested && (
                    <Badge variant="warning">Correction requested</Badge>
                  )}
                </div>

                <div className="space-y-3 rounded-lg bg-[var(--muted)]/60 p-4">
                  <p className="text-sm font-semibold">Sales summary</p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-[var(--muted-foreground)]">Total liters</p>
                      <p className="font-semibold">{formatLiters(selectedShift.totalLiters)}</p>
                    </div>
                    <div>
                      <p className="text-[var(--muted-foreground)]">Total sales</p>
                      <p className="font-heading text-xl font-semibold">
                        {formatCurrency(selectedShift.totalSales)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 rounded-lg border border-[var(--border)] p-4">
                  <p className="text-sm font-semibold">Pump meters</p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-[var(--muted-foreground)]">Opening</p>
                      <p className="font-semibold">
                        {selectedShift.openingMeter.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-[var(--muted-foreground)]">Closing</p>
                      <p className="font-semibold">
                        {selectedShift.closingMeter
                          ? selectedShift.closingMeter.toLocaleString()
                          : "Still active"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 rounded-lg border border-[var(--border)] p-4">
                  <p className="text-sm font-semibold">Cash & card</p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-[var(--muted-foreground)]">Cash</p>
                      <p className="font-semibold">{formatCurrency(selectedShift.cashAmount)}</p>
                    </div>
                    <div>
                      <p className="text-[var(--muted-foreground)]">Card</p>
                      <p className="font-semibold">{formatCurrency(selectedShift.cardAmount)}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-[var(--border)] p-4">
                  <p className="text-sm font-semibold">Variance</p>
                  <Badge
                    className="mt-2"
                    variant={
                      selectedShift.variance < 0
                        ? "danger"
                        : selectedShift.variance > 0
                          ? "warning"
                          : "success"
                    }
                  >
                    {formatCurrency(selectedShift.variance)}
                  </Badge>
                </div>

                {selectedShift.status === "Pending" && (
                  <div className="flex gap-2 pt-2">
                    <Button
                      className="flex-1"
                      onClick={() => updateStatus(selectedShift.id, "Verified")}
                    >
                      <Check className="h-4 w-4" />
                      Approve shift
                    </Button>
                    <Button
                      className="flex-1"
                      variant="destructive"
                      onClick={() => updateStatus(selectedShift.id, "Rejected")}
                    >
                      <X className="h-4 w-4" />
                      Reject shift
                    </Button>
                  </div>
                )}
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
      </div>
    </AppShell>
  );
}
