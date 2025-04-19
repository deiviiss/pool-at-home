import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"], });

export const metadata: Metadata = {
  title: "Piscina en Casa - Renta de Piscinas Portátiles",
  description:
    "Renta una piscina portátil con instalación y recolección incluidas. Convierte tu patio en un paraíso acuático.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>

        {children}
        <Footer />
      </body>
    </html>
  )
}
