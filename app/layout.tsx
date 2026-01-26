import type { Metadata } from "next";
import { Geist, Geist_Mono, Marcellus, Jost } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const marcellus = Marcellus({
  variable: "--font-marcellus",
  weight: ["400"],
});

const jost = Jost({
  variable: "--font-jost",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Elephant Island",
  description: "Elephant Island",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${marcellus.variable} ${jost.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
