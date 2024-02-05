import type { Metadata } from "next";
import "./globals.scss";
import SearchBar from "./_components/SearchBar";

import localFont from "next/font/local";
import { MeliHeader } from "./_components/MeliHeader";
import { Suspense } from "react";
const proxima = localFont({
  src: "../../public/fonts/Proxima-Nova-Regular.otf",
});

export const metadata: Metadata = {
  title: "Mercado Libre Argentina",
  description:
    "Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.",
  openGraph: {
    siteName: "Mercado Libre",
    title: "Mercado Libre Argentina",
    description:
      "Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.",
    url: "https://www.mercadolibre.com.ar/",
    images: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={proxima.className}>
        <MeliHeader>
          <SearchBar></SearchBar>
        </MeliHeader>
        <main>{children}</main>
      </body>
    </html>
  );
}
