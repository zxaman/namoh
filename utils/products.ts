import type { Product, FilterState } from '@/types';

/**
 * Filter products based on active filter state.
 */
export function filterProducts(products: Product[], filters: FilterState): Product[] {
  return products.filter((p) => {
    // Category filter
    if (filters.categories.length > 0 && !filters.categories.includes(p.categoryId)) {
      return false;
    }
    // Brand filter
    if (filters.brands.length > 0 && (!p.brandId || !filters.brands.includes(p.brandId))) {
      return false;
    }
    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      if (p.price < min || p.price > max) return false;
    }
    // In stock filter
    if (filters.inStockOnly && !p.inStock) return false;
    // Featured filter
    if (filters.featuredOnly && !p.featured) return false;

    return true;
  });
}

/**
 * Sort products by the given sort key.
 */
export function sortProducts(products: Product[], sortKey: string): Product[] {
  const sorted = [...products];

  switch (sortKey) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'newest':
      return sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'featured':
    default:
      return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }
}

/**
 * Search products by query string (matches name, description, shortDescription).
 */
export function searchProducts(products: Product[], query: string): Product[] {
  if (!query.trim()) return products;
  const q = query.toLowerCase().trim();

  return products.filter((p) => {
    return (
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      (p.shortDescription && p.shortDescription.toLowerCase().includes(q)) ||
      p.categoryId.toLowerCase().includes(q) ||
      (p.brandId && p.brandId.toLowerCase().includes(q))
    );
  });
}

/**
 * Get products filtered by category slug.
 */
export function getProductsByCategory(products: Product[], categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

/**
 * Get products filtered by brand slug.
 */
export function getProductsByBrand(products: Product[], brandId: string): Product[] {
  return products.filter((p) => p.brandId === brandId);
}

/**
 * Count active filters.
 */
export function countActiveFilters(filters: FilterState): number {
  let count = 0;
  count += filters.categories.length;
  count += filters.brands.length;
  if (filters.priceRange) count += 1;
  if (filters.inStockOnly) count += 1;
  if (filters.featuredOnly) count += 1;
  return count;
}
