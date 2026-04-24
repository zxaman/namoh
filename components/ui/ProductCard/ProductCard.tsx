import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductCard.module.css';
import Badge from '@/components/ui/Badge/Badge';
import { CartIcon, HeartIcon, EyeIcon, StarIcon, QuoteIcon } from '@/components/icons/Icons';
import { formatPrice, getDiscountPercent } from '@/utils/format';
import { brands } from '@/data/brands';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  categoryName?: string;
}

export default function ProductCard({ product, categoryName }: ProductCardProps) {
  const discount = product.originalPrice
    ? getDiscountPercent(product.price, product.originalPrice)
    : 0;

  const brand = product.brandId
    ? brands.find((b) => b.id === product.brandId)
    : null;

  const imageUrl = product.images[0] || `https://picsum.photos/seed/${product.slug}/600/600`;

  return (
    <article className={styles.card}>
      {/* Image */}
      <Link href={`/product/${product.slug}`} className={styles.imageWrap}>
        {product.featured && (
          <div className={styles.badgeWrap}>
            <Badge variant="bestseller">Bestseller</Badge>
          </div>
        )}
        {!product.inStock && (
          <div className={styles.badgeWrap}>
            <Badge variant="outOfStock">Out of Stock</Badge>
          </div>
        )}
        <div className={styles.imageInner}>
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Hover Actions */}
        <div className={styles.actions}>
          <button className={styles.actionBtn} aria-label="Add to wishlist">
            <HeartIcon className="w-4 h-4" />
          </button>
          <button className={styles.actionBtn} aria-label="Quick view">
            <EyeIcon className="w-4 h-4" />
          </button>
        </div>
      </Link>

      {/* Info */}
      <div className={styles.info}>
        {brand && <p className={styles.brand}>{brand.name}</p>}
        {categoryName && !brand && <p className={styles.category}>{categoryName}</p>}

        <Link href={`/product/${product.slug}`} className={styles.name}>
          {product.name}
        </Link>

        {/* Rating */}
        <div className={styles.rating}>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((i) => (
              <StarIcon
                key={i}
                className={`w-3.5 h-3.5 ${i <= Math.floor(product.rating) ? '' : styles.starMuted}`}
              />
            ))}
          </div>
          <span className={styles.ratingCount}>({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className={styles.priceRow}>
          <span className={styles.price}>{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className={styles.originalPrice}>{formatPrice(product.originalPrice)}</span>
          )}
          {discount > 0 && (
            <span className={styles.discount}>{discount}% off</span>
          )}
        </div>

        {/* Actions */}
        <button
          className={styles.addToCart}
          aria-label={`Add ${product.name} to cart`}
          disabled={!product.inStock}
        >
          <CartIcon className="w-4 h-4" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>

        <Link href={`/contact?product=${product.slug}`} className={styles.quoteLink}>
          <QuoteIcon className="w-3.5 h-3.5" />
          Request Quote
        </Link>
      </div>
    </article>
  );
}
