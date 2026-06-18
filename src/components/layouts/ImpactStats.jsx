import React, { useEffect, useRef, useState } from 'react';

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const numericTarget = parseInt(target.replace(/\D/g, ''));
    if (isNaN(numericTarget)) {
      setCount(target);
      return;
    }

    let start = 0;
    const increment = numericTarget / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  const displayValue = typeof count === 'number' ? count + suffix : count;

  return (
    <span ref={ref} className="stat-number">
      {isVisible ? displayValue : '0' + suffix}
    </span>
  );
}

export default function ImpactStats({ data }) {
  return (
    <section className="min-h-[80vh] w-full flex items-center justify-center p-4 md:p-16 relative">
      <div className="ambient-orb w-[600px] h-[400px] bg-gold-500/[0.04] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl w-full z-10 space-y-12">
        <div className="text-center fade-rise">
          <div className="section-divider mx-auto"></div>
          <h3 className="text-[11px] font-mono tracking-broadcast text-gold-500 uppercase font-bold mb-3">
            {data.secondaryTitle}
          </h3>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-warm-white tracking-tight">
            {data.primaryTitle}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 fade-rise">
          {data.stats?.map((stat, index) => {
            const hasPlus = stat.number.includes('+');
            const hasPercent = stat.number.includes('%');
            const suffix = hasPlus ? '+' : hasPercent ? '%' : '';
            
            return (
              <div key={index} className="stat-card">
                <AnimatedCounter 
                  target={stat.number} 
                  suffix={suffix}
                />
                <div className="stat-label">{stat.label}</div>
                <p className="text-[10px] text-warm-gray/50 mt-2 font-sans leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
