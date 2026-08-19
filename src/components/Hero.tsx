import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import HeroContactForm from './HeroContactForm';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-brand-soft via-white to-surface-alt py-14 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 bg-white border border-brand/20 text-brand px-4 py-2 rounded-full text-base font-semibold">
              <Star size={18} className="text-clay" />
              <span>Local cash buyers in the Kansas City metro</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-ink">
              A simpler way to sell your{' '}
              <span className="text-brand">Kansas City</span> home — without the MLS
            </h1>

            <p className="text-xl text-ink-soft leading-relaxed">
              No listing. No repairs. No parade of strangers through your living room.
              Tell us about your house and get a fair cash offer within 24 hours — you
              choose the closing date.
            </p>

            <ul className="space-y-3">
              {[
                'One private visit from us — never a public showing',
                'We pay all closing costs and charge zero commission',
                'Close in as little as 7 days, or on your timeline',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-lg text-ink">
                  <CheckCircle size={22} className="text-success flex-shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-ink font-serif">100+</div>
                <div className="text-ink-soft text-base">Homes bought</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-ink font-serif">6+</div>
                <div className="text-ink-soft text-base">Counties served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-ink font-serif">98%</div>
                <div className="text-ink-soft text-base">Client satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Offer form, above the fold */}
          <div className="lg:sticky lg:top-28">
            <HeroContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
