import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LogoNavbar from "@/components/logo-navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SynthoStrategies",
  description:
    "a dynamic and forward-thinking AI automation agency dedicated to driving success and innovation for businesses across diverse industries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-300`}>
        <LogoNavbar />
        {children}
      </body>
    </html>
  );
}
