import styles from './TrustStrip.module.css';
import Container from '@/components/ui/Container/Container';
import { TruckIcon, ShieldIcon, HeadphonesIcon, AwardIcon } from '@/components/icons/Icons';

const badges = [
  { id: 'trusted', icon: <AwardIcon />, title: 'Trusted by 500+ Hotels', subtitle: 'Across India' },
  { id: 'bulk', icon: <ShieldIcon />, title: '100% Genuine Brands', subtitle: 'Authorized Dealer' },
  { id: 'delivery', icon: <TruckIcon />, title: 'Pan India Delivery', subtitle: 'Fast & Reliable' },
  { id: 'support', icon: <HeadphonesIcon />, title: 'Expert Support', subtitle: '24/7 Assistance' },
];

export default function TrustStrip() {
  return (
    <section className={styles.section} id="trust-strip" aria-label="Why trust us">
      <Container>
        <div className={styles.grid}>
          {badges.map((badge) => (
            <div key={badge.id} className={styles.card}>
              <div className={styles.iconWrap}>{badge.icon}</div>
              <h3 className={styles.title}>{badge.title}</h3>
              <p className={styles.subtitle}>{badge.subtitle}</p>
              <span className={styles.accent} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
