# Site-Wide Review & Rework

## What's wrong today

**Messaging**
- The site never mentions the MLS. The core audience is comparing "list it with an agent" vs. "sell it direct," but nothing on the page makes that comparison for them.
- Contradiction: "Get Started" says we schedule a walkthrough, while Benefits says "No Showings." Both are technically true but read as inconsistent.
- Copy is generic wholesaler boilerplate ("Your reasons for selling do not matter to us") and in places grammatically off ("Cozy Home Partners eliminate...", "Does your house needs repairs?").
- "GET MY CASH OFFER" in all-caps appears three times on the home page, identically. Repetition without progression.
- The "9 situations" grid is long and includes filler ("Other Reasons You May Have"), and the Divorce card's text is copy-pasted from a different card.

**UI/UX**
- Two nearly identical forms on every page (hero form section + dark contact form at the bottom). A visitor sees the same 4 fields twice and can't tell if they're different.
- The hero has a CTA button that scrolls *down* to a form instead of the form being right there. Extra step before the primary action.
- Header CTA says "Get My Offer"; body buttons say "GET MY CASH OFFER"; hero says "Get My Cash Offer". Three labels for one action.
- County pages repeat the entire home page below the county hero, so all six read near-identically.

**Design for a 40+ audience**
- No font is defined anywhere; the site falls back to the browser default. Nothing is deliberate.
- Body text sits at `text-gray-600` on `bg-gray-50` in several sections — below comfortable contrast for older eyes.
- Base body size is small for the audience; form inputs and labels especially.
- Every accent is the same flat `blue-600` with no supporting warm tone, so "cozy" doesn't come through and hierarchy is flat.

## What I'll build

**1. MLS-alternative positioning (new backbone)**
- Rewrite the hero around the choice the visitor is actually making: keep the cash-offer promise but frame it against listing.
- New section: **"Selling to us vs. listing on the MLS"** — a side-by-side comparison covering days on market, showings, repairs before listing, agent commission, closing costs, buyer financing fall-through, and closing date control. Honest framing (listing may net more gross; direct sale nets certainty and speed).
- Rewrite `HowToSell` steps to match the real process: submit address → one quick private visit (no public showings, no open houses) → written cash offer → you pick the closing date. This resolves the contradiction explicitly with a line like "One visit from us. No strangers touring your home."
- Trim the situations grid from 9 to 6 real scenarios, fix the duplicated Divorce copy, drop the filler card, and fix the grammar throughout.
- Keep the verified stats (100+ homes, 6+ counties, 98% satisfaction) as-is.

**2. One clear path to an offer**
- Move the offer form **into the hero**, right-hand side, above the fold on desktop.
- Delete the duplicate mid-page `HeroFormSection`. Keep exactly two touchpoints: hero form + one closing form at the bottom.
- Standardize every CTA to **"Get My Cash Offer"** in sentence case (header stays short: "Get My Offer" becomes "Get My Cash Offer" too), and make all mid-page buttons scroll to the hero form.
- Form improvements: address field first, larger touch targets, visible field labels above inputs (not placeholder-only — placeholders vanish and are hard on older users), inline validation messages, and keeping the consent checkbox + trust signals.
- County pages: keep the county hero, comparison section, form, and county cities list; remove the duplicated full home-page stack so each page is distinct.

**3. Design tuned for 40+**
- **Typography:** a real font pair — a sturdy, high-legibility serif for headings and a clean humanist sans for body. Base body size raised from 16px to 18px, form inputs to 18px, line-height opened up.
- **Color:** keep blue as the trust anchor but define it as a proper token set with a deeper, higher-contrast blue, plus a warm sand/clay secondary so "Cozy" reads. All body text moves to a darker gray for WCAG AA+ contrast on every background.
- Larger buttons, thicker input borders, clearer focus rings — everything sized for imperfect vision and less precise clicks.
- All values go into `index.css` / `tailwind.config.ts` as semantic tokens, replacing the hardcoded `blue-600` / `gray-600` classes scattered across components.

## Technical notes

- New: `MlsComparison.tsx`, plus token definitions in `index.css` and `tailwind.config.ts`, and a Google Fonts link in `index.html`.
- Edited: `Hero.tsx` (form moved in), `HeroContactForm.tsx` and `ContactForm.tsx` (labels, sizing, validation), `HowToSell.tsx`, `BenefitsOfSelling.tsx`, `WeBuyHouses.tsx`, `Header.tsx`, `ServiceAreas.tsx`, `CountyLandingPage.tsx`, `Index.tsx`, `OurProcess.tsx`, `ThankYou.tsx`.
- Removed: `HeroFormSection.tsx` usage (component deleted).
- No backend, form-submission, or routing logic changes — the Supabase edge function and lead flow stay exactly as they are.
- Page titles, descriptions, canonical URLs, and the JSON-LD schema stay intact; new section headings will be checked against the single-H1 rule.
- Existing constraints respected: no phone numbers in page content, no buyer-agent language, consent checkbox on every form, city names highlighted in hero headers, white background on "Cities We Cover".
