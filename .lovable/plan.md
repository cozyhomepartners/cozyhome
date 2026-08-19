# Copy cleanup, footer, nav fix, and form testing

## 1. Remove em dashes from copy
Rewrite every sentence that uses an em dash (—) or en dash (–) so it reads naturally with commas, periods, or reworded phrasing. Affected copy lives in: Hero, MlsComparison, HowToSell, BenefitsOfSelling, ContactForm, WeBuyHouses-adjacent copy, Our Process benefits, Thank You page, and page meta descriptions/titles (Index, ThankYou). Numeric ranges like "1-3 months" and "5-6%" become plain hyphens.

## 2. Remove the LinkedIn link
Delete the LinkedIn icon, link, and the now-empty social row from the footer, along with the unused icon import.

## 3. Fix the Home nav link
Clicking "Home" while already on `/` currently does nothing because React Router skips same-route navigation. Update the Home link (desktop header and mobile drawer) to scroll the page to the top when the user is already on the home route, and navigate plus scroll otherwise.

## 4. Test every form end to end
Submit a real test lead through each form using a browser automation pass:
- Home page hero form (`Get your cash offer`)
- Home page bottom contact form
- Our Process page contact form

Each run fills the fields with clearly labeled test data, checks the consent box, submits, and confirms the redirect to `/thank-you` with no console or network errors. Results reported back, including whether the Supabase edge function accepted each submission.

## Technical notes
- Files touched: `src/components/Hero.tsx`, `MlsComparison.tsx`, `HowToSell.tsx`, `BenefitsOfSelling.tsx`, `ContactForm.tsx`, `Footer.tsx`, `Header.tsx`, `MobileNavigation.tsx`, `src/pages/Index.tsx`, `OurProcess.tsx`, `ThankYou.tsx`.
- No backend or form-logic changes; testing only exercises the existing `submit-contact-form` function.
