'use client';

import { useRef } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

type AnimatedIconProps = {
  animationData: object;
  size?: number;
  className?: string;
};

/**
 * Iconiță animată (Lottie) care rulează DOAR la hover (desktop) sau click/tap (mobil) —
 * niciodată automat/în buclă. La fiecare declanșare pornește de la cadrul 0.
 */
export default function AnimatedIcon({ animationData, size = 20, className }: AnimatedIconProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const play = () => {
    lottieRef.current?.goToAndPlay(0, true);
  };

  return (
    <span
      className={`animated-icon${className ? ` ${className}` : ''}`}
      style={{ width: size, height: size, display: 'inline-flex' }}
      onMouseEnter={play}
      onClick={play}
      onTouchStart={play}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={false}
        style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
      />
    </span>
  );
}
