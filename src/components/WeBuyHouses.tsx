import React from 'react';
import { Wrench, Gavel, Scroll, MapPin, HeartHandshake, KeyRound } from 'lucide-react';
import { scrollToOfferForm } from '@/lib/scrollToForm';

const situations = [
  {
    icon: Wrench,
    title: 'The repair list is too long',
    description:
      'You got a renovation quote you cannot justify, and no agent will list the house until the work is done.',
  },
  {
    icon: Gavel,
    title: 'Facing foreclosure',
    description:
      'You are behind on the mortgage or taxes and need the sale finished before the auction date.',
  },
  {
    icon: Scroll,
    title: 'You inherited the house',
    description:
      'It sits empty in another part of town while you cover taxes, insurance and upkeep on a home you never planned to own.',
  },
  {
    icon: MapPin,
    title: 'Relocating',
    description:
      'A new job or retirement has a start date, and you cannot carry two mortgages while a listing sits on the market.',
  },
  {
    icon: HeartHandshake,
    title: 'Divorce or separation',
    description:
      'You need one clean number and one closing date so both sides can settle and move forward.',
  },
  {
    icon: KeyRound,
    title: 'Done being a landlord',
    description:
      'Late rent, turnovers and repair calls have stopped being worth it. We buy occupied rentals too.',
  },
];

const WeBuyHouses = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-5">
            We Can Buy Your House <span className="text-brand-accent">No Matter The Situation!</span>
          </h2>
          <p className="text-lg text-ink-soft leading-relaxed">
            The MLS works well when a house is move-in ready and you have months to spare.
            These are the situations where it usually is not the right fit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {situations.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-surface p-7 rounded-2xl border border-border hover:border-brand/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">{title}</h3>
              <p className="text-ink-soft leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-ink-soft mb-6">
            Your situation not listed? It still counts — tell us about it.
          </p>
          <button
            onClick={scrollToOfferForm}
            className="bg-brand hover:bg-brand-dark text-brand-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get My Cash Offer
          </button>
        </div>
      </div>
    </section>
  );
};

export default WeBuyHouses;
