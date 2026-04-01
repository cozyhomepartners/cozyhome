

## Marketing Review & Recommendations for Cozy Home Partners

After reviewing every page and component, here are the key issues likely preventing lead generation, organized by priority.

---

### Critical Issues (Highest Impact on Lead Generation)

**1. No above-the-fold CTA or form on the homepage**
The Hero section has zero call-to-action. No button, no form, no way to convert. The visitor must scroll past the entire hero to find the first form. Most visitors bounce within 5 seconds. This is the single biggest conversion killer.

**Recommendation:** Add a prominent CTA button in the Hero ("Get My Free Cash Offer") that scrolls to the form, OR embed a compact inline form directly in the hero alongside the text.

**2. The header has no CTA button**
The sticky header only shows navigation links and an email address. There is no "Get Your Offer" button visible at all times as users scroll.

**Recommendation:** Add a persistent CTA button in the header (e.g., "Get My Cash Offer" in blue) that scrolls to the contact form or opens a modal.

**3. Two nearly identical forms on every page with no differentiation**
Both the HeroFormSection (top) and ContactForm (bottom) look and behave identically. This creates confusion and dilutes urgency. The top form also has a full message textarea, which adds friction for a lead capture form.

**Recommendation:** Make the top form a simplified "quick quote" form (address + name + phone only — 3 fields). Keep the bottom form as the full form for users who want to provide more detail. Reducing fields on the primary form will significantly increase conversion.

**4. No urgency or social proof elements**
- No testimonials or reviews from real sellers
- No "limited time" or urgency messaging
- The "Just Sold!" floating card is static and feels fake
- "98% Client Satisfaction" stat has no backing

**Recommendation:** Add a testimonials section with real (or realistic) quotes. Add urgency copy like "Get your offer in 24 hours" near the CTA. Consider a trust badge strip (BBB, Google reviews, etc.).

---

### Content Improvements

**5. Hero subtext is too long and reads like a keyword dump**
The paragraph listing 9 cities in blue is dense and hard to scan. It reads more for SEO bots than for humans.

**Recommendation:** Shorten to a punchy value proposition: "Sell your Kansas City home for cash in as little as 7 days. No fees. No repairs. No hassle." Keep the city list for the Service Areas section.

**6. Footer description is misaligned with the brand**
The footer says "helping families find their perfect homes" — that's a buyer-agent message, not a "we buy houses" message. It contradicts the entire site purpose.

**Recommendation:** Change to: "We buy houses for cash across the Kansas City metro area. Fast closings, fair offers, zero hassle."

**7. Footer social links go nowhere**
Facebook and Instagram links point to "#" — dead links hurt credibility and trust.

**Recommendation:** Either link to real profiles or remove the icons entirely. Keep only LinkedIn since it has a real URL.

**8. Copyright says 2025**
Current date is April 2026. Outdated copyright signals an abandoned site.

**Recommendation:** Update to "© 2026" or use a dynamic year.

---

### Form Improvements

**9. No phone number field validation or formatting**
Users can type anything in the phone field. No formatting guidance.

**Recommendation:** Add input masking or at least a pattern attribute for phone numbers (e.g., `(xxx) xxx-xxxx`).

**10. No immediate value proposition on the form itself**
The form just says "Get Your Cash Offer" with no supporting trust signals.

**Recommendation:** Add bullet points next to the form: "✓ No obligation ✓ Response in 24 hours ✓ Zero fees" to reduce submission anxiety.

**11. Consent checkbox text is too long and intimidating**
The legal text about "text and data rates" can scare users away from submitting.

**Recommendation:** Shorten to: "I agree to receive follow-up communications from Cozy Home Partners. See our privacy policy." Keep the full TCPA language in the privacy policy itself.

---

### Page-Level Issues

**12. "Our Process" page lacks a strong CTA in the hero**
The hero section has stats but no button to scroll to the form.

**Recommendation:** Add a "Start Now" CTA button in the Our Process hero.

**13. County pages are repetitive and generic**
All 6 county pages share identical content (HowToSell, Benefits, WeBuyHouses) with only the hero and city list customized. This provides no unique value per county.

**Recommendation:** Add 1-2 paragraphs of county-specific content (local market stats, neighborhoods mentioned, why that county specifically). This also helps SEO.

**14. Thank You page has no next step engagement**
After form submission, the Thank You page is a dead end. No estimated response time, no way to book a call, no content to keep them engaged.

**Recommendation:** Add expected response time ("We'll call you within 2 hours"), a link to the Our Process page, and optionally a Calendly-style booking link.

---

### Technical Details

Files to modify:
- `src/components/Hero.tsx` — Add CTA button, shorten subtext
- `src/components/Header.tsx` — Add persistent CTA button
- `src/components/HeroContactForm.tsx` — Simplify to 3 fields (address, name, phone), add trust bullets
- `src/components/Footer.tsx` — Fix description, remove dead social links, update copyright
- `src/components/HeroFormSection.tsx` — Add trust signals around form
- `src/pages/OurProcess.tsx` — Add hero CTA button
- `src/pages/ThankYou.tsx` — Add response time and engagement elements
- `src/components/CountyLandingPage.tsx` — Structure for county-specific content
- `src/components/ContactForm.tsx` — Shorten consent text

Estimated scope: ~10 file edits, no new dependencies needed.

