"use client"

import Image from 'next/image'
import styles from './Button.module.scss';

export default function Button() {
  return (
    <div className={styles.button}>
      <div className={styles.buttonInner}>
        <Image
          src="/button_arrow.svg"
          alt=""
          width={8}
          height={8}
        />
      </div>
    </div>
  );
}