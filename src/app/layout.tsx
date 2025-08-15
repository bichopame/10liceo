import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { I18nProvider } from "@/i18n";
import { cookies } from "next/headers"; 



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard LBCEVH",
  description: "School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

const cookieLang = cookies().get("app_lang")?.value === "en" ? "en" : "es";

  return (
    <ClerkProvider>
      <html lang={cookieLang}>
        <body className={inter.className}>
          <I18nProvider initialLang={cookieLang}>
          {children}
          </I18nProvider>
          </body>
      </html>
    </ClerkProvider>
  );
}
