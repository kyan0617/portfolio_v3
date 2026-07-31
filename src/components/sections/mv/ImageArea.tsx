'use client';

import { useParallax } from '@/hooks/useParallax';
import Image from 'next/image'
import styles from './ImageArea.module.scss';

type Props = {
  isReady: boolean;
}

export default function MvImageArea({ isReady}: Props) {
  const parallaxRef = useParallax(0.15) as React.RefObject<HTMLDivElement>;

  return (
    <div className={`${styles.imageAreaWrapper} ${isReady ? styles.visible : ''}`}>
      <div className={styles.buttonMask}>
        <div className={styles.button}>
          <div className={styles.buttonInner}>
            <Image
              src="/mv_button_arrow.svg"
              alt=""
              width={16}
              height={16}
              />
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <div ref={parallaxRef} className={styles.imageInner}>
          <Image
            src="/mv_image.jpg"
            alt=""
            fill
          />
        </div>
      </div>
    </div>
  );
}
