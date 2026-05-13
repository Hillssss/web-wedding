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

export const metadata = {
  title: "The Wedding of Syahlan & Fenny",
  description: "Wedding celebration of Syahlan and Fenny.",

  openGraph: {
    title: "The Wedding of Syahlan & Fenny",
    description: "Wedding celebration of Syahlan and Fenny.",
    url: "https://web-wedding-ebon.vercel.app",
    siteName: "Wedding Invitation",
    images: [
      {
        url: "/images/hero7.jpeg",
        width: 1200,
        height: 630,
        alt: "Wedding Thumbnail",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
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
