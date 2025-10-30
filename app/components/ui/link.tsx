import { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const linkVariants = cva("text-center inline-flex p-4 items-center justify-center", {
  variants: {
    variant: {
      default: "bg",
      pill: "font-bold px-5 py-2.5 rounded-full bg-linear-to-tr from-primary-cyan-400 to-primary-green-500"
    },
  },
  defaultVariants: {
    variant: "default",
  }
});
export const NavLink = (
  {
    className,
    variant,
    children,
    ...props
  }: ComponentPropsWithoutRef<typeof Link> & VariantProps<typeof linkVariants>) => {
  return (
    <Link
      className={cn(linkVariants({ variant, className }))}
      {...props}
    >
      {children}
    </Link>
  )

}
