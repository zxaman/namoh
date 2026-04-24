# Namoh — Phase 1 Documentation

> **Project:** Namoh — Premium B2B eCommerce Platform for Commercial Kitchen & Hospitality Equipment
> **Tech Stack:** Next.js 16.2.4 · React 19 · TypeScript 5 · Tailwind CSS v4 · Framer Motion · CSS Modules
> **Build Status:** ✅ Zero errors · Production ready

---

## 📁 Complete File Structure

```
namoh/
├── app/                          # Next.js App Router
│   ├── globals.css               # Global styles, theme tokens, keyframe animations, utility classes
│   ├── layout.tsx                # Root layout — Inter font, Header, Footer, SEO metadata
│   ├── page.tsx                  # Homepage — composes HeroSection, TrustStrip, CategoryShowcase, FeaturedProducts
│   └── favicon.ico
│
├── components/
│   ├── icons/
│   │   └── Icons.tsx             # 🔑 CENTRALIZED icon library — 25+ SVG icons as React components
│   │
│   ├── layout/                   # Layout components (header, footer, navigation, drawers)
│   │   ├── TopInfoBar/
│   │   │   ├── TopInfoBar.tsx    # Dark gradient bar with phone, email, hours, WhatsApp CTA
│   │   │   └── TopInfoBar.module.css
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx        # Glassmorphism sticky navbar — logo, search, user/cart icons
│   │   │   └── Navbar.module.css
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.tsx     # Pill-shaped search input with icon
│   │   │   └── SearchBar.module.css
│   │   ├── CategoryNav/
│   │   │   ├── CategoryNav.tsx   # Horizontal uppercase category links with gradient underline
│   │   │   └── CategoryNav.module.css
│   │   ├── MobileMenu/
│   │   │   ├── MobileMenu.tsx    # Slide-from-left drawer with Framer Motion animation
│   │   │   └── MobileMenu.module.css
│   │   ├── CartDrawer/
│   │   │   ├── CartDrawer.tsx    # Slide-from-right cart drawer (Amazon/Flipkart style)
│   │   │   └── CartDrawer.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.tsx        # 4-column dark premium footer with social, contact, links
│   │   │   └── Footer.module.css
│   │   └── Header/
│   │       └── Header.tsx        # Composition: TopInfoBar + Navbar + CategoryNav
│   │
│   ├── sections/                 # Homepage section components
│   │   ├── HeroSection/
│   │   │   ├── HeroSection.tsx   # Full-bleed image hero with floating card + glass stats
│   │   │   └── HeroSection.module.css
│   │   ├── TrustStrip/
│   │   │   ├── TrustStrip.tsx    # 4 elevated trust badge cards overlapping hero
│   │   │   └── TrustStrip.module.css
│   │   ├── CategoryShowcase/
│   │   │   ├── CategoryShowcase.tsx  # 4x2 tall image cards with gradient overlays
│   │   │   └── CategoryShowcase.module.css
│   │   └── FeaturedProducts/
│   │       ├── FeaturedProducts.tsx  # 4x2 product card grid with section header
│   │       └── FeaturedProducts.module.css
│   │
│   └── ui/                       # Reusable UI primitives
│       ├── Button/
│       │   ├── Button.tsx        # 5 variants (primary, secondary, outline, whatsapp, ghost) × 3 sizes
│       │   └── Button.module.css
│       ├── Input/
│       │   ├── Input.tsx         # 3 variants (search, contact, inquiry) with icon + error support
│       │   └── Input.module.css
│       ├── Badge/
│       │   ├── Badge.tsx         # Product label badges (sale, new, hot, bestseller, outOfStock)
│       │   └── Badge.module.css
│       ├── Container/
│       │   └── Container.tsx     # max-w-7xl centered wrapper with responsive padding
│       └── ProductCard/
│           ├── ProductCard.tsx   # Full product card with image, rating, price, add-to-cart
│           └── ProductCard.module.css
│
├── constants/
│   └── index.ts                  # Site name, contact info, colors, WhatsApp URL, social links
│
├── data/                         # Static demo data (backend-ready structure)
│   ├── brands.ts                 # 8 brands (Winterhalter, Rational, Hoshizaki, etc.)
│   ├── categories.ts             # 8 categories with picsum image URLs
│   ├── navigation.ts             # TopBar info, main nav items, footer sections, trust badges
│   └── products.ts               # 8 products with picsum images, real prices, specifications
│
├── hooks/
│   ├── useScrollPosition.ts      # Tracks window.scrollY for sticky navbar shadow
│   └── useMediaQuery.ts          # CSS media query hook for responsive breakpoints
│
├── types/
│   └── index.ts                  # TypeScript interfaces: Product, Category, Brand, NavItem, etc.
│
├── utils/
│   └── cn.ts                     # className joiner utility (filters falsy values)
│
├── next.config.ts                # Configured remotePatterns for picsum.photos + unsplash
├── tsconfig.json                 # TypeScript config with @/ path alias
├── postcss.config.mjs            # PostCSS with @tailwindcss/postcss
├── package.json                  # Dependencies: next, react, framer-motion, tailwindcss
└── eslint.config.mjs             # ESLint with next config
```

---

## 🎨 Color System & Design Palette

### Primary Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#C8102E` | CTA buttons, links, accents, sale badges |
| `--color-primary-dark` | `#A00D24` | Button hover states |
| `--color-primary-light` | `#FEF2F2` | Light red backgrounds, icon containers |

### Neutral Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-dark` | `#0F172A` | Headings, navbar text, footer bg |
| `--color-text` | `#1E293B` | Body text |
| `--color-text-muted` | `#64748B` | Secondary text, placeholders |
| `--color-bg` | `#FFFFFF` | Main background |
| `--color-bg-light` | `#F8FAFC` | Section backgrounds, card bgs |
| `--color-bg-warm` | `#FFFBF5` | Warm accent areas |
| `--color-border` | `#E2E8F0` | Card borders, dividers |
| `--color-border-dark` | `#CBD5E1` | Hover borders |

### Accent Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-whatsapp` | `#25D366` | WhatsApp buttons |
| `--color-gold` | `#F59E0B` | Star ratings, gold accents |
| `--color-emerald` | `#10B981` | Discount badges, success |
| `--color-sky` | `#0EA5E9` | Info accents |

### Gradient Patterns Used

| Name | Gradient | Where |
|------|----------|-------|
| **Primary button** | `linear-gradient(135deg, #C8102E, #E8102E)` | Add to Cart, CTAs |
| **WhatsApp button** | `linear-gradient(135deg, #25D366, #128C7E)` | WhatsApp CTA |
| **Logo mark** | `linear-gradient(135deg, #C8102E, #FF6B6B)` | Navbar/footer logo square |
| **Hero overlay** | `linear-gradient(135deg, rgba(15,23,42,0.92)...0.5)` | Hero dark overlay |
| **Category overlay** | Dark navy → red on hover | Category card overlays |
| **TopInfoBar** | `linear-gradient(135deg, #0F172A, #1E293B)` | Top bar background |
| **Footer** | `linear-gradient(180deg, #0F172A, #020617)` | Footer background |
| **Heading accent** | `linear-gradient(135deg, #FF6B6B, #F59E0B)` | "Kitchen Equipment" gradient text |

---

## 🖼️ UI Section Descriptions

### 1. TopInfoBar
- **Look:** Dark gradient bar at the very top
- **Content:** Phone number, email, business hours on left; "Get Instant Quote" in gradient gold text + green WhatsApp pill button on right
- **Effect:** Animated shimmer sweep across the bar

### 2. Navbar (Sticky)
- **Look:** White glassmorphism with backdrop blur, sticky at top
- **Content:** Red gradient logo mark "N" + "Namoh" text + "KITCHEN & HOSPITALITY" subtext | Centered search bar with pill shape | User icon + Cart icon (with count badge)
- **Effect:** Shadow appears on scroll, logo mark rotates on hover
- **Mobile:** Hamburger button appears, search moves below navbar

### 3. CategoryNav
- **Look:** White horizontal nav below navbar
- **Content:** Uppercase category links (KITCHEN EQUIPMENT, REFRIGERATION, BAKERY, etc.) with chevron icons
- **Effect:** Gradient red underline slides in from left on hover, chevron rotates 180°
- **Mobile:** Hidden (categories accessible via mobile menu)

### 4. HeroSection
- **Look:** Full-width section with background image from picsum, dark gradient overlay, decorative blurred red/gold circles
- **Left side:** Glassmorphism badge "Trusted by 500+ Hotels" with pulsing green dot → Large heading with "Kitchen Equipment" in gradient text → Description → Red "Explore Products" + Green "Get Instant Quote" buttons
- **Right side:** Floating product card (picsum image) with shadow + overlay label, two glass floating badges ("#1 Rated Supplier" and "Pan India Delivery") that float up and down
- **Bottom:** Glass stats bar (500+ Clients, 2000+ Products, 50+ Brands, 10+ Years) with hover highlight
- **Animations:** Staggered fadeInUp on all elements (badge → heading → description → buttons → stats)

### 5. TrustStrip
- **Look:** 4 white cards in a connected row, overlapping into the hero section (negative top margin)
- **Content:** Icon + Title + Subtitle per card (Trusted, Genuine, Delivery, Support)
- **Effect:** On hover: card lifts up, background shifts to warm gradient, icon container transforms to red gradient with rotation, accent underline appears at bottom
- **Shadow:** Entire strip has elevated shadow

### 6. CategoryShowcase
- **Look:** 4×2 grid of tall (3:4 aspect ratio) image cards
- **Content:** Full-bleed picsum images as backgrounds, dark-to-transparent gradient overlay at bottom, category name + product count in white
- **Effect:** On hover: image zooms 8%, overlay shifts from dark navy to red, name slides up, "See Collection →" fades in from below, card lifts -6px
- **Section header:** Centered "— CATEGORIES —" eyebrow + "Browse by Category" title

### 7. FeaturedProducts
- **Look:** Soft gradient background (light gray to white), 4×2 grid of product cards
- **Section header:** Red line "— FEATURED" eyebrow left + "Featured Products" title | Bordered red "View All →" button right
- **Product cards (see below)**

### 8. ProductCard
- **Look:** White card with rounded corners, subtle border
- **Image area:** Square (1:1) with light gradient background, picsum image fills the space, "BESTSELLER" gold badge top-left
- **Hover effects:** Card lifts -4px with large shadow, image zooms 6%, action buttons (heart + eye) slide in from right with glass background
- **Info area:** Product name (2-line clamp) → Star rating with gold stars → Price row (₹45,000 + ~~₹56,250~~ + green "20% off" pill) → Red gradient "Add to Cart" button with cart icon
- **Add to Cart hover:** Button glows with red shadow, lifts slightly

### 9. CartDrawer
- **Look:** Slides from right with Framer Motion spring animation, dark backdrop overlay
- **Content:** "Shopping Cart" header with close button → Scrollable body (empty state shows large cart icon + message) → Footer with "Continue Shopping" button
- **When items present:** Item rows with image, name, price, quantity +/- controls, remove button, subtotal at bottom

### 10. MobileMenu
- **Look:** Slides from left with Framer Motion spring animation
- **Content:** "Namoh" logo header with close button → Main nav links → "Categories" section with icon + name per category → Bottom CTAs (WhatsApp, Request Quote, Call Us)

### 11. Footer
- **Look:** Deep dark gradient (slate to near-black), decorative blurred red circle in top-right
- **Grid:** 4 columns — About (logo + description + social icons) | Product Categories | Quick Links | Contact Us
- **Column titles:** Have red gradient underline accent below
- **Link hover:** Text slides right 4px, red line appears on left
- **Social icons:** Rounded squares, hover turns red with glow shadow
- **Bottom:** Trust bar (GST, Authorized Dealer, ISO Ready) → Copyright with policy links

---

## ⚙️ Logic & Hooks Created

### `useScrollPosition` — `hooks/useScrollPosition.ts`
- Tracks `window.scrollY` using scroll event listener with `{ passive: true }`
- Returns current scroll Y value as number
- **Used by:** Navbar to add shadow class when `scrollY > 10`

### `useMediaQuery` — `hooks/useMediaQuery.ts`
- Accepts a CSS media query string (e.g., `'(min-width: 768px)'`)
- Returns boolean `matches` using `window.matchMedia`
- Listens for changes via `'change'` event
- **Ready for use** in responsive components

### `cn()` — `utils/cn.ts`
- Utility to conditionally join classNames
- Filters out falsy values (`false`, `null`, `undefined`, `''`)
- **Used by:** Button, Input, ProductCard, Navbar, and other components

### Deterministic Seeded Random — `ProductCard.tsx`
- `seededRandom(seed)` function generates consistent pseudo-random numbers from product ID string
- Prevents React hydration mismatch (server vs client rendering)
- **Used for:** Demo prices, ratings, and review counts when real data isn't set

### Body Scroll Lock — `MobileMenu.tsx` & `CartDrawer.tsx`
- Sets `document.body.style.overflow = 'hidden'` when drawer is open
- Cleanup function restores overflow on unmount
- Prevents background scrolling when drawer overlay is active

### Framer Motion Animations
- **MobileMenu:** `x: '-100%' → 0` with spring damping
- **CartDrawer:** `x: '100%' → 0` with spring damping
- **AnimatePresence** wraps both for exit animations
- Backdrop uses `opacity: 0 → 1` fade

---

## 📦 TypeScript Interfaces — `types/index.ts`

| Interface | Key Fields |
|-----------|------------|
| `NavItem` | `id`, `label`, `href`, `icon?`, `children?` |
| `Category` | `id`, `name`, `slug`, `description?`, `icon`, `image?`, `productCount?` |
| `Brand` | `id`, `name`, `slug`, `logo?`, `description?`, `country?`, `featured?` |
| `Product` | `id`, `name`, `slug`, `description`, `categoryId`, `brandId?`, `images[]`, `price?`, `specifications?`, `featured?`, `inStock?` |
| `FooterSection` | `title`, `links[]` |
| `TrustBadge` | `id`, `icon`, `title`, `subtitle` |
| `ButtonVariant` | `'primary' \| 'secondary' \| 'outline' \| 'whatsapp' \| 'ghost'` |
| `ButtonSize` | `'sm' \| 'md' \| 'lg'` |
| `InputVariant` | `'search' \| 'contact' \| 'inquiry'` |

---

## 🖼️ Centralized Icons — `components/icons/Icons.tsx`

All SVG icons exported as named React components. Each accepts `className` prop for sizing/color.

| Category | Icons |
|----------|-------|
| **Navigation** | `SearchIcon`, `CartIcon`, `UserIcon`, `MenuIcon`, `CloseIcon` |
| **Chevrons** | `ChevronDownIcon`, `ChevronRightIcon`, `ArrowRightIcon` |
| **Contact** | `PhoneIcon`, `MailIcon`, `ClockIcon`, `MapPinIcon`, `WhatsAppIcon` |
| **Social** | `FacebookIcon`, `InstagramIcon`, `LinkedInIcon`, `YouTubeIcon` |
| **E-commerce** | `StarIcon`, `StarOutlineIcon`, `HeartIcon`, `EyeIcon`, `QuoteIcon` |
| **Trust** | `TruckIcon`, `ShieldIcon`, `HeadphonesIcon`, `AwardIcon` |
| **Cart actions** | `MinusIcon`, `PlusIcon`, `TrashIcon` |

---

## 🎬 CSS Animations — `globals.css`

| Animation | Duration | Effect |
|-----------|----------|--------|
| `fadeInUp` | 0.6s | Slides up 24px + fades in |
| `fadeIn` | varies | Simple opacity fade |
| `shimmer` | 2–8s | Gradient sweep (TopInfoBar, loading) |
| `float` | 3–5s | Gentle up/down bobbing (hero floating elements) |
| `pulse-glow` | 2s | Pulsing box-shadow glow (green dot, badges) |
| `gradient-shift` | 6s | Background position animation for gradients |
| `slide-in-right` | varies | Horizontal slide entrance |
| `slide-in-left` | varies | Horizontal slide entrance |
| `count-up` | varies | Scale + fade for number counters |

### CSS Utility Classes

| Class | Effect |
|-------|--------|
| `.glass` | White glassmorphism (70% opacity, blur 16px) |
| `.glass-dark` | Dark glassmorphism (85% opacity, blur 16px) |
| `.gradient-text` | Red-to-gold gradient text fill |
| `.animate-fade-up` | Applies fadeInUp animation |
| `.animate-float` | Applies float bobbing animation |
| `.animate-shimmer` | Applies shimmer sweep animation |
| `.animate-gradient` | Applies gradient-shift background animation |
| `.scrollbar-hide` | Hides scrollbar cross-browser |

---

## 📊 Demo Data Summary

### Products (8 items)
All have picsum image URLs and real ₹ prices:
- Commercial Gas Range 6-Burner (₹45,000)
- Commercial Vertical Freezer 4-Door (₹85,000)
- Commercial Deck Oven 3-Deck (₹1,20,000)
- Stainless Steel Work Table (₹12,000)
- Premium Round Chafing Dish 6.5L (₹3,500)
- Commercial Double Deep Fryer (₹28,000)
- Planetary Mixer 20L Professional (₹65,000)
- Hood Type Commercial Dishwasher (₹1,85,000)

### Categories (8 items)
Kitchen Equipment · Refrigeration · Bakery · Fast Food · Hotelware · Storage & Racks · Cleaning · Brands

### Brands (8 items)
Winterhalter · Rational · Hoshizaki · Electrolux Professional · True Refrigeration · Robot Coupe · Berjaya · Blue Star

---

## 🔧 Configuration

### `next.config.ts`
```ts
images: {
  remotePatterns: [
    new URL('https://picsum.photos/**'),
    new URL('https://fastly.picsum.photos/**'),
    new URL('https://images.unsplash.com/**'),
  ],
}
```

### `package.json` Dependencies
```
next: 16.2.4
react: 19.2.4
framer-motion: ^12.38.0
tailwindcss: ^4
@tailwindcss/postcss: ^4
typescript: ^5
```

---

## 🚧 What's NOT Done Yet (Phase 2+)

- [ ] Product Listing Page (PLP) with filters/sort
- [ ] Product Detail Page (PDP) with specification tables
- [ ] Brands listing page
- [ ] Cart state management (add/remove/quantity)
- [ ] Quote request form
- [ ] Contact page with form
- [ ] About Us page
- [ ] Search functionality (filtering)
- [ ] WhatsApp floating button
- [ ] Real product images (replace picsum)
- [ ] Backend/API integration
- [ ] Authentication
- [ ] SEO per-page optimization
