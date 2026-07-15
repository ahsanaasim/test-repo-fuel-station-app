"use client";

import { useEffect, useState } from "react";
import { useUiState } from "@/contexts/ui-state-context";

/** Simulates async load on Ready/Offline; other States FAB values take over. */
export function usePageReady(delayMs = 700) {
  const { screenState, isLoading, isEmpty, isError, isPlanLimit, isPermissionDenied, isOffline } =
    useUiState();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(false);
    if (screenState !== "ready" && screenState !== "offline") {
      setHydrated(true);
      return;
    }
    const id = window.setTimeout(() => setHydrated(true), delayMs);
    return () => window.clearTimeout(id);
  }, [screenState, delayMs]);

  const showLoading = isLoading || ((screenState === "ready" || isOffline) && !hydrated);

  return {
    showLoading,
    showEmpty: isEmpty,
    showError: isError,
    showPlanLimit: isPlanLimit,
    showPermissionDenied: isPermissionDenied,
    showOffline: isOffline && hydrated,
    showReady:
      (screenState === "ready" || isOffline) &&
      hydrated &&
      !isLoading &&
      !isEmpty &&
      !isError &&
      !isPlanLimit &&
      !isPermissionDenied,
  };
}
