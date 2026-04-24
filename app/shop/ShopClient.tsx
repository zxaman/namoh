'use client';

import { useState, useMemo } from 'react';
import styles from './shop.module.css';
import Container from '@/components/ui/Container/Container';
import ProductCard from '@/components/ui/ProductCard/ProductCard';
import ProductToolbar from '@/components/shop/ProductToolbar/ProductToolbar';
import FilterSidebar from '@/components/shop/FilterSidebar/FilterSidebar';
import MobileFilterDrawer from '@/components/shop/MobileFilterDrawer/MobileFilterDrawer';
import ActiveFilterChips from '@/components/ui/ActiveFilterChips/ActiveFilterChips';
import Pagination from '@/components/ui/Pagination/Pagination';
import QuoteCTABanner from '@/components/shop/QuoteCTABanner/QuoteCTABanner';
import EmptyState from '@/components/ui/EmptyState/EmptyState';
import Button from '@/components/ui/Button/Button';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import { brands } from '@/data/brands';
import { filterProducts, sortProducts, countActiveFilters } from '@/utils/products';
import { PRODUCTS_PER_PAGE } from '@/constants';
import type { FilterState } from '@/types';

const DEFAULT_FILTERS: FilterState = {
  categories: [],
  brands: [],
  priceRange: null,
  inStockOnly: false,
  featuredOnly: false,
};

export default function ShopClient() {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [sortKey, setSortKey] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCount = countActiveFilters(filters);

  const filtered = useMemo(() => {
    const f = filterProducts(products, filters);
    return sortProducts(f, sortKey);
  }, [filters, sortKey]);

  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleClear = () => {
    setFilters(DEFAULT_FILTERS);
    setCurrentPage(1);
  };

  // Build chips for active filters
  const chips = useMemo(() => {
    const items: { key: string; label: string }[] = [];
    filters.categories.forEach((catId) => {
      const cat = categories.find((c) => c.id === catId);
      if (cat) items.push({ key: `cat-${catId}`, label: cat.name });
    });
    filters.brands.forEach((brandId) => {
      const brand = brands.find((b) => b.id === brandId);
      if (brand) items.push({ key: `brand-${brandId}`, label: brand.name });
    });
    if (filters.priceRange) items.push({ key: 'price', label: `₹${filters.priceRange[0].toLocaleString('en-IN')} – ₹${filters.priceRange[1] === Infinity ? '∞' : filters.priceRange[1].toLocaleString('en-IN')}` });
    if (filters.inStockOnly) items.push({ key: 'stock', label: 'In Stock Only' });
    if (filters.featuredOnly) items.push({ key: 'featured', label: 'Featured Only' });
    return items;
  }, [filters]);

  const handleRemoveChip = (key: string) => {
    if (key.startsWith('cat-')) {
      const catId = key.replace('cat-', '');
      handleFilterChange({ ...filters, categories: filters.categories.filter((c) => c !== catId) });
    } else if (key.startsWith('brand-')) {
      const brandId = key.replace('brand-', '');
      handleFilterChange({ ...filters, brands: filters.brands.filter((b) => b !== brandId) });
    } else if (key === 'price') {
      handleFilterChange({ ...filters, priceRange: null });
    } else if (key === 'stock') {
      handleFilterChange({ ...filters, inStockOnly: false });
    } else if (key === 'featured') {
      handleFilterChange({ ...filters, featuredOnly: false });
    }
  };

  // Insert QuoteCTA after 8 products
  const showQuoteBanner = paginated.length >= 4;
  const firstHalf = paginated.slice(0, 8);
  const secondHalf = paginated.slice(8);

  return (
    <>
      <MobileFilterDrawer
        isOpen={mobileFiltersOpen}
        onClose={() => setMobileFiltersOpen(false)}
        filters={filters}
        onChange={handleFilterChange}
        onClear={handleClear}
        activeCount={activeCount}
      />

      <Container>
        <div className={styles.layout}>
          {/* Desktop Sidebar */}
          <div className={styles.sidebar}>
            <FilterSidebar
              filters={filters}
              onChange={handleFilterChange}
              onClear={handleClear}
              activeCount={activeCount}
            />
          </div>

          {/* Products Area */}
          <div className={styles.main}>
            <ProductToolbar
              total={filtered.length}
              showing={paginated.length}
              sortValue={sortKey}
              onSortChange={(v) => { setSortKey(v); setCurrentPage(1); }}
              onOpenFilters={() => setMobileFiltersOpen(true)}
              filterCount={activeCount}
            />

            <ActiveFilterChips chips={chips} onRemove={handleRemoveChip} onClearAll={handleClear} />

            {filtered.length === 0 ? (
              <EmptyState
                title="No products found"
                description="Try adjusting your filters or search terms to find what you're looking for."
              >
                <Button variant="outline" size="md" onClick={handleClear}>
                  Reset Filters
                </Button>
                <Button variant="whatsapp" size="md" href="/contact">
                  Contact Us
                </Button>
              </EmptyState>
            ) : (
              <>
                <div className={styles.grid}>
                  {firstHalf.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {showQuoteBanner && <QuoteCTABanner />}

                {secondHalf.length > 0 && (
                  <div className={styles.grid}>
                    {secondHalf.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                )}

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
