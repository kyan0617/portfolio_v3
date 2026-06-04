"use client"

import Image from 'next/image'
import styles from './ChevronButton.module.scss';

type ChevronButtonProps = {
  isOpen?: boolean;
}

export default function ChevronButton({isOpen}: ChevronButtonProps) {
  return (
    <div className={styles.button}>
      <div className={`${styles.buttonInner} ${isOpen ? styles.open : ''}`}>
        <Image
          src="/chevron.svg"
          alt=""
          width={13}
          height={10}
        />
      </div>
    </div>
  );
}