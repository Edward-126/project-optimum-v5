import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Optimum Gym",
    template: "%s | Optimum Gym",
  },
  description: "Official website of the 'Optimum' Gym - (V5 with NEXTJS)",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={cn(
          "relative h-full antialiased selection:bg-primary/40",
          inter.className,
        )}
      >
        <main className="relative mx-4 flex min-h-screen max-w-5xl flex-col lg:mx-auto">
          <div className="flex-1 flex-grow">
            <Navbar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
