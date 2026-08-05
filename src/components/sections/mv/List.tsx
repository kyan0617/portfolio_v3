import styles from './List.module.scss';

type Props = {
  isReady: boolean;
};

export default function MvList({ isReady}: Props) {
  return (
    <div className={`${styles.listWrapper} ${isReady ? styles.visible : ''}`}>
      <ul className={styles.list}>
        <li className={styles.item}>
          (Shopify)
        </li>
        <li className={styles.item}>
          (JS Framework)
        </li>
        <li className={styles.item}>
          (WordPress)
        </li>
      </ul>
    </div>
  );
}
