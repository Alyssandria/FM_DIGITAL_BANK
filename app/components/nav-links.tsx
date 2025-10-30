import { NAV } from "@/lib/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ComponentPropsWithoutRef } from "react"

type NavLinks = {
  onListClick?: () => void,
} & ComponentPropsWithoutRef<"ul">
export const NavLinks = ({ onListClick, className, ...props }: NavLinks) => {
  return (
    <ul className={cn("flex flex-col gap-4", className)} {...props}>
      {NAV.map(el => (
        <li key={el.NAME} onClick={onListClick} className="p-2 flex items-center justify-center [&>a]:text-xl [&>a]:block text-center [&>a]:w-full text-primary-blue-950 dark:text-white font-bold">
          <Link href={"/"}>{el.CONTENT}</Link>
        </li>
      ))}
    </ul>
  )
}
