'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CartDrawer.module.css';
import Button from '@/components/ui/Button/Button';
import { CloseIcon, MinusIcon, PlusIcon, TrashIcon, CartIcon } from '@/components/icons/Icons';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

// Placeholder cart data for demonstration
const demoCartItems: {
  id: string;
  name: string;
  price: number;
  qty: number;
  emoji: string;
}[] = [];

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const subtotal = demoCartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

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
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            {/* Header */}
            <div className={styles.header}>
              <h2 className={styles.title}>Shopping Cart</h2>
              <button onClick={onClose} className={styles.closeBtn} aria-label="Close cart">
                <CloseIcon />
              </button>
            </div>

            {/* Body */}
            <div className={styles.body}>
              {demoCartItems.length === 0 ? (
                <div className={styles.empty}>
                  <CartIcon className={styles.emptyIcon} />
                  <p className={styles.emptyText}>No products in the cart.</p>
                  <p className={styles.emptySubtext}>Browse our products and add items to your cart.</p>
                </div>
              ) : (
                demoCartItems.map((item) => (
                  <div key={item.id} className={styles.item}>
                    <div className={styles.itemImage}>{item.emoji}</div>
                    <div className={styles.itemInfo}>
                      <p className={styles.itemName}>{item.name}</p>
                      <p className={styles.itemPrice}>₹{item.price.toLocaleString('en-IN')}</p>
                      <div className={styles.qtyRow}>
                        <button className={styles.qtyBtn} aria-label="Decrease quantity">
                          <MinusIcon className="w-3 h-3" />
                        </button>
                        <span className={styles.qtyValue}>{item.qty}</span>
                        <button className={styles.qtyBtn} aria-label="Increase quantity">
                          <PlusIcon className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                    <button className={styles.removeBtn} aria-label="Remove item">
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className={styles.footer}>
              {demoCartItems.length > 0 && (
                <div className={styles.subtotalRow}>
                  <span className={styles.subtotalLabel}>Subtotal</span>
                  <span className={styles.subtotalValue}>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className={styles.footerBtns}>
                <Button variant="primary" size="lg" fullWidth onClick={onClose}>
                  {demoCartItems.length > 0 ? 'Checkout' : 'Continue Shopping'}
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
