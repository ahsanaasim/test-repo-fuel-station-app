"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ScreenState =
  | "ready"
  | "loading"
  | "empty"
  | "error"
  | "plan_limit"
  | "permission_denied"
  | "offline";

type UiStateContextValue = {
  screenState: ScreenState;
  setScreenState: (state: ScreenState) => void;
  isReady: boolean;
  isLoading: boolean;
  isEmpty: boolean;
  isError: boolean;
  isPlanLimit: boolean;
  isPermissionDenied: boolean;
  isOffline: boolean;
};

const UiStateContext = createContext<UiStateContextValue | null>(null);

export function UiStateProvider({ children }: { children: ReactNode }) {
  const [screenState, setScreenState] = useState<ScreenState>("ready");

  const value = useMemo(
    () => ({
      screenState,
      setScreenState,
      isReady: screenState === "ready",
      isLoading: screenState === "loading",
      isEmpty: screenState === "empty",
      isError: screenState === "error",
      isPlanLimit: screenState === "plan_limit",
      isPermissionDenied: screenState === "permission_denied",
      isOffline: screenState === "offline",
    }),
    [screenState],
  );

  return (
    <UiStateContext.Provider value={value}>{children}</UiStateContext.Provider>
  );
}

export function useUiState() {
  const ctx = useContext(UiStateContext);
  if (!ctx) {
    throw new Error("useUiState must be used within UiStateProvider");
  }
  return ctx;
}
