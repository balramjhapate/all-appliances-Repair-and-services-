'use client';
import { useState, useEffect } from 'react';
import { insertLead } from '@/lib/supabase';
import { cities, services } from '@/lib/data';

interface LeadFormProps {
  defaultCity?: string;
  defaultService?: string;
  compact?: boolean;
}

export default function LeadForm({ defaultCity = '', defaultService = '', compact = false }: LeadFormProps) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: defaultCity,
    service: defaultService,
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      setError('Please enter a valid 10-digit Indian mobile number');
      return;
    }

    setLoading(true);

    const trackingData = {
      gclid: typeof window !== 'undefined' ? localStorage.getItem('gclid') : null,
      utm_source: typeof window !== 'undefined' ? (localStorage.getItem('utm_source') || 'direct') : 'direct',
      utm_campaign: typeof window !== 'undefined' ? localStorage.getItem('utm_campaign') : null,
      utm_keyword: typeof window !== 'undefined' ? localStorage.getItem('utm_keyword') : null,
      landing_page: typeof window !== 'undefined' ? (localStorage.getItem('lp') || window.location.pathname) : '/',
      device: typeof window !== 'undefined'
        ? (/Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'mobile' : 'desktop')
        : 'unknown',
    };

    try {
      await insertLead({
        name: form.name,
        phone: form.phone,
        city: form.city,
        service: form.service,
        message: form.message,
        ...trackingData,
      });
    } catch {
      // Continue even if DB fails — WhatsApp is primary
    }

    // Fire GTM event
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'lead_submit',
        city: form.city,
        service: form.service,
      });
    }

    // Open WhatsApp
    const msg = encodeURIComponent(
      `🔧 New Lead!\nName: ${form.name}\nPhone: ${form.phone}\nCity: ${form.city}\nService: ${form.service}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/918889539174?text=${msg}`, '_blank');

    setSuccess(true);
    setLoading(false);
  };

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-green-800 font-bold text-lg mb-1">Done! Request bhej diya!</h3>
        <p className="text-green-700 text-sm">Hum 30 minute mein call karenge. WhatsApp pe bhi message bheja gaya hai.</p>
        <a
          href="tel:+918889539174"
          className="mt-4 inline-block bg-[#F97316] text-white px-6 py-3 rounded-lg font-bold text-sm"
        >
          📞 Abhi Call Karo
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className={`grid ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-3`}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Aapka Naam <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Name dalein"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4FD8] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="10-digit mobile number"
            maxLength={10}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4FD8] focus:border-transparent"
          />
        </div>
      </div>

      {!compact && (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-3`}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <select
              name="city"
              value={form.city}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4FD8]"
            >
              <option value="">City select karo</option>
              {cities.map((c) => (
                <option key={c.slug} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4FD8]"
            >
              <option value="">Service select karo</option>
              {services.map((s) => (
                <option key={s.slug} value={s.name}>{s.name}</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {!compact && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Problem describe karo (optional)</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={2}
            placeholder="Jaise: AC cooling nahi kar raha, 2 din se..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4FD8] resize-none"
          />
        </div>
      )}

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#F97316] hover:bg-orange-600 disabled:opacity-60 text-white font-bold py-4 rounded-lg text-base transition-colors flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <span className="animate-spin">⏳</span> Bhej rahe hain...
          </>
        ) : (
          <>💬 Free Quote Maango →</>
        )}
      </button>

      <p className="text-center text-xs text-gray-500">
        📞 Ya direct call karo: <a href="tel:+918889539174" className="text-[#1B4FD8] font-semibold">+91 88895 39174</a>
      </p>
    </form>
  );
}
