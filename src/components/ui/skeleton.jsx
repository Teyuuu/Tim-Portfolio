import React from "react"
import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-neutral-200/70 after:absolute after:inset-0 after:-translate-x-full after:animate-[shimmer_1.8s_infinite] after:bg-gradient-to-r after:from-transparent after:via-white/40 after:to-transparent",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
