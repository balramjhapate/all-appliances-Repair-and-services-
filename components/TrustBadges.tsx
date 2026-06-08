const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 flex-shrink-0">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const badges = [
  { icon: null, label: '4.8/5 Google Rating', sub: '500+ Verified Reviews', google: true },
  { icon: '🔧', label: '5,000+ Repairs Done', sub: 'Since 2019 — 5+ Years', google: false },
  { icon: '⚡', label: '30 Min Response', sub: 'Same Day Guaranteed', google: false },
  { icon: '🛡️', label: '30-Day Warranty', sub: 'GST & MSME Registered', google: false },
];

export default function TrustBadges() {
  return (
    <section className="bg-[#1B4FD8] py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-3"
            >
              {b.google ? (
                <GoogleIcon />
              ) : (
                <span className="text-[#F97316] font-bold text-lg flex-shrink-0">{b.icon}</span>
              )}
              <div className="min-w-0">
                <p className="text-white font-semibold text-xs md:text-sm leading-tight">{b.label}</p>
                <p className="text-blue-200 text-xs truncate">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
