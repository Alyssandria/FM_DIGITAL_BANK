import type { Metadata } from "next";
import "./globals.css";
import { Public_Sans } from "next/font/google";
import { LogoDark } from "./components/ui/logo";
import { ThemeProvider } from "./components/theme-provider";
import Link from "next/link";
import { MobileNav } from "./components/mobile-nav";
import { NavLinks } from "./components/nav-links";
import { Button } from "@/components/ui/button";
import { NavLink } from "./components/ui/link";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  weight: ['300', "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Bank | Landing Page",
  description: "The Digital Bank Landing Page, a solution from Frontend Mentor by Roniel Sanchez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      suppressHydrationWarning
    >
      <head />
      <body
        className={`${publicSans.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="p-6 md:p-10 max-w-[1899px] m-auto">
            <header className="py-6">
              <nav className="flex items-center justify-between gap-6">
                <Link href={"/"} className="block w-44">
                  <LogoDark />
                </Link>
                <MobileNav />
                <NavLinks className="hidden md:flex md:flex-row md:[&>li>a]:text-sm md:gap-8 xl:m-auto md:[&>li>a]:text-neutral-gray-600" />
                <NavLink href={"/"} className="max-xl:hidden text-white" variant={"pill"}>Request an Invite</NavLink>
              </nav>
            </header>
            {children}
            <footer></footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
