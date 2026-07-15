"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, Save, Building2 } from "lucide-react";
import { AppShell, TwoColumn } from "@/components/layout/app-shell";
import { ownerNav } from "@/components/layout/top-nav";
import { EditorialListHeader } from "@/components/shared/editorial";
import { HelpPanel } from "@/components/shared/page-chrome";
import {
  EmptyState,
  PermissionDeniedCard,
  PlanLimitCard,
  SkeletonRows,
  StatusBanner,
} from "@/components/shared/status-frames";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
import { users as initialUsers } from "@/data/mock";
import { usePageReady } from "@/hooks/use-page-state";

type LocalUser = {
  id: string;
  name: string;
  role: string;
  email: string;
};

const ROLES = ["Operator", "Manager", "Accountant", "Owner"];

const DEFAULT_SETTINGS = {
  stationName: "Central Avenue",
  address: "1420 Central Ave, Metro City",
  timezone: "America/Chicago",
  lowTankThreshold: "20",
  multiStation: true,
};

export default function OwnerSettingsPage() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [userList, setUserList] = useState<LocalUser[]>(initialUsers);
  const [saved, setSaved] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<LocalUser | null>(null);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formRole, setFormRole] = useState("Operator");

  const {
    showLoading,
    showEmpty,
    showPlanLimit,
    showPermissionDenied,
    showReady,
    showOffline,
  } = usePageReady();

  const openAddUser = () => {
    setEditingUser(null);
    setFormName("");
    setFormEmail("");
    setFormRole("Operator");
    setDialogOpen(true);
  };

  const openEditUser = (user: LocalUser) => {
    setEditingUser(user);
    setFormName(user.name);
    setFormEmail(user.email);
    setFormRole(user.role);
    setDialogOpen(true);
  };

  const saveUser = () => {
    if (!formName.trim() || !formEmail.trim()) return;

    if (editingUser) {
      setUserList((list) =>
        list.map((u) =>
          u.id === editingUser.id
            ? { ...u, name: formName.trim(), email: formEmail.trim(), role: formRole }
            : u,
        ),
      );
    } else {
      setUserList((list) => [
        ...list,
        {
          id: `u${Date.now()}`,
          name: formName.trim(),
          email: formEmail.trim(),
          role: formRole,
        },
      ]);
    }
    setDialogOpen(false);
  };

  const removeUser = (id: string) => {
    setUserList((list) => list.filter((u) => u.id !== id));
  };

  const handleSaveChanges = () => {
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  };

  return (
    <AppShell navItems={ownerNav} homeHref="/owner">
      <EditorialListHeader
        title="Station settings"
        description="Configure station profile, alerts, and team access."
      />

      <div className="mt-6">
        <StatusBanner />
      </div>

      {showPlanLimit && <PlanLimitCard homeHref="/owner" />}
      {showPermissionDenied && <PermissionDeniedCard dashboardHref="/owner" />}
      {showLoading && <SkeletonRows count={8} />}
      {showEmpty && (
        <EmptyState
          title="Settings unavailable"
          description="Station configuration could not be loaded. Retry or contact support."
        />
      )}

      {(showReady || showOffline) && (
        <TwoColumn
          main={
            <div className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-card)]">
              <div className="mb-6 flex items-center gap-3 border-b border-[var(--border)] pb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--muted)] text-[var(--accent)]">
                  <Building2 className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-heading text-xl font-semibold">Station profile</h2>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    Drawer-style panel — edit and save when ready.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="station-name">Station name</Label>
                  <Input
                    id="station-name"
                    value={settings.stationName}
                    onChange={(e) =>
                      setSettings((s) => ({ ...s, stationName: e.target.value }))
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select
                    value={settings.timezone}
                    onValueChange={(v) => setSettings((s) => ({ ...s, timezone: v }))}
                  >
                    <SelectTrigger id="timezone">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="America/Chicago">America/Chicago (CST)</SelectItem>
                      <SelectItem value="America/New_York">America/New_York (EST)</SelectItem>
                      <SelectItem value="America/Los_Angeles">America/Los_Angeles (PST)</SelectItem>
                      <SelectItem value="Europe/London">Europe/London (GMT)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 lg:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={settings.address}
                    onChange={(e) => setSettings((s) => ({ ...s, address: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="low-tank">Low tank alert threshold (%)</Label>
                  <Input
                    id="low-tank"
                    type="number"
                    min={5}
                    max={50}
                    value={settings.lowTankThreshold}
                    onChange={(e) =>
                      setSettings((s) => ({ ...s, lowTankThreshold: e.target.value }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between rounded-lg border border-[var(--border)] px-4 py-3">
                  <div>
                    <p className="font-semibold">Multi-station enabled</p>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      Allow switching between stations in owner overview.
                    </p>
                  </div>
                  <Button
                    variant={settings.multiStation ? "default" : "outline"}
                    size="sm"
                    onClick={() =>
                      setSettings((s) => ({ ...s, multiStation: !s.multiStation }))
                    }
                  >
                    {settings.multiStation ? "On" : "Off"}
                  </Button>
                </div>
              </div>

              <div className="mt-8 border-t border-[var(--border)] pt-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-heading text-lg font-semibold">Team members</h3>
                  <Button size="sm" onClick={openAddUser}>
                    <Plus className="h-4 w-4" />
                    Add user
                  </Button>
                </div>
                <div className="space-y-2">
                  {userList.map((user) => (
                    <div
                      key={user.id}
                      className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[var(--border)] px-4 py-3"
                    >
                      <div>
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-sm text-[var(--muted-foreground)]">{user.email}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{user.role}</Badge>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openEditUser(user)}
                          aria-label={`Edit ${user.name}`}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeUser(user.id)}
                          aria-label={`Remove ${user.name}`}
                        >
                          <Trash2 className="h-4 w-4 text-[var(--danger)]" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button onClick={handleSaveChanges}>
                  <Save className="h-4 w-4" />
                  Save changes
                </Button>
                {saved && <Badge variant="success">Settings saved locally</Badge>}
                {showOffline && (
                  <Badge variant="warning">Offline — changes stay on this device</Badge>
                )}
              </div>
            </div>
          }
          rail={
            <HelpPanel
              title="Settings tips"
              tips={[
                "Set the low tank threshold to match your reorder lead time.",
                "Owner and Manager roles can verify shifts and edit expenses.",
                "Enable multi-station when you operate more than one location.",
                "User changes here are local demo state — wire to your API in production.",
              ]}
            />
          }
        />
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingUser ? "Edit user" : "Add user"}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="user-name">Name</Label>
              <Input
                id="user-name"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                placeholder="Full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="user-email">Email</Label>
              <Input
                id="user-email"
                type="email"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                placeholder="name@station.local"
              />
            </div>
            <div className="space-y-2">
              <Label>Role</Label>
              <Select value={formRole} onValueChange={setFormRole}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {ROLES.map((role) => (
                    <SelectItem key={role} value={role}>
                      {role}
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
            <Button onClick={saveUser}>{editingUser ? "Update" : "Add"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AppShell>
  );
}
