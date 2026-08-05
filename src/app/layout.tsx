import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Questrial } from "next/font/google";
import "./globals.css";
import "@/styles/reset.css";
import "@/styles/settings.scss";
import "@/styles/global.scss";
import SmoothScroll from "@/components/layout/SmoothScroll/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-noto-sans-jp" });
const questrial = Questrial({ subsets: ["latin"], weight: "400", variable: "--font-questrial" });

export const metadata: Metadata = {
  title: "Haruka Nishida | Portfolio",
  description: "portfolio site by Haruka Nishida, based in Nagoya.",
  openGraph: {
    title: "Haruka Nishida | Portfolio",
    description: "portfolio site by Haruka Nishida, based in Nagoya.",
    images: "https://portfolio.ilohalink.com/ogp.png",
  },
  twitter: {
    card: "summary_large_image",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable} ${questrial.variable}`}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
