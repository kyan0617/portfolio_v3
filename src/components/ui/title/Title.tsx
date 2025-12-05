// import Link from 'next/link';
import styles from './Title.module.scss';
import { ReactNode } from 'react';

type TitleProps = {
  subtitle?: string;
  main: string | ReactNode;
  isCenter?: boolean;
}

export default function Title({ subtitle, main, isCenter }: TitleProps) {
  return (
    <section className={styles.title}>
      <div className={`${styles.inner} ${isCenter ? styles.center : ''}`}>
        {subtitle && <span className={styles.subtitle}>({subtitle})</span>}
        <h2 className={styles.main}>{main}</h2>
      </div>
    </section>
  );
}
