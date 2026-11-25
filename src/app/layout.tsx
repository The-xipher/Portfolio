import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amith M P — Software Engineer",
  description: "Portfolio of Amith M P, Developer II in Software Engineering at UST.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
