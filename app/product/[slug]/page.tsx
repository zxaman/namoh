import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import styles from './product.module.css';
import Container from '@/components/ui/Container/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductSpecs from '@/components/product/ProductSpecs';
import RelatedProducts from '@/components/product/RelatedProducts';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import { getProductBySlug, getRelatedProducts } from '@/utils/products';
import { formatPrice } from '@/utils/format';
import { SITE_NAME } from '@/constants';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(products, slug);
  if (!product) return { title: 'Product Not Found' };

  const category = categories.find((c) => c.id === product.categoryId);

  return {
    title: `${product.name} — ${formatPrice(product.price)} | ${SITE_NAME}`,
    description: product.shortDescription || product.description,
    keywords: [
      product.name,
      category?.name || '',
      'commercial kitchen equipment',
      'buy online India',
    ].filter(Boolean).join(', '),
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(products, slug);
  if (!product) notFound();

  const category = categories.find((c) => c.id === product.categoryId);
  const related = getRelatedProducts(products, product);

  return (
    <Container>
      <div className={styles.page}>
        {/* Breadcrumbs */}
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
          ...(category ? [{ label: category.name, href: `/shop/category/${category.slug}` }] : []),
          { label: product.name },
        ]} />

        {/* Top: Gallery + Info */}
        <div className={styles.topRow} style={{ marginTop: 24 }}>
          <ProductGallery images={product.images} name={product.name} />
          <ProductInfo product={product} />
        </div>

        <div className={styles.divider} />

        {/* Specifications */}
        <ProductSpecs specifications={product.specifications} />

        <div className={styles.divider} />

        {/* Related Products */}
        <RelatedProducts products={related} />
      </div>
    </Container>
  );
}
