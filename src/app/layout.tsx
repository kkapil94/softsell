import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoftSell - Turn Unused Software Licenses Into Cash",
  description:
    "SoftSell helps businesses recover costs by selling unused software licenses quickly, securely, and hassle-free.",
  icons: {
    icon: "/window.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="keywords"
          content="software licenses, license resale, software marketplace, sell licenses"
        />
        <meta
          property="og:title"
          content="SoftSell - Turn Unused Software Licenses Into Cash"
        />
        <meta
          property="og:description"
          content="SoftSell helps businesses recover costs by selling unused software licenses quickly, securely, and hassle-free."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/window.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
