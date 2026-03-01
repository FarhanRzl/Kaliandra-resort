'use client';

import React, { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number; // delay dalam ms
  direction?: 'up' | 'down' | 'left' | 'right';
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) => {
  const { ref, inView } = useInView();

  const directionClass = {
    up: 'translate-y-10',
    down: '-translate-y-10',
    left: 'translate-x-10',
    right: '-translate-x-10',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView
          ? 'opacity-100 translate-x-0 translate-y-0'
          : `opacity-0 ${directionClass[direction]}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;