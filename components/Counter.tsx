
import React, { useEffect, useState, useRef } from 'react';

interface CounterProps {
  endValue: number;
  duration?: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ endValue, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * endValue);
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, endValue, duration]);

  return (
    <div ref={containerRef} className="font-bold text-4xl md:text-5xl text-primary dark:text-blue-400">
      {count.toLocaleString('id-ID')}{suffix}
    </div>
  );
};

export default Counter;
