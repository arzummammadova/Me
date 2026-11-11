# Arzu Mammadova portfolio

## Source material

All 15 supplied PNGs were visually inspected. The three Desktop images are composition references, not flattened site backgrounds. The other 12 files are reused individually in `public/assets`. The original CV is available unchanged at `/documents/Arzu-Mammadova-CV.pdf`.

`animation.mp4` is 10.03 seconds, 1280 × 720, 24 fps. Contact sheets covering the complete clip and six frames per second across the key transition are in `.qa/`. Sequence: quiet portrait composition (0–3.5s), camera pushes toward the laptop and the portrait exits (3.5–5s), front-facing black laptop settles (5–6s), screen illuminates and displays work (6–10s).

The implementation maps the camera movement to a GSAP ScrollTrigger timeline with pinning and scrub. A perspective transform and crossfade approximate the laptop turn: the provided portrait is a flattened still image, so its hands and embedded laptop cannot be independently articulated. The supplied video is not used as a substitute for the interactive scene.

The written instruction explicitly requires a white second section, although both supplied project screenshots and the video use a blue gradient. White takes precedence. The initial screen remains black; Next opens Ingri, then Vribbe, then resets. Only screen content and decorations animate on project changes. The laptop wrapper stays unchanged. Mobile and reduced-motion layouts present the two sections in normal document flow.

## Content and contact

The PDF supplies professional history, education, skills, email, phone, social links and project URLs. Project screenshot text and the developer ID are pixels in original artwork and remain in their original language. All live UI copy is in `messages/az.json`, `en.json` and `ru.json`. The blog contains three newly written introductory notes rather than claims of previously published articles.

The contact form validates name, email and message, then opens an encoded `mailto:` draft. It does not claim server delivery. No mail provider credentials or backend service were supplied. To send directly from the site, connect a transactional email provider in a server route and retain server-side validation and abuse controls.

## Structure

- `app/[locale]`: home, why-me, blog, blog article, contact and CV routes.
- `i18n`: next-intl routing and server request configuration; Azerbaijani is default.
- `components/sections`: homepage and project showcase.
- `hooks/use-home-animation.ts`: responsive, reversible GSAP timeline and cleanup.
- `data/profile.ts`: source-backed contact information, project URLs and skill list.
- `messages`: matching translation keys across all three languages.
- `public/assets`: original supplied PNG assets, served through Next Image.

## Run

```sh
npm install
npm run dev
```

Open `/az`, `/en` or `/ru`. Unprefixed paths redirect to Azerbaijani. Build with `npm run build`, then serve with `npm start`.

No external fonts are fetched during build. The headline uses the local Impact font when available, with condensed/system fallbacks; exact font metrics can differ on machines without Impact.

## Verification

Initial production build and TypeScript compilation passed. HTTP checks returned 200 for all unprefixed required routes, representative localized routes, a blog detail and the original CV PDF. All three locale dictionaries have 144 matching keys. Browser checks covered 390, 768, 1366, 1440 and 1920px, form validation, locale-preserving navigation, console errors and invariant laptop bounds across project switching. The final repeated build was declined; later changes are image rendering, CSS, formatting, documentation and removal of temporary inspection dependencies.

