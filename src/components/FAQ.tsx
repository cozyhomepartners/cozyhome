import React from 'react';
import { ChevronDown } from 'lucide-react';
import type { Faq } from '@/data/faqs';

// Uses native <details> so every answer is in the HTML for crawlers,
// works without JavaScript, and stays accessible.
const FAQ = ({ faqs, heading = 'Frequently asked questions' }: { faqs: Faq[]; heading?: string }) => (
  <section className="py-20 bg-white" aria-labelledby="faq-heading">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto">
        <h2 id="faq-heading" className="text-3xl lg:text-4xl font-bold text-ink mb-10 text-center">
          {heading}
        </h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group bg-surface border border-border rounded-xl p-5 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg font-semibold">{q}</h3>
                <ChevronDown
                  size={22}
                  className="flex-shrink-0 text-brand transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-ink-soft leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FAQ;
