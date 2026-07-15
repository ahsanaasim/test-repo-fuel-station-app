"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const bandTones = {
  accent:
    "bg-[linear-gradient(135deg,#ff385c_0%,#e31c5f_55%,#c4144c_100%)] text-white",
  warm: "bg-[linear-gradient(135deg,#fff4ec_0%,#ffe8dc_100%)] text-[var(--foreground)]",
  paper: "bg-white text-[var(--foreground)] border border-[var(--border)]",
  soft: "bg-[var(--muted)] text-[var(--foreground)]",
  success: "bg-[linear-gradient(135deg,#ecfdf8_0%,#d1fae5_100%)] text-teal-950",
  danger: "bg-[linear-gradient(135deg,#fff1f2_0%,#ffe4e6_100%)] text-rose-950",
  ink: "bg-[#222222] text-white",
} as const;

export type EditorialTone = keyof typeof bandTones;

export function EditorialHero({
  eyebrow,
  title,
  metric,
  subtitle,
  children,
  tone = "accent",
  className,
}: {
  eyebrow?: string;
  title: string;
  metric?: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  tone?: EditorialTone;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "editorial-band relative overflow-hidden rounded-lg px-6 py-10 sm:px-10 sm:py-14",
        bandTones[tone],
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -end-10 -top-16 h-56 w-56 rounded-full bg-white/20 blur-2xl" />
        <div className="absolute -bottom-20 start-10 h-48 w-48 rounded-full bg-black/10 blur-2xl" />
      </div>
      <div className="relative z-10 max-w-3xl animate-float-in">
        {eyebrow && (
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] opacity-80">
            {eyebrow}
          </p>
        )}
        <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl">
          {title}
        </h1>
        {metric !== undefined && (
          <div className="mt-4 font-heading text-5xl font-semibold tracking-tight sm:text-6xl">
            {metric}
          </div>
        )}
        {subtitle && (
          <p className="mt-4 max-w-xl text-base opacity-90 sm:text-lg">{subtitle}</p>
        )}
        {children && <div className="mt-6 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function EditorialSection({
  id,
  eyebrow,
  title,
  summary,
  tone = "paper",
  cta,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  summary?: ReactNode;
  tone?: EditorialTone;
  cta?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "editorial-band animate-float-in rounded-lg px-6 py-8 sm:px-8 sm:py-10",
        bandTones[tone],
        className,
      )}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          {eyebrow && (
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] opacity-70">
              {eyebrow}
            </p>
          )}
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl">{title}</h2>
          {summary !== undefined && (
            <div className="mt-3 text-lg font-semibold sm:text-2xl">{summary}</div>
          )}
        </div>
        {cta && <div className="flex flex-wrap gap-2">{cta}</div>}
      </div>
      {children && <div className="mt-6">{children}</div>}
    </section>
  );
}

export function EditorialListHeader({
  title,
  description,
  badge,
  actions,
}: {
  title: string;
  description?: string;
  badge?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <div className="editorial-band rounded-lg bg-white px-6 py-8 shadow-[var(--shadow-card)] sm:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-heading text-4xl font-semibold">{title}</h1>
            {badge}
          </div>
          {description && (
            <p className="mt-2 max-w-2xl text-[var(--muted-foreground)]">{description}</p>
          )}
        </div>
        {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
      </div>
    </div>
  );
}

export function FacetChip({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-md border px-3.5 py-2 text-sm font-semibold transition-colors",
        active
          ? "border-[var(--accent)] bg-[var(--accent)] text-white"
          : "border-[var(--border)] bg-white text-[var(--foreground)] hover:border-[var(--accent)]/40",
      )}
    >
      {children}
    </button>
  );
}

export function FacetRow({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-wrap gap-2 overflow-x-auto pb-1">{children}</div>
  );
}

export function WizardStepShell({
  step,
  total,
  title,
  instructions,
  children,
  footer,
  rail,
}: {
  step: number;
  total: number;
  title: string;
  instructions: string;
  children: ReactNode;
  footer: ReactNode;
  rail?: ReactNode;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
      <section className="editorial-band space-y-6 rounded-lg bg-white px-6 py-8 shadow-[var(--shadow-card)] sm:px-8">
        <div>
          <p className="font-heading text-6xl font-semibold text-[var(--accent)] leading-none">
            {String(step).padStart(2, "0")}
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted-foreground)]">
            Step {step} of {total}
          </p>
          <h1 className="font-heading mt-3 text-3xl font-semibold sm:text-4xl">{title}</h1>
          <p className="mt-2 max-w-2xl text-[var(--muted-foreground)]">{instructions}</p>
        </div>
        <div>{children}</div>
        <div className="flex flex-wrap gap-2 border-t border-[var(--border)] pt-6">{footer}</div>
      </section>
      {rail && <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">{rail}</aside>}
    </div>
  );
}

export function EditorialConfirmHero({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="editorial-band rounded-lg bg-[linear-gradient(135deg,#ecfdf8_0%,#d1fae5_55%,#fff_100%)] px-6 py-12 text-center sm:px-10">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-teal-600 text-3xl text-white shadow-lg">
        ✓
      </div>
      <h1 className="font-heading mt-6 text-4xl font-semibold">{title}</h1>
      <p className="mx-auto mt-3 max-w-lg text-[var(--muted-foreground)]">{description}</p>
      {children && <div className="mx-auto mt-8 max-w-2xl text-start">{children}</div>}
    </section>
  );
}

export function StickyCtaBar({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[var(--border)] bg-white/95 px-4 py-3 backdrop-blur md:hidden">
      <Button asChild className="w-full" size="lg">
        <Link href={href}>{label}</Link>
      </Button>
    </div>
  );
}
