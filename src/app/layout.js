import localFont from "next/font/local";
import { Chakra_Petch, Exo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const nasalization = localFont({
  src: "../fonts/Nasalization.otf",
  variable: "--font-nasalization",
  display: "swap",
});

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "CATSTATE — Team 12364",
  description:
    "CATSTATE (Team 12364) — FRC robotics team competing in the Izmir regionals. Industrial precision, modern editorial, motorsport energy.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${nasalization.variable} ${chakraPetch.variable} ${exo.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}