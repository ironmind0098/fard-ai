import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const yekanBakh = localFont({
  src: [
    {
      path: "../../public/fonts/YekanBakhFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakhFaNum-SemiBold.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakhFaNum-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakhFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/YekanBakhFaNum-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-yekan-bakh",
  display: "swap",
});

export const metadata: Metadata = {
  title: "شهر هوشمند فرد | fardAi",
  description:
    "شهر هوشمند فرد — ارزیابی هوشمند رشد دیجیتال کسب‌وکار با ایجنت fardAi و دریافت نقشه راه ۶ ماهه اختصاصی سئو، حضور محلی و توسعه فروش آنلاین.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${yekanBakh.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-[#EBEBEB] font-sans text-[#0E1629] antialiased selection:bg-[#E50062]/15 selection:text-[#A00045]">
        {children}
      </body>
    </html>
  );
}
