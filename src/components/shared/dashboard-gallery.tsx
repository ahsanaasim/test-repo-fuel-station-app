"use client";

import { AlertTriangle, Droplets, Wallet } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { dashboardMetrics, tanks, type Tank } from "@/data/mock";
import { formatCurrency, formatLiters, formatPercent } from "@/lib/utils";

export function DashboardGallery({
  tanksData = tanks,
  sales = dashboardMetrics.todaysSales,
  variance = dashboardMetrics.cashVariance,
  activeLabel = `${dashboardMetrics.activeShift.operator} · since 6:00 AM`,
}: {
  tanksData?: Tank[];
  sales?: number;
  variance?: number;
  activeLabel?: string;
}) {
  const lowTanks = tanksData.filter((t) => t.lowAlert);

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      <Card className="sm:col-span-2 xl:col-span-1 overflow-hidden border-transparent bg-[var(--accent)] text-white shadow-[var(--shadow-soft)]">
        <CardHeader className="pb-2">
          <CardTitle className="text-white/90">Today&apos;s sales</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-heading text-4xl font-semibold">{formatCurrency(sales)}</p>
          <p className="mt-2 text-sm text-white/80">
            {Object.entries(dashboardMetrics.litersSold)
              .map(([k, v]) => `${k} ${formatLiters(v)}`)
              .join(" · ")}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Droplets className="h-5 w-5 text-[var(--accent)]" />
            Fuel left
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {tanksData.slice(0, 3).map((tank) => {
            const pct = (tank.currentLevel / tank.capacity) * 100;
            return (
              <div key={tank.id}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-semibold">
                    {tank.number} · {tank.fuelType}
                  </span>
                  <span>{formatPercent(pct)}</span>
                </div>
                <Progress
                  value={pct}
                  indicatorClassName={tank.lowAlert ? "bg-[var(--danger)]" : undefined}
                />
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Active shift</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Badge variant="success">Active</Badge>
          <p className="text-sm text-[var(--muted-foreground)]">{activeLabel}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Wallet className="h-5 w-5 text-[var(--accent)]" />
            Cash variance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Badge variant={variance < 0 ? "danger" : variance > 0 ? "warning" : "success"}>
            {formatCurrency(variance)}
          </Badge>
          <p className="mt-3 text-sm text-[var(--muted-foreground)]">
            Compared to expected cash from sales tonight.
          </p>
        </CardContent>
      </Card>

      <Card className={lowTanks.length ? "border-rose-200 sm:col-span-2" : "sm:col-span-2"}>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg">
            <AlertTriangle
              className={`h-5 w-5 ${lowTanks.length ? "text-[var(--danger)]" : "text-teal-600"}`}
            />
            Low tank alerts
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {lowTanks.length === 0 ? (
            <Badge variant="success">All tanks healthy</Badge>
          ) : (
            lowTanks.map((tank) => (
              <Badge key={tank.id} variant={tank.currentLevel / tank.capacity < 0.2 ? "danger" : "warning"}>
                {tank.number} {tank.fuelType} · {formatPercent((tank.currentLevel / tank.capacity) * 100)}
              </Badge>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export function ActivityRail({
  title = "Recent activity",
  items,
}: {
  title?: string;
  items: { title: string; meta: string }[];
}) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map((item) => (
          <div key={item.title + item.meta} className="rounded-md bg-[var(--muted)]/70 px-3 py-2">
            <p className="text-sm font-semibold">{item.title}</p>
            <p className="text-xs text-[var(--muted-foreground)]">{item.meta}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
