import Link from "next/link";
import BlossomBranch from "../components/BlossomBranch";

export default function NotFound() {
  return (
    <section className="letter-hero" style={{ paddingBottom: "80px" }}>
      <div className="moon" aria-hidden="true" />
      <BlossomBranch className="branch branch--tl" />
      <BlossomBranch className="branch branch--br" />

      <div className="letter-hero-inner" style={{ alignItems: "center" }}>
        <span className="eyebrow">五班</span>
        <h1
          className="brush-title"
          style={{ fontSize: "clamp(48px, 9vw, 80px)" }}
        >
          找不到
        </h1>
        <p className="not-found">
          Hmm, nama itu tidak ada di daftar suratnya.
        </p>
        <Link href="/" className="back-link" style={{ marginTop: 18 }}>
          ← kembali pilih nama
        </Link>
      </div>
    </section>
  );
}
