'use client';
import Link from 'next/link';
import { useState } from 'react';
import { services, cities } from '@/lib/data';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-[#1B4FD8] font-black text-xl">🔧 HomeRepairPro</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-[#1B4FD8] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#1B4FD8] transition-colors">About</Link>
          <Link href="/blog" className="hover:text-[#1B4FD8] transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-[#1B4FD8] transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/918889539174"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-[#25D366] hover:bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            💬 WhatsApp
          </a>
          <a
            href="tel:+918889539174"
            className="flex items-center gap-1 bg-[#F97316] hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          >
            📞 88895 39174
          </a>
        </div>

        {/* Mobile phone button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="tel:+918889539174"
            className="bg-[#F97316] text-white px-3 py-2 rounded-lg text-sm font-bold"
          >
            📞 Call
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block py-2 font-semibold text-gray-800">Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block py-2 font-semibold text-gray-800">About Us</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)} className="block py-2 font-semibold text-gray-800">Blog</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="block py-2 font-semibold text-gray-800">Contact</Link>
          <div className="pt-2 border-t border-gray-100">
            <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">Services</p>
            <div className="grid grid-cols-2 gap-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}-indore`}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-[#1B4FD8] py-1"
                >
                  {s.emoji} {s.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
