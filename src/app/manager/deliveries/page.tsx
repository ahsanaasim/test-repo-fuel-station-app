"use client";

import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { managerNav } from "@/components/layout/top-nav";
import { EditorialListHeader, EditorialSection } from "@/components/shared/editorial";
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
import {
  deliveries as initialDeliveries,
  tanks,
  type Delivery,
  type FuelType,
} from "@/data/mock";
import { usePageReady } from "@/hooks/use-page-state";
import { formatLiters } from "@/lib/utils";

const FUEL_TYPES: FuelType[] = ["Petrol", "Diesel", "Premium"];

function formatDateTime(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function ManagerDeliveriesPage() {
  const {
    showLoading,
    showEmpty,
    showPlanLimit,
    showPermissionDenied,
    showReady,
    showOffline,
  } = usePageReady();

  const [deliveryList, setDeliveryList] = useState(initialDeliveries);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState({
    supplier: "",
    dateTime: "",
    fuelType: "" as FuelType | "",
    liters: "",
    tank: "",
    invoiceNumber: "",
  });

  const sorted = useMemo(
    () =>
      [...deliveryList].sort(
        (a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime(),
      ),
    [deliveryList],
  );

  const resetForm = () => {
    setForm({
      supplier: "",
      dateTime: "",
      fuelType: "",
      liters: "",
      tank: "",
      invoiceNumber: "",
    });
  };

  const handleAdd = () => {
    if (!form.supplier || !form.dateTime || !form.fuelType || !form.liters || !form.tank) {
      return;
    }
    const newDelivery: Delivery = {
      id: `d${Date.now()}`,
      supplier: form.supplier,
      dateTime: form.dateTime,
      fuelType: form.fuelType,
      liters: parseFloat(form.liters),
      tank: form.tank,
      invoiceNumber: form.invoiceNumber || `INV-${Date.now().toString().slice(-5)}`,
    };
    setDeliveryList((prev) => [newDelivery, ...prev]);
    resetForm();
    setDialogOpen(false);
  };

  return (
    <AppShell navItems={managerNav} homeHref="/manager">
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <div className="mb-6">
          <EditorialListHeader
            title="Fuel deliveries"
            description="Log incoming fuel shipments and match them to tanks and invoices."
            actions={
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4" />
                  Add delivery
                </Button>
              </DialogTrigger>
            }
          />
        </div>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Record fuel delivery</DialogTitle>
              <DialogDescription>
                Enter supplier details and the tank that received the fuel.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-2">
              <div className="space-y-1.5">
                <Label htmlFor="supplier">Supplier</Label>
                <Input
                  id="supplier"
                  placeholder="e.g. PetroLink Supply"
                  value={form.supplier}
                  onChange={(e) => setForm((f) => ({ ...f, supplier: e.target.value }))}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="delivery-datetime">Date / time</Label>
                <Input
                  id="delivery-datetime"
                  type="datetime-local"
                  value={form.dateTime}
                  onChange={(e) => setForm((f) => ({ ...f, dateTime: e.target.value }))}
                />
              </div>
              <div className="space-y-1.5">
                <Label>Fuel type</Label>
                <Select
                  value={form.fuelType}
                  onValueChange={(v) => setForm((f) => ({ ...f, fuelType: v as FuelType }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select fuel type" />
                  </SelectTrigger>
                  <SelectContent>
                    {FUEL_TYPES.map((ft) => (
                      <SelectItem key={ft} value={ft}>
                        {ft}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="liters">Liters</Label>
                <Input
                  id="liters"
                  type="number"
                  min="0"
                  step="0.1"
                  placeholder="12000"
                  value={form.liters}
                  onChange={(e) => setForm((f) => ({ ...f, liters: e.target.value }))}
                />
              </div>
              <div className="space-y-1.5">
                <Label>Tank</Label>
                <Select
                  value={form.tank}
                  onValueChange={(v) => setForm((f) => ({ ...f, tank: v }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select tank" />
                  </SelectTrigger>
                  <SelectContent>
                    {tanks.map((t) => (
                      <SelectItem key={t.id} value={t.number}>
                        {t.number} · {t.fuelType}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="invoice">Invoice</Label>
                <Input
                  id="invoice"
                  placeholder="INV-88421"
                  value={form.invoiceNumber}
                  onChange={(e) => setForm((f) => ({ ...f, invoiceNumber: e.target.value }))}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAdd}>Save delivery</Button>
            </DialogFooter>
          </DialogContent>

        <StatusBanner />

        {showPlanLimit && <PlanLimitCard homeHref="/manager" />}
        {showPermissionDenied && <PermissionDeniedCard dashboardHref="/manager" />}
        {showLoading && <SkeletonRows count={5} />}

        {showEmpty && (
          <EmptyState
            title="No deliveries logged"
            description="Record your first fuel delivery to keep tank levels accurate."
            action={
              <Button onClick={() => setDialogOpen(true)}>
                <Plus className="h-4 w-4" />
                Add delivery
              </Button>
            }
          />
        )}

        {(showReady || showOffline) && (
          <div className="space-y-4">
            <EditorialSection
              eyebrow="Inventory intake"
              title="Add Delivery"
              summary={`${sorted.length} deliveries logged`}
              tone="warm"
              cta={
                <DialogTrigger asChild>
                  <Button size="lg">
                    <Plus className="h-4 w-4" />
                    Add delivery
                  </Button>
                </DialogTrigger>
              }
            >
              <p className="text-sm text-[var(--muted-foreground)]">
                Record supplier, invoice, tank, and liters in one step so inventory stays aligned
                with the delivery ledger.
              </p>
            </EditorialSection>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Supplier</TableHead>
                      <TableHead>Date / Time</TableHead>
                      <TableHead>Fuel type</TableHead>
                      <TableHead>Liters</TableHead>
                      <TableHead>Tank</TableHead>
                      <TableHead>Invoice</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sorted.map((delivery) => (
                      <TableRow key={delivery.id}>
                        <TableCell className="font-medium">{delivery.supplier}</TableCell>
                        <TableCell className="whitespace-nowrap">
                          {formatDateTime(delivery.dateTime)}
                        </TableCell>
                        <TableCell>{delivery.fuelType}</TableCell>
                        <TableCell>{formatLiters(delivery.liters)}</TableCell>
                        <TableCell>{delivery.tank}</TableCell>
                        <TableCell className="text-[var(--muted-foreground)]">
                          {delivery.invoiceNumber}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}
      </Dialog>
    </AppShell>
  );
}
