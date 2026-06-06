import Link from 'next/link';
import { cities } from '@/lib/data';

export default function CityPills() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-2">
          Cities We Serve
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Indore, Bhopal aur 8 aur cities mein service available
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {cities.map((c) => (
            <Link
              key={c.slug}
              href={`/ac-repair-${c.slug}`}
              className="px-4 py-2 rounded-full bg-blue-50 hover:bg-[#1B4FD8] hover:text-white text-[#1B4FD8] font-medium text-sm transition-colors border border-blue-200"
            >
              📍 {c.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
