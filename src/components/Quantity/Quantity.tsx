'use client';

import { useRef } from 'react';

import { useGSAP } from '@gsap/react';

import gsap from '../../shared/config/gsap';

interface QuantityProps {
  value: number;
  className?: string
}

const Quantity = ({ value, className}: QuantityProps) => {
  const targetRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current, {
        innerText: value,
        duration: 1.5,
        snap: { innerText: 1 },
        ease: 'power4',
      });
    }
  }, [value]);

  return (
    <span className={className} ref={targetRef}>0</span>
  );
};

export default Quantity;
