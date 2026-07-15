"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
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
import { usePageReady } from "@/hooks/use-page-state";
import { useUiState } from "@/contexts/ui-state-context";

export default function ForgotPasswordPage() {
  const { showLoading, showPlanLimit, showPermissionDenied } = usePageReady(350);
  const { isError } = useUiState();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!email.includes("@")) {
      setError("Enter a valid email address.");
      return;
    }
    setSubmitting(true);
    window.setTimeout(() => {
      if (isError) {
        setError("We couldn't send the reset email. Please try again.");
        setSubmitting(false);
        return;
      }
      setSent(true);
      setSubmitting(false);
    }, 700);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--canvas)] px-4 py-10">
      <Card className="w-full max-w-md shadow-[var(--shadow-soft)]">
        <CardHeader className="space-y-3 p-8 pb-4 text-center">
          <div className="flex justify-center">
            <BrandMark />
          </div>
          {sent ? (
            <>
              <CheckCircle2 className="mx-auto h-12 w-12 text-teal-600" />
              <CardTitle className="font-heading text-3xl">Check your email</CardTitle>
            </>
          ) : (
            <>
              <CardTitle className="font-heading text-3xl">Reset password</CardTitle>
              <p className="text-sm text-[var(--muted-foreground)]">
                Enter the email for your individual account. Shared operator logins cannot reset
                here — ask your manager.
              </p>
            </>
          )}
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
                <LoadingBlock label={submitting ? "Sending reset link…" : "Loading…"} />
              ) : sent ? (
                <>
                  <p className="text-center text-sm text-[var(--muted-foreground)]">
                    If an account exists for <strong>{email}</strong>, you&apos;ll receive a reset
                    link shortly.
                  </p>
                  <Button asChild className="w-full" variant="secondary">
                    <Link href="/auth/login">Back to login</Link>
                  </Button>
                </>
              ) : (
                <form className="space-y-4" onSubmit={onSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@station.local"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Send reset link
                  </Button>
                  <div className="text-center">
                    <Link href="/auth/login" className="text-sm font-semibold text-[var(--accent)]">
                      Back to login
                    </Link>
                  </div>
                </form>
              )}
            </>
          )}
        </CardContent>
      </Card>
      <StatePreviewFab />
    </div>
  );
}
