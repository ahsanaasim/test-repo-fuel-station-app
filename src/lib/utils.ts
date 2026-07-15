import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatLiters(value: number) {
  return `${value.toLocaleString("en-US", { maximumFractionDigits: 1 })} L`;
}

export function formatPercent(value: number) {
  return `${Math.round(value)}%`;
}
