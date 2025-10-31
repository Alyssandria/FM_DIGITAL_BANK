import { NAV } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"
import { NavLink } from "./ui/link"

type NavLinks = {
  onListClick?: () => void,
} & ComponentPropsWithoutRef<"ul">
export const NavLinks = ({ onListClick, className, ...props }: NavLinks) => {
  return (
    <ul className={cn("flex flex-col gap-4", className)} {...props}>
      {NAV.map(el => (
        <li key={el.NAME} onClick={onListClick} className="p-2 flex items-center justify-center [&>a]:text-xl [&>a]:block text-center [&>a]:w-full text-primary-blue-950 dark:text-white font-bold">
          <NavLink href={"/"} className="hover:text-primary-blue-950">{el.CONTENT}</NavLink>
        </li>
      ))}
    </ul>
  )
}
