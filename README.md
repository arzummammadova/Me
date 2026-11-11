# Arzu Mammadova — Portfolio

Next.js App Router, React, TypeScript, Tailwind CSS, GSAP ScrollTrigger and next-intl.

## Development

```sh
npm install
npm run dev
```

Open http://localhost:3000. Azerbaijani is the default language. `/az`, `/en` and `/ru` each provide Home, Why Me, Blog, Contact and CV pages. Language switching preserves the current route.

```sh
npm run build
npm start
```

## Editing

- Text and translations: `messages/{az,en,ru}.json`
- Contact details and project links: `data/profile.ts`
- Scroll animation: `hooks/use-home-animation.ts`
- Homepage and project transitions: `components/sections/`
- Layout and responsive styles: `app/globals.css`
- Original downloadable CV: `public/documents/Arzu-Mammadova-CV.pdf`

The contact form validates input and opens a prepared email in the visitor's mail application. It does not send through a backend. All artwork comes from supplied assets; text embedded in the images remains in its original language.

See `docs/implementation.md` for reference analysis, animation decisions and verification notes.
