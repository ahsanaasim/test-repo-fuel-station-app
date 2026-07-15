"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, Droplets, Plus } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { managerNav } from "@/components/layout/top-nav";
import { EditorialListHeader } from "@/components/shared/editorial";
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
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { tanks as initialTanks, type FuelType, type Tank } from "@/data/mock";
import { usePageReady } from "@/hooks/use-page-state";
import { formatLiters, formatPercent } from "@/lib/utils";

const FUEL_TYPES: FuelType[] = ["Petrol", "Diesel", "Premium"];

export default function ManagerTanksPage() {
  const {
    showLoading,
    showEmpty,
    showPlanLimit,
    showPermissionDenied,
    showReady,
    showOffline,
  } = usePageReady();

  const [tankList] = useState(initialTanks);
  const [fuelFilter, setFuelFilter] = useState("all");
  const [alertFilter, setAlertFilter] = useState("all");
  const [selectedTank, setSelectedTank] = useState<Tank | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  const filtered = useMemo(() => {
    return tankList.filter((tank) => {
      if (fuelFilter !== "all" && tank.fuelType !== fuelFilter) return false;
      if (alertFilter === "low" && !tank.lowAlert) return false;
      if (alertFilter === "healthy" && tank.lowAlert) return false;
      return true;
    });
  }, [tankList, fuelFilter, alertFilter]);

  const openTank = (tank: Tank) => {
    setSelectedTank(tank);
    setSheetOpen(true);
  };

  return (
    <AppShell navItems={managerNav} homeHref="/manager">
      <div className="mb-6">
        <EditorialListHeader
          title="Tank levels"
          description="Monitor fuel inventory across all underground tanks."
          badge={
            <Badge variant={tankList.some((tank) => tank.lowAlert) ? "warning" : "success"}>
              {tankList.filter((tank) => tank.lowAlert).length} low stock
            </Badge>
          }
          actions={
            <Button variant="outline" onClick={() => alert("Add tank flow coming soon")}>
              <Plus className="h-4 w-4" />
              Add tank
            </Button>
          }
        />
      </div>

      <StatusBanner />

      {showPlanLimit && <PlanLimitCard homeHref="/manager" />}
      {showPermissionDenied && <PermissionDeniedCard dashboardHref="/manager" />}
      {showLoading && <SkeletonCards count={4} />}

      {showEmpty && (
        <EmptyState
          title="No tanks configured"
          description="Add your first underground tank to start tracking fuel levels and low-stock alerts."
          action={
            <Button onClick={() => alert("Add tank flow coming soon")}>
              <Plus className="h-4 w-4" />
              Add tank
            </Button>
          }
        />
      )}

      {(showReady || showOffline) && (
        <div className="space-y-4">
          <Card>
            <CardContent className="flex flex-wrap gap-4 p-4">
              <div className="min-w-[10rem] flex-1 space-y-1.5">
                <Label>Fuel type</Label>
                <Select value={fuelFilter} onValueChange={setFuelFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All types</SelectItem>
                    {FUEL_TYPES.map((ft) => (
                      <SelectItem key={ft} value={ft}>
                        {ft}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="min-w-[10rem] flex-1 space-y-1.5">
                <Label>Alert status</Label>
                <Select value={alertFilter} onValueChange={setAlertFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All tanks" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All tanks</SelectItem>
                    <SelectItem value="low">Low stock only</SelectItem>
                    <SelectItem value="healthy">Healthy only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {filtered.length === 0 ? (
            <EmptyState
              title="No tanks match your filters"
              description="Clear the filters or add a new tank to get started."
              action={
                <Button
                  variant="outline"
                  onClick={() => {
                    setFuelFilter("all");
                    setAlertFilter("all");
                  }}
                >
                  Clear filters
                </Button>
              }
            />
          ) : (
            <div className="space-y-4">
              {filtered.map((tank) => {
                const pct = (tank.currentLevel / tank.capacity) * 100;
                return (
                  <Card
                    key={tank.id}
                    className={`cursor-pointer transition-shadow hover:shadow-[var(--shadow-soft)] ${
                      tank.lowAlert ? "border-rose-200" : ""
                    }`}
                    onClick={() => openTank(tank)}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <Droplets className="h-5 w-5 text-[var(--accent)]" />
                          {tank.number}
                        </CardTitle>
                        {tank.lowAlert && (
                          <Badge variant="danger">
                            <AlertTriangle className="h-3 w-3" />
                            Low
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Badge variant="secondary">{tank.fuelType}</Badge>
                      <div>
                        <div className="mb-1 flex justify-between text-sm">
                          <span className="font-semibold">{formatLiters(tank.currentLevel)}</span>
                          <span className="text-[var(--muted-foreground)]">
                            of {formatLiters(tank.capacity)}
                          </span>
                        </div>
                        <Progress
                          value={pct}
                          indicatorClassName={tank.lowAlert ? "bg-[var(--danger)]" : undefined}
                        />
                        <p className="mt-1 text-xs text-[var(--muted-foreground)]">
                          {formatPercent(pct)} full
                        </p>
                      </div>
                      <p className="text-xs text-[var(--muted-foreground)]">
                        Updated {new Date(tank.lastUpdated).toLocaleString()}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      )}

      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="right" className="overflow-y-auto">
          {selectedTank && (
            <>
              <SheetHeader>
                <SheetTitle>
                  {selectedTank.number} · {selectedTank.fuelType}
                </SheetTitle>
                <SheetDescription>
                  Last updated {new Date(selectedTank.lastUpdated).toLocaleString()}
                </SheetDescription>
              </SheetHeader>

              <div className="mt-6 space-y-6">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{selectedTank.fuelType}</Badge>
                  {selectedTank.lowAlert ? (
                    <Badge variant="danger">Low stock alert</Badge>
                  ) : (
                    <Badge variant="success">Healthy</Badge>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold">Current level</span>
                    <span>
                      {formatPercent(
                        (selectedTank.currentLevel / selectedTank.capacity) * 100,
                      )}
                    </span>
                  </div>
                  <Progress
                    value={(selectedTank.currentLevel / selectedTank.capacity) * 100}
                    indicatorClassName={
                      selectedTank.lowAlert ? "bg-[var(--danger)]" : undefined
                    }
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 rounded-lg bg-[var(--muted)]/60 p-4 text-sm">
                  <div>
                    <p className="text-[var(--muted-foreground)]">Current</p>
                    <p className="font-heading text-xl font-semibold">
                      {formatLiters(selectedTank.currentLevel)}
                    </p>
                  </div>
                  <div>
                    <p className="text-[var(--muted-foreground)]">Capacity</p>
                    <p className="font-heading text-xl font-semibold">
                      {formatLiters(selectedTank.capacity)}
                    </p>
                  </div>
                  <div>
                    <p className="text-[var(--muted-foreground)]">Available</p>
                    <p className="font-semibold">
                      {formatLiters(selectedTank.capacity - selectedTank.currentLevel)}
                    </p>
                  </div>
                  <div>
                    <p className="text-[var(--muted-foreground)]">Tank ID</p>
                    <p className="font-semibold">{selectedTank.id}</p>
                  </div>
                </div>

                {selectedTank.lowAlert && (
                  <div className="rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900">
                    <p className="font-semibold">Reorder recommended</p>
                    <p className="mt-1">
                      This tank is below the safe threshold. Schedule a delivery soon.
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </AppShell>
  );
}
