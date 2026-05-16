import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import PwaRegister from "@/components/PwaRegister";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>
      <body className="min-h-full flex flex-col justify-center">
        {children}
        <PwaRegister />
      </body>
    </html>
  );
}
