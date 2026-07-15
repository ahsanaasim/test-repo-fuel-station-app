"use client";

import Link from "next/link";
import {
  Activity,
  Gauge,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";
import { BrandMark } from "@/components/layout/top-nav";
import { StatePreviewFab } from "@/components/shared/state-preview-fab";
import {
  LoadingBlock,
  PermissionDeniedCard,
  PlanLimitCard,
} from "@/components/shared/status-frames";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PRODUCT, dashboardMetrics, tanks } from "@/data/mock";
import { usePageReady } from "@/hooks/use-page-state";
import { formatCurrency, formatPercent } from "@/lib/utils";

const roles = [
  { label: "Operator login", href: "/auth/login?role=operator", tone: "default" as const },
  { label: "Manager login", href: "/auth/login?role=manager", tone: "secondary" as const },
  { label: "Accountant login", href: "/auth/login?role=accountant", tone: "outline" as const },
  { label: "Owner login", href: "/auth/login?role=owner", tone: "outline" as const },
];

const features = [
  {
    icon: Gauge,
    title: "Shift flowboard",
    body: "Start and end shifts with meter readings and cash float in a clear stepper.",
  },
  {
    icon: Activity,
    title: "Live station pulse",
    body: "See sales, fuel left, variance, and low-tank alerts at a glance.",
  },
  {
    icon: Smartphone,
    title: "Tablet-first speed",
    body: "Large touch targets and modal sale entry keep operators moving.",
  },
  {
    icon: ShieldCheck,
    title: "Manager trust layer",
    body: "Verify shifts, deliveries, expenses, and reconciliation with audit trails.",
  },
];

export default function LandingPage() {
  const {
    showLoading,
    showError,
    showPlanLimit,
    showPermissionDenied,
    showReady,
  } = usePageReady(500);

  return (
    <div className="hero-canvas min-h-screen">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6">
        <BrandMark />
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost">
            <Link href="/auth/login">Sign in</Link>
          </Button>
          <Button asChild>
            <Link href="/auth/login?role=operator">Open board</Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        {showPlanLimit && <PlanLimitCard />}
        {showPermissionDenied && <PermissionDeniedCard dashboardHref="/auth/login" />}

        {(showReady || showError || showLoading) && (
          <section className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
            <div className="animate-float-in space-y-6">
              <p className="inline-flex items-center gap-2 rounded-md bg-white/80 px-3 py-1.5 text-sm font-semibold text-[var(--accent-secondary)] shadow-sm">
                <Sparkles className="h-4 w-4" />
                Operator-first fuel ops
              </p>
              <h1 className="font-heading text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--foreground)] sm:text-6xl">
                {PRODUCT.name}
              </h1>
              <p className="max-w-xl text-lg text-[var(--muted-foreground)] sm:text-xl">
                {PRODUCT.overview}
              </p>

              {showLoading && <LoadingBlock label="Warming up the station board…" />}

              {showError && (
                <Card className="border-rose-200 bg-rose-50/70">
                  <CardContent className="space-y-3 p-5">
                    <p className="font-semibold text-rose-900">You&apos;re offline from demos.</p>
                    <p className="text-sm text-rose-800">
                      We couldn&apos;t reach the preview environment. Retry or continue with a role
                      login.
                    </p>
                    <Button onClick={() => window.location.reload()}>Retry</Button>
                  </CardContent>
                </Card>
              )}

              {!showLoading && (
                <div className="flex flex-wrap gap-3">
                  {roles.map((role) => (
                    <Button key={role.href} asChild variant={role.tone} size="lg">
                      <Link href={role.href}>{role.label}</Link>
                    </Button>
                  ))}
                </div>
              )}
            </div>

            <div className="station-preview animate-float-in relative overflow-hidden rounded-lg border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-soft)]">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[var(--muted-foreground)]">Live preview</p>
                  <p className="font-heading text-2xl font-semibold">Central Avenue</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-teal-50 px-2.5 py-1 text-xs font-bold text-teal-800">
                  <span className="h-2 w-2 animate-pulse-soft rounded-full bg-teal-500" />
                  Shift live
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <MetricTile
                  label="Today's sales"
                  value={formatCurrency(dashboardMetrics.todaysSales)}
                  accent
                />
                <MetricTile
                  label="Cash variance"
                  value={formatCurrency(dashboardMetrics.cashVariance)}
                  tone={dashboardMetrics.cashVariance < 0 ? "danger" : "success"}
                />
                {tanks.slice(0, 2).map((tank) => (
                  <div key={tank.id} className="rounded-lg bg-[var(--muted)]/70 p-4">
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-semibold">
                        {tank.number} · {tank.fuelType}
                      </span>
                      <span>{formatPercent((tank.currentLevel / tank.capacity) * 100)}</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-white">
                      <div
                        className="h-full rounded-full bg-[var(--accent)]"
                        style={{
                          width: `${(tank.currentLevel / tank.capacity) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                <Users className="h-4 w-4" />
                Built for shared operator logins and manager verification.
              </div>
            </div>
          </section>
        )}

        {!showPlanLimit && !showPermissionDenied && (
          <>
            <section className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Active shifts", value: "12" },
                { label: "Liters today", value: "4.8k" },
                { label: "Low tanks", value: "2" },
                { label: "Pending reviews", value: "5" },
              ].map((item) => (
                <Card key={item.label} className="animate-float-in">
                  <CardContent className="p-5">
                    <p className="text-sm font-semibold text-[var(--muted-foreground)]">
                      {item.label}
                    </p>
                    <p className="font-heading mt-1 text-3xl font-semibold">{item.value}</p>
                  </CardContent>
                </Card>
              ))}
            </section>

            <section className="mt-16">
              <h2 className="font-heading text-3xl font-semibold">How Flowboard works</h2>
              <p className="mt-2 max-w-2xl text-[var(--muted-foreground)]">
                From pump floor to owner overview — one merchandising-style board for every role.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {features.map((feature) => (
                  <Card key={feature.title}>
                    <CardContent className="flex gap-4 p-6">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--muted)] text-[var(--accent-secondary)]">
                        <feature.icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="font-heading text-xl font-semibold">{feature.title}</h3>
                        <p className="mt-1 text-sm text-[var(--muted-foreground)]">{feature.body}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/auth/login">Start with login</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/auth/register">Create an account</Link>
                </Button>
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="border-t border-[var(--border)] bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-8 text-sm text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Flowboard. All rights reserved.</p>
          <Link href="mailto:support@flowboard.app" className="font-semibold text-[var(--accent)]">
            Contact support
          </Link>
        </div>
      </footer>
      <StatePreviewFab />
    </div>
  );
}

function MetricTile({
  label,
  value,
  accent,
  tone,
}: {
  label: string;
  value: string;
  accent?: boolean;
  tone?: "success" | "danger";
}) {
  return (
    <div
      className={
        accent
          ? "rounded-lg bg-[var(--accent)] p-4 text-white"
          : "rounded-lg bg-[var(--muted)]/70 p-4"
      }
    >
      <p className={`text-sm font-semibold ${accent ? "text-white/85" : "text-[var(--muted-foreground)]"}`}>
        {label}
      </p>
      <p
        className={`font-heading mt-1 text-2xl font-semibold ${
          tone === "danger" ? "text-rose-700" : tone === "success" ? "text-teal-700" : ""
        }`}
      >
        {value}
      </p>
    </div>
  );
}
