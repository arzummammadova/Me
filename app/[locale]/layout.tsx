import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/header";
import { SkyClouds } from "@/components/sky-clouds";
import { Footer } from "@/components/footer";
import { HomeMascot } from "@/components/home-mascot";
import { FloatingDock } from "@/components/floating-dock";
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["500", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Arzu Mammadova — Front-End Developer",
    template: "%s | Arzu Mammadova",
  },
  description:
    "Arzu Mammadova — React, Next.js & creative frontend development. Selected work, experience and contact.",
};
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale} className={inter.variable}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <SkyClouds />
          <Header />
          {children}
          <Footer />
          <HomeMascot />
          <FloatingDock />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}