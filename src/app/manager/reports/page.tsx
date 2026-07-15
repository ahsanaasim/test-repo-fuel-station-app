"use client";

import { useMemo, useState } from "react";
import {
  ArrowRightLeft,
  Download,
  FileBarChart,
  FileSpreadsheet,
  FileText,
  Receipt,
  TrendingUp,
  Warehouse,
} from "lucide-react";
import { AppShell, TwoColumn } from "@/components/layout/app-shell";
import { managerNav } from "@/components/layout/top-nav";
import { ActivityRail } from "@/components/shared/editorial-dashboard";
import { EditorialListHeader, EditorialSection } from "@/components/shared/editorial";
import {
  EmptyState,
  PermissionDeniedCard,
  PlanLimitCard,
  SkeletonCards,
  SkeletonRows,
  StatusBanner,
} from "@/components/shared/status-frames";
import { Badge } from "@/components/ui/badge";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { reports as initialReports, stations, type Report } from "@/data/mock";
import { usePageReady } from "@/hooks/use-page-state";

const REPORT_TYPES: Report["type"][] = [
  "Sales",
  "Inventory",
  "Reconciliation",
  "Expenses",
  "Variances",
];

const typeIcons: Record<Report["type"], typeof FileBarChart> = {
  Sales: TrendingUp,
  Inventory: Warehouse,
  Reconciliation: ArrowRightLeft,
  Expenses: Receipt,
  Variances: FileBarChart,
};

function statusVariant(status: Report["status"]) {
  switch (status) {
    case "Ready":
      return "success" as const;
    case "Generating":
      return "warning" as const;
    case "Failed":
      return "danger" as const;
  }
}

function downloadStub(report: Report, format: "csv" | "pdf") {
  const content =
    format === "csv"
      ? `Report,${report.name}\nType,${report.type}\nPeriod,${report.period}\nGenerated,${report.generatedOn}`
      : `${report.name} (${report.type}) — ${report.period}`;
  const blob = new Blob([content], {
    type: format === "csv" ? "text/csv" : "application/pdf",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${report.id}-${format}.${format}`;
  a.click();
  URL.revokeObjectURL(url);
}

function exportAll(format: "csv" | "pdf") {
  alert(`Export all reports as ${format.toUpperCase()} — stub download triggered.`);
}

export default function ManagerReportsPage() {
  const {
    showLoading,
    showEmpty,
    showPlanLimit,
    showPermissionDenied,
    showReady,
    showOffline,
  } = usePageReady();

  const [reportList] = useState(initialReports);
  const [typeFilter, setTypeFilter] = useState("all");
  const [dateFrom, setDateFrom] = useState("");
  const [stationFilter, setStationFilter] = useState("all");

  const filtered = useMemo(() => {
    const stationTypeMap: Record<string, Report["type"][]> = {
      "Central Avenue": ["Sales", "Reconciliation", "Expenses", "Variances"],
      "West Ring Road": ["Sales", "Inventory", "Reconciliation"],
      "Harbor Outlet": ["Sales", "Inventory", "Expenses", "Variances"],
    };
    return reportList.filter((report) => {
      if (typeFilter !== "all" && report.type !== typeFilter) return false;
      if (dateFrom) {
        const generated = report.generatedOn.slice(0, 10);
        if (generated < dateFrom) return false;
      }
      if (stationFilter !== "all") {
        const allowed = stationTypeMap[stationFilter];
        if (allowed && !allowed.includes(report.type)) return false;
      }
      return true;
    });
  }, [reportList, typeFilter, dateFrom, stationFilter]);

  const recentExports = reportList
    .filter((r) => r.status === "Ready")
    .slice(0, 4)
    .map((r) => ({
      title: r.name,
      meta: `${r.type} · ${new Date(r.generatedOn).toLocaleDateString()}`,
    }));

  return (
    <AppShell navItems={managerNav} homeHref="/manager">
      <div className="mb-6">
        <EditorialListHeader
          title="Reports & exports"
          description="Generate and download sales, inventory, and reconciliation summaries."
          badge={<Badge variant="secondary">{filtered.length} visible</Badge>}
          actions={
            <>
              <Button variant="outline" onClick={() => exportAll("csv")}>
                <FileSpreadsheet className="h-4 w-4" />
                Export CSV
              </Button>
              <Button variant="outline" onClick={() => exportAll("pdf")}>
                <FileText className="h-4 w-4" />
                Export PDF
              </Button>
            </>
          }
        />
      </div>

      <StatusBanner />

      {showPlanLimit && <PlanLimitCard homeHref="/manager" />}
      {showPermissionDenied && <PermissionDeniedCard dashboardHref="/manager" />}
      {showLoading && (
        <div className="space-y-4">
          <SkeletonCards count={5} />
          <SkeletonRows count={4} />
        </div>
      )}

      {showEmpty && (
        <EmptyState
          title="No reports available"
          description="Reports will appear here once enough shift and sales data has been collected."
          action={
            <Button variant="outline" onClick={() => exportAll("csv")}>
              Generate first report
            </Button>
          }
        />
      )}

      {(showReady || showOffline) && (
        <TwoColumn
          main={
            <div className="space-y-6">
              <div className="space-y-4">
                {REPORT_TYPES.map((type) => {
                  const Icon = typeIcons[type];
                  const count = reportList.filter((r) => r.type === type).length;
                  const latest = reportList.find((r) => r.type === type);
                  return (
                    <EditorialSection
                      key={type}
                      eyebrow="Report category"
                      title={type}
                      summary={`${count} ${count === 1 ? "report" : "reports"}${latest ? ` · ${latest.period}` : ""}`}
                      tone={latest?.status === "Failed" ? "danger" : latest?.status === "Generating" ? "warm" : "paper"}
                      cta={
                        <>
                          <Button variant="outline" onClick={() => setTypeFilter(type)}>
                            <Icon className="h-4 w-4" />
                            View {type}
                          </Button>
                          <Button
                            variant="secondary"
                            disabled={!latest || latest.status !== "Ready"}
                            onClick={() => latest && downloadStub(latest, "csv")}
                          >
                            <FileSpreadsheet className="h-4 w-4" />
                            Export CSV
                          </Button>
                          <Button
                            variant="secondary"
                            disabled={!latest || latest.status !== "Ready"}
                            onClick={() => latest && downloadStub(latest, "pdf")}
                          >
                            <Download className="h-4 w-4" />
                            Export PDF
                          </Button>
                        </>
                      }
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant={latest ? statusVariant(latest.status) : "outline"}>
                          {latest ? latest.status : "No reports"}
                        </Badge>
                        {latest && (
                          <span className="text-sm text-[var(--muted-foreground)]">
                            Latest generated {new Date(latest.generatedOn).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </EditorialSection>
                  );
                })}
              </div>

              <Card>
                <CardContent className="grid gap-4 p-4 sm:grid-cols-3">
                  <div className="space-y-1.5">
                    <Label>Report type</Label>
                    <Select value={typeFilter} onValueChange={setTypeFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="All types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All types</SelectItem>
                        {REPORT_TYPES.map((t) => (
                          <SelectItem key={t} value={t}>
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="report-date">Generated after</Label>
                    <Input
                      id="report-date"
                      type="date"
                      value={dateFrom}
                      onChange={(e) => setDateFrom(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Station</Label>
                    <Select value={stationFilter} onValueChange={setStationFilter}>
                      <SelectTrigger>
                        <SelectValue placeholder="All stations" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All stations</SelectItem>
                        {stations.map((st) => (
                          <SelectItem key={st} value={st}>
                            {st}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {filtered.length === 0 ? (
                <EmptyState
                  title="No reports match your filters"
                  description="Try a different type, date, or station filter."
                  action={
                    <Button
                      variant="outline"
                      onClick={() => {
                        setTypeFilter("all");
                        setDateFrom("");
                        setStationFilter("all");
                      }}
                    >
                      Clear filters
                    </Button>
                  }
                />
              ) : (
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Report</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Period</TableHead>
                          <TableHead>Generated</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-end">Download</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filtered.map((report) => (
                          <TableRow key={report.id}>
                            <TableCell className="font-medium">{report.name}</TableCell>
                            <TableCell>{report.type}</TableCell>
                            <TableCell>{report.period}</TableCell>
                            <TableCell className="whitespace-nowrap">
                              {new Date(report.generatedOn).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </TableCell>
                            <TableCell>
                              <Badge variant={statusVariant(report.status)}>
                                {report.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex justify-end gap-1">
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  disabled={report.status !== "Ready"}
                                  onClick={() => downloadStub(report, "csv")}
                                >
                                  <FileSpreadsheet className="h-4 w-4" />
                                  CSV
                                </Button>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  disabled={report.status !== "Ready"}
                                  onClick={() => downloadStub(report, "pdf")}
                                >
                                  <Download className="h-4 w-4" />
                                  PDF
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              )}
            </div>
          }
          rail={
            <>
              <ActivityRail title="Recent exports" items={recentExports} />
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-[var(--muted-foreground)]">
                  <p>
                    Run a <strong className="text-[var(--foreground)]">Sales</strong> report after
                    each shift closes to catch meter drift early.
                  </p>
                  <p>
                    <strong className="text-[var(--foreground)]">Reconciliation</strong> exports
                    pair well with your accountant&apos;s monthly close.
                  </p>
                  <p>
                    Failed reports usually mean incomplete shift data — verify pending shifts
                    first.
                  </p>
                </CardContent>
              </Card>
            </>
          }
        />
      )}
    </AppShell>
  );
}
