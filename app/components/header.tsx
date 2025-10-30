import Link from "next/link"
import { MobileNav } from "./mobile-nav"
import { NavLinks } from "./nav-links"
import { Logo } from "./ui/icons/logo"
import { NavLink } from "./ui/link"
import { ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/utils"

export const Header = ({ className, ...props }: ComponentPropsWithoutRef<"header">) => {
  return (
    <header className={cn("h-12 flex items-center w-full", className)} {...props}>
      <nav className="flex items-center justify-between gap-6 w-full">
        <Link href={"/"} className="block w-44">
          <Logo />
        </Link>
        <MobileNav />
        <NavLinks className="hidden md:flex md:flex-row md:[&>li>a]:text-sm md:gap-8 xl:m-auto md:[&>li>a]:text-neutral-gray-600" />
        <NavLink href={"/"} className="max-xl:hidden text-white" variant={"pill"}>Request an Invite</NavLink>
      </nav>
    </header>
  )
}
