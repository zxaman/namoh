// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Navigation & Layout Types
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
  businessHours: string;
}

export interface FooterSection {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Product & Catalog Types
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  seoDescription?: string;
  icon: string;
  image?: string;
  productCount?: number;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  image?: string;
  description?: string;
  country?: string;
  featured?: boolean;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription?: string;
  categoryId: string;
  brandId?: string;
  images: string[];
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  minOrderQuantity?: number;
  specifications?: Record<string, string>;
  featured?: boolean;
  inStock: boolean;
  createdAt: string;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Shop & Filter Types
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface SortOption {
  id: string;
  label: string;
  value: string;
}

export interface FilterState {
  categories: string[];
  brands: string[];
  priceRange: [number, number] | null;
  inStockOnly: boolean;
  featuredOnly: boolean;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Trust & Testimonial Types
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface TrustBadge {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// UI Component Types
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type InputVariant = 'search' | 'contact' | 'inquiry';
