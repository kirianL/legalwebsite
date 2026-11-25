# Design System — M&P Legal Advisory

## Color Tokens
| Token | Hex | Status | Usage |
|---|---|---|---|
| `--bg-dark` | `#270000` | Observed | Primary dark canvas (Hero, Key Topics, Map, Blog, Contact) |
| `--bg-dark-deep` | `#170000` | Observed | Deepest dark cards / footer contrast |
| `--bg-dark-elevated` | `#371515` | Observed | Geometric background shapes, hover surfaces, dark borders |
| `--bg-dark-shape` | `#411D1B` | Observed | Secondary geometric facet highlight |
| `--bg-light` | `#FFFDF1` | Observed | Primary light section canvas (About Us) |
| `--bg-light-card` | `#F4F1E7` | Observed | Light FAQ card & subtle warm surface |
| `--accent-garnet` | `#873332` | Observed | Headings on light, primary CTA buttons, arrow badges, map highlights |
| `--accent-garnet-hover` | `#9E4140` | Inferred | Button hover state |
| `--text-on-dark` | `#FFFDF1` | Observed | Primary text & headlines on dark |
| `--text-muted-dark` | `#C7B3B2` | Inferred | Secondary body copy on dark |
| `--text-on-light` | `#270000` | Observed | Body copy on light |
| `--text-muted-light` | `#7A5654` | Observed | Captions, eyebrows, dates on light |
| `--border-dark` | `rgba(255, 253, 241, 0.14)` | Observed | Hairlines on dark backgrounds |
| `--border-light` | `rgba(39, 0, 0, 0.14)` | Observed | Hairlines on light backgrounds |

## Typography
| Role | Font Family | Status | Weight / Style | Size (Desktop → Mobile) | Line Height | Tracking |
|---|---|---|---|---|---|---|
| Display Hero | `Inter` (italic accent: `Instrument Serif`) | Substituted | 400 / 400 italic | `clamp(2.75rem, 5.5vw, 5.25rem)` | `1.02` | `-0.035em` |
| Section H2 | `Inter` | Substituted | 400 | `clamp(2rem, 3.6vw, 3.375rem)` | `1.08` | `-0.03em` |
| Card Title H3 | `Inter` | Substituted | 500 | `1.25rem` (`20px`) | `1.25` | `-0.02em` |
| KPI Figure | `Inter` | Substituted | 400 | `clamp(2.5rem, 4vw, 3.75rem)` | `1.0` | `-0.03em` |
| Body Copy | `Inter` | Substituted | 400 | `0.9375rem`–`1rem` (`15–16px`) | `1.55` | `-0.01em` |
| Eyebrow / Meta | `Inter` | Substituted | 400 | `0.8125rem` (`13px`) | `1.4` | `0em` |

## Layout & Spacing
- **Max Container:** `1360px` with `clamp(20px, 4vw, 48px)` horizontal padding.
- **Editorial 12-Column Grid:** Left `3` columns reserved for `• Eyebrow` labels on desktop; right `9` columns for headings, grids, and editorial content. Collapses cleanly to 1 column on mobile (`< 768px`).
- **Radii:** Sharp architectural `0px` for cards, buttons, and hairline containers; `2px` for small square arrow badges (`22px × 22px`).
- **Iconography:** 100% crisp inline SVG (`currentColor`), zero emojis.
