# Namoh — Phase 2 Documentation

> **Phase:** Product Discovery Experience
> **Build Status:** ✅ Zero errors · 21 pages generated (4 static + 15 SSG + 2 dynamic)

---

## 📁 New File Structure (Phase 2 Additions)

```
app/
├── shop/
│   ├── page.tsx                         # Shop page (server) — SEO metadata + PageHero
│   ├── ShopClient.tsx                   # Shop client — filters, sort, pagination state
│   ├── shop.module.css                  # Layout: sidebar + product grid
│   ├── category/
│   │   └── [slug]/
│   │       └── page.tsx                 # Category page — dynamic SSG per category
│   └── brand/
│       └── [slug]/
│           └── page.tsx                 # Brand page — dynamic SSG per brand
├── search/
│   ├── page.tsx                         # Search page (server) — Suspense wrapper
│   └── SearchClient.tsx                 # Search client — reads ?q= param

components/
├── shop/                                # NEW — Shop-specific components
│   ├── FilterSidebar/
│   │   ├── FilterSidebar.tsx            # Accordion filters: category, brand, price, availability
│   │   └── FilterSidebar.module.css
│   ├── MobileFilterDrawer/
│   │   ├── MobileFilterDrawer.tsx       # Framer Motion slide-from-left filter drawer
│   │   └── MobileFilterDrawer.module.css
│   ├── ProductToolbar/
│   │   ├── ProductToolbar.tsx           # Result count + sort dropdown + mobile filter button
│   │   └── ProductToolbar.module.css
│   ├── QuoteCTABanner/
│   │   ├── QuoteCTABanner.tsx           # Dark gradient B2B quote banner with WhatsApp CTA
│   │   └── QuoteCTABanner.module.css
│   └── PageHero/
│       ├── PageHero.tsx                 # Reusable hero for shop/category/brand pages
│       └── PageHero.module.css

├── ui/                                  # NEW additions to existing ui/
│   ├── Breadcrumbs/
│   │   ├── Breadcrumbs.tsx              # Breadcrumb navigation with chevron separators
│   │   └── Breadcrumbs.module.css
│   ├── SortDropdown/
│   │   ├── SortDropdown.tsx             # Custom styled select for sort options
│   │   └── SortDropdown.module.css
│   ├── Pagination/
│   │   ├── Pagination.tsx               # Page numbers + prev/next with smart dots
│   │   └── Pagination.module.css
│   ├── EmptyState/
│   │   ├── EmptyState.tsx               # Icon + title + description + action buttons
│   │   └── EmptyState.module.css
│   └── ActiveFilterChips/
│       ├── ActiveFilterChips.tsx         # Removable filter pills with Clear All
│       └── ActiveFilterChips.module.css

utils/
├── format.ts                            # NEW — formatPrice(), getDiscountPercent(), slugify()
└── products.ts                          # NEW — filterProducts(), sortProducts(), searchProducts()
```

---

## 🔧 Utility Functions — `utils/format.ts`

| Function | Signature | Example |
|----------|-----------|---------|
| `formatPrice` | `(amount: number) → string` | `45000 → "₹45,000"` |
| `getDiscountPercent` | `(price, originalPrice) → number` | `(45000, 56000) → 20` |
| `slugify` | `(text: string) → string` | `"Kitchen Equipment" → "kitchen-equipment"` |

## 🔧 Utility Functions — `utils/products.ts`

| Function | Purpose |
|----------|---------|
| `filterProducts(products, filters)` | Applies category, brand, price range, stock, featured filters |
| `sortProducts(products, sortKey)` | Sorts by featured, price-asc, price-desc, newest, name-asc |
| `searchProducts(products, query)` | Fuzzy matches name, description, category, brand |
| `getProductsByCategory(products, catId)` | Returns products in a category |
| `getProductsByBrand(products, brandId)` | Returns products from a brand |
| `countActiveFilters(filters)` | Returns total count of active filter selections |

---

## 📊 Data Enrichment

### Products: 8 → 21 items
Every product now has **real data** (no random/seeded logic):
- `price` — actual ₹ values
- `originalPrice` — for discount calculation
- `rating` — real star rating (4.0–4.8)
- `reviewCount` — actual review count
- `inStock` — boolean (1 product out of stock)
- `createdAt` — date string for "Newest" sort

### Categories: Added `seoDescription`
Rich SEO text paragraphs for each category page.

### Brands: Added `image`
Picsum hero images for brand page headers.

---

## 📄 New TypeScript Types

| Type | Fields |
|------|--------|
| `FilterState` | `categories[]`, `brands[]`, `priceRange`, `inStockOnly`, `featuredOnly` |
| `SortOption` | `id`, `label`, `value` |
| `BreadcrumbItem` | `label`, `href?` |
| `Product` (updated) | Added `originalPrice`, `rating`, `reviewCount`, `createdAt`, made `price` & `inStock` required |

---

## 📦 New Constants

| Constant | Value |
|----------|-------|
| `PRODUCTS_PER_PAGE` | `12` |
| `SORT_OPTIONS` | Featured, Price Low→High, Price High→Low, Newest, Name A→Z |
| `PRICE_RANGES` | Under ₹10K, ₹10K–50K, ₹50K–1L, ₹1L–2L, Above ₹2L |

---

## 🛣️ Routes Created

| Route | Type | SEO Title |
|-------|------|-----------|
| `/shop` | Static | Shop Commercial Kitchen Equipment \| Namoh |
| `/shop/category/[slug]` | SSG (7 pages) | Kitchen Equipment — Commercial Kitchen Equipment Supplier \| Namoh |
| `/shop/brand/[slug]` | SSG (8 pages) | Winterhalter — Authorized Dealer \| Namoh |
| `/search` | Static | Search Products \| Namoh |

---

## ✅ Verification Results

- **Build:** `npm run build` — zero errors, 21 pages generated
- **Shop Page:** ✅ PageHero, filters sidebar, product grid, sort, pagination, QuoteCTA banner
- **Category Page:** ✅ Dynamic hero, SEO text, filtered product grid
- **Brand Page:** ✅ Brand hero, authorized dealer badge, filtered products
- **Search Results:** ✅ Query highlighting, 2 results for "oven"
- **Empty State:** ✅ Professional empty state with Browse All + Contact Us CTAs
- **ProductCard:** ✅ Real prices, brand names, Request Quote links, no hydration mismatch
