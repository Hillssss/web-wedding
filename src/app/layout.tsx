import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Wedding of Syahlan & Fenny",
  description: "Join us for our special day. Wedding celebration of Syahlan and Fenny.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
