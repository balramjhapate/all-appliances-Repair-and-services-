'use client';
import { useState } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQ({ items, title = 'Aksar Pooche Jaane Wale Sawaal' }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-10 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">{title}</h2>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
              >
                <span className="pr-4">{item.q}</span>
                <span className={`text-[#1B4FD8] text-xl flex-shrink-0 transition-transform ${open === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
