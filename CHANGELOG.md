# Changelog

All notable changes to the Werne Enterprises website are documented here.
Format based on [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased] — branch `content/factual-realignment` (PR #1)

### Changed — Content
- Realigned all content to the factual **"AI Solution Architect & practical partner"**
  positioning (27+ years, solo). Single source of truth: `CONTENT_TRUTH_SHEET.md`.
- Removed unverified/inflated claims (fabricated testimonials, "42+ years", RAG/MCP/federal
  jargon, "24/7 support", "45+ developer team", $50M+/95%/300% stats, "Coming Soon").
- Surfaced real proof points (hundreds of solutions architected; 5 courses incl. Purdue MEP;
  AI Readiness Assessment; ITAR/CMMC/Title 21 CFR Part 11/CUI + medical-device DHR advisory).
- Added clearly-labeled placeholders for real testimonials + course excerpts.

### Changed — Design ("Quiet Authority")
- Rebuilt the homepage hero (now **full-width**) with an animated **AI-core constellation**
  SVG visual; de-rainbowed to one green accent; cut `<Icon>` usage **211 → 66**.
- Duotone hero imagery (replaced washed-out `opacity-20`); **Plus Jakarta Sans** display
  font; flat cards/buttons; full-color partner logos.
- Modernized inner pages with eyebrow + headline intros; de-iconed legal pages
  (Terms 40→0, Privacy 25→0).
- Added subtle **scroll parallax** on hero images and **tightened vertical spacing** sitewide.
- Added engaging, reduced-motion-safe **motion**: animated hero, scroll-reveal sections,
  hover micro-interactions (image zoom, CTA arrows, card lift), sharper green CTAs.
- Design direction documented in `DESIGN_MODERNIZATION_BRIEF.md`.
- **Design tuning pass:** more generous "Quiet Authority" vertical rhythm — homepage
  content sections bumped to `py-20 lg:py-28` and the closing CTA to `lg:py-32` (partner
  strip kept tight). Removed dead, off-brand `.gradient-mesh` rainbow CSS (unused; also
  referenced a non-existent `gradientX` keyframe).

### Fixed — Accessibility & Security
- WCAG 2.1 AA contrast on CTAs, focus ring, and skip link; `prefers-reduced-motion`
  respected; nav dropdown ARIA `id`/`labelledby` fix.
- Contact API: Origin/CSRF enforcement on POST, PII removed from logs, honeypot field,
  validated client IP, CRLF header-injection defense; trimmed `GET` rate-limit oracle.
- Removed the `/test-contact` debug route; added branded `not-found.tsx` + `error.tsx`;
  CSP `frame-src` added so the Outlook booking iframe renders.
- Fixed the doubled "| Werne Enterprises" brand suffix on 11 page titles.
- Generated the missing PWA icons (`icon-192.png`, `icon-512.png`, `apple-touch-icon.png`
  from the logo) — resolves the manifest `icon-192.png` 404 / console error; corrected the
  manifest `theme_color` from a stray blue (`#2563eb`) to brand navy (`#1A3A52`).
- `not-found` "404" numeral switched from bright `text-primary` (`#4CAF50`, ~2.8:1 on the
  light panel) to the AA green `#2E7D32` for WCAG-compliant contrast.

### Pending (owner-supplied / deferred)
- Real images (SmartHive screenshots, founder/scene photos), real testimonial quotes,
  2 remaining course titles. Deferred infra: KV-backed rate limiting, CAPTCHA (Turnstile),
  nonce-based CSP.
