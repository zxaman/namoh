import styles from './TopInfoBar.module.css';
import Container from '@/components/ui/Container/Container';
import { PhoneIcon, MailIcon, ClockIcon, WhatsAppIcon } from '@/components/icons/Icons';
import { topBarInfo } from '@/data/navigation';
import { WHATSAPP_URL } from '@/constants';

export default function TopInfoBar() {
  return (
    <div className={styles.bar} id="top-info-bar">
      <Container className={styles.inner}>
        {/* Left */}
        <div className={styles.left}>
          <a href={`tel:${topBarInfo.phone}`} className={styles.link} aria-label="Call us">
            <PhoneIcon className="w-3.5 h-3.5" />
            <span>{topBarInfo.phoneDisplay}</span>
          </a>
          <a href={`mailto:${topBarInfo.email}`} className={`${styles.link} ${styles.hideOnMobile}`} aria-label="Email us">
            <MailIcon className="w-3.5 h-3.5" />
            <span>{topBarInfo.email}</span>
          </a>
          <span className={`${styles.link} ${styles.muted} ${styles.hideOnMobile}`}>
            <ClockIcon className="w-3.5 h-3.5" />
            <span>{topBarInfo.businessHours}</span>
          </span>
        </div>

        {/* Right */}
        <div className={styles.right}>
          <span className={`${styles.quoteText} ${styles.hideOnMobile}`}>
            {topBarInfo.quickQuoteText}
          </span>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn} aria-label="WhatsApp us">
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>{topBarInfo.whatsappDisplay}</span>
          </a>
        </div>
      </Container>
    </div>
  );
}
