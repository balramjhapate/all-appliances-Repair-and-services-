'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { services } from '@/lib/data';
import WhatsAppIcon from '@/components/WhatsAppIcon';

// ┌─────────────────────────────────────────────────────────────────┐
// │          LOGO CONTROLS — SIRF YE VALUES BADLO                   │
// │  Dono (DESKTOP & MOBILE) bilkul ALAG hain.                      │
// │  Ek badloge to dusre par KOI ASAR NAHI hoga.                    │
// ├─────────────────────────────────────────────────────────────────┤
// │  x     →  LEFT / RIGHT   :  -10 = left,    +10 = right         │
// │  y     →  UPAR / NEECHE  :  -10 = upar,    +10 = neeche        │
// │  scale →  ZOOM           :  0.8 = chota,   1.2 = bada          │
// │  w     →  WIDTH  (px)                                           │
// │  h     →  HEIGHT (px)                                           │
// └─────────────────────────────────────────────────────────────────┘

// ┌─────────────────────────────────────────────────────────────────┐
// │         CALL BUTTON CONTROLS (mobile only)                      │
// │  ios     →  sirf Apple iPhone/iPad par lagega                   │
// │  android →  sirf Android phones par lagega                      │
// │  x = LEFT/RIGHT  :  -10 = left,  +10 = right                   │
// │  y = UPAR/NEECHE :  -10 = upar,  +10 = neeche                  │
// └─────────────────────────────────────────────────────────────────┘

const CALL_BTN = {
  ios: {
    x: -50,     // iOS par call button LEFT/RIGHT  (-8 = thoda left)
    y: 0,      // iOS par call button UPAR/NEECHE
  },
  android: {
    x: -5,      // Android par call button LEFT/RIGHT
    y: 0,      // Android par call button UPAR/NEECHE
  },
};

const LOGO = {

  // ════════════════════════════════════════════════════════════════
  //  DESKTOP CONTROLS  (sirf desktop/laptop par dikhega)
  //  Mobile par in values ka koi asar NAHI hoga
  // ════════════════════════════════════════════════════════════════
  desktop: {
    x:     -20,      // LEFT/RIGHT   →  -10 = thoda left,  +10 = thoda right
    y:     4.3,      // UPAR/NEECHE  →  -10 = thoda upar,  +10 = thoda neeche
    scale: 1.30,    // ZOOM         →   1.0 = normal,      1.2 = 20% bada
    w:     260,    // WIDTH  (px)
    h:     60,     // HEIGHT (px)
  },

  // ════════════════════════════════════════════════════════════════
  //  MOBILE CONTROLS  (sirf phone/tablet par dikhega)
  //  Desktop par in values ka koi asar NAHI hoga
  // ════════════════════════════════════════════════════════════════
  mobile: {
    x:     -50,    // LEFT/RIGHT   →  -10 = thoda left,  +10 = thoda right
    y:     2,      // UPAR/NEECHE  →  -10 = thoda upar,  +10 = thoda neeche
    scale: 1.4,    // ZOOM         →   1.0 = normal,      1.2 = 20% bada
    w:     215,    // WIDTH  (px)
    h:     56,     // HEIGHT (px)
  },

};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    // iOS detect: iPhone/iPad/iPod
    setIsIos(/iP(hone|ad|od)/.test(navigator.userAgent));
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-white shadow-sm'
      }`}
    >
      {/* Nav bar */}
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center gap-2">

        {/* LOGO — DESKTOP only (hidden on mobile) */}
        <div
          className="hidden md:block flex-shrink-0"
          style={{ width: LOGO.desktop.w, height: LOGO.desktop.h }}
        >
          <Link
            href="/"
            onClick={close}
            className="flex items-center w-full h-full"
            style={{
              transform:       `translate(${LOGO.desktop.x}px, ${LOGO.desktop.y}px) scale(${LOGO.desktop.scale})`,
              transformOrigin: 'left center',
              display:         'block',
            }}
          >
            <Image src="/images/logo.png" alt="HomeRepairPro" width={300} height={100} className="h-full w-full object-contain" priority />
          </Link>
        </div>

        {/* LOGO — MOBILE only (hidden on desktop) */}
        <div
          className="flex md:hidden flex-shrink-0"
          style={{ width: LOGO.mobile.w, height: LOGO.mobile.h, position: 'relative', zIndex: 1 }}
        >
          <Link
            href="/"
            onClick={close}
            className="flex items-center w-full h-full"
            style={{
              transform:       `translate(${LOGO.mobile.x}px, ${LOGO.mobile.y}px) scale(${LOGO.mobile.scale})`,
              transformOrigin: 'left center',
              display:         'block',
            }}
          >
            <Image src="/images/logo.png" alt="HomeRepairPro" width={300} height={100} className="h-full w-full object-contain" priority />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-3 mx-auto">
          {[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'About', href: '/about' },
            { label: 'Blog', href: '/blog' },
            { label: 'Contact', href: '/contact' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm font-semibold text-gray-600 hover:text-[#1B4FD8] transition-colors duration-200 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-[#1B4FD8] rounded-full transition-all duration-300 group-hover:w-4/5" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2 ml-auto">
          <a
            href="https://wa.me/918889539174"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white px-4 py-1.5 rounded-lg text-sm font-bold transition-all duration-200"
          >
            <WhatsAppIcon className="w-4 h-4" /> WhatsApp
          </a>
          <a
            href="tel:+918889539174"
            className="flex items-center gap-1.5 bg-[#F97316] hover:bg-white border-2 border-[#F97316] text-white hover:text-[#F97316] px-4 py-1.5 rounded-lg text-sm font-bold transition-all duration-200"
          >
            📞 88895 39174
          </a>
        </div>

        {/* Mobile: call + hamburger */}
        <div className="ml-auto flex items-center gap-2 md:hidden" style={{ position: 'relative', zIndex: 50 }}>
          <a
            href="tel:+918889539174"
            className="w-10 h-10 flex items-center justify-center bg-[#F97316] text-white rounded-lg text-lg flex-shrink-0"
            aria-label="Call us"
            style={{
              transform: `translate(${isIos ? CALL_BTN.ios.x : CALL_BTN.android.x}px, ${isIos ? CALL_BTN.ios.y : CALL_BTN.android.y}px)`,
            }}
          >
            📞
          </a>
          <a
            href="#"
            role="button"
            onClick={(e) => { e.preventDefault(); setMenuOpen((v) => !v); }}
            className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg bg-gray-100 flex-shrink-0 cursor-pointer select-none"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block h-[2px] w-6 bg-gray-800 rounded transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-[2px] w-5 bg-gray-800 rounded transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-[2px] w-6 bg-gray-800 rounded transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </a>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-2xl border-t-2 border-[#1B4FD8]">

          {/* Nav links */}
          <div className="px-3 pt-2 pb-1">
            {[
              { label: '🏠 Home', href: '/' },
              { label: '🔧 Services', href: '/services' },
              { label: '👤 About Us', href: '/about' },
              { label: '📝 Blog', href: '/blog' },
              { label: '📞 Contact', href: '/contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="flex items-center justify-between py-3 px-3 rounded-xl font-semibold text-gray-800 hover:bg-blue-50 hover:text-[#1B4FD8] transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-gray-300 text-lg">›</span>
              </Link>
            ))}
          </div>

          {/* Services chips */}
          <div className="px-3 pb-3 border-t border-gray-100">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest px-1 pt-3 pb-2">Our Services</p>
            <div className="grid grid-cols-2 gap-1.5">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}-indore`}
                  onClick={close}
                  className="flex items-center gap-2 py-2.5 px-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors"
                >
                  <span className="text-base">{s.emoji}</span>
                  <span className="text-xs font-semibold text-[#1B4FD8] leading-tight">
                    {s.name.replace(' Repair', '').replace(' Cleaning', '')}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="px-3 pb-4 pt-1 flex gap-2 border-t border-gray-100">
            <a
              href="tel:+918889539174"
              onClick={close}
              className="flex-1 flex items-center justify-center gap-1.5 bg-[#F97316] text-white py-3.5 rounded-xl font-bold text-sm"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/918889539174"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] text-white py-3.5 rounded-xl font-bold text-sm"
            >
              <WhatsAppIcon className="w-4 h-4" /> WhatsApp
            </a>
          </div>

        </div>
      )}
    </header>
  );
}
