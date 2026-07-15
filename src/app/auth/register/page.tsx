"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { BrandMark } from "@/components/layout/top-nav";
import { StatePreviewFab } from "@/components/shared/state-preview-fab";
import {
  LoadingBlock,
  PermissionDeniedCard,
  PlanLimitCard,
} from "@/components/shared/status-frames";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { roleHomes, type Role } from "@/data/mock";
import { usePageReady } from "@/hooks/use-page-state";
import { useUiState } from "@/contexts/ui-state-context";

export default function RegisterPage() {
  const router = useRouter();
  const { showLoading, showPlanLimit, showPermissionDenied } = usePageReady(350);
  const { isError } = useUiState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("manager");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!name || !email || !password) {
      setError("Fill in name, email, and password to create your account.");
      return;
    }
    setSubmitting(true);
    window.setTimeout(() => {
      if (isError) {
        setError("Registration failed. Please try again.");
        setSubmitting(false);
        return;
      }
      router.push(roleHomes[role]);
    }, 800);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--canvas)] px-4 py-10">
      <Card className="w-full max-w-md shadow-[var(--shadow-soft)]">
        <CardHeader className="space-y-3 p-8 pb-4 text-center">
          <div className="flex justify-center">
            <BrandMark />
          </div>
          <CardTitle className="font-heading text-3xl">Create your account</CardTitle>
          <p className="text-sm text-[var(--muted-foreground)]">
            Register for manager, accountant, or owner access. Operators use the shared shift login.
          </p>
        </CardHeader>
        <CardContent className="space-y-4 p-8 pt-2">
          {showPlanLimit && <PlanLimitCard />}
          {showPermissionDenied && <PermissionDeniedCard dashboardHref="/auth/login" />}
          {!showPlanLimit && !showPermissionDenied && (
            <>
              {error && (
                <div className="rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-800">
                  {error}
                </div>
              )}
              {showLoading || submitting ? (
                <LoadingBlock label={submitting ? "Creating account…" : "Loading…"} />
              ) : (
                <form className="space-y-4" onSubmit={onSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pe-11"
                      />
                      <button
                        type="button"
                        className="absolute end-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]"
                        onClick={() => setShowPassword((v) => !v)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Role</Label>
                    <Select value={role} onValueChange={(v) => setRole(v as Role)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manager">Manager</SelectItem>
                        <SelectItem value="accountant">Accountant</SelectItem>
                        <SelectItem value="owner">Owner</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Create account
                  </Button>
                </form>
              )}
              <div className="text-center">
                <Link href="/auth/login" className="text-sm font-semibold text-[var(--accent)]">
                  Back to login
                </Link>
              </div>
            </>
          )}
        </CardContent>
      </Card>
      <StatePreviewFab />
    </div>
  );
}
