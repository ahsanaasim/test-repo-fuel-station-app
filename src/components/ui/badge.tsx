import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[var(--accent)] text-white",
        secondary: "border-transparent bg-[var(--muted)] text-[var(--foreground)]",
        outline: "border-[var(--border-strong)] text-[var(--foreground)]",
        success: "border-transparent bg-teal-50 text-teal-800",
        warning: "border-transparent bg-amber-50 text-amber-800",
        danger: "border-transparent bg-rose-50 text-rose-800",
        info: "border-transparent bg-blue-50 text-blue-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
