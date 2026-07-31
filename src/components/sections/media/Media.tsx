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
          <picture>
            <source srcSet="/media_image_pc.jpg" media="(min-width: 769px)" />
            <Image
              src="/media_image_sp.jpg"
              alt=""
              fill
              style={{ objectFit: 'cover' }}
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
