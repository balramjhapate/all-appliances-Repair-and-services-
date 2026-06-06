const badges = [
  { icon: '✓', label: 'GST Registered', sub: 'Government Approved' },
  { icon: '✓', label: 'MSME Certified', sub: 'Udyam Registered' },
  { icon: '✓', label: '5000+ Repairs', sub: 'Since 2019' },
  { icon: '✓', label: 'Same Day Service', sub: '30 Min Response' },
];

export default function TrustBadges() {
  return (
    <section className="bg-[#1B4FD8] py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide md:grid md:grid-cols-4 md:overflow-visible pb-1">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex-shrink-0 flex items-center gap-2 bg-white/10 rounded-lg px-4 py-3 min-w-[160px] md:min-w-0"
            >
              <span className="text-[#F97316] font-bold text-xl">{b.icon}</span>
              <div>
                <p className="text-white font-semibold text-sm leading-tight">{b.label}</p>
                <p className="text-blue-200 text-xs">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
