import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Greeting App",
  description: "A simple greeting app using Next.js and Shadcn UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-background flex flex-col`}
      >
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
