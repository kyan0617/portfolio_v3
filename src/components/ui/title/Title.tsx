'use client';
import styles from './Title.module.scss';
import { useRef, useEffect, useState, ReactNode } from 'react';

type TitleProps = {
  subtitle?: string;
  main: string | ReactNode;
  isCenter?: boolean;
  isCenterPc?: boolean;
  isCenterSp?: boolean;
}

export default function Title({ subtitle, main, isCenter, isCenterPc, isCenterSp }: TitleProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const SUBTITLE_DURATION = 0.4;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {threshold: 0.6}
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect()
  }, []);

  return (
    <section className={styles.title} ref={ref}>
      <div className={[isCenter ? styles.center : '', isCenterPc ? styles.centerPc : '', isCenterSp ? styles.centerSp : '', isVisible ? styles.visible : ''].join(' ').trim()}>
        <span className={styles.subtitleWrapper}>
          {subtitle && <span className={styles.subtitle}>({subtitle})</span>}
        </span>
        <h2 className={styles.main}>
          {typeof main === 'string'
            ? main.split('').map((char, i) => (
              <span
                key={i}
                className={styles.char}
                style={{ transitionDelay: `${SUBTITLE_DURATION + i * 0.1}s` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))
            : main}
        </h2>
      </div>
    </section>
  );
}
