import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MusicPlayerCompact from "@/components/music/MusicPlayerCompact";
import FloatingContact from "@/components/ui/FloatingContact";
import BackgroundOrbs from "@/components/ui/BackgroundOrbs";
import CustomCursor from "@/components/ui/CustomCursor";
import { AudioProvider } from "@/context/AudioContext";
import { playlist } from "@/data/music";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Brando Pinto — Full Stack Developer",
  description:
    "Portafolio de Brando Pinto, Full Stack Developer especializado en productos web y móviles modernos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="min-h-screen">
        <BackgroundOrbs />
        <CustomCursor />
        <AudioProvider songs={playlist}>
          <Navbar />
          <main className="pb-24 lg:pb-0">{children}</main>
          <Footer />
          <MusicPlayerCompact />
          <FloatingContact />
        </AudioProvider>
      </body>
    </html>
  );
}
