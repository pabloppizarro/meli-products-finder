import type { Metadata } from "next";
import "./globals.scss";
import SearchBar from "./_components/SearchBar";

import localFont from "next/font/local";
const proxima = localFont({
  src: "../../public/fonts/Proxima-Nova-Regular.otf",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={proxima.className}>
        <header>
          <div className="nav-container">
            <SearchBar />
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
