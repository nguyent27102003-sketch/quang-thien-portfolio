import React, { useEffect, useRef, useState } from 'react';
import { metrics } from '../data/portfolioData';

function RollingCounter({ target, inView }) {
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;

    const clean = target.replace(/[,+]/g, '');
    const match = clean.match(/(\d+)/g);
    if (!match) { setDisplay(target); return; }

    const endNum = parseInt(match[match.length - 1]);
    const prefix = target.includes('–') ? target.split('–')[0] + '–' : (target.includes('-') ? target.split('-')[0] + '-' : '');
    const suffix = target.includes('+') ? '+' : '';
    const hasComma = target.includes(',');

    const duration = 1800;
    const steps = 60;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = 1 - Math.pow(1 - step / steps, 3);
      const current = Math.round(endNum * progress);
      let formatted = hasComma ? current.toLocaleString() : String(current);
      setDisplay(prefix + formatted + suffix);
      if (step >= steps) { setDisplay(target); clearInterval(timer); }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return <span className="stat-number text-4xl md:text-5xl font-display font-extrabold gold-text">{inView ? display : '0'}</span>;
}

export default function MetricsSection() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true);
    }, { threshold: 0.05 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="metrics" ref={ref} className="w-full py-12 md:py-24 px-6 md:px-20 lg:px-28 relative" style={{ backgroundColor: '#0B0B0B' }}>
      <div className="fill-light-wide top-1/2 -translate-y-1/2" style={{ height: '200px', background: 'linear-gradient(12deg, transparent 15%, rgba(214,168,79,0.06) 45%, rgba(214,168,79,0.04) 55%, transparent 85%)' }}></div>

      <div className="w-full z-10 relative">
        <div className="text-center mb-10 fade-rise">
          <div className="section-divider mx-auto"></div>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight" style={{ color: '#F5F1E8' }}>
            {metrics.title}
          </h2>
          <p className="text-base mt-3 max-w-xl mx-auto" style={{ color: '#AFA89A', whiteSpace: 'pre-line' }}>{metrics.description}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 fade-rise">
          {metrics.items.map((item, i) => (
            <div 
              key={i} 
              className={`stat-card border border-gold-border/65 bg-[#0E0E0E] hover:border-gold/30 hover:shadow-[0_0_30px_rgba(214,168,79,0.05)] transition-all duration-300 ${i === 4 ? 'col-span-2 lg:col-span-1' : ''}`}
            >
              <RollingCounter target={item.number} inView={inView} />
              <div className="stat-unit mt-1.5 !text-xs font-mono tracking-widest text-gold/80 font-bold">{item.unit}</div>
              <div className="stat-label text-[12px] md:text-[13px] mt-4 px-2 max-w-[200px] mx-auto leading-relaxed" style={{ color: '#AFA89A', whiteSpace: 'pre-line' }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
