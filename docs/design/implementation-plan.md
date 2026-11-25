# Implementation Plan — M&P Landing Page

## Stack
- **Vite + React 19 + TypeScript** (fast build, clean modular components, zero runtime bloat).
- **Styling:** Semantic CSS custom properties in `src/styles/tokens.css` and `src/styles/global.css` implementing exact observed `#270000`, `#FFFDF1`, `#873332`, and `#371515` tokens.

## Component Architecture
1. `Navbar`: Sticky/top dark header with dropdown menus (`Services`, `Key Topics`, `About Us`), phone link, `Contact us` CTA, and full-screen mobile drawer (`< 960px`) with accordion sections.
2. `Hero`: Full-bleed `#270000` hero with SVG geometric facet overlay, editorial headline (`preserve` in italic serif), vertical hairline, bottom-left lead copy, and `themis-hero.png` statue.
3. `AboutSection`: `#FFFDF1` light section with `• About us` 12-col layout, `#873332` headline, `Learn more about us` CTA, 3-column KPI strip (`31 years`, `2,700+`, `70+`), and architectural banner.
4. `KeyTopicsSection`: `#270000` dark section with `←` / `→` carousel controls, 4 editorial cards (`Foreign Assets`, `Currency Regulation`, `Inheritance`, `Investments via CFC`) with sepia duotone imagery.
5. `VideosAndFaqSection`: Video highlights carousel with modal preview + dual-tone FAQ cards (`#F4F1E7` & `#270000`).
6. `PartnersMapSection`: `70+ partners worldwide` with interactive SVG map of Eurasia/World, clickable/hoverable jurisdiction pins (`Russia`, `UAE`, `Switzerland`, `Cyprus`, `China`, `Singapore`) displaying partner institutions.
7. `LatestNewsSection`: `• Blog` / `Latest news` 3-row editorial list with dates, thumbnails, excerpts, and `↗` links.
8. `ContactSection` & `Footer`: `contact us` 2-column hairline grid, stylized burgundy location map, interactive `"Leave a request"` form with validation & submission state, and clean footer.

## Verification Plan
- Playwright automated visual & functional audit at `1440×900`, `768×1024`, and `390×844` saved to `docs/design/captures/`.
- Verify zero console errors, zero horizontal overflow, SVG-only icons, zero emojis, interactive map/form/drawer states, and run `npm run build`.
