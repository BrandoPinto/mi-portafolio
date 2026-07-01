import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export default function Card({
  className,
  hoverable = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl2 border border-surface-border bg-surface shadow-card",
        hoverable &&
          "transition-all duration-300 hover:border-accent/30 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
