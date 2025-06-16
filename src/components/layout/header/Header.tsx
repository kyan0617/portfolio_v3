"use client"

// app/page.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // メニューが開いている時に body のスクロールを無効にする
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1 className={styles.title}>Haruka.N</h1>
      </div>
      <div className={styles.buttons}>
        <Link href="/contact" className={styles.contactButton}>
          <span className={styles.contactText}>
            Mail
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
              <Link href="" className={styles.navLink}>大切にしていること</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="" className={styles.navLink}>わたしについて</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="" className={styles.navLink}>制作事例</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
