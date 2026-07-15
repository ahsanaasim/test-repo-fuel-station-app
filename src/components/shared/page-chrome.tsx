"use client";

import Link from "next/link";
import {
  Bell,
  ChevronDown,
  CircleHelp,
  ClipboardList,
  Settings,
  User,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { stations } from "@/data/mock";

export function PageTitle({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div>
      <h1 className="font-heading text-3xl font-semibold">{title}</h1>
      {description && (
        <p className="mt-1 text-[var(--muted-foreground)]">{description}</p>
      )}
    </div>
  );
}

export function UserMenu({ name = "Accountant Priya" }: { name?: string }) {
  return (
    <Button variant="outline" size="sm" className="gap-2" disabled>
      <User className="h-4 w-4" />
      <span className="hidden sm:inline">{name}</span>
      <ChevronDown className="h-3.5 w-3.5 opacity-60" />
    </Button>
  );
}

export function StationSelector({
  value,
  onChange,
  className,
}: {
  value: string;
  onChange: (station: string) => void;
  className?: string;
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={className ?? "w-[200px]"}>
        <SelectValue placeholder="Select station" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All stations</SelectItem>
        {stations.map((station) => (
          <SelectItem key={station} value={station}>
            {station}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export function SettingsButton() {
  return (
    <Button asChild variant="outline" size="sm">
      <Link href="/owner/settings">
        <Settings className="h-4 w-4" />
        <span className="hidden sm:inline">Settings</span>
      </Link>
    </Button>
  );
}

export function AuditLogButton() {
  return (
    <Button asChild variant="secondary" size="sm">
      <Link href="/owner/audit-log">
        <ClipboardList className="h-4 w-4" />
        <span className="hidden sm:inline">Audit log</span>
      </Link>
    </Button>
  );
}

export function HelpPanel({
  title = "Accountant tips",
  tips,
}: {
  title?: string;
  tips: string[];
}) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <CircleHelp className="h-5 w-5 text-[var(--accent)]" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {tips.map((tip) => (
          <p key={tip} className="rounded-md bg-[var(--muted)]/70 px-3 py-2 text-sm">
            {tip}
          </p>
        ))}
      </CardContent>
    </Card>
  );
}

export function NotificationsPanel({
  title = "Notifications",
  items,
}: {
  title?: string;
  items: { title: string; meta: string; variant?: "default" | "warning" | "info" }[];
}) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Bell className="h-5 w-5 text-[var(--accent)]" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {items.map((item) => (
          <div
            key={item.title + item.meta}
            className="flex items-start justify-between gap-2 rounded-md border border-[var(--border)] px-3 py-2"
          >
            <div>
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="text-xs text-[var(--muted-foreground)]">{item.meta}</p>
            </div>
            {item.variant && item.variant !== "default" && (
              <Badge variant={item.variant === "warning" ? "warning" : "info"}>
                New
              </Badge>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
