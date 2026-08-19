export const scrollToOfferForm = () => {
  const target =
    document.getElementById('hero-form') || document.getElementById('contact-form');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
