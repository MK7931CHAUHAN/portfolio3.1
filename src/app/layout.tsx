import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const hackerFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-hacker",
});

export const metadata: Metadata = {
  title: "portfolio ",
  description: "Portfolio of Mithlesh Kumar - Digital Security & Full Stack Architecture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${hackerFont.variable} font-hacker antialiased selection:bg-green-500/30 selection:text-green-500`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
