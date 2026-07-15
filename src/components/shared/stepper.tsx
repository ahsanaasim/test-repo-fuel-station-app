import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Stepper({
  steps,
  current,
}: {
  steps: string[];
  current: number;
}) {
  return (
    <ol className="mb-6 flex flex-wrap items-center gap-2 sm:gap-3">
      {steps.map((label, index) => {
        const step = index + 1;
        const done = step < current;
        const active = step === current;
        return (
          <li key={label} className="flex items-center gap-2">
            <span
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold",
                done && "bg-teal-600 text-white",
                active && "bg-[var(--accent)] text-white",
                !done && !active && "bg-[var(--muted)] text-[var(--muted-foreground)]",
              )}
            >
              {done ? <Check className="h-4 w-4" /> : step}
            </span>
            <span
              className={cn(
                "text-sm font-semibold",
                active ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]",
              )}
            >
              {label}
            </span>
            {index < steps.length - 1 && (
              <span className="mx-1 hidden h-px w-6 bg-[var(--border-strong)] sm:block" />
            )}
          </li>
        );
      })}
    </ol>
  );
}
