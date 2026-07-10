// A hand-drawn-feeling plum/cherry blossom branch, built from simple
// circles and curved paths so it stays lightweight (no external assets).
export default function BlossomBranch({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 40 C 60 20, 90 60, 140 50 C 190 40, 210 10, 260 20 C 285 25, 295 15, 300 5"
        stroke="#3a2b3f"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M70 46 C 75 65, 95 78, 100 95"
        stroke="#3a2b3f"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M170 46 C 178 66, 200 74, 208 92"
        stroke="#3a2b3f"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M230 22 C 236 40, 252 48, 262 62"
        stroke="#3a2b3f"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {[
        [30, 34, 1],
        [55, 22, 0.85],
        [88, 92, 0.9],
        [104, 100, 0.7],
        [140, 47, 1.1],
        [165, 30, 0.8],
        [205, 88, 0.95],
        [218, 98, 0.7],
        [250, 18, 0.9],
        [263, 60, 0.75],
        [280, 12, 0.6],
      ].map(([cx, cy, s], i) => (
        <g key={i} transform={`translate(${cx} ${cy}) scale(${s})`}>
          <circle cx="-5" cy="-3" r="5" fill="#f2a9c4" opacity="0.95" />
          <circle cx="5" cy="-4" r="5" fill="#eb8fb0" opacity="0.95" />
          <circle cx="6" cy="6" r="5" fill="#f2a9c4" opacity="0.95" />
          <circle cx="-6" cy="6" r="5" fill="#e97fa4" opacity="0.95" />
          <circle cx="0" cy="0" r="5" fill="#f8d3c8" opacity="0.95" />
          <circle cx="0" cy="0" r="2.2" fill="#d3ad6a" />
        </g>
      ))}
    </svg>
  );
}
