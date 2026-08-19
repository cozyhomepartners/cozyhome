import React from 'react';
import { Check, X } from 'lucide-react';
import { scrollToOfferForm } from '@/lib/scrollToForm';

const rows = [
  {
    label: 'Time to sold',
    mls: 'Typically 1 to 3 months from listing to closing',
    us: 'Cash offer in 24 hours, closing in as little as 7 days',
  },
  {
    label: 'Showings',
    mls: 'Open houses and strangers touring your home',
    us: 'One private visit from our team, that is it',
  },
  {
    label: 'Repairs & cleanup',
    mls: 'Repairs, paint and staging before it goes live',
    us: 'We buy as-is, right down to what is left in the garage',
  },
  {
    label: 'Agent commission',
    mls: 'Usually 5 to 6% of the sale price',
    us: 'None. There is no agent in the middle',
  },
  {
    label: 'Closing costs',
    mls: 'Seller typically pays a share',
    us: 'We pay them',
  },
  {
    label: 'Deal certainty',
    mls: "Offers fall through when a buyer's financing does",
    us: 'Our funds are our own, so no lender and no appraisal contingency',
  },
  {
    label: 'Closing date',
    mls: "Driven by the buyer's lender",
    us: 'You pick it, and you can move it if plans change',
  },
];

const MlsComparison = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-5">
            Selling to us vs. <span className="text-brand">listing on the MLS</span>
          </h2>
          <p className="text-lg text-ink-soft leading-relaxed">
            Both are legitimate ways to sell. Listing on the MLS usually brings the
            higher gross price. Selling to us trades some of that for speed, certainty
            and none of the work. Here is the honest side-by-side so you can decide.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            <table className="w-full text-left">
              <caption className="sr-only">
                Comparison of listing on the MLS versus selling directly to Cozy Home Partners
              </caption>
              <thead>
                <tr className="bg-ink text-white">
                  <th scope="col" className="p-5 text-base font-semibold w-1/5">&nbsp;</th>
                  <th scope="col" className="p-5 text-lg font-semibold">Listing on the MLS</th>
                  <th scope="col" className="p-5 text-lg font-semibold bg-brand">
                    Selling to Cozy Home Partners
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.label} className={i % 2 ? 'bg-surface' : 'bg-white'}>
                    <th scope="row" className="p-5 align-top font-semibold text-ink text-base">
                      {row.label}
                    </th>
                    <td className="p-5 align-top text-ink-soft">
                      <span className="flex gap-2">
                        <X size={20} className="text-destructive flex-shrink-0 mt-1" />
                        {row.mls}
                      </span>
                    </td>
                    <td className="p-5 align-top text-ink">
                      <span className="flex gap-2">
                        <Check size={20} className="text-success flex-shrink-0 mt-1" />
                        {row.us}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {rows.map((row) => (
              <div key={row.label} className="bg-white rounded-xl border border-border p-5">
                <h3 className="text-lg font-bold text-ink mb-3">{row.label}</h3>
                <p className="flex gap-2 text-ink-soft mb-3">
                  <X size={20} className="text-destructive flex-shrink-0 mt-1" />
                  <span><strong className="font-semibold">MLS:</strong> {row.mls}</span>
                </p>
                <p className="flex gap-2 text-ink">
                  <Check size={20} className="text-success flex-shrink-0 mt-1" />
                  <span><strong className="font-semibold">Us:</strong> {row.us}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={scrollToOfferForm}
            className="bg-brand hover:bg-brand-dark text-brand-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get My Cash Offer
          </button>
          <p className="text-ink-soft mt-3 text-base">
            No obligation. Seeing the number costs you nothing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MlsComparison;
