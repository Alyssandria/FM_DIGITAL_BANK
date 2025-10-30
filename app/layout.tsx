import type { Metadata } from "next";
import "./globals.css";
import { Public_Sans } from "next/font/google";
import { LogoDark } from "./components/ui/logo";
import { ThemeProvider } from "./components/theme-provider";
import Link from "next/link";
import { MobileNav } from "./components/mobile-nav";

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
          <div className="p-6">
            <header className="py-6">
              <nav className="flex items-center justify-between gap-6">
                <Link href={"/"} className="block w-44">
                  <LogoDark />
                </Link>
                <MobileNav />
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
