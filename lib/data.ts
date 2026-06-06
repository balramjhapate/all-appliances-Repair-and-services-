export const services = [
  {
    name: 'AC Repair & Service',
    slug: 'ac-repair',
    emoji: '❄️',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
    desc: 'Gas refill, cooling issues, installation & full service',
    price: '299',
  },
  {
    name: 'Washing Machine Repair',
    slug: 'washing-machine-repair',
    emoji: '🫧',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&q=80',
    desc: 'Drum, motor, pump, PCB board & all brands',
    price: '299',
  },
  {
    name: 'Refrigerator Repair',
    slug: 'refrigerator-repair',
    emoji: '🧊',
    image: 'https://images.pexels.com/photos/4116716/pexels-photo-4116716.jpeg?w=600',
    desc: 'Cooling, compressor, gas refill, thermostat',
    price: '349',
  },
  {
    name: 'Chimney Cleaning',
    slug: 'chimney-cleaning',
    emoji: '🔧',
    image: 'https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?w=600',
    desc: 'Deep cleaning, filter replacement, motor service',
    price: '399',
  },
  {
    name: 'Geyser Repair',
    slug: 'geyser-repair',
    emoji: '🔥',
    image: 'https://images.pexels.com/photos/4116724/pexels-photo-4116724.jpeg?w=600',
    desc: 'Heating element, thermostat, leakage & installation',
    price: '299',
  },
  {
    name: 'Microwave Repair',
    slug: 'microwave-repair',
    emoji: '📻',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&q=80',
    desc: 'Magnetron, door, turntable & PCB repair',
    price: '299',
  },
];

export const cities = [
  { name: 'Indore', slug: 'indore' },
  { name: 'Bhopal', slug: 'bhopal' },
  { name: 'Ujjain', slug: 'ujjain' },
  { name: 'Mhow', slug: 'mhow' },
  { name: 'Dewas', slug: 'dewas' },
  { name: 'Sehore', slug: 'sehore' },
  { name: 'Jabalpur', slug: 'jabalpur' },
  { name: 'Jaipur', slug: 'jaipur' },
  { name: 'Pritampur', slug: 'pritampur' },
  { name: 'Mumbai', slug: 'mumbai' },
];

export const reviews = [
  {
    name: 'Rahul Sharma',
    city: 'Indore',
    rating: 5,
    text: 'AC ki cooling bilkul theek ho gayi 2 ghante mein. Technician bahut professional tha aur rate bhi reasonable tha. Highly recommend!',
    avatar: 'R',
  },
  {
    name: 'Priya Verma',
    city: 'Bhopal',
    rating: 5,
    text: 'Washing machine ka drum problem tha. Same day service mili, aur ab perfectly chal rahi hai. GST receipt bhi mili — trust worthy service.',
    avatar: 'P',
  },
  {
    name: 'Amit Patel',
    city: 'Ujjain',
    rating: 5,
    text: 'Fridge 3 din se kharab thi. HomeRepairPro ne call ke 1 ghante baad technician bheja. Problem solve ho gayi. Best service in Ujjain!',
    avatar: 'A',
  },
];

export const faqs = [
  {
    q: 'Kitne time mein technician aayega?',
    a: 'Humara promise hai same day service. Indore aur Bhopal mein typically 30-60 minutes mein technician pahunch jaata hai. Peak hours mein 2 ghante tak lag sakte hain.',
  },
  {
    q: 'Kya service charges fixed hain?',
    a: 'Visiting charge ₹99 hai jo service pe adjust ho jaata hai. AC service starting ₹299 se, washing machine ₹299 se, refrigerator ₹349 se shuru hoti hai. Parts alag se charge hote hain.',
  },
  {
    q: 'Kya aap GST receipt dete ho?',
    a: 'Haan, hum GST registered business hain. Har service pe proper GST invoice milti hai jo aap tax purposes ke liye use kar sakte ho.',
  },
  {
    q: 'Kya service ke baad koi warranty milti hai?',
    a: 'Haan! Humari service pe 30-day warranty hai. Agar same problem dobara aaye toh free service milegi.',
  },
  {
    q: 'Aap kaunse brands repair karte ho?',
    a: 'Hum sab major brands repair karte hain — LG, Samsung, Whirlpool, Voltas, Daikin, Carrier, Godrej, Haier, IFB, Bosch, aur aur bhi. Koi bhi brand ho, hum fix kar sakte hain.',
  },
];

export const pricingPlans = [
  {
    name: 'Basic',
    price: '299',
    features: ['Diagnosis & inspection', 'Minor repair', 'Labour charges included', 'Service report'],
  },
  {
    name: 'Standard',
    price: '599',
    features: ['Everything in Basic', 'Complete service & cleaning', 'Gas top-up (AC/Fridge)', '30-day warranty'],
    popular: true,
  },
  {
    name: 'Premium',
    price: '999',
    features: ['Everything in Standard', 'Parts replacement', 'Annual maintenance', '90-day warranty'],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getCityBySlug(slug: string) {
  return cities.find((c) => c.slug === slug);
}

export const blogPosts = [
  {
    slug: 'ac-ki-cooling-kam-kyu-hoti-hai',
    title: 'AC Ki Cooling Kam Ho Gayi? 7 Main Reasons Aur Ghar Pe Solution',
    excerpt: 'Garmi mein AC ki cooling kam ho jaaye toh tension hoti hai. Yahan 7 common reasons aur unke solutions bataye gaye hain.',
    date: '2025-05-15',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    category: 'AC Repair',
  },
  {
    slug: 'washing-machine-pani-nahi-nikal-rahi',
    title: 'Washing Machine Paani Nahi Nikal Rahi — Fix Karo 5 Steps Mein',
    excerpt: 'Washing machine ka paani drain nahi ho raha? Yeh 5 simple steps follow karo aur problem ghar pe fix karo.',
    date: '2025-05-20',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&q=80',
    category: 'Washing Machine',
  },
  {
    slug: 'fridge-thanda-nahi-kar-raha',
    title: 'Fridge Thanda Nahi Kar Raha — Kab Repair Zaroori Hai',
    excerpt: 'Fridge ki cooling problem ka matlab hamesha compressor nahi hota. Pehle yeh check karo.',
    date: '2025-05-25',
    readTime: '5 min',
    image: 'https://images.pexels.com/photos/4116716/pexels-photo-4116716.jpeg?w=800',
    category: 'Refrigerator',
  },
  {
    slug: 'ac-service-cost-indore-bhopal-2025',
    title: 'AC Service Cost Indore & Bhopal 2025 — Complete Price Guide',
    excerpt: 'Indore aur Bhopal mein AC service kitne mein padti hai? Complete price breakdown yahan hai.',
    date: '2025-06-01',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    category: 'AC Repair',
  },
  {
    slug: 'geyser-garam-pani-nahi-de-raha',
    title: 'Geyser Garam Paani Nahi De Raha — 6 Reasons & Solution',
    excerpt: 'Subah thanda paani mil raha hai? Geyser ki yeh 6 common problems check karo.',
    date: '2025-06-05',
    readTime: '4 min',
    image: 'https://images.pexels.com/photos/4116724/pexels-photo-4116724.jpeg?w=800',
    category: 'Geyser',
  },
];
