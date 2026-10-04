# Vendora — design brief (v2)

Single source of truth for the v2 rebuild, produced with the Cinematic Website
Toolset workflow (`/Users/tes/Documents/Business/Website building toolset`).

## Fixed constraints (from the original brief — these override toolset defaults)

- React + Vite + JavaScript + plain CSS. **Not** Next.js/Tailwind (toolset default).
- GSAP + ScrollTrigger only. **No** Lenis smooth scroll (the brief requires native scrolling,
  no scroll hijacking). No WebGL / three.js / R3F.
- **No** analytics, Clarity, UTM capture or cookies in this demo (the brief overrides the
  global analytics standard). Add them later, with a privacy notice, if the demo becomes a live site.
- Pinned sequence ≈ one extra viewport. Reduced motion removes pinning, scrubs and reveals.
- No fabricated claims: no "free", no commission %, no coverage, no response times,
  no testimonials or logos. The demo form sends nothing.

## Level 2 — References

| Reference | Take | Avoid |
|---|---|---|
| **CoffeeTech** (`coffee-tech-com`) — B2B commercial machines | Huge centred display type with very tight tracking; the machine emerging from near-black; a switch to a warm paper section for practical content; `[ Bracket ]` section labels; a giant underlined text link as a CTA | Orange accent; product-catalogue grid (we have no catalogue) |
| **Teenage Engineering** (`teenage-engineering`) | Technical "spec sheet" voice: mono labels, hairline callouts pointing at hardware parts, numbered indices | Illustration style, cookie-banner clutter |
| **Apple iPhone** (`apple-com-iphone`) | Product as the hero, explained part by part as you scroll | Pricing rows, carousels |
| **Linear** (`linear-app`) | Dark precision, restrained borders, quiet motion | Gradient glows |

## Level 3 — Design system

- **Type:** Inter Tight Variable (display + body, OFL) and JetBrains Mono (labels and spec text, OFL),
  both self-hosted via Fontsource.
  - Display h1: `clamp(3rem, 7.2vw, 8.5rem)`, weight 640, tracking −0.055em, line height 0.9
  - h2: `clamp(2.25rem, 5vw, 5.5rem)`, tracking −0.045em
  - Manifesto: `clamp(1.75rem, 3.4vw, 3.5rem)`, tracking −0.03em
  - Body: 17px / 1.6
  - Mono labels: 12–13px, uppercase, +0.08em tracking
- **Colour:**
  - Dark: ink `#0d0e0c` / `#121311` / `#1a1b18`, warm white `#f3efe4`, muted `#b4b0a5`
  - Paper: `#e7e3d8`, ink `#141512`
  - Accent: lime `#c6f432`, used only on primary buttons, callout dots, active indices and progress lines
- **Spacing:** 4/8/12/16/24/32/48/64/96px. Section padding `clamp(5rem, 10vw, 10rem)`.
- **Radius:** 4px for buttons and inputs, 12px for panels. Hairline borders at 12–26% alpha.
- **Motion:**
  - Easing: `power2.out` for reveals, `power1.inOut` for scrubs
  - Durations: reveal 0.7s, hero lines 1.1s; scrub 0.6
  - Only transform and opacity are animated.
  - Three motion pieces in total: one pinned hero, one word-highlight scrub (manifesto), one progress line (process).
    Everything else is static or a single gentle fade.

## Level 4 — Media

The session has no image or video model, so the hero stays an original, unbranded SVG
concept illustration (`public/images/vendora-concept-machine.svg`), captioned as such.

Shot list for later (OpenArt or similar):

1. **Hero still (transparent cutout):** "Unbranded modern snack and drink vending machine,
   matte graphite cabinet, full-height glass front with rows of bottled water, cans and snack packs,
   slim lime-green LED strip at top, contactless card reader beside keypad, three-quarter front view,
   soft top key light, deep charcoal background #0d0e0c, subtle floor reflection, product photography,
   85mm lens, 8k, no text, no logos".
2. **Hero loop (optional):** image-to-video from still 1, slow 6s push-in with a light sweep across the glass, seamless loop.
   Encode with `ffmpeg -i in.mp4 -c:v libx264 -crf 23 -preset slow -an -movflags +faststart -vf scale=1920:-2 hero.mp4`, plus a poster jpg.
3. **Section images (same lighting and palette):** the machine in a warehouse break area, a gym
   corridor and a student accommodation common room. Wide shots, no people's faces, no brands.

To swap images in, see README → "Replacing the hero image". The callout positions are percentages in
`src/content/site.js → hero.callouts` and must be re-aimed if the image changes.

## Level 5 — UI sniping

The magic-21st, Magic UI and shadcn MCPs are not connected in this session (no API keys), and shadcn
would also conflict with the plain-CSS constraint. Effects are hand-built to these tokens:
callout lines, the word-highlight scrub and the giant link CTA.

## Level 6 — Conversion blueprint

What UK managed-vending operators (e.g. Exact Vending, United Vending, Cheshire Vending, Vending MK) typically do:

- lead with "free / no cost to your business" and "we handle everything"
- name a coverage area
- explain the loan model
- use "Get a quote / Request a machine" CTAs
- answer FAQ objections on cost, contracts, restocking and space/power

Vendora cannot claim free, coverage or contract terms. Its angle is
**"a setup shaped around your site, with terms confirmed in conversation"**.

Section order:

1. Hero: what it is, plus the CTA
2. Machine explained through callouts (what you get, what we handle)
3. Benefits manifesto
4. Locations (who it's for)
5. Service scope (what the operator handles, options)
6. Process
7. Big CTA
8. FAQ (objections: suitability, products, restocking, cost, card)
9. Enquiry, with a "what we'll ask" list to lower friction

The primary CTA is always "Discuss your site".

## Level 7 — Extraction

From CoffeeTech's `design.json`:

- h1 is Inter at 216px with −15px tracking (≈ −0.07em), on `rgb(13,14,19)` with text `rgb(243,237,227)`
- body text is 14.4px
- the light section is `#e5e2dd`

These are applied as structure and proportion only, with Vendora's own palette and copy.
No logos, copy or assets are reused.
