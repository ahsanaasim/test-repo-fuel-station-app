"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  BarChart3,
  Download,
  FileText,
  Fuel,
  TrendingUp,
} from "lucide-react";
import { AppShell, TwoColumn } from "@/components/layout/app-shell";
import { ownerNav } from "@/components/layout/top-nav";
import { ActivityRail, DashboardGallery } from "@/components/shared/dashboard-gallery";
import {
  AuditLogButton,
  NotificationsPanel,
  PageTitle,
  SettingsButton,
  StationSelector,
} from "@/components/shared/page-chrome";
import {
  EmptyState,
  PermissionDeniedCard,
  PlanLimitCard,
  SkeletonCards,
  StatusBanner,
} from "@/components/shared/status-frames";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  auditLog,
  dashboardMetrics,
  reports,
  shifts,
  tanks,
} from "@/data/mock";
import { usePageReady } from "@/hooks/use-page-state";
import { formatCurrency } from "@/lib/utils";

type DateRange = "today" | "7d" | "30d";

const DATE_RANGE_LABELS: Record<DateRange, string> = {
  today: "Today",
  "7d": "Last 7 days",
  "30d": "Last 30 days",
};

const SALES_BY_DAY = [
  { label: "Mon", value: 540 },
  { label: "Tue", value: 498 },
  { label: "Wed", value: 612 },
  { label: "Thu", value: 578 },
  { label: "Fri", value: 645 },
  { label: "Sat", value: 720 },
  { label: "Sun", value: 206 },
];

function filterShifts(station: string, range: DateRange) {
  const now = new Date("2026-07-15T12:00:00");
  const cutoff = new Date(now);
  if (range === "today") cutoff.setHours(0, 0, 0, 0);
  else if (range === "7d") cutoff.setDate(cutoff.getDate() - 7);
  else cutoff.setDate(cutoff.getDate() - 30);

  return shifts.filter((shift) => {
    const matchesStation = station === "all" || shift.station === station;
    const shiftDate = new Date(shift.dateTime);
    return matchesStation && shiftDate >= cutoff;
  });
}

export default function OwnerOverviewPage() {
  const [station, setStation] = useState("all");
  const [dateRange, setDateRange] = useState<DateRange>("7d");

  const {
    showLoading,
    showEmpty,
    showPlanLimit,
    showPermissionDenied,
    showReady,
    showOffline,
  } = usePageReady();

  const filteredShifts = useMemo(
    () => filterShifts(station, dateRange),
    [station, dateRange],
  );

  const metrics = useMemo(() => {
    const totalSales = filteredShifts.reduce((sum, s) => sum + s.totalSales, 0);
    const totalVariance = filteredShifts.reduce((sum, s) => sum + s.variance, 0);
    const activeShift = filteredShifts.find((s) => s.status === "Active");
    const salesScale =
      dateRange === "today" ? 0.35 : dateRange === "7d" ? 0.75 : 1;

    return {
      todaysSales: dateRange === "today" ? dashboardMetrics.todaysSales : totalSales,
      cashVariance: dateRange === "today" ? dashboardMetrics.cashVariance : totalVariance,
      activeLabel: activeShift
        ? `${activeShift.operatorName} · ${activeShift.station}`
        : "No active shift in range",
      salesChart: SALES_BY_DAY.map((d) => ({
        ...d,
        value: Math.round(d.value * salesScale * (station === "all" ? 1 : 0.55)),
      })),
    };
  }, [filteredShifts, station, dateRange]);

  const stationTanks = useMemo(() => {
    if (station === "all") return tanks;
    if (station === "Central Avenue") return tanks;
    return tanks.map((t) => ({ ...t, currentLevel: Math.round(t.currentLevel * 0.85) }));
  }, [station]);

  const readyReports = reports.filter((r) => r.status === "Ready").slice(0, 3);

  return (
    <AppShell navItems={ownerNav} homeHref="/owner">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <PageTitle
          title="Owner overview"
          description="Full station pulse — sales, tanks, shifts, and cash across your network."
        />
        <div className="flex flex-wrap items-center gap-2">
          <StationSelector value={station} onChange={setStation} />
          <SettingsButton />
          <AuditLogButton />
        </div>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <Select value={dateRange} onValueChange={(v) => setDateRange(v as DateRange)}>
          <SelectTrigger className="w-[160px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {(Object.keys(DATE_RANGE_LABELS) as DateRange[]).map((key) => (
              <SelectItem key={key} value={key}>
                {DATE_RANGE_LABELS[key]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Badge variant="secondary">
          {station === "all" ? "All stations" : station} · {DATE_RANGE_LABELS[dateRange]}
        </Badge>
      </div>

      <StatusBanner />

      {showPlanLimit && <PlanLimitCard homeHref="/owner" />}
      {showPermissionDenied && <PermissionDeniedCard dashboardHref="/owner" />}
      {showLoading && <SkeletonCards count={6} />}
      {showEmpty && (
        <EmptyState
          title="No station data in this range"
          description="Adjust the date range or station filter, or start a shift to populate the owner board."
          action={
            <Button asChild>
              <Link href="/operator/shift-start/step-1">Start a shift</Link>
            </Button>
          }
        />
      )}

      {(showReady || showOffline) && (
        <TwoColumn
          main={
            <>
              {showOffline && (
                <Badge variant="warning" className="mb-2">
                  Offline · showing cached station snapshot
                </Badge>
              )}

              <DashboardGallery
                tanksData={stationTanks}
                sales={metrics.todaysSales}
                variance={metrics.cashVariance}
                activeLabel={metrics.activeLabel}
              />

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-[var(--accent)]" />
                    Sales trend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end justify-between gap-2 sm:gap-3">
                    {metrics.salesChart.map((day) => {
                      const max = Math.max(...metrics.salesChart.map((d) => d.value), 1);
                      const height = Math.max((day.value / max) * 100, 8);
                      return (
                        <div key={day.label} className="flex flex-1 flex-col items-center gap-2">
                          <span className="text-xs font-semibold text-[var(--muted-foreground)]">
                            {formatCurrency(day.value)}
                          </span>
                          <div
                            className="w-full max-w-[48px] rounded-t-md bg-[var(--accent)] transition-all duration-300"
                            style={{ height: `${height}px` }}
                            title={`${day.label}: ${formatCurrency(day.value)}`}
                          />
                          <span className="text-xs font-semibold">{day.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick actions</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Button asChild>
                    <Link href="/manager/reports">
                      <TrendingUp className="h-4 w-4" />
                      Open reports
                    </Link>
                  </Button>
                  <Button asChild variant="secondary">
                    <Link href="/manager/tanks">
                      <Fuel className="h-4 w-4" />
                      Tank inventory
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/owner/audit-log">
                      <FileText className="h-4 w-4" />
                      View audit log
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/owner/settings">
                      <Download className="h-4 w-4" />
                      Station settings
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </>
          }
          rail={
            <>
              <ActivityRail
                items={auditLog.slice(0, 4).map((entry) => ({
                  title: entry.action,
                  meta: `${entry.user} · ${new Date(entry.timestamp).toLocaleString()} · ${entry.station}`,
                }))}
              />
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Quick reports</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {readyReports.map((report) => (
                    <Link
                      key={report.id}
                      href="/manager/reports"
                      className="block rounded-md border border-[var(--border)] px-3 py-2 transition-colors hover:bg-[var(--muted)]/60"
                    >
                      <p className="text-sm font-semibold">{report.name}</p>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        {report.type} · {report.period}
                      </p>
                    </Link>
                  ))}
                </CardContent>
              </Card>
              <NotificationsPanel
                title="Owner alerts"
                items={[
                  {
                    title: "Low tank: T-02 Diesel",
                    meta: "Central Avenue · 19% remaining",
                    variant: "warning",
                  },
                  {
                    title: "Shift pending verification",
                    meta: "Omar Riaz · Jul 14 evening",
                    variant: "warning",
                  },
                  {
                    title: "Daily sales snapshot ready",
                    meta: "Jul 15, 2026",
                    variant: "info",
                  },
                ]}
              />
            </>
          }
        />
      )}
    </AppShell>
  );
}
