# Vendora — Managed Vending Concept Demo

A single-page, static marketing site for a fictional UK managed vending service.
Built with React + Vite, plain CSS and GSAP/ScrollTrigger.

**v3** keeps the v2 cinematic design and adds:

- the trust content from the separate trust demo (`../vendora-trust`): Commitments, Support,
  honest Proof placeholders and the fuller FAQ
- photo-led Locations panels
- animated product models (a can, a water bottle, crisps, and a takeaway poke bowl) scattered
  through the page
- a restocking animation in Service scope
- a can that rolls along the How it works timeline

**v2** was redesigned with the Cinematic Website Toolset workflow. See
[`design-brief.md`](design-brief.md) for the references, design system, media shot
list, conversion blueprint and the constraints that override the toolset defaults.

> **Concept demo.** The brand, copy, product mixes and service model are
> illustrative. No business plan, supplier, catalogue, service area, pricing or
> commission arrangement has been confirmed.

## Run locally

Requires Node.js 18.18+ (tested on Node 26 / npm 11).

```bash
npm install
npm run dev       # development server (http://localhost:5173)
npm run build     # production build to dist/
npm run preview   # serve the built dist/ locally (http://localhost:4173)
```

No environment variables, API keys, database or external services are needed.

## Deploy to Vercel

1. Push this folder to a Git repository (or use `vercel` CLI from this folder).
2. In Vercel, import the project with:
   - **Framework preset:** Vite
   - **Root directory:** the folder containing `package.json` (this folder)
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Environment variables:** none required
3. Deploy. The site is a single page with anchor navigation, so no route
   rewrites are needed.

The build uses `base: './'` (relative asset paths), so the same `dist/` folder
can be hosted at a domain root or a sub-path by any static host.

## Project structure

```
index.html                 Page shell, title, meta (noindex), favicon
vite.config.js             Vite + React plugin, relative base, dist output
public/
  favicon.svg
  robots.txt               Disallow all (demo)
  images/vendora-concept-machine.svg   Hero concept illustration
src/
  main.jsx                 Entry: font, styles, <App/> in StrictMode
  App.jsx                  Page composition
  content/site.js          ALL copy, brand, nav, locations, FAQ, form options, image paths
  components/              Header, Hero, Benefits, Locations, ServiceScope, Process, Faq, Enquiry, Footer
  hooks/useHeroSequence.js Desktop pinned hero sequence (GSAP matchMedia)
  hooks/useReveals.js      Gentle section reveals
  hooks/useScrubEffects.js Manifesto word highlight + process progress line
  lib/motion.js            GSAP registration + shared media queries
  lib/enquiry.js           Form validation + isolated (demo) submit function
  styles/tokens.css        Colours, type, spacing, motion timings (CSS custom properties)
  styles/base.css          Reset, buttons, shared section styles
  styles/sections.css      Per-section layout
```

## Editing

- **Brand name, copy, locations, FAQs, form options:** `src/content/site.js`.
  Components read everything from this file.
- **Colours, fonts, spacing, motion timings:** `src/styles/tokens.css`.
  The lighter “Service scope” section uses the `.theme-light` overrides in the same file.
- **Fonts:** Inter Tight (display/body) and JetBrains Mono (labels), both SIL Open
  Font License, self-hosted via Fontsource and bundled into `dist/` — no font CDN.
  To change it, install another Fontsource package, import it in `src/main.jsx`
  and update `--font-sans`.
- **Wordmark:** `src/components/Wordmark.jsx` (text + small SVG glyph).
- **Favicon:** `public/favicon.svg`.

### Replacing the hero image

The hero uses `public/images/vendora-concept-machine.svg`, an original, unbranded
concept illustration created for this project (no third-party assets, no licence
restrictions). It is captioned on the page as a concept illustration.

To replace it with photography of the chosen machine:

1. Use an image you have the right to use (supplier-provided with written
   permission, your own photography, or a properly licensed stock image).
   Record its source and licence below.
2. Ideally a transparent cutout (WebP/PNG, ~1100px tall) on no background, or
   shot against a dark backdrop so it blends into the hero.
3. Save it in `public/images/` and update `images.heroMachine` in
   `src/content/site.js` (`src`, `width`, `height`, `alt`, `caption`).
   Keep `width`/`height` accurate to avoid layout shift.
4. Re-aim the desktop callouts: `hero.callouts` in `site.js` holds each callout's
   anchor point as `x`/`y` percentages of the image, plus the side its label sits on.

| Asset | Source | Licence |
| --- | --- | --- |
| `public/images/vendora-concept-machine.svg` | Original illustration created for this demo | Project-owned, no third-party rights |
| `public/favicon.svg` | Original | Project-owned |
| Product models (`src/components/products/Product.jsx`) | Original SVG illustrations: unbranded can, water bottle, crisps, and a takeaway poke bowl | Project-owned |
| `public/media/workplace.webp` | [Office kitchen](https://unsplash.com/photos/a-kitchen-with-black-cabinets-and-a-white-counter-top-OI6D_VKxSMw), by Craig Lovelidge | Unsplash Licence |
| `public/media/warehouse.webp` | [Empty modern warehouse](https://unsplash.com/photos/empty-modern-warehouse-interior-with-polished-concrete-floor-3lkaszxWfGc), by Craftsman Concrete Floors | Unsplash Licence |
| `public/media/gym.webp` | [Gym interior](https://unsplash.com/photos/a-gym-filled-with-lots-of-exercise-equipment-GNWUPn44-eg), by Jinish Shah | Unsplash Licence |
| `public/media/student.webp` | [Residential blocks](https://unsplash.com/photos/a-couple-of-tall-buildings-next-to-each-other-cLeLgVoX9mE), by Mark Stuckey | Unsplash Licence |
| Inter Tight font | Fontsource (`@fontsource-variable/inter-tight`) | SIL Open Font License 1.1 |
| JetBrains Mono font | Fontsource (`@fontsource/jetbrains-mono`) | SIL Open Font License 1.1 |

No video is used. If an optional hero video is added later, keep it local,
muted, `playsInline`, with a poster image, and keep the page complete without it.

## Product models and scattered visuals

- **Models:** `src/components/products/Product.jsx`. Types: `can` (variants coral, teal, lime),
  `bottle`, `crisps` (amber, blue) and `bowl`. All are drawn SVG with lighting gradients.
- **Placement:** `decor` in `src/content/site.js`. It sets the position, size, rotation and
  scroll depth for each section. `mobile: false` hides an item on small screens.
- **Motion:** items bob gently (CSS) and drift at different depths on scroll (GSAP).
  - The restocking panel fills its slots row by row.
  - A can rolls along the process timeline.
  - All of this is off under reduced motion.
- **Location panels:** each panel shows its own pair of products on the photo (`locations.items[].products`).
- **Poke bowl:** it is decorative and does **not** promise prepared meals. Food options stay
  conditional in the copy.

## Interactions

- **Hero (desktop ≥1024px wide, ≥640px tall, motion allowed):** the hero pins for
  about one extra viewport using native scrolling (ScrollTrigger scrub, no smooth-scroll
  library, no hijacking). The giant headline lifts away, the machine rises from below
  into the centre, and three hairline callouts draw in turn, pinning each statement
  ("Choose the right setup." / "Keep refreshments within reach." / "Leave the servicing
  to us.") to a part of the machine. The callouts are decorative (`aria-hidden`); the
  same statements stay in the DOM as a list for screen readers. The `is-cinematic` class
  and all hidden states are applied only after GSAP initialises and are removed by
  `mm.revert()`, so content stays visible if animation fails and Strict Mode is safe.
- **Manifesto:** a large statement whose words brighten as it scrolls through the
  viewport (screen readers get the plain sentence).
- **Process:** a lime progress line fills along the four steps on desktop.
- **Mobile / tablet:** no pinning. The machine and statements flow as normal content,
  and sections fade up gently once.
- **Reduced motion:** no pinning, scrubs or reveals; CSS entrance animations removed.
- **Locations:** WAI-ARIA tabs (arrow keys, Home/End; click/tap). A location CTA
  pre-selects the site type in the enquiry form.
- **FAQ:** disclosure buttons with `aria-expanded` / `aria-controls`.
- **Enquiry form:** demo only. Validates required fields, email and UK postcode
  format, shows inline errors linked with `aria-describedby`, focuses the first
  error. A valid submission shows a summary stating
  “Demo enquiry prepared. Nothing has been sent.” Nothing is transmitted or stored.

### Connecting a real form endpoint later

All submission logic is in `src/lib/enquiry.js` → `submitEnquiry(values)`.
Replace its body with a real request and return `{ sent: true }` on success,
then update the result copy in `site.js`. Before doing so, add a privacy notice,
decide on data retention, and add spam protection.

## Demo status and metadata

- `<meta name="robots" content="noindex, nofollow">` in `index.html` and
  `public/robots.txt` disallowing all crawlers. **Review and remove both before a
  real public launch.**
- No canonical URL, no structured data, no analytics, no cookies.
- Footer shows: “Concept demo — brand and service details are illustrative.”

## To confirm before a real launch

- Business name, trademark checks, logo and domain.
- Service area (no coverage is claimed in this demo).
- Machine supplier, models, and whether contactless payment and remote
  monitoring are available on them.
- Product catalogue per site type, including whether any food or chilled options
  are possible.
- Commercial model: installation costs, host commission (if any), minimum
  footfall, contract length.
- Servicing scope and any response commitments (none are stated here).
- Real contact details, company registration details, privacy policy and
  cookie policy (if analytics are added).
- A real enquiry endpoint and data handling process.
- Licensed photography of the actual machine to replace the concept illustration.
- Remove `noindex`/`robots.txt` blocking and add a canonical URL.
