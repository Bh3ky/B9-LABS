import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "B9 Labs | A Hub",
  description:
    "A sophisticated, high-performance platform for cataloging and showcasing engineering projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} bg-neutral-950 text-neutral-100 selection:bg-blue-500/30`}
      >
        <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-100 selection:bg-blue-500/30">
          <Header />
          <main className="flex-grow pt-16">{children}</main>
          <div className="pt-12">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
