import * as React from "react"
import { cn } from "~/lib/utils"

// Helper function to determine the text color based on bgColor
const getTextColorForBg = (bgColor: string) => {
  if (bgColor === "bg-primary") {
    return "text-secondary"; // if background is primary, text will be secondary
  } else if (bgColor === "bg-secondary") {
    return "text-primary"; // if background is secondary, text will be primary
  }
  return ""; // default text color
};

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { bgColor?: string }
>(({ className, bgColor, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-card-foreground", getTextColorForBg(bgColor), className)}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { bgColor?: string }
>(({ className, bgColor, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", getTextColorForBg(bgColor), className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { bgColor?: string }
>(({ className, bgColor, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold text-xl md:text-2xl xl:text-3xl leading-[0.9] font-spectral tracking-tight", getTextColorForBg(bgColor), className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { bgColor?: string }
>(({ className, bgColor, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm", getTextColorForBg(bgColor), className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { bgColor?: string }
>(({ className, bgColor, ...props }, ref) => (
  <div ref={ref} className={cn("md:px-4 -mt-2 leading-snug", getTextColorForBg(bgColor), className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { bgColor?: string }
>(({ className, bgColor, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", getTextColorForBg(bgColor), className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
