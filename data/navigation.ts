import type { NavItem, FooterSection, TrustBadge } from '@/types';
import { CONTACT, SITE_NAME } from '@/constants';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Top Info Bar Data
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const topBarInfo = {
  phone: CONTACT.phone,
  phoneDisplay: CONTACT.phoneDisplay,
  email: CONTACT.email,
  whatsapp: CONTACT.whatsapp,
  whatsappDisplay: CONTACT.whatsappDisplay,
  businessHours: CONTACT.businessHours,
  quickQuoteText: 'Get Instant Quote',
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Main Navigation
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const mainNavItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'shop', label: 'Shop', href: '/shop' },
  { id: 'brands', label: 'Brands', href: '/shop' },
  { id: 'about', label: 'About Us', href: '/about' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Footer Data
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const footerAbout = {
  title: SITE_NAME,
  description:
    'Your trusted partner for premium commercial kitchen equipment and hospitality solutions. We serve hotels, restaurants, cafes, cloud kitchens, caterers, and food businesses across India with genuine products and expert guidance.',
};

export const footerSections: FooterSection[] = [
  {
    title: 'Product Categories',
    links: [
      { label: 'Kitchen Equipment', href: '/shop/category/kitchen-equipment' },
      { label: 'Refrigeration', href: '/shop/category/refrigeration' },
      { label: 'Bakery Equipment', href: '/shop/category/bakery' },
      { label: 'Fast Food Equipment', href: '/shop/category/fast-food' },
      { label: 'Hotelware', href: '/shop/category/hotelware' },
      { label: 'Storage & Racks', href: '/shop/category/storage' },
      { label: 'Cleaning Equipment', href: '/shop/category/cleaning' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Brands', href: '/shop' },
      { label: 'Request a Quote', href: '/contact' },
      { label: 'Bulk Orders', href: '/bulk-orders' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
    ],
  },
];

export const footerContact = {
  title: 'Contact Us',
  phone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  address: CONTACT.address,
  businessHours: CONTACT.businessHours,
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Trust Strip Badges
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const trustBadges: TrustBadge[] = [
  {
    id: 'trusted',
    icon: '🏆',
    title: 'Trusted by 500+ Hotels',
    subtitle: 'Across India',
  },
  {
    id: 'bulk',
    icon: '📦',
    title: 'Bulk Orders Welcome',
    subtitle: 'Best B2B Prices',
  },
  {
    id: 'delivery',
    icon: '🚚',
    title: 'Pan India Delivery',
    subtitle: 'Fast & Reliable',
  },
  {
    id: 'genuine',
    icon: '✅',
    title: '100% Genuine Brands',
    subtitle: 'Authorized Dealer',
  },
];
