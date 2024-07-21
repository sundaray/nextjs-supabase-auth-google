import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/main-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Supase Auth + Next.js Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNav />
        <main className="flex-1 p-10">{children}</main>
      </body>
    </html>
  );
}
