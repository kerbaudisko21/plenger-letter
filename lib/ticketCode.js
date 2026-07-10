// Playful 3-letter "boarding pass" code, derived from each name.
export function codeFor(name) {
  const words = name.replace(/[()]/g, "").split(/\s+/).filter(Boolean);
  if (words.length > 1) {
    return words
      .slice(0, 3)
      .map((w) => w[0])
      .join("")
      .toUpperCase();
  }
  return name.slice(0, 3).toUpperCase();
}
