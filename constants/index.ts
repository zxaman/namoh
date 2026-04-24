import type { SortOption } from '@/types';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Site Metadata
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const SITE_NAME = 'Namoh';
export const SITE_TAGLINE = 'Premium Commercial Kitchen & Hospitality Equipment';
export const SITE_DESCRIPTION =
  'India\'s trusted supplier of commercial kitchen equipment, hotelware, and hospitality products. Serving hotels, restaurants, cafes, cloud kitchens, caterers, and food businesses.';
export const SITE_URL = 'https://namoh.in';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Contact Information
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const CONTACT = {
  phone: '+91 98XXXXXXXX',
  phoneDisplay: '+91 98XX XXX XXX',
  email: 'info@namoh.in',
  whatsapp: '+919800000000',
  whatsappDisplay: 'WhatsApp Us',
  address: 'New Delhi, India',
  businessHours: 'Mon–Sat: 9:00 AM – 7:00 PM',
  gst: 'XXXXXXXXXXXXXXXXX',
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Brand Colors (matches Tailwind theme)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const COLORS = {
  primary: '#C8102E',
  primaryDark: '#A00D24',
  primaryLight: '#FEF2F2',
  dark: '#0F172A',
  text: '#1E293B',
  textMuted: '#64748B',
  bg: '#FFFFFF',
  bgLight: '#F8FAFC',
  bgWarm: '#FFFBF5',
  border: '#E2E8F0',
  whatsapp: '#25D366',
  gold: '#F5A623',
} as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// WhatsApp
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
  'Hello Namoh! I am interested in your commercial kitchen equipment. Please share details.'
)}`;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Social Media Links
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const SOCIAL_LINKS = [
  { platform: 'Facebook', href: '#', icon: 'facebook' },
  { platform: 'Instagram', href: '#', icon: 'instagram' },
  { platform: 'LinkedIn', href: '#', icon: 'linkedin' },
  { platform: 'YouTube', href: '#', icon: 'youtube' },
] as const;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Shop / Product Discovery
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const PRODUCTS_PER_PAGE = 12;

export const SORT_OPTIONS: SortOption[] = [
  { id: 'featured', label: 'Featured', value: 'featured' },
  { id: 'price-asc', label: 'Price: Low to High', value: 'price-asc' },
  { id: 'price-desc', label: 'Price: High to Low', value: 'price-desc' },
  { id: 'newest', label: 'Newest First', value: 'newest' },
  { id: 'name-asc', label: 'Name: A to Z', value: 'name-asc' },
];

export const PRICE_RANGES: { label: string; min: number; max: number }[] = [
  { label: 'Under ₹10,000', min: 0, max: 10000 },
  { label: '₹10,000 – ₹50,000', min: 10000, max: 50000 },
  { label: '₹50,000 – ₹1,00,000', min: 50000, max: 100000 },
  { label: '₹1,00,000 – ₹2,00,000', min: 100000, max: 200000 },
  { label: 'Above ₹2,00,000', min: 200000, max: Infinity },
];
