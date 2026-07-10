"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import letters from "../data/letters";
import BlossomBranch from "../components/BlossomBranch";
import { codeFor } from "../lib/ticketCode";

// Fixed (non-random) petal layout so server and client render identically.
const PETAL_LAYOUT = [
  { left: "4%", delay: "0s", duration: "11s", scale: 0.8 },
  { left: "12%", delay: "2.4s", duration: "13s", scale: 1.1 },
  { left: "21%", delay: "5.1s", duration: "10s", scale: 0.7 },
  { left: "30%", delay: "1.2s", duration: "14s", scale: 1 },
  { left: "39%", delay: "6.4s", duration: "12s", scale: 0.9 },
  { left: "48%", delay: "3.3s", duration: "15s", scale: 1.15 },
  { left: "57%", delay: "0.6s", duration: "11.5s", scale: 0.75 },
  { left: "66%", delay: "4.8s", duration: "13.5s", scale: 1.05 },
  { left: "74%", delay: "2s", duration: "12.5s", scale: 0.85 },
  { left: "83%", delay: "5.8s", duration: "10.5s", scale: 1 },
  { left: "91%", delay: "1.8s", duration: "14.5s", scale: 0.9 },
  { left: "97%", delay: "3.9s", duration: "11s", scale: 1.1 },
];

export default function HomePage() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return letters;
    return letters.filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        (l.nickname || "").toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      <section className="hero">
        <div className="moon" aria-hidden="true" />
        <BlossomBranch className="branch branch--tl" />
        <BlossomBranch className="branch branch--br" />

        <div className="petals" aria-hidden="true">
          {PETAL_LAYOUT.map((p, i) => (
            <span
              key={i}
              className="petal"
              style={{
                left: p.left,
                animationDelay: p.delay,
                animationDuration: p.duration,
                transform: `scale(${p.scale})`,
              }}
            />
          ))}
        </div>

        <div className="hero-content">
          <span className="eyebrow">Zhejiang · 五班 · Musim Semi</span>
          <h1 className="brush-title">此去经年</h1>
          <p className="hero-poem">
            "from here, the years will pass" — 柳永, 雨霖铃
          </p>
          <h2 className="display-title">Surat Perpisahan Kelas Bahasa</h2>
          <p className="subtitle">
            Setahun belajar bahasa bareng di Zhejiang sudah selesai. Bunga
            plum yang mekar waktu kita pertama datang, sekarang gugur waktu
            kita mau pulang ke arah masing-masing. Sebelum semua bubar, ada
            sepucuk surat kecil buat kamu.
          </p>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="num">19</span>
              <span className="label">Teman</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="num">1</span>
              <span className="label">Tahun</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="num">五班</span>
              <span className="label">Kelas</span>
            </div>
          </div>
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <span>Cari namamu</span>
          <span>↓</span>
        </div>
      </section>

      <section className="paper-section">
        <div className="section-heading">
          <h3 className="display-title">Pilih namamu</h3>
          <p className="subtitle">
            Tiap orang punya boarding pass masing-masing menuju babak
            berikutnya. Ketuk namamu untuk buka suratnya.
          </p>
        </div>

        <div className="search-wrap">
          <input
            type="text"
            className="search-input"
            placeholder="Ketik namamu..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Cari namamu"
          />
        </div>

        {filtered.length > 0 ? (
          <div className="name-grid">
            {filtered.map((letter) => (
              <button
                key={letter.slug}
                type="button"
                className="name-card"
                onClick={() => router.push(`/surat/${letter.slug}`)}
              >
                <span className="stub-main">
                  <span className="route">
                    <span className="code">ZHJ</span>
                    <span>→</span>
                    <span className="code">{codeFor(letter.name)}</span>
                  </span>
                  <span className="name">{letter.name}</span>
                  <span className="cta">Buka surat →</span>
                </span>
                <span className="stub-tear">
                  <span className="stub-glyph">缘</span>
                </span>
              </button>
            ))}
          </div>
        ) : (
          <p className="empty-state">Nama itu tidak ada di daftar 五班 ini~</p>
        )}

        <p className="paper-footer">此去经年 · Zhejiang, Musim Semi</p>
      </section>
    </>
  );
}
