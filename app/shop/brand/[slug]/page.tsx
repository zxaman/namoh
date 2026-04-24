import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHero from '@/components/shop/PageHero/PageHero';
import Container from '@/components/ui/Container/Container';
import ProductCard from '@/components/ui/ProductCard/ProductCard';
import QuoteCTABanner from '@/components/shop/QuoteCTABanner/QuoteCTABanner';
import EmptyState from '@/components/ui/EmptyState/EmptyState';
import Button from '@/components/ui/Button/Button';
import { ShieldIcon } from '@/components/icons/Icons';
import { brands } from '@/data/brands';
import { products } from '@/data/products';
import { getProductsByBrand } from '@/utils/products';
import { SITE_NAME } from '@/constants';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);
  if (!brand) return { title: 'Brand Not Found' };

  return {
    title: `${brand.name} — Authorized Dealer | ${SITE_NAME}`,
    description: brand.description || `Shop ${brand.name} commercial kitchen equipment. Authorized dealer with pan-India delivery.`,
  };
}

export default async function BrandPage({ params }: PageProps) {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);
  if (!brand) notFound();

  const brandProducts = getProductsByBrand(products, brand.id);

  return (
    <>
      <PageHero
        title={brand.name}
        description={brand.description}
        image={brand.image || `https://picsum.photos/seed/${brand.slug}/1400/400`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: 'Brands', href: '/shop' },
          { label: brand.name },
        ]}
        productCount={brandProducts.length}
      />

      <Container>
        {/* Authorized dealer badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '24px 0',
          fontSize: 14,
          fontWeight: 600,
          color: 'var(--color-text-muted)',
        }}>
          <span style={{ color: '#10B981', display: 'flex' }}>
            <ShieldIcon className="w-5 h-5" />
          </span>
          Authorized Dealer{brand.country ? ` — ${brand.country}` : ''}
        </div>

        {brandProducts.length === 0 ? (
          <EmptyState
            title={`No ${brand.name} products listed yet`}
            description="We're adding new products regularly. Contact us for availability and pricing."
          >
            <Button variant="outline" size="md" href="/shop">
              Browse All Products
            </Button>
            <Button variant="whatsapp" size="md" href="/contact">
              Contact Us
            </Button>
          </EmptyState>
        ) : (
          <>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 20,
              paddingBottom: 32,
            }}>
              {brandProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <QuoteCTABanner />
          </>
        )}
      </Container>
    </>
  );
}
