import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

import { ReactNode } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import { ViewTransitions } from "next-view-transitions";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  weight: ["200", "300", "400", "500", "700", "800"],
  subsets: ["arabic", "latin"],
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
        <body className={`${tajawal.variable} font-tajawal antialiased`}>
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
