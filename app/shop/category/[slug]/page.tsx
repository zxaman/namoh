import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHero from '@/components/shop/PageHero/PageHero';
import Container from '@/components/ui/Container/Container';
import ProductCard from '@/components/ui/ProductCard/ProductCard';
import QuoteCTABanner from '@/components/shop/QuoteCTABanner/QuoteCTABanner';
import EmptyState from '@/components/ui/EmptyState/EmptyState';
import Button from '@/components/ui/Button/Button';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { getProductsByCategory } from '@/utils/products';
import { SITE_NAME } from '@/constants';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return { title: 'Category Not Found' };

  return {
    title: `${category.name} — Commercial ${category.name} Supplier | ${SITE_NAME}`,
    description: category.seoDescription || category.description,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(products, category.id);

  return (
    <>
      <PageHero
        title={category.name}
        description={category.description}
        image={category.image || `https://picsum.photos/seed/${category.slug}/1400/400`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: category.name },
        ]}
        productCount={categoryProducts.length}
      />

      <Container>
        {/* SEO Description */}
        {category.seoDescription && (
          <div style={{ padding: '32px 0 0', maxWidth: 800 }}>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
              {category.seoDescription}
            </p>
          </div>
        )}

        {categoryProducts.length === 0 ? (
          <EmptyState
            title="No products in this category"
            description="We're adding new products regularly. Check back soon or contact us for availability."
          >
            <Button variant="outline" size="md" href="/shop">
              Browse All Products
            </Button>
          </EmptyState>
        ) : (
          <>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 20,
              padding: '32px 0',
            }}>
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} categoryName={category.name} />
              ))}
            </div>

            <QuoteCTABanner />
          </>
        )}
      </Container>
    </>
  );
}
