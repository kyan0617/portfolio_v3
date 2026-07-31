'use client';

import { onLenisReady, getLenis } from '@/lib/lenisInstance';
import { useState, useEffect } from 'react';
import styles from './Mv.module.scss';
import MvList from "./List";
import MvImageArea from "./ImageArea";

export default function Mv() {
  const [count, setCount] = useState(0)
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    onLenisReady((lenis) => {
      lenis.scrollTo(0, { immediate: true });
      lenis.stop();
    })

    const duration = 2000;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * 100));
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setIsReady(true);
          getLenis()?.start();
        }, 500);
      }
    };
    requestAnimationFrame(tick);

    return () => {
      getLenis()?.start();
    }
  }, []);

  return (
    <section className={styles.mv}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span
            className={styles.line}
            style={{ transform: `scaleX(${count / 100})` }}
          />
          <p className={styles.title}>
            <span className={`${styles.counter} ${isReady ? styles.counterHide : ''}`}>
              <span className={`${styles.counterText} ${isReady ? styles.counterTextHide : ''}`}>
                {count}%
              </span>
            </span>
            <span className={styles.titleLine}>
              <span className={`${styles.titleText} ${isReady ? styles.titleVisible : ''}`}>Development</span>
            </span>
            <span className={styles.titleLine}>
              <span className={`${styles.titleText} ${isReady ? styles.titleVisible : ''}`}>Portfolio</span>
            </span>
          </p>
          <span
            className={styles.line}
            style={{ transform: `scaleX(${count / 100})` }}
          />
        </div>
        <div className={styles.body}>
          <MvList isReady={isReady} />
        </div>
      </div>
      <div className={styles.bottom}>
        <MvImageArea isReady={isReady} />
      </div>
    </section>
  );
}
