import type { Metadata } from "next";
import { Lato, Sora } from "next/font/google";

import Header from "@/components/header";
import Footer from "@/components/footer";

import "./globals.css";

const latoSans = Lato({
  weight: ["400", "700"],
  variable: "--font-lato-sans",
  subsets: ["latin"],
});

const soraSans = Sora({
  variable: "--font-sora-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trash Lion | Philadelphia's #1 Top Rated Junk Removal Team",
  description: "Philadelphia's #1 Top Rated Junk Removal Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${latoSans.variable} ${soraSans.variable} antialiased`}
      >
        <Header />
        <main className="overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
