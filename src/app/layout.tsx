import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import PwaRegister from "@/components/PwaRegister"
import PwaInstallPrompt from "@/components/PwaInstallPrompt";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { normalizeLocale, LOCALE_COOKIE } from "@/lib/i18n/locales";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Connexion Space",
  description: "Connexion Space card game",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Connexion",
    statusBarStyle: "black-translucent",
  },
  other: {
    "theme-color": "#000000",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = normalizeLocale(cookieStore.get(LOCALE_COOKIE)?.value);

  return (
    <html lang={locale} className={`${poppins.variable} h-full antialiased`}>
      <head>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-black">
        <div className="bg-black min-h-[100vh] text-[#D2AF9C]">
          <LocaleProvider initialLocale={locale}>
            {children}
            <PwaRegister />
            <PwaInstallPrompt />
          </LocaleProvider>
        </div>
      </body>
    </html>
  );
}
