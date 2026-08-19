import React from 'react';
import { Clock, Users, DollarSign, Wrench } from 'lucide-react';
import { scrollToOfferForm } from '@/lib/scrollToForm';

const benefits = [
  {
    icon: Clock,
    title: 'A cash offer within 24 hours',
    description:
      'Tell us about your house and we evaluate it against real local sales, then send a fair, no-obligation number in writing.',
  },
  {
    icon: Users,
    title: 'No showings, no open houses',
    description:
      'We buy as-is, so you never have to keep the house spotless or clear out on a Saturday afternoon for strangers.',
  },
  {
    icon: DollarSign,
    title: 'No commission, no closing costs',
    description:
      'There is no agent commission because there is no agent. We pay the closing costs, so the offer is what you walk away with.',
  },
  {
    icon: Wrench,
    title: 'Repairs are our problem',
    description:
      'Roof, foundation, dated kitchen, a basement full of things you would rather not move — leave all of it. We handle it after closing.',
  },
];

const BenefitsOfSelling = () => {
  return (
    <section className="py-20 bg-surface-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-5">
            What you skip by <span className="text-brand">selling direct</span>
          </h2>
          <p className="text-lg text-ink-soft leading-relaxed">
            Everything that makes a traditional listing exhausting simply does not happen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-white p-7 rounded-2xl border border-border shadow-sm">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-brand-soft flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 text-brand" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ink mb-2">{title}</h3>
                  <p className="text-ink-soft leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          ))}
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

export default BenefitsOfSelling;
