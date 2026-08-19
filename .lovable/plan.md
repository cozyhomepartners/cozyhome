# Modernize the look, restore the situations headline, separate sections

## 1. New typography (removes the "old" feel)
- Replace Source Serif 4 / Source Sans 3 with **Urbanist** (headings) and **Epilogue** (body), loaded from Google Fonts in `index.html`.
- Headings become bold sans with tighter tracking instead of serif; body stays large (18px base) for readability.
- Slightly larger border radius and lighter shadows across cards/buttons for a current, less heavy look.

## 2. New color palette (Navy Trust)
- Update tokens in `src/index.css` and `tailwind.config.ts`:
  - brand deep `#0f1b3d`, brand `#1e3a5f`, brand accent `#3b6fa0`, tint `#e8edf3`
  - keep dark ink text and white surfaces for high contrast (40+ friendly)
- Retire the clay/warm accent in favor of the navy family; all buttons, badges, checkmarks and highlighted city names follow the new brand blue.

## 3. Bring back the original section headline
- `WeBuyHouses.tsx` heading returns to **"We Can Buy Your House No Matter The Situation!"** with a short supporting line about it working when a listing does not. Cards and copy stay as they are.

## 4. Alternating section backgrounds
Home page order and backgrounds:

```text
Hero              soft navy tint gradient
MLS comparison    white
How it works      tinted (#e8edf3-based)
Benefits          white
No Matter The Situation   tinted
Service Areas     white
Contact form      tinted
Footer            deep navy
```

County pages follow the same alternating rhythm. "Cities We Cover" stays white per existing rule.

## Technical notes
- Files touched: `index.html` (font links), `src/index.css`, `tailwind.config.ts`, and a class sweep across `Hero`, `HeroContactForm`, `MlsComparison`, `HowToSell`, `BenefitsOfSelling`, `WeBuyHouses`, `ServiceAreas`, `ContactForm`, `Header`, `Footer`, `CountyLandingPage`, `OurProcess`, `ThankYou`.
- No content, form, or backend logic changes beyond the one headline.
- Verify with a typecheck and preview screenshots of home, a county page, and Our Process.
