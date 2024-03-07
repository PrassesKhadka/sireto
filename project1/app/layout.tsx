import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Practise Project",
  description: "Practising Testing using Storybook and Playwright",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white max-w-screen min-h-screen overflow-hidden flex justify-center items-center">
        {children}
      </body>
    </html>
  );
}
