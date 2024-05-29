import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Boras Bank",
  description: "Bank made for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{ fontFamily: "var(--font-geist-sans)" }}>
        <Header />
        <main className="mt-14">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
