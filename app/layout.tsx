import type { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoKufiArabic = Noto_Kufi_Arabic({
  variable: "--font-noto-kufi-arabic",
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
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark scroll-smooth">
      <body
        className={`${notoKufiArabic.variable} font-noto-kufi-arabic antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
