"use client"

import Link from 'next/link';
import styles from './Footer.module.scss';
import Button from '@/components/ui/button/Button';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.menu}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link className={styles.menuLink} href="">大切にしていること</Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.menuLink} href="">わたしについて</Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.menuLink} href="">制作事例</Link>
            </li>
          </ul>
        </div>
        <div className={styles.contact}>
          <div className={styles.contactHead}>
            <span className={styles.contactTitle}>お問い合わせ</span>
          </div>
          <div className={styles.contactMain}>
            <Link className={styles.contactLink} href="mailto:info@ilohalink.com">
              info@ilohalink.com
              <Button />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
