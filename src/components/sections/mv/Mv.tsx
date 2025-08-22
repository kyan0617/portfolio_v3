// import Link from 'next/link';
import styles from './Mv.module.scss';
import MvList from "./List";
import MvImageArea from "./ImageArea";

export default function Mv() {
  return (
    <section className={styles.mv}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className={styles.line}></span>
          <h2 className={`${styles.hiddenTitle} visuallyHidden`}>Development Portfolio</h2>
          <p className={styles.title}>
            <span className={styles.titleText}>Development</span>
            <span className={styles.titleText}>Portfolio</span>
          </p>
          <span className={styles.line}></span>
        </div>
        <div className={styles.body}>
          <MvList />
        </div>
      </div>
      <div className={styles.bottom}>
        <MvImageArea />
      </div>
    </section>
  );
}
