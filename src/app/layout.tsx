import type { Metadata } from "next";
import { Gothic_A1, Black_Han_Sans } from "next/font/google";
import "./globals.css";

const gothicA1 = Gothic_A1({
  weight: ["400", "700"],
  variable: "--font-gothic-a1",
  subsets: ["latin"],
});

const blackHanSans = Black_Han_Sans({
  weight: ["400"],
  variable: "--font-black-han-sans",
  subsets: ["latin"],
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
      <body
        className={`${gothicA1.variable} ${blackHanSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
