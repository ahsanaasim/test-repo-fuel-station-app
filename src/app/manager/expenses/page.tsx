"use client";

import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { managerNav } from "@/components/layout/top-nav";
import {
  EmptyState,
  PermissionDeniedCard,
  PlanLimitCard,
  SkeletonRows,
  StatusBanner,
} from "@/components/shared/status-frames";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Textarea } from "@/components/ui/textarea";
import { expenses as initialExpenses, users, type Expense } from "@/data/mock";
import { usePageReady } from "@/hooks/use-page-state";
import { formatCurrency } from "@/lib/utils";

const CATEGORIES = ["Maintenance", "Utilities", "Supplies", "Payroll", "Other"];

export default function ManagerExpensesPage() {
  const {
    showLoading,
    showEmpty,
    showPlanLimit,
    showPermissionDenied,
    showReady,
    showOffline,
  } = usePageReady();

  const [expenseList, setExpenseList] = useState(initialExpenses);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState({
    date: "",
    category: "",
    amount: "",
    note: "",
    enteredBy: "Manager Lee",
  });

  const sorted = useMemo(
    () =>
      [...expenseList].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      ),
    [expenseList],
  );

  const resetForm = () => {
    setForm({
      date: "",
      category: "",
      amount: "",
      note: "",
      enteredBy: "Manager Lee",
    });
  };

  const handleAdd = () => {
    if (!form.date || !form.category || !form.amount) return;
    const newExpense: Expense = {
      id: `e${Date.now()}`,
      date: form.date,
      category: form.category,
      amount: parseFloat(form.amount),
      note: form.note,
      enteredBy: form.enteredBy,
    };
    setExpenseList((prev) => [newExpense, ...prev]);
    resetForm();
    setDialogOpen(false);
  };

  return (
    <AppShell navItems={managerNav} homeHref="/manager">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-semibold">Station expenses</h1>
          <p className="text-[var(--muted-foreground)]">
            Track maintenance, utilities, and other costs against station revenue.
          </p>
        </div>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4" />
              Add expense
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Record expense</DialogTitle>
              <DialogDescription>
                Log a station cost with category and notes for the accountant.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-2">
              <div className="space-y-1.5">
                <Label htmlFor="expense-date">Date</Label>
                <Input
                  id="expense-date"
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                />
              </div>
              <div className="space-y-1.5">
                <Label>Category</Label>
                <Select
                  value={form.category}
                  onValueChange={(v) => setForm((f) => ({ ...f, category: v }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="85.00"
                  value={form.amount}
                  onChange={(e) => setForm((f) => ({ ...f, amount: e.target.value }))}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="note">Note</Label>
                <Textarea
                  id="note"
                  placeholder="What was this expense for?"
                  value={form.note}
                  onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
                />
              </div>
              <div className="space-y-1.5">
                <Label>Entered by</Label>
                <Select
                  value={form.enteredBy}
                  onValueChange={(v) => setForm((f) => ({ ...f, enteredBy: v }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {users
                      .filter((u) => u.role === "Manager" || u.role === "Accountant")
                      .map((u) => (
                        <SelectItem key={u.id} value={u.name}>
                          {u.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAdd}>Save expense</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <StatusBanner />

      {showPlanLimit && <PlanLimitCard homeHref="/manager" />}
      {showPermissionDenied && <PermissionDeniedCard dashboardHref="/manager" />}
      {showLoading && <SkeletonRows count={4} />}

      {showEmpty && (
        <EmptyState
          title="No expenses recorded"
          description="Start logging station costs to keep your books balanced."
          action={
            <Button onClick={() => setDialogOpen(true)}>
              <Plus className="h-4 w-4" />
              Add expense
            </Button>
          }
        />
      )}

      {(showReady || showOffline) && (
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Note</TableHead>
                  <TableHead>Entered by</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sorted.map((expense) => (
                  <TableRow key={expense.id}>
                    <TableCell className="whitespace-nowrap font-medium">
                      {new Date(expense.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </TableCell>
                    <TableCell>{expense.category}</TableCell>
                    <TableCell>{formatCurrency(expense.amount)}</TableCell>
                    <TableCell className="max-w-[12rem] truncate text-[var(--muted-foreground)]">
                      {expense.note || "—"}
                    </TableCell>
                    <TableCell>{expense.enteredBy}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </AppShell>
  );
}
