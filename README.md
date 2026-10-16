# Agenio — Next.js port

The Agenio agency HTML template, converted to a Next.js 16 app (App Router, TypeScript).
Source of truth for the markup was the local mirror in `C:\My Web Sites\ef\wpriverthemes.com\HTML\agenio`.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build && npm start   # production
```

## Layout of the project

```
src/
  app/
    layout.tsx              root document: stylesheets, preloader, header, footer, scripts
    page.tsx                /                     (home)
    about/page.tsx          /about
    service/page.tsx        /service
    service-details/page.tsx
    work/page.tsx           /work
    work-details/page.tsx
    blog-standard/page.tsx  /blog-standard
    blog-two-columns/page.tsx
    blog-three-columns/page.tsx
    blog-single/page.tsx
    contact/page.tsx        /contact
    api/contact/route.ts    POST target for the template's contact form
  components/layout/        Header, Footer, Preloader, SearchArea, GoTop, TemplateScripts
  lib/nav.ts                menu data + active-item logic
public/assets/              the template's own css / js / images / fonts
```

Each page holds only what sat between `</header>` and the footer in the original
HTML; everything shared lives in `layout.tsx`, so the markup is not duplicated
eleven times any more.

## Decisions worth knowing

**The template's own CSS and JS are kept as-is.** `public/assets/css/*` is linked
from `layout.tsx` instead of being imported through the bundler, because the
stylesheets reference images by relative `url()` and are meant to be served
verbatim. The jQuery/GSAP bundle in `public/assets/js/*` is untouched.

**Scripts load after hydration.** `TemplateScripts.tsx` injects the vendor
scripts in their original order once the app has mounted, then replays the
`load` event — `main.js` binds its preloader to `$(window).on("load")`, which has
already fired by then. Loading them before hydration would let jQuery mutate
nodes React is still rendering.

**Navigation uses plain `<a>` links, so every page is a full document load.**
That is deliberate: `main.js` wires up Swiper, ScrollTrigger, SplitText, WOW and
the rest exactly once per document and exposes no re-init hook, so client-side
route changes would leave a half-initialised page. If you later replace the
template JS with React equivalents, swap the anchors for `next/link` and drop
`TemplateScripts`.

**The header is data-driven.** `src/lib/nav.ts` holds the menu; `Header.tsx`
marks the active item from `usePathname()` instead of shipping eleven
hand-edited copies of the same `<nav>`.

**The contact form posts to `/api/contact`.** The original pointed at the
vendor's `mailer.php`. The route handler validates the fields and returns the
plain-text reply the form plugin expects — add your email provider where the
`TODO` sits in `src/app/api/contact/route.ts`.

## Known gaps

- `style.css` referenced 60 `bg-image-*.jpg/png` decorations that 404 on the
  vendor's own server; those `url()`s are set to `none` in the copied CSS.
- Images use plain `<img>` tags, as the template's CSS and GSAP animations
  target them directly. Moving to `next/image` means revisiting that CSS.
- Content is still the template's demo copy.
