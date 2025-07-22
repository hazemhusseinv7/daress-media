import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

import { ReactNode } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { ViewTransitions } from "next-view-transitions";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-sans-arabic",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["arabic", "latin"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "صناع المحتوى",
  description:
    "نحن صُنّاع المحتوى، حين يُصبح الحرف نبضًا، والمعرفة لوحةً تنبض بالحياة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="ar" dir="rtl" className="dark scroll-smooth bg-slate-900">
        <body className={`${ibmPlexSansArabic.variable} font-ibm-plex-sans-arabic antialiased`}>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
