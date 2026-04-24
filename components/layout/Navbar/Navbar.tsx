'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import Container from '@/components/ui/Container/Container';
import SearchBar from '@/components/layout/SearchBar/SearchBar';
import MobileMenu from '@/components/layout/MobileMenu/MobileMenu';
import CartDrawer from '@/components/layout/CartDrawer/CartDrawer';
import { SearchIcon, CartIcon, UserIcon, MenuIcon } from '@/components/icons/Icons';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { SITE_NAME } from '@/constants';
import { cn } from '@/utils/cn';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 10;

  const cartItemCount = 0;

  return (
    <>
      <nav
        className={cn(styles.navbar, isScrolled && styles.scrolled)}
        aria-label="Main navigation"
        id="main-navbar"
      >
        <Container className={styles.inner}>
          {/* Left: Hamburger + Logo */}
          <div className={styles.logoArea}>
            <button
              className={styles.menuBtn}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>

            <Link href="/" className={styles.logo} aria-label={`${SITE_NAME} - Home`}>
              <div className={styles.logoMark}>N</div>
              <div>
                <span className={styles.logoText}>{SITE_NAME}</span>
                <span className={styles.logoSub}>Kitchen & Hospitality</span>
              </div>
            </Link>
          </div>

          {/* Center: Search */}
          <div className={styles.searchArea}>
            <SearchBar />
          </div>

          {/* Right: Actions */}
          <div className={styles.actionsArea}>
            <Link href="/account" className={styles.iconBtn} aria-label="My account">
              <UserIcon className="w-5 h-5" />
            </Link>

            <button
              className={styles.iconBtn}
              onClick={() => setIsCartOpen(true)}
              aria-label={`Cart with ${cartItemCount} items`}
            >
              <CartIcon className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className={styles.cartBadge}>{cartItemCount}</span>
              )}
            </button>
          </div>
        </Container>

        {/* Mobile Search */}
        <div className={styles.mobileSearch}>
          <SearchBar />
        </div>
      </nav>

      {/* Drawers */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
