import { Analytics } from "@vercel/analytics/react";

import { ThemeProvider } from "@/components/shared/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { baseUrl } from "./sitemap";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}`),
  keywords: [
    "optimum gym",
    "optimumgym idh",
    "idh optimumgym",
    "idh optimum gym",
    "optimumgym gothatuwa",
    "optimum gym idh",
    "optimum gym gothatuwa",
    "optimum power and fitness gym",
    "optimum power & fitness gym",
    "idh gym",
    "gothatuwa gym",
    "fitness idh",
    "fitness",
    "gym membership idh",
    "gym membership gothatuwa",
    "gym near me idh",
    "gym near me gothatuwa",
    "best gym idh",
    "best gym gothatuwa",
    "affordable gym idh",
    "affordable gym gothatuwa",
    "gym equipment idh",
    "gym equipment gothatuwa",
    "fitness center idh",
    "fitness center gothatuwa",
    "workout idh",
    "workout gothatuwa",
    "weight loss idh",
    "weight loss gothatuwa",
    "muscle building idh",
    "muscle building gothatuwa",
    "personal trainer idh",
    "personal trainer gothatuwa",
    "group fitness classes idh",
    "group fitness classes gothatuwa",
    "yoga idh",
    "yoga gothatuwa",
    "zumba idh",
    "zumba gothatuwa",
    "spinning idh",
    "spinning gothatuwa",
    "crossfit idh",
    "crossfit gothatuwa",
    "pilates idh",
    "pilates gothatuwa",
    "body sculpting idh",
    "body sculpting gothatuwa",
    "strength training idh",
    "strength training gothatuwa",
    "cardio workout idh",
    "cardio workout gothatuwa",
    "gym idh",
    "fitness idh",
    "workout idh",
    "gym for beginners idh",
    "gym for beginners gothatuwa",
    "gym for women idh",
    "gym for women gothatuwa",
    "gym for weight loss idh",
    "gym for weight loss gothatuwa",
    "gym with swimming pool idh",
    "gym with swimming pool gothatuwa",
    "gym with personal trainer idh",
    "gym with personal trainer gothatuwa",
    "youth gym idh",
    "youth gym gothatuwa",
    "teen gym idh",
    "teen gym gothatuwa",
    "student gym idh",
    "student gym gothatuwa",
    "family gym idh",
    "family gym gothatuwa",
    "crossfit gym idh",
    "crossfit gym gothatuwa",
    "hiit workout idh",
    "hiit workout gothatuwa",
    "fitness equipment idh",
    "fitness equipment gothatuwa",
    "cardio machines idh",
    "cardio machines gothatuwa",
    "weightlifting equipment idh",
    "weightlifting equipment gothatuwa",
    "best gym for weight loss idh",
    "best gym for weight loss gothatuwa",
    "gym with personal trainers idh",
    "gym with personal trainers gothatuwa",
    "affordable gym membership idh",
    "affordable gym membership gothatuwa",
    "gym for students idh",
    "gym for students gothatuwa",
    "group fitness classes for beginners idh",
    "group fitness classes for beginners gothatuwa",
  ],
  title: {
    default: "Optimum Gym",
    template: "%s | Optimum Gym",
  },
  description: "Official website of the 'Optimum' Gym - (V5 with NEXTJS)",
  openGraph: {
    title: "Optimum Gym",
    description: "Official website of the 'Optimum' Gym - (V5 with NEXTJS)",
    url: `${baseUrl}`,
    siteName: "Optimum Gym",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        secureUrl: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Preview image for Optimum Gym",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
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
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "relative h-full antialiased selection:bg-primary/40",
          inter.className,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="relative mx-4 flex min-h-screen max-w-6xl flex-col lg:mx-auto">
            <div className="flex-1 flex-grow">
              <Navbar />
              {children}
              <Footer />
            </div>
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
