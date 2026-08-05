"use client"

import { getLenis } from '@/lib/lenisInstance';
import Link from 'next/link';
import styles from './Footer.module.scss';
import Button from '@/components/ui/button/Button';

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(href);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.menu}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link className={styles.menuLink} href="#important" onClick={(e) => handleNavClick(e, '#important')}>大切にしていること</Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.menuLink} href="#about" onClick={(e) => handleNavClick(e, '#about')}>わたしについて</Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.menuLink} href="#works" onClick={(e) => handleNavClick(e, '#works')}>制作事例</Link>
            </li>
          </ul>
        </div>
        <div className={styles.contact}>
          <div className={styles.contactHead}>
            <span className={styles.contactTitle}>お問い合わせ</span>
          </div>
          <div className={styles.contactMain}>
            <Link className={styles.contactLink} href="mailto:hello@ilohalink.com">
              hello@ilohalink.com
              <Button />
            </Link>
          </div>
        </div>
        <div className={styles.message}>
          <p className={styles.messageText}>
            <span className={styles.messageHighlight}>人と人との繋がり</span>を<br />これからも大切に。
          </p>
        </div>
        <div className={styles.copyright}>
          <small className={styles.copyrightText}>&copy;2026 Nishida Haruka</small>
        </div>
      </div>
    </footer>
  );
}
