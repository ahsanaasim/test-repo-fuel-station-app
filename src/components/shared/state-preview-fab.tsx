"use client";

import { useState } from "react";
import { Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useUiState, type ScreenState } from "@/contexts/ui-state-context";

const STATES: { id: ScreenState; label: string }[] = [
  { id: "ready", label: "Ready" },
  { id: "loading", label: "Loading" },
  { id: "empty", label: "Empty" },
  { id: "error", label: "Error" },
  { id: "plan_limit", label: "Plan limit" },
  { id: "permission_denied", label: "Permission" },
  { id: "offline", label: "Offline" },
];

export function StatePreviewFab() {
  const { screenState, setScreenState } = useUiState();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 end-5 z-[80] flex flex-col items-end gap-2">
      {open && (
        <div className="animate-float-in w-48 rounded-lg border border-[var(--border)] bg-white p-2 shadow-[var(--shadow-soft)]">
          <p className="px-2 pb-2 pt-1 text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
            Screen states
          </p>
          <div className="flex flex-col gap-1">
            {STATES.map((state) => (
              <button
                key={state.id}
                type="button"
                onClick={() => {
                  setScreenState(state.id);
                  setOpen(false);
                }}
                className={cn(
                  "rounded-md px-3 py-2 text-start text-sm font-medium transition-colors",
                  screenState === state.id
                    ? "bg-[var(--accent)] text-white"
                    : "hover:bg-[var(--muted)]",
                )}
              >
                {state.label}
              </button>
            ))}
          </div>
        </div>
      )}
      <Button
        type="button"
        size="sm"
        variant="outline"
        onClick={() => setOpen((v) => !v)}
        className="h-11 rounded-full border-2 border-[var(--foreground)] bg-[var(--foreground)] px-4 text-white shadow-lg hover:bg-[#333] hover:text-white"
        aria-label="Preview screen states"
      >
        <Layers className="h-4 w-4" />
        States
      </Button>
    </div>
  );
}
