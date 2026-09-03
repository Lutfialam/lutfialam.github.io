import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

// `assetPrefix: "."` makes the exported site work from a GitHub Pages
// subpath, but it breaks client-side hydration under `next dev`, so it is
// applied only outside the dev server.
const config = (phase: string): NextConfig => ({
  output: "export",
  assetPrefix: phase === PHASE_DEVELOPMENT_SERVER ? undefined : ".",
  images: {
    unoptimized: true,
  },
});

export default config;
