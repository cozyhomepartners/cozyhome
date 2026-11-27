// GA4 / Google Ads conversion helpers. gtag is loaded in index.html.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const PENDING = 'chp_lead_pending';

/** Call right before navigating to /thank-you after a successful submit. */
export const markLeadPending = () => {
  try { sessionStorage.setItem(PENDING, '1'); } catch { /* storage blocked */ }
};

/**
 * Fires once per real form submission when the visitor lands on /thank-you.
 * Direct visits and page refreshes do not count.
 * Mark "generate_lead" as a key event in GA4 and import it into Google Ads
 * as the primary conversion so Smart Bidding optimizes for real leads.
 */
export const trackLead = () => {
  if (typeof window === 'undefined' || !window.gtag) return;
  try {
    if (!sessionStorage.getItem(PENDING)) return;
    sessionStorage.removeItem(PENDING);
  } catch {
    return;
  }
  window.gtag('event', 'generate_lead', { currency: 'USD', value: 1 });
};

export {};
