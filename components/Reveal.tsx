'use client';

import { useEffect, useRef, useState } from 'react';

type RevealProps = {
  as?: 'div' | 'ul' | 'dl';
  className?: string;
  children: React.ReactNode;
};

/**
 * Wraps a block in scroll-triggered reveal animation.
 * Mirrors the vanilla IntersectionObserver behavior from the static build.
 */
export default function Reveal({ as = 'div', className = '', children }: RevealProps) {
  const ref = useRef<HTMLDivElement & HTMLUListElement & HTMLDListElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as any;
  return (
    <Tag ref={ref} className={`reveal${visible ? ' is-visible' : ''} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
