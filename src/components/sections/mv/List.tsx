import Link from 'next/link';
import styles from './List.module.scss';

type Props = {
  isReady: boolean;
};

export default function MvList({ isReady}: Props) {
  return (
    <div className={`${styles.listWrapper} ${isReady ? styles.visible : ''}`}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/projects/project-1" className={styles.link}>
            (Shopify)
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/projects/project-2" className={styles.link}>
            (JS Framework)
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/projects/project-3" className={styles.link}>
            (WordPress)
          </Link>
        </li>
      </ul>
    </div>
  );
}
