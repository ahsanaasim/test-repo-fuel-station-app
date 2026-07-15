"use client";

import Link from "next/link";
import {
  ArrowRight,
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
  UserMenu,
} from "@/components/shared/page-chrome";
import { EditorialHero, EditorialSection } from "@/components/shared/editorial";
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
      <div className="mb-6 flex justify-end">
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

              <EditorialHero
                eyebrow="Accountant workspace"
                title="Expenses"
                metric={formatCurrency(totalExpensesThisMonth)}
                subtitle="Expenses, cash reconciliation, and financial reports at a glance."
              >
                <Button asChild size="lg" variant="secondary" className="bg-white text-[var(--accent)] hover:bg-white/90">
                  <Link href="/manager/expenses">
                    <Receipt className="h-4 w-4" />
                    Enter expense
                  </Link>
                </Button>
              </EditorialHero>

              <EditorialSection
                eyebrow="Cash desk"
                title="Cash Reconciliation"
                summary={
                  <span className="inline-flex items-center gap-2">
                    <Wallet className="h-6 w-6" />
                    {formatCurrency(cashVarianceThisMonth)} variance this month
                  </span>
                }
                tone={
                  cashVarianceThisMonth < 0
                    ? "danger"
                    : cashVarianceThisMonth > 0
                      ? "warm"
                      : "success"
                }
                cta={
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/manager/reconciliation">View all</Link>
                  </Button>
                }
              >
                <div className="grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)]">
                  <div className="rounded-lg bg-white/75 p-4 shadow-sm">
                    <p className="text-sm font-semibold text-[var(--muted-foreground)]">
                      Last reconciliation
                    </p>
                    <p className="mt-2 font-heading text-3xl font-semibold">
                      {lastReconciliation.shift.split(" · ")[0]}
                    </p>
                    <Badge
                      className="mt-3"
                      variant={
                        lastReconciliation.variance < 0
                          ? "danger"
                          : lastReconciliation.variance > 0
                            ? "warning"
                            : "success"
                      }
                    >
                      Variance {formatCurrency(lastReconciliation.variance)}
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    {reconciliations.map((rec) => (
                      <div
                        key={rec.id}
                        className="flex items-center justify-between gap-4 rounded-lg border border-[var(--border)] bg-white/80 px-4 py-3"
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
                  </div>
                </div>
              </EditorialSection>

              <EditorialSection
                eyebrow="Close-ready exports"
                title="Reports"
                summary="Expense ledger, reconciliation exports, and monthly snapshots"
                tone="paper"
                cta={
                  <Button asChild size="lg">
                    <Link href="/manager/reports">Open reports</Link>
                  </Button>
                }
              >
                <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
                  <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
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
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold">Recent expenses</p>
                      <Button asChild variant="ghost" size="sm">
                        <Link href="/manager/expenses">View all</Link>
                      </Button>
                    </div>
                    {expenses.map((expense) => (
                      <div
                        key={expense.id}
                        className="flex items-center justify-between gap-4 rounded-lg border border-[var(--border)] bg-white px-4 py-3"
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
                  </div>
                </div>
              </EditorialSection>
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
