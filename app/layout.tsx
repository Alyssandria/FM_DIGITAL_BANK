import type { Metadata } from "next";
import "./globals.css";
import { Public_Sans } from "next/font/google";
import { ThemeProvider } from "./components/theme-provider";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

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
        className={`${publicSans.className} min-h-screen flex flex-col antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex-1 relative overflow-x-hidden">
            <Header />
            <main className="bg-background">
              {children}
            </main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
