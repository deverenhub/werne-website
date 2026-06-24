# Werne Enterprises — Design Modernization Brief

> Source: multi-agent design review (modernity, imagery, color/motion lenses) + ui-ux-pro-max
> design system. Goal: more modern & clean, fewer icons (211 → ~60), more real imagery,
> keep the green/navy brand. Content is already finalized — this is visual-only.

## 1. Design Direction — "Quiet Authority"

A near-monochrome deep-navy + white canvas with **one** confident brand-green accent,
oversized tightly-tracked display headlines, generous whitespace on an 8px grid, hairline
dividers instead of candy gradients, real photography (shop floors, labs, the founder)
with disciplined navy/green duotone scrims, and calm fade-up motion only. Strip the
rainbow-icon clip-art and the blurred-blob hero; let typography, whitespace, and real
product/human imagery carry credibility.

**References:** Linear (single-accent, bento grids, kinetic type) · Vercel (flat
high-contrast, hairline/dot grid, restrained motion) · Stripe (one accent + whitespace +
real product UI) · Palantir (duotone industrial photography for B2B authority).

**North star:** *One accent, real images, big type, still surfaces — the product and the
person are the proof, not the icons.*

## 2. Five highest-leverage moves
1. **Rebuild the hero** — delete the 3 blurred blobs; asymmetric split (oversized H1 + one
   green CTA + plain-text credibility strip | framed real SmartHive screenshot); flat navy
   or white + faint dot grid. (L)
2. **De-rainbow to ONE green accent** — hero subhead words, the 5 multicolor WhyPartner
   icons, stat icons → one muted tone; teal/orange/yellow become rare/semantic only. (S)
3. **Fix motion at the source + flatten cards** — animations live in `tailwind.config.ts`
   which Tailwind v4 ignores (dead); add a small fade-up `@theme` set in globals.css, drop
   playful keyframes; flatten Card to border + soft shadow + 1px lift. (M)
4. **Cut icons ~211 → ~60, add real images** — remove section-header icons, rainbow rows,
   decorative check-bullets; lead Industries/Portfolio/About with photography. (M)
5. **Collapse 7 button variants → 3** (primary/secondary/ghost), solid green primary,
   retire the animated tri-color gradient CTA. (M)

## 3. Icon reduction (211 → ~60) — icons become functional affordances only
- **Keep:** nav/menu, social, external-link, form-field, arrows/chevrons; one ≤16px muted
  check where a real checklist exists; one neutral/green industry glyph in a card's text row.
- **Remove:** section-header H2 icons; the 5 multicolor 4xl icons in WhyPartnerSection; the
  3 hero stat icons; the dense decorative icon clusters on Terms (40) / Privacy (25).
- **Replaces removed clusters:** real photography, numbered lists, eyebrow labels, whitespace.

## 4. Imagery plan
| Location | Image type | Real vs AI | Treatment |
|---|---|---|---|
| Home hero (right) | SmartHive UI screenshot | **Real required** | Framed, full opacity, rounded-xl border + shadow |
| Hero bg (optional) | Shop-floor / quality lab | Real or AI generic | Navy→green duotone, left scrim, AA |
| Industries cards | 3 sector photos (exist) | Real (on disk) | Enlarge h-48→h-56/64, soften overlay, icon into header |
| Innovation Portfolio | Genuine SmartHive UI per card | **Real required** | Framed, full color; stop reusing one dashboard |
| Featured Product (ai-innovation) | Annotated SmartHive UI | **Real required** | Light section, framed |
| About "Meet Deveren" | 3:4 portrait + candid (Purdue MEP) | **Real required** | Framed ~360-480px |
| Partner logos | 8 existing SVGs | Real (exist) | Full/near-full color, not grayscale |
| Mfg/Healthcare support | Lab bench, operator-with-tablet | Real preferred / AI OK | Duotone navy scrim; replaces icon clusters |
| Abstract dividers | Navy bg + thin green network lines | **AI-gen OK** | Brand-toned; never fake UI, never purple/pink |

- **Flag:** `products/smarthive-dashboard.jpg` is reused as portfolio thumb + hero texture +
  featured shot and reads as a gray placeholder — replace with a genuine annotated UI capture.
- **AI-generatable now (via MCP):** abstract navy/green network backgrounds, generic
  industrial/operational scenes. **Must be real (do NOT fabricate):** SmartHive product UI,
  Deveren portrait/candids, partner marks.

## 5. System changes (globals.css + components)
- **Color tokens split** so "bright = dark-bg only" is structural: `--color-navy #0F2A3E`,
  `--color-primary #2E7D32` (AA on light), `--color-primary-bright #4CAF50` (dark only),
  `--color-accent #00838F` (rare). Remap `text-primary` → #2E7D32; drop yellow/red as
  styling utilities (keep red as `--color-error`).
- **Typography:** recommend display face **Plus Jakarta Sans** (keep Geist for body); H1
  `clamp(2.75rem,5vw,4.5rem)` tracking -0.02em; left-aligned eyebrow + H2 section intros.
- **Spacing/radii/shadows:** 8px scale; section `py-24/32`; `rounded-2xl`; restrained
  shadows; hairline `border-t` dividers instead of gradient bands.
- **Components:** Button → 3 variants (solid green primary, delete gradient/shimmer/magnetic);
  Card → border + soft shadow + 1px lift (remove glow/scale); Badge → primary-on-light /
  accent-on-dark only. Motion → fade-up/fade-in only; scope the wildcard `* { transition }`.

## 6. Phased plan
- **Phase 1 (L):** design system + hero + homepage shell — globals.css, tailwind.config.ts,
  layout.tsx (font), Button/Card/Badge, HeroSection, page.tsx.
- **Phase 2 (M):** sections + components — WhyPartner, InnovationPortfolio, IndustrySolutions,
  CTASection, PartnerLogos, Icon discipline.
- **Phase 3 (M-L):** inner pages + imagery — about, industries, services/ai-innovation,
  services/*, terms/privacy de-icon; reusable `<HeroImage>`; wire all new images.

## 7. Quick wins vs bigger bets
- **Quick wins (~70% of the modern jump, low-risk):** de-rainbow to one accent; token split +
  AA green remap; 3 button variants; flatten cards; full-color logos; remove section-header
  icons; scoped transitions.
- **Bigger bets:** hero rebuild; bento Industries/Portfolio; real SmartHive + founder photos
  (blocked on assets); Plus Jakarta Sans rollout.
