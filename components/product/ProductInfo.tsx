import Link from 'next/link';
import styles from './ProductInfo.module.css';
import Button from '@/components/ui/Button/Button';
import { StarIcon, WhatsAppIcon, PhoneIcon, QuoteIcon } from '@/components/icons/Icons';
import { formatPrice, getDiscountPercent } from '@/utils/format';
import { brands } from '@/data/brands';
import { categories } from '@/data/categories';
import { WHATSAPP_URL, CONTACT } from '@/constants';
import { cn } from '@/utils/cn';
import type { Product } from '@/types';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const discount = product.originalPrice
    ? getDiscountPercent(product.price, product.originalPrice)
    : 0;
  const brand = product.brandId ? brands.find((b) => b.id === product.brandId) : null;
  const category = categories.find((c) => c.id === product.categoryId);

  const whatsappMsg = encodeURIComponent(
    `Hi Namoh! I'm interested in: ${product.name} (₹${product.price.toLocaleString('en-IN')}). Please share details.`
  );
  const whatsappLink = `https://wa.me/${CONTACT.whatsapp}?text=${whatsappMsg}`;

  return (
    <div className={styles.panel}>
      {/* Brand */}
      {brand && (
        <Link href={`/shop/brand/${brand.slug}`} className={styles.brand}>
          {brand.name}
        </Link>
      )}

      {/* Name */}
      <h1 className={styles.name}>{product.name}</h1>

      {/* Rating */}
      <div className={styles.rating}>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map((i) => (
            <StarIcon
              key={i}
              className={`w-4 h-4 ${i <= Math.floor(product.rating) ? '' : styles.starMuted}`}
            />
          ))}
        </div>
        <span className={styles.ratingText}>
          {product.rating} ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Price */}
      <div className={styles.priceBlock}>
        <span className={styles.price}>{formatPrice(product.price)}</span>
        {product.originalPrice && (
          <span className={styles.originalPrice}>{formatPrice(product.originalPrice)}</span>
        )}
        {discount > 0 && (
          <span className={styles.discount}>{discount}% off</span>
        )}
      </div>

      {/* Stock */}
      <div className={cn(styles.stock, product.inStock ? styles.inStock : styles.outOfStock)}>
        <span className={styles.stockDot} />
        {product.inStock ? 'In Stock — Ready to Ship' : 'Currently Out of Stock'}
      </div>

      <div className={styles.divider} />

      {/* Description */}
      {product.shortDescription && (
        <p className={styles.description}>{product.description}</p>
      )}

      {/* Meta */}
      <div className={styles.meta}>
        {category && (
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>Category</span>
            <Link href={`/shop/category/${category.slug}`} className={styles.metaValue} style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
              {category.name}
            </Link>
          </div>
        )}
        <div className={styles.metaRow}>
          <span className={styles.metaLabel}>SKU</span>
          <span className={styles.metaValue}>{product.id.toUpperCase()}</span>
        </div>
        {product.minOrderQuantity && (
          <div className={styles.metaRow}>
            <span className={styles.metaLabel}>MOQ</span>
            <span className={styles.metaValue}>{product.minOrderQuantity} unit{product.minOrderQuantity > 1 ? 's' : ''}</span>
          </div>
        )}
      </div>

      <div className={styles.divider} />

      {/* CTA Buttons */}
      <div className={styles.actions}>
        <div className={styles.actionRow}>
          <Button variant="primary" size="lg" href={`/contact?product=${product.slug}`} icon={<QuoteIcon className="w-4 h-4" />}>
            Request Quote
          </Button>
          <Button variant="whatsapp" size="lg" href={whatsappLink} icon={<WhatsAppIcon className="w-4 h-4" />}>
            WhatsApp Now
          </Button>
        </div>
        <Button variant="outline" size="md" href={`tel:${CONTACT.phone}`} icon={<PhoneIcon className="w-4 h-4" />} fullWidth>
          Call Now — {CONTACT.phoneDisplay}
        </Button>
      </div>
    </div>
  );
}
