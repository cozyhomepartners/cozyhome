import React from 'react';
import {
  Home,
  Gavel,
  Scroll,
  MapPin,
  Users,
  KeyRound,
  DollarSign,
  User,
  HelpCircle,
} from 'lucide-react';
import { scrollToOfferForm } from '@/lib/scrollToForm';

const situations = [
  {
    icon: Home,
    title: 'Too Many Repairs',
    description: 'Received a renovation quote to get your house fixed and can\u2019t afford the costs?',
  },
  {
    icon: Gavel,
    title: 'Stop Foreclosure',
    description: 'In default on your mortgage or taxes, and the house is scheduled for auction?',
  },
  {
    icon: Scroll,
    title: 'Inherited A Property',
    description: 'Inherited property and need to sell it before probate is complete?',
  },
  {
    icon: MapPin,
    title: 'Moving Out Of State',
    description: 'Need to relocate for work or retirement and need a quick seamless sale?',
  },
  {
    icon: Users,
    title: 'Divorce',
    description: 'You won\u2019t have to fix or clean anything! We will buy your home the way it is.',
  },
  {
    icon: KeyRound,
    title: 'Tired Landlord',
    description:
      'Sick of being a landlord and renting to tenants who trash your home and don\u2019t pay rent when it\u2019s due?',
  },
  {
    icon: DollarSign,
    title: 'Loss Of Income',
    description:
      'Lost your job or had a reduction in income and can no longer afford your mortgage payments?',
  },
  {
    icon: User,
    title: 'Elderly Moving To Assisted Living',
    description: 'Need to transition to assisted living and sell your home quickly for the move?',
  },
  {
    icon: HelpCircle,
    title: 'Other Reasons You May Have',
    description:
      'Whatever your unique situation, we understand and are here to help with a fast cash sale.',
  },
];

const WeBuyHouses = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4">
            We Can Buy Your House No Matter{' '}
            <span className="text-brand-accent">The Situation!</span>
          </h2>
          <p className="text-lg text-ink-soft leading-relaxed">
            Your reasons for selling do not matter to us. The only thing we care about is solving
            your problem by buying your house in cash as hassle-free as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {situations.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-2xl border border-border text-center hover:border-brand/40 hover:shadow-md transition-all"
            >
              <Icon className="w-9 h-9 text-brand-accent mx-auto mb-4" strokeWidth={1.75} />
              <h3 className="text-lg font-bold text-ink mb-2">{title}</h3>
              <p className="text-ink-soft leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToOfferForm}
            className="bg-brand hover:bg-brand-dark text-brand-foreground px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Get My Cash Offer
          </button>
        </div>
      </div>
    </section>
  );
};

export default WeBuyHouses;
