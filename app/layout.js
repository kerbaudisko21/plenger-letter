import { Noto_Serif_SC, Ma_Shan_Zheng, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const maShanZheng = Ma_Shan_Zheng({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-brush",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "此去经年 — Farewell Letters",
  description:
    "A year of studying language together in Zhejiang has come to an end. Choose your name to read your letter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${notoSerifSC.variable} ${maShanZheng.variable} ${plusJakarta.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
