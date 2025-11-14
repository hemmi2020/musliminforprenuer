import * as React from "react"
import { cn } from "../../lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
  const Comp = asChild ? "span" : "button"
  
  const variants = {
    default: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm",
    destructive: "bg-red-600 text-white hover:bg-red-700 shadow-sm",
    outline: "border-2 border-gray-300 bg-white hover:bg-gray-50 hover:border-gray-400 text-gray-700",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-sm",
    ghost: "hover:bg-gray-100 hover:text-gray-900 text-gray-700",
    link: "text-emerald-600 underline-offset-4 hover:underline",
  }

  const sizes = {
    default: "h-10 px-4 py-2 text-sm",
    sm: "h-8 rounded-md px-3 text-sm",
    lg: "h-12 rounded-lg px-6 text-base",
    icon: "h-10 w-10",
  }

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }