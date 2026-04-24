import Link from 'next/link';
import styles from './Footer.module.css';
import Container from '@/components/ui/Container/Container';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, FacebookIcon, InstagramIcon, LinkedInIcon, YouTubeIcon } from '@/components/icons/Icons';
import { footerAbout, footerSections, footerContact } from '@/data/navigation';
import { SOCIAL_LINKS, SITE_NAME, CONTACT } from '@/constants';

const socialIcons: Record<string, React.ReactNode> = {
  facebook: <FacebookIcon />,
  instagram: <InstagramIcon />,
  linkedin: <LinkedInIcon />,
  youtube: <YouTubeIcon />,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="site-footer" aria-label="Site footer">
      <Container>
        <div className={styles.main}>
          <div className={styles.grid}>
            {/* About */}
            <div>
              <Link href="/" className={styles.logoLink}>
                <div className={styles.logoMark}>N</div>
                <span className={styles.logoName}>{footerAbout.title}</span>
              </Link>
              <p className={styles.aboutText}>{footerAbout.description}</p>
              <div className={styles.socials}>
                {SOCIAL_LINKS.map((s) => (
                  <a key={s.platform} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label={s.platform}>
                    {socialIcons[s.icon]}
                  </a>
                ))}
              </div>
            </div>

            {/* Link Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className={styles.colTitle}>{section.title}</h3>
                <ul className={styles.linkList}>
                  {section.links.map((link) => (
                    <li key={link.label} className={styles.linkItem}>
                      <Link href={link.href} className={styles.link}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div>
              <h3 className={styles.colTitle}>{footerContact.title}</h3>
              <div className={styles.contactItem}>
                <PhoneIcon className={`w-4 h-4 ${styles.contactIcon}`} />
                <a href={`tel:${CONTACT.phone}`}>{footerContact.phone}</a>
              </div>
              <div className={styles.contactItem}>
                <MailIcon className={`w-4 h-4 ${styles.contactIcon}`} />
                <a href={`mailto:${CONTACT.email}`}>{footerContact.email}</a>
              </div>
              <div className={styles.contactItem}>
                <MapPinIcon className={`w-4 h-4 ${styles.contactIcon}`} />
                <span>{footerContact.address}</span>
              </div>
              <div className={styles.contactItem}>
                <ClockIcon className={`w-4 h-4 ${styles.contactIcon}`} />
                <span>{footerContact.businessHours}</span>
              </div>
              <div className={styles.mapPlaceholder}>Google Map</div>
            </div>
          </div>
        </div>

        {/* Trust Bar */}
        <div className={styles.trustBar}>
          <span>GST: {CONTACT.gst}</span>
          <span className={styles.dot}>•</span>
          <span>Authorized Dealer</span>
          <span className={styles.dot}>•</span>
          <span>ISO Ready</span>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <span>© {currentYear} {SITE_NAME}. All rights reserved.</span>
          <div className={styles.copyrightLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
