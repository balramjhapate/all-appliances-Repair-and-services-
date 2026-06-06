import Image from 'next/image';
import TrustBadges from '@/components/TrustBadges';
import ServiceGrid from '@/components/ServiceGrid';
import CityPills from '@/components/CityPills';
import FAQ from '@/components/FAQ';
import LeadForm from '@/components/LeadForm';
import { faqs, reviews } from '@/lib/data';
import { localBusinessSchema, faqSchema } from '@/lib/schema';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />

      {/* HERO */}
      <section className="relative min-h-[280px] md:min-h-[420px] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
          alt="HomeRepairPro technician repairing AC unit"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B4FD8]/90 to-[#1B4FD8]/60" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 w-full">
          <p className="text-blue-200 text-sm font-medium mb-1 tracking-wide uppercase">
            Indore • Bhopal • 8 Cities
          </p>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-2">
            Ghar Ki Har Repair<br />
            <span className="text-[#F97316]">Ek Call Mein ✓</span>
          </h1>
          <p className="text-blue-100 text-sm md:text-base mb-6 max-w-md">
            Same day service • Verified technicians • Starting ₹299
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-sm sm:max-w-none">
            <a
              href="tel:+918889539174"
              className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl text-base transition-colors w-full sm:w-auto"
            >
              📞 Call: 88895 39174
            </a>
            <a
              href="https://wa.me/918889539174?text=Hi%2C%20I%20need%20home%20appliance%20repair%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-500 text-white font-bold py-4 px-6 rounded-xl text-base transition-colors w-full sm:w-auto"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustBadges />

      {/* SERVICES */}
      <ServiceGrid />

      {/* HOW IT WORKS */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Kaise Kaam Karta Hai?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '1', icon: '📞', title: 'Call / WhatsApp Karo', desc: 'Phone karein ya WhatsApp pe message bhejein. 2 minute mein response milega.' },
              { step: '2', icon: '🔧', title: 'Technician Aayega', desc: 'Verified technician aapke ghar pe aayega — same day, usually 30-60 minutes mein.' },
              { step: '3', icon: '✅', title: 'Problem Solve!', desc: 'Repair complete, GST invoice milegi. 30-day warranty included.' },
            ].map((item) => (
              <div key={item.step} className="relative text-center p-6 bg-blue-50 rounded-2xl">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1B4FD8] text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
                <div className="text-4xl mb-3 mt-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITIES */}
      <CityPills />

      {/* WHY CHOOSE US */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">
            Hum Kyun Best Hain?
          </h2>
          <p className="text-center text-gray-500 mb-8 text-sm">Urban Company se better — local, fast, affordable</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '⚡', title: 'Same Day', desc: 'Aaj call, aaj repair — same day guaranteed' },
              { icon: '✅', title: 'Verified', desc: 'Background-checked, trained technicians' },
              { icon: '💰', title: 'Affordable', desc: 'Starting ₹299 — transparent pricing' },
              { icon: '🛡️', title: 'Guaranteed', desc: '30-day service warranty on every job' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 shadow-sm text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">
            Customer Reviews
          </h2>
          <p className="text-center text-gray-500 mb-8 text-sm">⭐ 4.8/5 — 500+ verified reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#1B4FD8] text-white flex items-center justify-center font-bold">
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                    <p className="text-gray-500 text-xs">📍 {r.city}</p>
                  </div>
                  <div className="ml-auto text-yellow-400 text-sm">{'⭐'.repeat(r.rating)}</div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section className="py-10 bg-[#1B4FD8]" id="book">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-2">
            Free Quote Maango
          </h2>
          <p className="text-center text-blue-200 mb-6 text-sm">
            30 minute mein callback guaranteed
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} />

      {/* BOTTOM CTA */}
      <section className="py-8 bg-[#F97316] text-center">
        <p className="text-white font-bold text-lg mb-1">Abhi Repair Book Karo</p>
        <p className="text-orange-100 text-sm mb-4">Same day service • Starting ₹299 • GST invoice</p>
        <a
          href="tel:+918889539174"
          className="inline-block bg-white text-[#F97316] font-black text-xl px-8 py-4 rounded-xl hover:bg-orange-50 transition-colors"
        >
          📞 +91 88895 39174
        </a>
      </section>
    </>
  );
}
