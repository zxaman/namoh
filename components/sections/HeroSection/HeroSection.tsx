import Image from 'next/image';
import styles from './HeroSection.module.css';
import Container from '@/components/ui/Container/Container';
import Button from '@/components/ui/Button/Button';
import { ArrowRightIcon, WhatsAppIcon } from '@/components/icons/Icons';
import { WHATSAPP_URL } from '@/constants';

export default function HeroSection() {
  return (
    <section className={styles.hero} id="hero">
      {/* Background Image */}
      <div className={styles.bgImage}>
        <Image
          src="https://picsum.photos/seed/namohhero/1920/900"
          alt="Commercial kitchen equipment"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Gradient overlay */}
      <div className={styles.overlay} />

      {/* Decorative blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      {/* Content */}
      <Container className={styles.content}>
        <div className={styles.textSide}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Trusted by 500+ Hotels & Restaurants
          </div>

          <h1 className={styles.heading}>
            Premium Commercial{' '}
            <span className={styles.headingAccent}>Kitchen Equipment</span>{' '}
            for Your Business
          </h1>

          <p className={styles.description}>
            India&apos;s trusted supplier of commercial kitchen equipment, hotelware, and
            hospitality products. Serving hotels, restaurants, cafes, cloud kitchens, and
            caterers across India.
          </p>

          <div className={styles.ctas}>
            <Button variant="primary" size="lg" href="/shop" icon={<ArrowRightIcon />} iconPosition="right">
              Explore Products
            </Button>
            <Button variant="whatsapp" size="lg" href={WHATSAPP_URL} icon={<WhatsAppIcon className="w-4 h-4" />}>
              Get Instant Quote
            </Button>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statValue}>500+</div>
              <div className={styles.statLabel}>Happy Clients</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>2000+</div>
              <div className={styles.statLabel}>Products</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>50+</div>
              <div className={styles.statLabel}>Brands</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>10+</div>
              <div className={styles.statLabel}>Years</div>
            </div>
          </div>
        </div>

        {/* Visual Side */}
        <div className={styles.visualSide}>
          <div className={styles.mainCard}>
            <Image
              src="https://picsum.photos/seed/kitchencard/400/500"
              alt="Featured kitchen equipment"
              width={380}
              height={475}
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.mainCardOverlay}>
              <p className={styles.mainCardLabel}>Featured</p>
              <p className={styles.mainCardTitle}>Commercial Gas Range</p>
            </div>
          </div>

          <div className={`${styles.floatingBadge} ${styles.floatingBadge1}`}>
            <span className={styles.badgeEmoji}>🏆</span> #1 Rated Supplier
          </div>
          <div className={`${styles.floatingBadge} ${styles.floatingBadge2}`}>
            <span className={styles.badgeEmoji}>🚚</span> Pan India Delivery
          </div>
        </div>
      </Container>
    </section>
  );
}
