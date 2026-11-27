// Visible FAQ content. Also emitted as FAQPage structured data, so every answer
// here must match what is shown on the page.
export interface Faq {
  q: string;
  a: string;
}

export const faqsFor = (place = 'Kansas City'): Faq[] => [
  {
    q: `How fast can you buy my house in ${place}?`,
    a: 'You get a written cash offer within 24 hours of our visit. If you accept, we can close in as little as 7 days, or on a later date that you choose.',
  },
  {
    q: 'Do I need to make repairs or clean before selling?',
    a: 'No. We buy houses as-is, in any condition. Leave the repairs, the clutter and anything in the garage or basement. We handle it after closing.',
  },
  {
    q: 'Are there any fees, commissions or closing costs?',
    a: 'No. There is no agent, so there is no commission, and we pay the closing costs. The offer we make is what you walk away with.',
  },
  {
    q: 'How do you decide what to offer for my house?',
    a: 'We compare your house to recent local sales of similar homes, then account for the repairs it needs. We explain the number in writing so you can see how we got there.',
  },
  {
    q: 'Am I obligated to accept your offer?',
    a: 'Not at all. The offer is free and there is no obligation. Many sellers use it to compare against listing with an agent.',
  },
  {
    q: 'Will I get less than listing on the MLS?',
    a: 'Often, yes, on the gross price. Listing on the MLS usually brings a higher sale price, but you pay commissions, repairs, holding costs and take on the risk of a deal falling through. Selling to us trades some price for speed, certainty and no work.',
  },
  {
    q: 'What kinds of situations do you help with?',
    a: 'Inherited and probate properties, foreclosure, divorce, relocation, tired landlords with tenants, homes that need major repairs, and moves to assisted living, among others.',
  },
  {
    q: 'Which areas do you buy houses in?',
    a: 'We buy houses across the Kansas City metro on both sides of the state line: Jackson, Clay, Platte and Cass counties in Missouri, and Johnson and Wyandotte counties in Kansas.',
  },
];

export const faqJsonLd = (faqs: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});
