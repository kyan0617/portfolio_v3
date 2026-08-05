'use client';

import { useParallax } from '@/hooks/useParallax';

import styles from './Media.module.scss';
import Image from 'next/image';


export default function Media() {
  const parallaxRef = useParallax(0.15) as React.RefObject<HTMLDivElement>;

  return (
    <section className={styles.media}>
      <div className={styles.inner}>
        <div ref={parallaxRef} className={styles.image}>
          <Image
            src="/media_image.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
