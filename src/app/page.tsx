"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Activity,
  Gauge,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { BrandMark } from "@/components/layout/top-nav";
import { StatePreviewFab } from "@/components/shared/state-preview-fab";
import {
  EditorialHero,
  EditorialSection,
  StickyCtaBar,
} from "@/components/shared/editorial";
import {
  LoadingBlock,
  PermissionDeniedCard,
  PlanLimitCard,
} from "@/components/shared/status-frames";
import { Button } from "@/components/ui/button";
import { PRODUCT, dashboardMetrics, tanks } from "@/data/mock";
import { usePageReady } from "@/hooks/use-page-state";
import { formatCurrency, formatPercent } from "@/lib/utils";

const roles = [
  {
    label: "Operator",
    href: "/auth/login?role=operator",
    blurb: "Shift start, sale entry, and end-of-shift cash story.",
    tone: "default" as const,
  },
  {
    label: "Manager",
    href: "/auth/login?role=manager",
    blurb: "Verify shifts, tanks, deliveries, and reconciliation.",
    tone: "secondary" as const,
  },
  {
    label: "Accountant",
    href: "/auth/login?role=accountant",
    blurb: "Expenses, cash variance, and report exports.",
    tone: "outline" as const,
  },
  {
    label: "Owner",
    href: "/auth/login?role=owner",
    blurb: "All-station overview, settings, and audit log.",
    tone: "outline" as const,
  },
];

const features = [
  {
    icon: Gauge,
    title: "Editorial shift chapters",
    body: "Every wizard step reads like a magazine section — big numbers, clear instructions.",
  },
  {
    icon: Activity,
    title: "Station pulse hero",
    body: "Today’s sales lead the board, then fuel, shift, variance, and alerts follow.",
  },
  {
    icon: Smartphone,
    title: "Tablet-first touch",
    body: "Large CTAs and modal sale entry keep the forecourt moving.",
  },
  {
    icon: ShieldCheck,
    title: "Trust for managers",
    body: "Facet-filtered tables and detail drawers for verification and audits.",
  },
];

const journeyChapters = [
  {
    title: "Sales hero",
    body: "Open with today’s takings as an immersive metric.",
    metric: formatCurrency(dashboardMetrics.todaysSales),
  },
  {
    title: "Fuel chapter",
    body: "Progress bars tell tank health before anyone asks.",
    metric: `${tanks.filter((t) => t.lowAlert).length} low alerts`,
  },
  {
    title: "Shift chapter",
    body: "See who is on shift and jump to end or verify.",
    metric: dashboardMetrics.activeShift.operator,
  },
  {
    title: "Cash chapter",
    body: "Variance called out in green or rose before checkout.",
    metric: formatCurrency(dashboardMetrics.cashVariance),
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
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(18);
  const [material, setMaterial] = useState<"petrol" | "diesel" | "premium">("petrol");

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      const pct = max <= 0 ? 100 : Math.max(8, Math.round((el.scrollLeft / max) * 100));
      setProgress(pct);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const materials = {
    petrol: { label: "Petrol", tint: "#ff385c", fill: 71 },
    diesel: { label: "Diesel", tint: "#222222", fill: 19 },
    premium: { label: "Premium", tint: "#e31c5f", fill: 61 },
  } as const;

  return (
    <div className="hero-canvas min-h-screen pb-20 md:pb-0">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6">
        <BrandMark />
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost">
            <Link href="/auth/login">Sign in</Link>
          </Button>
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/auth/login?role=operator">Enter board</Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-8 px-4 pb-16 sm:px-6">
        {showPlanLimit && <PlanLimitCard />}
        {showPermissionDenied && <PermissionDeniedCard dashboardHref="/auth/login" />}

        {(showReady || showError || showLoading) && (
          <>
            {/* Pattern 1: Interactive product stage (configurator geometry) */}
            <section className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="animate-float-in space-y-6">
                <p className="inline-flex items-center gap-2 rounded-md bg-white/80 px-3 py-1.5 text-sm font-semibold text-[var(--accent-secondary)] shadow-sm">
                  <Sparkles className="h-4 w-4" />
                  Editorial commerce ops
                </p>
                <h1 className="font-heading text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
                  {PRODUCT.name}
                </h1>
                <p className="max-w-xl text-lg text-[var(--muted-foreground)] sm:text-xl">
                  {PRODUCT.overview}
                </p>

                {showLoading && <LoadingBlock label="Opening the station story…" />}

                {showError && (
                  <div className="rounded-lg border border-rose-200 bg-rose-50/80 p-5">
                    <p className="font-heading text-lg font-semibold text-rose-900">
                      We couldn’t load the preview
                    </p>
                    <p className="mt-1 text-sm text-rose-800">
                      Refresh to try again — your demo data is still safe.
                    </p>
                    <Button className="mt-4" onClick={() => window.location.reload()}>
                      Retry
                    </Button>
                  </div>
                )}

                {showReady && (
                  <div className="flex flex-wrap gap-3">
                    <Button asChild size="lg">
                      <Link href="/auth/login?role=operator">Operator login</Link>
                    </Button>
                    <Button asChild size="lg" variant="secondary">
                      <Link href="/auth/login?role=manager">Manager login</Link>
                    </Button>
                  </div>
                )}
              </div>

              <div className="configurator-stage relative overflow-hidden rounded-lg border border-[var(--border)] p-6 shadow-[var(--shadow-soft)] sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                  Live board preview
                </p>
                <div className="mt-6 flex min-h-[260px] items-center justify-center">
                  <div
                    className="pump-orbit relative h-44 w-44 rounded-full border-[6px] border-white shadow-[var(--shadow-soft)]"
                    style={{
                      background: `conic-gradient(${materials[material].tint} ${materials[material].fill}%, #fff ${materials[material].fill}%)`,
                    }}
                    aria-hidden
                  >
                    <div className="absolute inset-6 flex flex-col items-center justify-center rounded-full bg-white text-center shadow-sm">
                      <span className="text-xs font-bold uppercase tracking-wide text-[var(--muted-foreground)]">
                        {materials[material].label}
                      </span>
                      <span className="font-heading text-3xl font-semibold">
                        {formatPercent(materials[material].fill)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {(Object.keys(materials) as Array<keyof typeof materials>).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setMaterial(key)}
                      className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                        material === key
                          ? "bg-[var(--accent)] text-white"
                          : "bg-white text-[var(--foreground)] shadow-sm"
                      }`}
                    >
                      {materials[key].label}
                    </button>
                  ))}
                </div>
                <p className="mt-4 text-center text-sm text-[var(--muted-foreground)]">
                  Swap grades to preview how tank health reads on the board.
                </p>
              </div>
            </section>

            {/* Pattern 2: Horizontal journey chapters */}
            <section className="space-y-4">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted-foreground)]">
                    The journey
                  </p>
                  <h2 className="font-heading text-3xl font-semibold">
                    Scroll the shift story
                  </h2>
                </div>
                <p className="hidden text-sm text-[var(--muted-foreground)] sm:block">
                  Chapter progress
                </p>
              </div>
              <div className="journey-progress" aria-hidden>
                <span style={{ width: `${progress}%` }} />
              </div>
              <div ref={trackRef} className="journey-track">
                {journeyChapters.map((chapter, i) => (
                  <article
                    key={chapter.title}
                    className={`journey-card rounded-lg p-6 shadow-[var(--shadow-card)] ${
                      i % 2 === 0
                        ? "bg-white"
                        : "bg-[linear-gradient(135deg,#fff4ec,#ffe8dc)]"
                    }`}
                  >
                    <p className="font-heading text-5xl font-semibold text-[var(--accent)]">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-heading mt-3 text-2xl font-semibold">{chapter.title}</h3>
                    <p className="mt-2 text-2xl font-semibold">{chapter.metric}</p>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">{chapter.body}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* Role editorial sections */}
            <div className="space-y-4">
              {roles.map((role, index) => (
                <EditorialSection
                  key={role.label}
                  eyebrow={`Role ${String(index + 1).padStart(2, "0")}`}
                  title={role.label}
                  summary={role.blurb}
                  tone={index === 0 ? "accent" : index === 1 ? "warm" : "paper"}
                  cta={
                    <Button asChild size="lg" variant={index === 0 ? "secondary" : role.tone}>
                      <Link href={role.href}>{role.label} login</Link>
                    </Button>
                  }
                />
              ))}
            </div>

            <EditorialSection
              eyebrow="Why Flowboard"
              title="Feature highlights"
              tone="soft"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-lg bg-white/80 p-5 shadow-sm"
                  >
                    <feature.icon className="h-6 w-6 text-[var(--accent)]" />
                    <h3 className="font-heading mt-3 text-xl font-semibold">{feature.title}</h3>
                    <p className="mt-1 text-sm text-[var(--muted-foreground)]">{feature.body}</p>
                  </div>
                ))}
              </div>
            </EditorialSection>

            <EditorialHero
              tone="ink"
              title="Ready for the forecourt?"
              subtitle="Sign in once — we’ll route you to your role’s first page."
            >
              <Button asChild size="lg" className="bg-[var(--accent)] hover:bg-[var(--accent-secondary)]">
                <Link href="/auth/login">Start with login</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10">
                <Link href="/auth/register">Create an account</Link>
              </Button>
            </EditorialHero>
          </>
        )}
      </main>

      <footer className="mt-8 bg-[linear-gradient(135deg,#ffe8dc,#fff4ec)] px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[var(--muted-foreground)]">
            © {new Date().getFullYear()} {PRODUCT.name}. Built for fuel station teams.
          </p>
          <a
            href="mailto:support@flowboard.app"
            className="text-sm font-semibold text-[var(--accent)] hover:underline"
          >
            Contact support
          </a>
        </div>
      </footer>

      <StickyCtaBar label="Operator login" href="/auth/login?role=operator" />
      <StatePreviewFab />
    </div>
  );
}
