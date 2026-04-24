'use client';

import { useState } from 'react';
import styles from './FilterSidebar.module.css';
import { ChevronDownIcon } from '@/components/icons/Icons';
import { categories } from '@/data/categories';
import { brands } from '@/data/brands';
import { products } from '@/data/products';
import { PRICE_RANGES } from '@/constants';
import { cn } from '@/utils/cn';
import type { FilterState } from '@/types';

interface FilterSidebarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onClear: () => void;
  activeCount: number;
}

function getProductCountForCategory(catId: string): number {
  return products.filter((p) => p.categoryId === catId).length;
}
function getProductCountForBrand(brandId: string): number {
  return products.filter((p) => p.brandId === brandId).length;
}

export default function FilterSidebar({ filters, onChange, onClear, activeCount }: FilterSidebarProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    category: true,
    brand: true,
    price: true,
    availability: false,
  });

  const toggle = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleCategory = (catId: string) => {
    const cats = filters.categories.includes(catId)
      ? filters.categories.filter((c) => c !== catId)
      : [...filters.categories, catId];
    onChange({ ...filters, categories: cats });
  };

  const toggleBrand = (brandId: string) => {
    const br = filters.brands.includes(brandId)
      ? filters.brands.filter((b) => b !== brandId)
      : [...filters.brands, brandId];
    onChange({ ...filters, brands: br });
  };

  const setPriceRange = (min: number, max: number) => {
    const current = filters.priceRange;
    if (current && current[0] === min && current[1] === max) {
      onChange({ ...filters, priceRange: null });
    } else {
      onChange({ ...filters, priceRange: [min, max] });
    }
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <h3 className={styles.headerTitle}>Filters</h3>
        {activeCount > 0 && (
          <button className={styles.clearBtn} onClick={onClear}>
            Clear All ({activeCount})
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className={cn(styles.section, openSections.category && styles.sectionOpen)}>
        <button className={styles.sectionBtn} onClick={() => toggle('category')}>
          <span>
            Category
            {filters.categories.length > 0 && (
              <span className={styles.sectionCount}>{filters.categories.length}</span>
            )}
          </span>
          <span className={styles.sectionChevron}><ChevronDownIcon className="w-4 h-4" /></span>
        </button>
        {openSections.category && (
          <div className={styles.sectionBody}>
            {categories.map((cat) => (
              <label key={cat.id} className={styles.checkItem}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={filters.categories.includes(cat.id)}
                  onChange={() => toggleCategory(cat.id)}
                />
                <span className={styles.checkLabel}>{cat.name}</span>
                <span className={styles.checkCount}>({getProductCountForCategory(cat.id)})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Brand Filter */}
      <div className={cn(styles.section, openSections.brand && styles.sectionOpen)}>
        <button className={styles.sectionBtn} onClick={() => toggle('brand')}>
          <span>
            Brand
            {filters.brands.length > 0 && (
              <span className={styles.sectionCount}>{filters.brands.length}</span>
            )}
          </span>
          <span className={styles.sectionChevron}><ChevronDownIcon className="w-4 h-4" /></span>
        </button>
        {openSections.brand && (
          <div className={styles.sectionBody}>
            {brands.map((brand) => {
              const count = getProductCountForBrand(brand.id);
              if (count === 0) return null;
              return (
                <label key={brand.id} className={styles.checkItem}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={filters.brands.includes(brand.id)}
                    onChange={() => toggleBrand(brand.id)}
                  />
                  <span className={styles.checkLabel}>{brand.name}</span>
                  <span className={styles.checkCount}>({count})</span>
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* Price Range */}
      <div className={cn(styles.section, openSections.price && styles.sectionOpen)}>
        <button className={styles.sectionBtn} onClick={() => toggle('price')}>
          <span>Price Range</span>
          <span className={styles.sectionChevron}><ChevronDownIcon className="w-4 h-4" /></span>
        </button>
        {openSections.price && (
          <div className={styles.sectionBody}>
            {PRICE_RANGES.map((range) => (
              <label key={range.label} className={styles.checkItem}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={filters.priceRange?.[0] === range.min && filters.priceRange?.[1] === range.max}
                  onChange={() => setPriceRange(range.min, range.max)}
                />
                <span className={styles.checkLabel}>{range.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Availability */}
      <div className={cn(styles.section, openSections.availability && styles.sectionOpen)}>
        <button className={styles.sectionBtn} onClick={() => toggle('availability')}>
          <span>Availability</span>
          <span className={styles.sectionChevron}><ChevronDownIcon className="w-4 h-4" /></span>
        </button>
        {openSections.availability && (
          <div className={styles.sectionBody}>
            <label className={styles.checkItem}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={filters.inStockOnly}
                onChange={() => onChange({ ...filters, inStockOnly: !filters.inStockOnly })}
              />
              <span className={styles.checkLabel}>In Stock Only</span>
            </label>
            <label className={styles.checkItem}>
              <input
                type="checkbox"
                className={styles.checkbox}
                checked={filters.featuredOnly}
                onChange={() => onChange({ ...filters, featuredOnly: !filters.featuredOnly })}
              />
              <span className={styles.checkLabel}>Featured Products</span>
            </label>
          </div>
        )}
      </div>
    </aside>
  );
}
