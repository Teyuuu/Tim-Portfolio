import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-neutral-900 text-white shadow hover:bg-neutral-800",
        secondary:
          "border-transparent bg-neutral-100 text-neutral-800 hover:bg-neutral-200",
        destructive:
          "border-transparent bg-red-500 text-white shadow hover:bg-red-600",
        outline: "text-neutral-700 border-neutral-200 bg-white/70 backdrop-blur-sm",
        status:
          "border-neutral-200 bg-white/90 text-neutral-800 shadow-sm backdrop-blur-md px-3.5 py-1.5 gap-2 font-medium",
        tag:
          "border-neutral-200/80 bg-neutral-100/80 text-neutral-600 text-[11px] px-3 py-1",
        overlay:
          "border-transparent bg-black/70 text-white backdrop-blur-md text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
