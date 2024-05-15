import "./globals.css";
import { Oswald } from "next/font/google";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import NextTopLoader from "nextjs-toploader";
import { Footer } from "./footer";
import { Header } from "./header";

const font = Oswald({ subsets: ["latin"], weight: "400" });

export const metadata = {
  manifest: "/manifest.json",
  title: {
    template: "%s | Appvil",
    default: "Appvil",
  },
  description: "Mobilių aplikacijų kūrimas iOS ir Android platformoms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn("min-h-screen bg-background antialiased", font.className)}
      >
        <Providers>
          <NextTopLoader color="#E11D48" />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
