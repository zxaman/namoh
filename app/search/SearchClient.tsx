'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import Container from '@/components/ui/Container/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';
import ProductCard from '@/components/ui/ProductCard/ProductCard';
import EmptyState from '@/components/ui/EmptyState/EmptyState';
import Button from '@/components/ui/Button/Button';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import { searchProducts } from '@/utils/products';
import Link from 'next/link';

export default function SearchClient() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = useMemo(() => searchProducts(products, query), [query]);

  return (
    <Container>
      <div style={{ padding: '32px 0 48px' }}>
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Search' },
        ]} />

        <h1 style={{
          fontSize: 28,
          fontWeight: 800,
          color: 'var(--color-dark)',
          marginTop: 20,
          marginBottom: 8,
        }}>
          {query
            ? <>Search results for &ldquo;<span style={{ color: 'var(--color-primary)' }}>{query}</span>&rdquo;</>
            : 'Search Products'
          }
        </h1>

        <p style={{ fontSize: 14, color: 'var(--color-text-muted)', marginBottom: 32 }}>
          {results.length > 0
            ? `${results.length} product${results.length !== 1 ? 's' : ''} found`
            : query ? 'No products matched your search.' : 'Enter a search query to find products.'
          }
        </p>

        {results.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
          }}>
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : query ? (
          <EmptyState
            title="No products found"
            description={`We couldn't find any products matching "${query}". Try a different search or browse our categories.`}
          >
            <Button variant="outline" size="md" href="/shop">
              Browse All Products
            </Button>
            <Button variant="whatsapp" size="md" href="/contact">
              Contact Us
            </Button>
          </EmptyState>
        ) : null}

        {/* Suggested categories */}
        {query && results.length === 0 && (
          <div style={{ marginTop: 40 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-dark)', marginBottom: 16 }}>
              Browse by Category
            </h3>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/shop/category/${cat.slug}`}
                  style={{
                    padding: '8px 20px',
                    borderRadius: 100,
                    border: '1.5px solid var(--color-border)',
                    fontSize: 13,
                    fontWeight: 600,
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
