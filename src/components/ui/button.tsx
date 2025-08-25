import * as React from "react"

import { Slot } from "@radix-ui/react-slot"
import { type VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: { 
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        icon: "size-9",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        iconSm: 'size-[28px]',
      },
      variant: {
        blockAction:
        'rounded-sm hover:bg-primary/[.06] [&_svg]:text-muted-foreground hover:[&_svg]:text-brand hover:text-brand',
      blockActionSecondary:
        'rounded-sm bg-primary/[.06] [&_svg]:text-muted-foreground hover:[&_svg]:text-brand hover:text-brand',
      brand:
        'bg-brand font-medium text-white hover:bg-brand/80 active:bg-brand-active shadow-xs hover:[&_svg]:text-brand hover:text-brand',
      default:
        'bg-primary text-primary-foreground hover:bg-primary/90 [&_svg]:text-primary-foreground shadow-xs hover:[&_svg]:text-brand hover:text-brand',
      destructive:
        'bg-red-50 text-red-500 shadow-xs hover:bg-red-100 focus-visible:ring-red-400 dark:focus-visible:ring-red-400 dark:bg-red-600 [&_svg]:text-red-500 hover:[&_svg]:text-red-700 hover:text-red-700',
      ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 [&_svg]:text-muted-foreground/80 hover:[&_svg]:text-brand hover:text-brand',
      ghost2: 'text-muted-foreground hover:bg-accent hover:[&_svg]:text-brand hover:text-brand',
      ghost3: 'text-muted-foreground/80 hover:bg-accent hover:[&_svg]:text-brand hover:text-brand',
      ghostActive: 'bg-accent hover:bg-accent hover:text-accent-foreground [&_svg]:text-brand hover:[&_svg]:text-brand',
      link: 'text-primary hover:underline p-0 hover:[&_svg]:text-brand hover:text-brand',
      menuAction: 'text-muted-foreground/80 hover:bg-primary/[.06] hover:[&_svg]:text-brand hover:text-brand',
      nav: 'rounded-sm text-muted-foreground transition hover:bg-primary/[.04] hover:[&_svg]:text-brand hover:text-brand',
      navAction:
        'rounded-sm text-muted-foreground/80 [&_svg]:text-muted-foreground/80 opacity-0 transition group-hover:opacity-100 hover:bg-primary/[.06] hover:[&_svg]:text-brand hover:text-brand',
      none: '',
      outline:
        'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50  hover:[&_svg]:text-brand hover:text-brand',
      primaryOutline:
        'border border-primary-foreground text-primary-foreground hover:bg-accent/15 [&_svg]:text-primary-foreground hover:[&_svg]:text-brand hover:text-brand',
      radio: 'border-2 border-input hover:border-primary hover:[&_svg]:text-brand hover:text-brand',
      secondary:
        'bg-brand-foreground text-brand shadow-xs hover:bg-brand-foreground/80 [&_svg]:text-brand hover:[&_svg]:text-brand hover:text-brand',
      },
    },
  }
)

function Button({
  asChild = false,
  className,
  size,
  variant,
  tooltip,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    tooltip?: string
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(buttonVariants({ className, size, variant }))}
      data-slot="button"
      {...props}
    />
  )
}

export { Button, buttonVariants }
