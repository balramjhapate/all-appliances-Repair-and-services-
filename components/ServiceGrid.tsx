import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/data';

export default function ServiceGrid() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">
          Home Appliance Repair Service — AC, Fridge & Washing Machine
        </h2>
        <p className="text-center text-gray-500 mb-10">
          AC • Fridge • Washing Machine • Geyser — All brands, same day, starting ₹350
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}-indore`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image section */}
              <div className="relative h-36 md:h-52 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  className="object-contain p-3 md:p-5 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>

              {/* Content section */}
              <div className="p-4 md:p-5">
                <h3 className="font-bold text-gray-900 text-sm md:text-lg leading-tight group-hover:text-[#1B4FD8] transition-colors mb-1 md:mb-2">
                  {s.name}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4 hidden md:block line-clamp-2">
                  {s.desc}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex flex-col">
                    <span className="text-[#1B4FD8] font-black text-base md:text-xl">₹{s.price}</span>
                    <span className="text-gray-400 text-[10px] md:text-xs -mt-0.5">se shuru</span>
                  </div>
                  <span className="bg-[#F97316] hover:bg-orange-600 text-white text-xs md:text-sm font-bold px-3 md:px-5 py-2 md:py-2.5 rounded-xl transition-colors">
                    Book →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
