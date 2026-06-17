import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apex Premium Clinic | Luxury Primary Healthcare & Diagnostics",
  description: "Experience premium clinical services by Dr. Vikram Aditya. Specializing in family medicine, child care, diabetes, and advanced body diagnostics in a boutique, hygienic environment.",
  keywords: ["premium clinic Noida", "Dr. Vikram Aditya", "family physician Noida", "luxury diagnostics", "pediatric care Noida", "diabetes specialist"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
