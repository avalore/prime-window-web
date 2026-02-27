import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border/65 bg-surface/55 shadow-card backdrop-blur-sm",
        className,
      )}
      {...props}
    />
  );
}
