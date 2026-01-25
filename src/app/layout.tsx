import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import NoiseOverlay from "@/components/NoiseOverlay";
import ScrollProgress from "@/components/ScrollProgress";
import NeuralBackground from "@/components/NeuralBackground";
import CircuitNav from "@/components/CircuitNav";

const sans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amith M P | Full Stack Engineer",
  description: "Portfolio of Amith M P, a Full Stack Developer specializing in Java, Spring Boot, and Modern Web Technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${sans.variable} ${mono.variable} antialiased`}
      >
        <CustomCursor />
        {/* <NoiseOverlay /> Optional: Tech theme usually cleaner without noise, maybe remove? Keeping for now or removing. User asked for professional unique. Noise adds grit, maybe remove for 'clean' tech. Let's keep it but subtle. */}
        <ScrollProgress />

        {/* AI Tech Components */}
        <NeuralBackground />
        <CircuitNav />

        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
