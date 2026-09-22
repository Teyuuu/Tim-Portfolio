import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-[#111111] text-white shadow-sm hover:bg-neutral-800 hover:shadow-md",
        destructive:
          "bg-red-500 text-white shadow-sm hover:bg-red-600",
        outline:
          "border border-neutral-300 bg-white hover:bg-neutral-100 hover:text-neutral-900 text-neutral-800 shadow-sm",
        secondary:
          "bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-200",
        ghost:
          "hover:bg-neutral-100 hover:text-neutral-900 text-neutral-700",
        link:
          "text-primary underline-offset-4 hover:underline",
        pill:
          "border border-neutral-200 bg-white/80 backdrop-blur-sm text-neutral-800 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 shadow-sm",
        darkPill:
          "bg-[#111111] text-white hover:bg-neutral-800 shadow-sm px-6 py-2.5",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-full px-3.5 text-xs",
        lg: "h-12 rounded-full px-7 text-base font-semibold",
        icon: "h-9 w-9 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
