import styles from './QuoteCTABanner.module.css';
import Button from '@/components/ui/Button/Button';
import { WhatsAppIcon, QuoteIcon } from '@/components/icons/Icons';
import { WHATSAPP_URL } from '@/constants';

export default function QuoteCTABanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.text}>
        <h3 className={styles.title}>Need Bulk Pricing or Custom Quotes?</h3>
        <p className={styles.subtitle}>
          We offer special B2B pricing for hotels, restaurants, and large orders. Get in touch!
        </p>
      </div>
      <div className={styles.actions}>
        <Button variant="whatsapp" size="md" icon={<WhatsAppIcon className="w-4 h-4" />}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
            WhatsApp Us
          </a>
        </Button>
        <Button variant="outline" size="md" icon={<QuoteIcon className="w-4 h-4" />}>
          <a href="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
            Request Quote
          </a>
        </Button>
      </div>
    </div>
  );
}
