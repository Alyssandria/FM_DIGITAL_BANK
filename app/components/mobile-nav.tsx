"use client"

import { Menu } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { NavLinks } from "./nav-links";
import { useState } from "react";
export const MobileNav = () => {
  const [open, setIsOpen] = useState<boolean>(false);
  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Menu className="block size-8 md:hidden" />
      </DialogTrigger>
      <DialogContent className="top-72">
        <DialogHeader>
          <DialogTitle className="sr-only">Mobile site Navigation</DialogTitle>
        </DialogHeader>
        <NavLinks onListClick={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  )
}
