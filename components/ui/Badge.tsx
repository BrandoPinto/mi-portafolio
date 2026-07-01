import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent";
}

export default function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wide",
        variant === "default" &&
          "border-surface-border bg-surface text-ink-secondary",
        variant === "accent" && "border-accent/30 bg-accent/10 text-accent",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
