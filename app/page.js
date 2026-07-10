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
          <span className="eyebrow">Zhejiang · Spring</span>
          <h1 className="brush-title">此去经年</h1>
          <p className="hero-poem">
            "from here, the years will pass" — Liu Yong, Rain on the
            Bells
          </p>
          <h2 className="display-title">Farewell Letters</h2>
          <p className="subtitle">
            A year of studying language together in Zhejiang has come to an
            end. The plum blossoms that bloomed when we first arrived are
            falling now, just as we head off in our own separate directions.
            Before everyone scatters, there's a small letter waiting for
            you.
          </p>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="num">19</span>
              <span className="label">Friends</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="num">1</span>
              <span className="label">Year</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="num">Zhejiang</span>
              <span className="label">Where it happened</span>
            </div>
          </div>
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <span>Find your name</span>
          <span>↓</span>
        </div>
      </section>

      <section className="paper-section">
        <div className="section-heading">
          <h3 className="display-title">Choose your name</h3>
          <p className="subtitle">
            Everyone gets their own boarding pass to the next chapter. Tap
            your name to open your letter.
          </p>
        </div>

        <div className="search-wrap">
          <input
            type="text"
            className="search-input"
            placeholder="Type your name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search for your name"
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
                  <span className="cta">Open letter →</span>
                </span>
                <span className="stub-tear">
                  <span className="stub-glyph">缘</span>
                </span>
              </button>
            ))}
          </div>
        ) : (
          <p className="empty-state">That name isn't on the list~</p>
        )}

        <p className="paper-footer">此去经年 · Zhejiang, Spring</p>
      </section>
    </>
  );
}
