"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  Ban,
  Lock,
  RefreshCw,
  Sparkles,
  WifiOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useUiState } from "@/contexts/ui-state-context";

export function StatusBanner() {
  const { isOffline, isError, setScreenState } = useUiState();

  if (isOffline) {
    return (
      <div className="editorial-band mb-6 flex items-start gap-4 rounded-lg border border-amber-200 bg-[linear-gradient(135deg,#fffbeb_0%,#fef3c7_100%)] px-5 py-4 text-amber-950 shadow-[var(--shadow-card)]">
        <WifiOff className="mt-1 h-7 w-7 shrink-0 text-amber-700" />
        <div className="flex-1">
          <p className="font-heading text-2xl font-semibold">You&apos;re offline</p>
          <p className="mt-1 text-sm text-amber-900">
            Sales stay on this device and sync when you reconnect. 2 entries waiting.
          </p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="editorial-band mb-6 flex flex-wrap items-start gap-4 rounded-lg border border-rose-200 bg-[linear-gradient(135deg,#fff1f2_0%,#ffe4e6_100%)] px-5 py-4 text-rose-950 shadow-[var(--shadow-card)]">
        <AlertTriangle className="mt-1 h-7 w-7 shrink-0 text-rose-700" />
        <div className="flex-1">
          <p className="font-heading text-2xl font-semibold">Something went wrong</p>
          <p className="mt-1 text-sm text-rose-900">
            We couldn&apos;t load the latest station data. Try again in a moment.
          </p>
        </div>
        <Button size="sm" variant="outline" onClick={() => setScreenState("ready")}>
          <RefreshCw className="h-4 w-4" />
          Retry
        </Button>
      </div>
    );
  }

  return null;
}

export function PlanLimitCard({ homeHref = "/" }: { homeHref?: string }) {
  return (
    <Card className="border-amber-200 bg-amber-50/60">
      <CardContent className="flex flex-col items-start gap-3 p-6 sm:flex-row sm:items-center">
        <Sparkles className="h-8 w-8 text-amber-700" />
        <div className="flex-1">
          <p className="font-heading text-lg font-semibold">Plan limit reached</p>
          <p className="text-sm text-[var(--muted-foreground)]">
            This station has used all seats on the current plan. Contact support to add operators
            or unlock manager tools.
          </p>
        </div>
        <Button asChild variant="outline">
          <Link href="mailto:support@flowboard.app">Contact support</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href={homeHref}>Go home</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export function PermissionDeniedCard({ dashboardHref }: { dashboardHref: string }) {
  return (
    <Card className="border-rose-200 bg-rose-50/50">
      <CardContent className="flex flex-col items-start gap-3 p-6 sm:flex-row sm:items-center">
        <Lock className="h-8 w-8 text-rose-700" />
        <div className="flex-1">
          <p className="font-heading text-lg font-semibold">You don&apos;t have access</p>
          <p className="text-sm text-[var(--muted-foreground)]">
            This page is outside your role. Head back to your dashboard to continue working.
          </p>
        </div>
        <Button asChild>
          <Link href={dashboardHref}>Go to dashboard</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <Card className="border-dashed">
      <CardContent className="flex flex-col items-center gap-3 px-6 py-14 text-center">
        <Ban className="h-10 w-10 text-[var(--muted-foreground)]" />
        <div>
          <p className="font-heading text-xl font-semibold">{title}</p>
          <p className="mt-1 max-w-md text-sm text-[var(--muted-foreground)]">{description}</p>
        </div>
        {action}
      </CardContent>
    </Card>
  );
}

export function LoadingBlock({ label = "Loading…" }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-[var(--muted-foreground)]">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-[var(--muted)] border-t-[var(--accent)]" />
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
}

export function SkeletonCards({ count = 4 }: { count?: number }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="skeleton h-40 w-full" />
      ))}
    </div>
  );
}

export function SkeletonRows({ count = 5 }: { count?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="skeleton h-14 w-full" />
      ))}
    </div>
  );
}
