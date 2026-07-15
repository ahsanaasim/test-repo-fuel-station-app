"use client";

import Link from "next/link";
import { AlertTriangle, Clock3, Droplets, Wallet } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EditorialHero, EditorialSection } from "@/components/shared/editorial";
import { dashboardMetrics, tanks, type Tank } from "@/data/mock";
import { formatCurrency, formatLiters, formatPercent } from "@/lib/utils";

export function EditorialDashboard({
  tanksData = tanks,
  sales = dashboardMetrics.todaysSales,
  variance = dashboardMetrics.cashVariance,
  activeLabel = `${dashboardMetrics.activeShift.operator} · since 6:00 AM`,
  role = "operator",
}: {
  tanksData?: Tank[];
  sales?: number;
  variance?: number;
  activeLabel?: string;
  role?: "operator" | "manager";
}) {
  const lowTanks = tanksData.filter((t) => t.lowAlert);
  const isOperator = role === "operator";

  return (
    <div className="space-y-5">
      <EditorialHero
        eyebrow="Station pulse"
        title="Today's sales"
        metric={formatCurrency(sales)}
        subtitle={Object.entries(dashboardMetrics.litersSold)
          .map(([k, v]) => `${k} ${formatLiters(v)}`)
          .join(" · ")}
      >
        {isOperator ? (
          <Button asChild size="lg" variant="secondary" className="bg-white text-[var(--accent)] hover:bg-white/90">
            <Link href="/operator/sale-entry">Add sale</Link>
          </Button>
        ) : (
          <Button asChild size="lg" variant="secondary" className="bg-white text-[var(--accent)] hover:bg-white/90">
            <Link href="/manager/reports">Open reports</Link>
          </Button>
        )}
      </EditorialHero>

      <EditorialSection
        eyebrow="Inventory story"
        title="Fuel left"
        summary={`${tanksData.length} tanks across the forecourt`}
        tone="warm"
        cta={
          isOperator ? (
            <Button asChild size="lg">
              <Link href="/operator/sale-entry">Add sale</Link>
            </Button>
          ) : (
            <Button asChild size="lg" variant="secondary">
              <Link href="/manager/tanks">View tanks</Link>
            </Button>
          )
        }
      >
        <div className="space-y-4">
          {tanksData.map((tank) => {
            const pct = (tank.currentLevel / tank.capacity) * 100;
            return (
              <div key={tank.id} className="rounded-lg bg-white/80 p-4 shadow-sm">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 font-semibold">
                    <Droplets className="h-4 w-4 text-[var(--accent)]" />
                    {tank.number} · {tank.fuelType}
                  </div>
                  <div className="flex items-center gap-2">
                    {tank.lowAlert && <Badge variant="danger">Low</Badge>}
                    <span className="text-sm font-semibold">{formatPercent(pct)}</span>
                  </div>
                </div>
                <Progress
                  value={pct}
                  indicatorClassName={tank.lowAlert ? "bg-[var(--danger)]" : undefined}
                />
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                  {formatLiters(tank.currentLevel)} of {formatLiters(tank.capacity)}
                </p>
              </div>
            );
          })}
        </div>
      </EditorialSection>

      <EditorialSection
        eyebrow="Live shift"
        title="Active shift"
        summary={activeLabel}
        tone="soft"
        cta={
          isOperator ? (
            <Button asChild size="lg" variant="outline">
              <Link href="/operator/shift-end/step-1">End shift</Link>
            </Button>
          ) : (
            <Button asChild size="lg" variant="outline">
              <Link href="/manager/shifts">Verify shifts</Link>
            </Button>
          )
        }
      >
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="success">Active</Badge>
          <span className="inline-flex items-center gap-1.5 text-sm text-[var(--muted-foreground)]">
            <Clock3 className="h-4 w-4" />
            Opened at 6:00 AM · Central Avenue
          </span>
        </div>
      </EditorialSection>

      <EditorialSection
        eyebrow="Cash desk"
        title="Cash variance"
        summary={
          <span className="inline-flex items-center gap-2">
            <Wallet className="h-6 w-6" />
            {formatCurrency(variance)}
          </span>
        }
        tone={variance < 0 ? "danger" : variance > 0 ? "warm" : "success"}
        cta={
          isOperator ? (
            <Button asChild size="lg" variant="secondary">
              <Link href="/operator/correction-request">Correction request</Link>
            </Button>
          ) : (
            <Button asChild size="lg" variant="secondary">
              <Link href="/manager/reconciliation">Reconcile cash</Link>
            </Button>
          )
        }
      >
        <p className="text-sm opacity-80">
          Compared to expected cash from recorded sales tonight. Green means it ties out.
        </p>
      </EditorialSection>

      <EditorialSection
        eyebrow="Watchlist"
        title="Low tank alerts"
        summary={
          lowTanks.length
            ? `${lowTanks.length} tank${lowTanks.length > 1 ? "s" : ""} need attention`
            : "All tanks are healthy"
        }
        tone={lowTanks.length ? "danger" : "success"}
        cta={
          !isOperator ? (
            <Button asChild size="lg" variant="outline">
              <Link href="/manager/deliveries">Log delivery</Link>
            </Button>
          ) : undefined
        }
      >
        {lowTanks.length ? (
          <ul className="space-y-2">
            {lowTanks.map((tank) => (
              <li
                key={tank.id}
                className="flex items-center gap-2 rounded-md bg-white/70 px-3 py-2 text-sm font-semibold"
              >
                <AlertTriangle className="h-4 w-4 text-[var(--danger)]" />
                {tank.number} · {tank.fuelType} · {formatLiters(tank.currentLevel)} remaining
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm opacity-80">No low-level alerts on this board right now.</p>
        )}
      </EditorialSection>
    </div>
  );
}

export function ActivityRail({
  items,
  title = "Recent activity",
}: {
  items: { title: string; meta: string }[];
  title?: string;
}) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map((item) => (
          <div
            key={item.title + item.meta}
            className="rounded-md border border-[var(--border)] bg-[var(--muted)]/40 px-3 py-2"
          >
            <p className="text-sm font-semibold">{item.title}</p>
            <p className="text-xs text-[var(--muted-foreground)]">{item.meta}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
