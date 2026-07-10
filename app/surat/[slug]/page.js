import { notFound } from "next/navigation";
import Link from "next/link";
import letters, { getLetterBySlug } from "../../../data/letters";
import BlossomBranch from "../../../components/BlossomBranch";
import { codeFor } from "../../../lib/ticketCode";

const PETAL_LAYOUT = [
  { left: "8%", delay: "0.4s", duration: "10s", scale: 0.8 },
  { left: "24%", delay: "3.1s", duration: "12s", scale: 1 },
  { left: "42%", delay: "1.6s", duration: "11s", scale: 0.7 },
  { left: "61%", delay: "4.4s", duration: "13s", scale: 1.05 },
  { left: "78%", delay: "2.2s", duration: "10.5s", scale: 0.9 },
  { left: "93%", delay: "5.2s", duration: "12.5s", scale: 0.85 },
];

export function generateStaticParams() {
  return letters.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }) {
  const letter = getLetterBySlug(params.slug);
  if (!letter) return { title: "Surat tidak ditemukan" };
  return {
    title: `A letter for ${letter.name} — 此去经年`,
    description: `A farewell letter for ${letter.name}.`,
  };
}

export default function LetterPage({ params }) {
  const letter = getLetterBySlug(params.slug);

  if (!letter) {
    notFound();
  }

  const idx = letters.findIndex((l) => l.slug === letter.slug);
  const next = letters[(idx + 1) % letters.length];

  return (
    <>
      <section className="letter-hero">
        <div className="moon" aria-hidden="true" />
        <BlossomBranch className="branch branch--tl" />

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

        <div className="letter-hero-inner">
          <Link href="/" className="back-link">
            ← choose another name
          </Link>
          <div className="letter-hero-title">
            <span className="eyebrow">Boarding pass · Zhejiang</span>
            <h1>{letter.name}</h1>
          </div>
        </div>
      </section>

      <div className="ticket-wrap">
        <article className="ticket">
          <div className="ticket-stub">
            <div className="field">
              <div className="k">From</div>
              <div className="v">Zhejiang (ZHJ)</div>
            </div>
            <div className="field">
              <div className="k">To</div>
              <div className="v">{codeFor(letter.name)} · Next Chapter</div>
            </div>
            <div className="field">
              <div className="k">Status</div>
              <div className="v">Boarding</div>
            </div>
          </div>

          <div className="ticket-perforation" aria-hidden="true" />

          <div className="ticket-body">
            <div className="seal" aria-hidden="true">
              缘
            </div>

            {letter.lang === "hokkien" && (
              <span className="letter-lang-note">Written in Hokkien</span>
            )}

            <h2 className="letter-greeting">Dear {letter.nickname},</h2>

            <div className="letter-body">
              {letter.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {letter.hashtag && (
              <div className="letter-hashtag">{letter.hashtag}</div>
            )}

            {letter.ps && <div className="letter-ps">PS: {letter.ps}</div>}

            <div className="letter-signature">
              <span className="from">此去经年</span>
              <span className="meta">
                From your friends in the language program,
                <br />
                Zhejiang 🌸
              </span>
            </div>
          </div>
        </article>
      </div>

      <div className="next-wrap">
        <Link href={`/surat/${next.slug}`} className="next-link">
          See another letter ({next.name}) →
        </Link>
      </div>
    </>
  );
}
