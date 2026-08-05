"use client"

// app/page.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { getLenis } from '@/lib/lenisInstance';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const lenis = getLenis();
    if (lenis) {
      lenis.start();
      lenis.scrollTo(href);
    }
  };

  // メニューが開いている時に body のスクロールを無効にする
  useEffect(() => {
    const lenis = getLenis();
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      lenis?.stop();
    } else {
      document.body.style.overflow = '';
      lenis?.start();
    }

    return () => {
      document.body.style.overflow = '';
      lenis?.start();
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1 className={styles.title}>Haruka.N</h1>
      </div>
      <div className={styles.buttons}>
        <Link href="mailto:hello@ilohalink.com" className={styles.contactButton}>
          <span className={styles.contactWrapper}>
            <span className={styles.contactText}>Mail</span>
            <span className={styles.animationItem} aria-hidden="true"></span>
          </span>
        </Link>
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <div className={`${styles.hamburgerWrapper} ${menuOpen ? styles.open : ''}`}>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <div className={styles.overlay} onClick={() => setMenuOpen(false)}></div>
        <div className={styles.navContent}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="#important" className={styles.navLink} onClick={(e) => handleNavClick(e, '#important')}>大切にしていること</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#about" className={styles.navLink} onClick={(e) => handleNavClick(e, '#about')}>わたしについて</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#works" className={styles.navLink} onClick={(e) => handleNavClick(e, '#works')}>制作事例</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
