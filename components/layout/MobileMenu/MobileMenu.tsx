'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styles from './MobileMenu.module.css';
import Button from '@/components/ui/Button/Button';
import { CloseIcon, WhatsAppIcon, PhoneIcon } from '@/components/icons/Icons';
import { categories } from '@/data/categories';
import { mainNavItems } from '@/data/navigation';
import { CONTACT, WHATSAPP_URL } from '@/constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className={styles.drawer}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className={styles.header}>
              <Link href="/" onClick={onClose} className={styles.headerLogo}>Namoh</Link>
              <button onClick={onClose} className={styles.closeBtn} aria-label="Close menu">
                <CloseIcon />
              </button>
            </div>

            <div className={styles.body}>
              <nav className={styles.navSection}>
                <ul className={styles.navList}>
                  {mainNavItems.map((item) => (
                    <li key={item.id}>
                      <Link href={item.href} onClick={onClose} className={styles.navLink}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className={styles.navSection}>
                <h3 className={styles.sectionTitle}>Categories</h3>
                <ul className={styles.navList}>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <Link href={`/shop/category/${cat.slug}`} onClick={onClose} className={styles.navLink}>
                        <span>{cat.icon}</span>
                        <span>{cat.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.footer}>
              <Button variant="whatsapp" size="md" fullWidth href={WHATSAPP_URL} icon={<WhatsAppIcon className="w-4 h-4" />}>
                WhatsApp Us
              </Button>
              <Button variant="primary" size="md" fullWidth href="/contact">
                Request Quote
              </Button>
              <Button variant="outline" size="md" fullWidth href={`tel:${CONTACT.phone}`} icon={<PhoneIcon />}>
                Call Us
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
