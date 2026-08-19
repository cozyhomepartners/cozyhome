# Restore Original Font + Counties Section

## 1. Font back to the live site's typeface

The published cozyhomepartners.com does not load any web font — it uses the default system UI sans-serif stack (San Francisco on Mac/iOS, Segoe UI on Windows, Roboto on Android). The preview currently uses Urbanist + Epilogue.

- Remove the Urbanist/Epilogue Google Fonts `<link>` and preconnects from `index.html`.
- Point `fontFamily.sans`, `display`, and `serif` in `tailwind.config.ts` back to the system stack (`ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`).
- Keep current sizes, weights, colors, and section backgrounds unchanged.

## 2. "The Counties We Cover" + remove Service Area pages

Replace the city list with the six service counties:
Clay County MO, Cass County MO, Jackson County MO, Wyandotte County KS, Johnson County KS, Platte County KS.

- `src/components/ServiceAreas.tsx`: heading becomes "The Counties We Cover", list becomes the six counties (plain text, no links), subtext updated to reference counties across the KC metro. White background stays.
- Delete the six county pages and their routes in `src/App.tsx`; delete `src/components/CountyLandingPage.tsx`.
- Remove the "Service Areas" dropdown from `Header.tsx` and the Service Areas block from `MobileNavigation.tsx`, so nav is Home / Our Process / Get My Cash Offer.
- Remove county entries from `public/sitemap.xml`; drop the unused county props from `SEOHead.tsx`.

Note: those six pages currently rank for local county keywords, and removing them loses that SEO surface (old URLs will 404). Proceeding as requested — the counties section keeps the keywords on the home page.

## Technical notes
Files touched: `index.html`, `tailwind.config.ts`, `src/components/ServiceAreas.tsx`, `src/components/Header.tsx`, `src/components/MobileNavigation.tsx`, `src/components/SEOHead.tsx`, `src/App.tsx`, `public/sitemap.xml`. Files deleted: `src/components/CountyLandingPage.tsx` and the six `src/pages/*County*.tsx`.
