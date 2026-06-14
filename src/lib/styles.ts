// Shared structural style tokens for the product cards.
//
// These are the cross-component "design decisions" (the card's glassy surface,
// its glow). Per-element layout (grid, gaps, text sizes) stays inline in each
// component — only the repeated, design-level strings live here so they're
// tweaked in one place. Spacing is centralized via the `--spacing-card` theme
// token in index.css (used as the `px-card` utility).

/** Glassy, bordered card surface. */
export const CARD_SURFACE =
  "relative rounded-2xl border border-white/10 bg-[#13131f]/80 backdrop-blur-md overflow-hidden";

/** Per-card glow halo — disabled. Kept as an empty class so consumers don't break. */
export const CARD_GLOW = "hidden";
