import Link from "next/link";
import { Logo } from "./ui/icons/logo";
import { cn } from "@/lib/utils";
import { FOOTER, NAV } from "@/lib/constants";
import { ComponentPropsWithoutRef } from "react";
import { NavLink } from "./ui/link";

export const Footer = ({ className, ...props }: ComponentPropsWithoutRef<"footer">) => {
  return (
    <footer className={cn("p-6 py-14 flex items-center w-full bg-primary-blue-950", className)} {...props}>
      <div className="container flex flex-col gap-6 items-center justify-center lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-12 lg:justify-between lg:flex-1">
          <div className="flex items-center justify-between flex-col gap-6 lg:flex-1 lg:items-start">
            <Link href={"/"} className="block w-44">
              <Logo textColor="fill-white" />
            </Link>
            <div className="flex gap-4">
              {FOOTER.SOCIALS.map(el => (
                <NavLink href={"/"} key={el.NAME} className="block size-6">
                  {el.ICON}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:flex-row lg:flex-1 lg:justify-between">
            <ul className="flex text-white flex-col gap-2 text-center lg:text-left">
              {NAV.filter(el => el.ONFOOTER).map(el => (
                <li key={el.NAME} className="hover:text-neutral-gray-600">
                  <NavLink href={"/"} className={cn("", className)}>
                    {el.CONTENT}
                  </NavLink>
                </li>
              ))}
            </ul>
            <ul className="flex text-white flex-col gap-2 text-center lg:text-left">
              {FOOTER.LINKS.map(el => (
                <li key={el.NAME} className="hover:text-neutral-gray-600">
                  <NavLink href={"/"} className={cn("", className)}>
                    {el.CONTENT}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center justify-center lg:flex-1">
          <NavLink href="/" className="w-fit flex lg:self-end transition-all hover:-translate-y-1.5 text-white" variant={"pill"}>Request an Invite</NavLink>
          <span className="block text-sm text-neutral-gray-600 font-medium text-center lg:self-end">
            &#169;Digitalbank. Roniel Sanchez. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  )

}
