'use client';

import { useEffect, useRef } from "react";
import { getLenis } from '@/lib/lenisInstance';

export function useParallax(speed: number = 15) {
  const ref = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    const lenis = getLenis();
    if (!lenis) return;

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const offset = (viewportCenter - elementCenter) * speed;
      ref.current.style.transform = `translateY(${offset}px)`;
    };

    lenis.on('scroll', handleScroll);
    return () => lenis.off('scroll', handleScroll);
  }, [speed]);

  return ref;
}
