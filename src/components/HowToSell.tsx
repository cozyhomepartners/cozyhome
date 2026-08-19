import React from 'react';
import { FileText, Home, DollarSign, CalendarCheck } from 'lucide-react';
import { scrollToOfferForm } from '@/lib/scrollToForm';

const steps = [
  {
    n: '01',
    icon: FileText,
    title: 'Tell us the address',
    body: 'Fill in four fields. No account, no paperwork, no credit check — just enough for us to start pulling comparable sales.',
  },
  {
    n: '02',
    icon: Home,
    title: 'One quick visit',
    body: 'We stop by once to see the house in person, usually for under 30 minutes. No open houses, no strangers, no staging or cleaning first.',
  },
  {
    n: '03',
    icon: DollarSign,
    title: 'Get your written offer',
    body: 'Within 24 hours you get a fair cash offer in writing, with the number explained. No obligation to accept it.',
  },
  {
    n: '04',
    icon: CalendarCheck,
    title: 'You pick the closing date',
    body: 'Close in as little as 7 days, or take a few months if you need time to move. We pay all closing costs.',
  },
];

const HowToSell = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-5">
            How selling to us <span className="text-brand">actually works</span>
          </h2>
          <p className="text-lg text-ink-soft leading-relaxed">
            Four steps, start to finish. There are no inspections to pass, no lender
            approvals to wait on, and no chance of the deal collapsing at the last minute.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
          {steps.map(({ n, icon: Icon, title, body }) => (
            <div key={n} className="bg-surface rounded-2xl p-7 border border-border">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center">
                  <Icon size={24} className="text-brand-foreground" />
                </div>
                <span className="text-sm font-bold tracking-widest text-clay">STEP {n}</span>
              </div>
              <h3 className="text-xl font-bold text-ink mb-3">{title}</h3>
              <p className="text-ink-soft leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-clay-soft border border-clay/20 rounded-xl p-6 text-center mb-10">
          <p className="text-lg text-ink">
            <strong className="font-semibold">To be clear about the visit:</strong> one
            person from our team walks the house once. That is the only showing you will
            ever have to host.
          </p>
        </div>

        <div className="text-center">
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

export default HowToSell;
