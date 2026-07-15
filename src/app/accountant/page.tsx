"use client";

import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  FileSpreadsheet,
  Receipt,
  Scale,
  Wallet,
} from "lucide-react";
import { AppShell, TwoColumn } from "@/components/layout/app-shell";
import { accountantNav } from "@/components/layout/top-nav";
import {
  HelpPanel,
  NotificationsPanel,
  PageTitle,
  UserMenu,
} from "@/components/shared/page-chrome";
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
import { expenses, reconciliations } from "@/data/mock";
import { usePageReady } from "@/hooks/use-page-state";
import { formatCurrency } from "@/lib/utils";

const MONTH_PREFIX = "2026-07";

const totalExpensesThisMonth = expenses
  .filter((e) => e.date.startsWith(MONTH_PREFIX))
  .reduce((sum, e) => sum + e.amount, 0);

const cashVarianceThisMonth = reconciliations.reduce((sum, r) => sum + r.variance, 0);

const lastReconciliation = reconciliations[0];

const quickLinks = [
  {
    href: "/manager/expenses",
    label: "Enter expense",
    description: "Log maintenance, utilities, and supplies",
    icon: Receipt,
  },
  {
    href: "/manager/reports",
    label: "View reports",
    description: "Sales, expenses, and variance exports",
    icon: FileSpreadsheet,
  },
  {
    href: "/manager/reconciliation",
    label: "Cash reconciliation",
    description: "Match counted cash to shift totals",
    icon: Scale,
  },
];

export default function AccountantWorkspacePage() {
  const {
    showLoading,
    showEmpty,
    showPlanLimit,
    showPermissionDenied,
    showReady,
    showOffline,
  } = usePageReady();

  return (
    <AppShell navItems={accountantNav} homeHref="/accountant">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <PageTitle
          title="Accountant workspace"
          description="Expenses, cash reconciliation, and financial reports at a glance."
        />
        <UserMenu />
      </div>

      <StatusBanner />

      {showPlanLimit && <PlanLimitCard homeHref="/accountant" />}
      {showPermissionDenied && <PermissionDeniedCard dashboardHref="/accountant" />}
      {showLoading && (
        <>
          <SkeletonCards count={3} />
          <div className="mt-6">
            <SkeletonRows count={4} />
          </div>
        </>
      )}
      {showEmpty && (
        <EmptyState
          title="No financial activity yet"
          description="Once expenses and reconciliations are recorded, your monthly metrics will appear here."
          action={
            <Button asChild>
              <Link href="/manager/expenses">Enter first expense</Link>
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
                  Offline · expense drafts saved locally
                </Badge>
              )}

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <MetricCard
                  title="Total expenses this month"
                  value={formatCurrency(totalExpensesThisMonth)}
                  icon={Receipt}
                  accent
                />
                <MetricCard
                  title="Cash variance this month"
                  value={formatCurrency(cashVarianceThisMonth)}
                  icon={Wallet}
                  tone={
                    cashVarianceThisMonth < 0
                      ? "danger"
                      : cashVarianceThisMonth > 0
                        ? "warning"
                        : "success"
                  }
                />
                <MetricCard
                  title="Last reconciliation"
                  value={lastReconciliation.shift.split(" · ")[0]}
                  subtitle={`Variance ${formatCurrency(lastReconciliation.variance)}`}
                  icon={Calculator}
                />
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Quick links</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-3 sm:grid-cols-3">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group flex flex-col gap-2 rounded-lg border border-[var(--border)] bg-white p-4 shadow-sm transition-colors hover:border-[var(--accent)] hover:bg-[var(--muted)]/40"
                    >
                      <link.icon className="h-5 w-5 text-[var(--accent)]" />
                      <p className="font-semibold">{link.label}</p>
                      <p className="text-sm text-[var(--muted-foreground)]">{link.description}</p>
                      <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent)]">
                        Open
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  ))}
                </CardContent>
              </Card>

              <div className="grid gap-4 lg:grid-cols-2">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Recent expenses</CardTitle>
                    <Button asChild variant="ghost" size="sm">
                      <Link href="/manager/expenses">View all</Link>
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {expenses.map((expense) => (
                      <div
                        key={expense.id}
                        className="flex items-center justify-between rounded-lg border border-[var(--border)] px-4 py-3"
                      >
                        <div>
                          <p className="font-semibold">{expense.category}</p>
                          <p className="text-sm text-[var(--muted-foreground)]">
                            {expense.note} · {expense.enteredBy}
                          </p>
                        </div>
                        <div className="text-end">
                          <p className="font-heading text-lg font-semibold">
                            {formatCurrency(expense.amount)}
                          </p>
                          <p className="text-xs text-[var(--muted-foreground)]">{expense.date}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Recent reconciliations</CardTitle>
                    <Button asChild variant="ghost" size="sm">
                      <Link href="/manager/reconciliation">View all</Link>
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {reconciliations.map((rec) => (
                      <div
                        key={rec.id}
                        className="flex items-center justify-between rounded-lg border border-[var(--border)] px-4 py-3"
                      >
                        <div>
                          <p className="font-semibold">{rec.shift}</p>
                          <p className="text-sm text-[var(--muted-foreground)]">
                            Expected {formatCurrency(rec.expectedCash)} · Counted{" "}
                            {formatCurrency(rec.countedCash)}
                          </p>
                        </div>
                        <Badge
                          variant={
                            rec.variance < 0 ? "danger" : rec.variance > 0 ? "warning" : "success"
                          }
                        >
                          {formatCurrency(rec.variance)}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </>
          }
          rail={
            <>
              <HelpPanel
                tips={[
                  "Reconcile shifts within 24 hours to keep variance reports accurate.",
                  "Tag expenses by category before month-end for cleaner ledger exports.",
                  "Use the reports hub to download July expense and reconciliation PDFs.",
                ]}
              />
              <NotificationsPanel
                items={[
                  {
                    title: "Reconciliation pending review",
                    meta: "Jul 14 · Omar Riaz · +$3.00",
                    variant: "warning",
                  },
                  {
                    title: "Expense ledger ready",
                    meta: "July 2026 report generated",
                    variant: "info",
                  },
                  {
                    title: "Variance exception flagged",
                    meta: "Jul 13 shift · -$8.00",
                    variant: "warning",
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

function MetricCard({
  title,
  value,
  subtitle,
  icon: Icon,
  accent,
  tone,
}: {
  title: string;
  value: string;
  subtitle?: string;
  icon: React.ComponentType<{ className?: string }>;
  accent?: boolean;
  tone?: "success" | "warning" | "danger";
}) {
  return (
    <Card
      className={
        accent
          ? "overflow-hidden border-transparent bg-[var(--accent)] text-white shadow-[var(--shadow-soft)]"
          : undefined
      }
    >
      <CardHeader className="pb-2">
        <CardTitle
          className={`flex items-center gap-2 text-lg ${accent ? "text-white/90" : ""}`}
        >
          <Icon className={`h-5 w-5 ${accent ? "text-white" : "text-[var(--accent)]"}`} />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p
          className={`font-heading text-3xl font-semibold ${
            tone === "danger"
              ? "text-rose-700"
              : tone === "warning"
                ? "text-amber-700"
                : tone === "success"
                  ? "text-teal-700"
                  : ""
          }`}
        >
          {value}
        </p>
        {subtitle && (
          <p
            className={`mt-1 text-sm ${accent ? "text-white/80" : "text-[var(--muted-foreground)]"}`}
          >
            {subtitle}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
