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
  title: "此去春来 — Surat Perpisahan Zhejiang",
  description:
    "Setahun belajar bahasa bareng di Zhejiang, dan sekarang saatnya berpisah. Pilih namamu untuk membaca suratnya.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${notoSerifSC.variable} ${maShanZheng.variable} ${plusJakarta.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
