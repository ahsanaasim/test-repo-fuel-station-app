"use client";

import { useMemo, useState } from "react";
import { ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";
import { AppShell, TwoColumn } from "@/components/layout/app-shell";
import { ownerNav } from "@/components/layout/top-nav";
import { HelpPanel } from "@/components/shared/page-chrome";
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
import { auditLog } from "@/data/mock";
import { usePageReady } from "@/hooks/use-page-state";

const PAGE_SIZE = 3;
const DEFAULT_DATE_FROM = "2026-07-13";
const DEFAULT_DATE_TO = "2026-07-15";

const ACTION_TYPES = [...new Set(auditLog.map((e) => e.action))];
const USERS = [...new Set(auditLog.map((e) => e.user))];
const STATIONS = [...new Set(auditLog.map((e) => e.station))];

export default function AuditLogPage() {
  const [dateFrom, setDateFrom] = useState(DEFAULT_DATE_FROM);
  const [dateTo, setDateTo] = useState(DEFAULT_DATE_TO);
  const [userFilter, setUserFilter] = useState("all");
  const [actionFilter, setActionFilter] = useState("all");
  const [stationFilter, setStationFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const {
    showLoading,
    showEmpty,
    showPlanLimit,
    showPermissionDenied,
    showReady,
    showOffline,
  } = usePageReady();

  const filtered = useMemo(() => {
    const from = new Date(`${dateFrom}T00:00:00`);
    const to = new Date(`${dateTo}T23:59:59`);

    return auditLog.filter((entry) => {
      const ts = new Date(entry.timestamp);
      const inRange = ts >= from && ts <= to;
      const matchesUser = userFilter === "all" || entry.user === userFilter;
      const matchesAction = actionFilter === "all" || entry.action === actionFilter;
      const matchesStation = stationFilter === "all" || entry.station === stationFilter;
      return inRange && matchesUser && matchesAction && matchesStation;
    });
  }, [dateFrom, dateTo, userFilter, actionFilter, stationFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const resetPage = () => setPage(1);

  return (
    <AppShell navItems={ownerNav} homeHref="/owner">
      <EditorialListHeader
        title="Audit log"
        description="Immutable trail of operator, manager, and owner actions across stations."
        badge={
          <Badge variant="secondary">
            {filtered.length} {filtered.length === 1 ? "entry" : "entries"}
          </Badge>
        }
      />

      <div className="mt-6">
        <StatusBanner />
      </div>

      {showPlanLimit && <PlanLimitCard homeHref="/owner" />}
      {showPermissionDenied && <PermissionDeniedCard dashboardHref="/owner" />}
      {showLoading && <SkeletonRows count={6} />}
      {showEmpty && (
        <EmptyState
          title="No audit entries yet"
          description="Actions like shift starts, sales, and verifications will appear here automatically."
        />
      )}

      {(showReady || showOffline) && (
        <TwoColumn
          main={
            <>
              <FacetRow>
                <FacetChip
                  active={dateFrom !== DEFAULT_DATE_FROM || dateTo !== DEFAULT_DATE_TO}
                  onClick={() => {
                    setDateFrom(DEFAULT_DATE_FROM);
                    setDateTo(DEFAULT_DATE_TO);
                    resetPage();
                  }}
                >
                  {dateFrom} to {dateTo}
                </FacetChip>
                <FacetChip
                  active={userFilter !== "all"}
                  onClick={() => {
                    setUserFilter("all");
                    resetPage();
                  }}
                >
                  User: {userFilter === "all" ? "All users" : userFilter}
                </FacetChip>
                <FacetChip
                  active={actionFilter !== "all"}
                  onClick={() => {
                    setActionFilter("all");
                    resetPage();
                  }}
                >
                  Action: {actionFilter === "all" ? "All actions" : actionFilter}
                </FacetChip>
                <FacetChip
                  active={stationFilter !== "all"}
                  onClick={() => {
                    setStationFilter("all");
                    resetPage();
                  }}
                >
                  Station: {stationFilter === "all" ? "All stations" : stationFilter}
                </FacetChip>
              </FacetRow>

              <Card>
                <CardHeader>
                  <CardTitle>Filters</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="space-y-2">
                    <Label htmlFor="date-from">From</Label>
                    <Input
                      id="date-from"
                      type="date"
                      value={dateFrom}
                      onChange={(e) => {
                        setDateFrom(e.target.value);
                        resetPage();
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="date-to">To</Label>
                    <Input
                      id="date-to"
                      type="date"
                      value={dateTo}
                      onChange={(e) => {
                        setDateTo(e.target.value);
                        resetPage();
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>User</Label>
                    <Select
                      value={userFilter}
                      onValueChange={(v) => {
                        setUserFilter(v);
                        resetPage();
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All users</SelectItem>
                        {USERS.map((user) => (
                          <SelectItem key={user} value={user}>
                            {user}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Action type</Label>
                    <Select
                      value={actionFilter}
                      onValueChange={(v) => {
                        setActionFilter(v);
                        resetPage();
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All actions</SelectItem>
                        {ACTION_TYPES.map((action) => (
                          <SelectItem key={action} value={action}>
                            {action}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label>Station</Label>
                    <Select
                      value={stationFilter}
                      onValueChange={(v) => {
                        setStationFilter(v);
                        resetPage();
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All stations</SelectItem>
                        {STATIONS.map((station) => (
                          <SelectItem key={station} value={station}>
                            {station}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-end sm:col-span-2">
                    <Badge variant="secondary">
                      {filtered.length} {filtered.length === 1 ? "entry" : "entries"} matching
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0">
                  {filtered.length === 0 ? (
                    <div className="px-6 py-12 text-center text-sm text-[var(--muted-foreground)]">
                      No audit entries match the current filters. Try widening the date range.
                    </div>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-8" />
                          <TableHead>Timestamp</TableHead>
                          <TableHead>User</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Action</TableHead>
                          <TableHead>Details</TableHead>
                          <TableHead>Station</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {pageItems.map((entry) => {
                          const expanded = expandedId === entry.id;
                          return (
                            <TableRow
                              key={entry.id}
                              className="cursor-pointer"
                              onClick={() =>
                                setExpandedId(expanded ? null : entry.id)
                              }
                              data-expanded={expanded}
                            >
                              <TableCell>
                                {expanded ? (
                                  <ChevronDown className="h-4 w-4 text-[var(--muted-foreground)]" />
                                ) : (
                                  <ChevronRight className="h-4 w-4 text-[var(--muted-foreground)]" />
                                )}
                              </TableCell>
                              <TableCell className="whitespace-nowrap">
                                {new Date(entry.timestamp).toLocaleString()}
                              </TableCell>
                              <TableCell className="font-semibold">{entry.user}</TableCell>
                              <TableCell>
                                <Badge variant="outline">{entry.role}</Badge>
                              </TableCell>
                              <TableCell>{entry.action}</TableCell>
                              <TableCell className="max-w-[280px]">
                                <p className={expanded ? "" : "truncate"}>{entry.details}</p>
                                {expanded && (
                                  <p className="mt-2 text-xs text-[var(--muted-foreground)]">
                                    Entry ID: {entry.id}
                                  </p>
                                )}
                              </TableCell>
                              <TableCell>{entry.station}</TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  )}
                </CardContent>
              </Card>

              {filtered.length > 0 && (
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[var(--muted-foreground)]">
                    Page {currentPage} of {totalPages}
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={currentPage <= 1}
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={currentPage >= totalPages}
                      onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    >
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </>
          }
          rail={
            <HelpPanel
              title="Audit log guide"
              tips={[
                "Filter by station to isolate actions at a single location.",
                "Expand any row to see the full detail payload and entry ID.",
                "Export-ready logs are available from the reports hub.",
              ]}
            />
          }
        />
      )}
    </AppShell>
  );
}
