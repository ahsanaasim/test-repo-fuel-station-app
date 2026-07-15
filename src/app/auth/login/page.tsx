"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useState } from "react";
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
import { roleHomes, type Role } from "@/data/mock";
import { usePageReady } from "@/hooks/use-page-state";
import { useUiState } from "@/contexts/ui-state-context";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const roleParam = (params.get("role") as Role | null) ?? "operator";
  const { showLoading, showPlanLimit, showPermissionDenied } = usePageReady(400);
  const { isError, setScreenState } = useUiState();
  const [username, setUsername] = useState("amina");
  const [password, setPassword] = useState("shift123");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLocalError(null);
    if (!username || !password) {
      setLocalError("Enter both username and password to continue.");
      return;
    }
    setSubmitting(true);
    window.setTimeout(() => {
      if (isError) {
        setLocalError("We couldn't sign you in. Check your details and try again.");
        setSubmitting(false);
        return;
      }
      const role = (["operator", "manager", "accountant", "owner"] as Role[]).includes(roleParam)
        ? roleParam
        : "operator";
      router.push(roleHomes[role]);
    }, 700);
  }

  if (showPlanLimit) {
    return <PlanLimitCard homeHref="/" />;
  }
  if (showPermissionDenied) {
    return <PermissionDeniedCard dashboardHref="/" />;
  }

  return (
    <Card className="w-full max-w-md border-[var(--border)] bg-white shadow-[var(--shadow-soft)]">
      <CardHeader className="space-y-3 p-8 pb-4 text-center">
        <div className="flex justify-center">
          <BrandMark />
        </div>
        <CardTitle className="font-heading text-3xl">Welcome back</CardTitle>
        <p className="text-sm text-[var(--muted-foreground)]">
          Sign in to open your {roleParam} board. Shared operator logins are supported per shift.
        </p>
      </CardHeader>
      <CardContent className="space-y-5 p-8 pt-2">
        {(localError || isError) && (
          <div className="rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-800">
            {localError || "Sign-in failed. Please retry."}
          </div>
        )}
        {showLoading || submitting ? (
          <LoadingBlock label={submitting ? "Signing you in…" : "Preparing form…"} />
        ) : (
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={submitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={submitting}
                  className="pe-11"
                />
                <button
                  type="button"
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={submitting}>
              Log in
            </Button>
          </form>
        )}
        <div className="flex flex-col items-center gap-2 text-sm">
          <Link href="/auth/forgot" className="font-semibold text-[var(--accent)]">
            Forgot password?
          </Link>
          <Link href="/auth/register" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
            Need an account? Register
          </Link>
          <button
            type="button"
            className="text-xs text-[var(--muted-foreground)] underline"
            onClick={() => setScreenState("ready")}
          >
            Clear demo error state
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--canvas)] px-4 py-10">
      <Suspense fallback={<LoadingBlock />}>
        <LoginForm />
      </Suspense>
      <StatePreviewFab />
    </div>
  );
}
