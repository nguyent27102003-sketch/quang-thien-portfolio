import React from 'react';
import { hero } from '../data/portfolioData';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-auto md:min-h-screen w-full flex items-center px-6 md:px-20 lg:px-28 py-12 md:py-20 relative overflow-hidden">
      {/* Fill light behind hero */}
      <div className="absolute top-[5%] left-[10%] w-[500px] h-[600px] pointer-events-none z-0" style={{ background: 'conic-gradient(from 195deg at 50% 30%, transparent 0deg, rgba(214,168,79,0.06) 35deg, rgba(214,168,79,0.1) 55deg, transparent 90deg)', filter: 'blur(80px)', transform: 'rotate(12deg)' }}></div>
      <div className="absolute top-[20%] right-[5%] w-[350px] h-[500px] pointer-events-none z-0" style={{ background: 'conic-gradient(from 210deg at 50% 40%, transparent 0deg, rgba(214,168,79,0.04) 30deg, rgba(214,168,79,0.07) 50deg, transparent 80deg)', filter: 'blur(100px)', transform: 'rotate(-8deg)' }}></div>
      <div className="absolute top-[35%] left-0 right-0 h-[250px] pointer-events-none z-0" style={{ background: 'linear-gradient(14deg, transparent 20%, rgba(214,168,79,0.04) 45%, rgba(214,168,79,0.06) 55%, transparent 80%)', filter: 'blur(60px)' }}></div>

      <div className="w-full z-10 flex flex-col md:flex-row items-center gap-10 md:gap-12">

        {/* LEFT — Text */}
        <div className="w-full md:w-1/2 space-y-5 fade-rise">
          <span className="inline-block text-xs font-sans tracking-[0.25em] uppercase font-semibold" style={{ color: '#D6A84F' }}>
            {hero.label}
          </span>

          <h1 className="font-sans font-bold tracking-tight" style={{ color: '#F5F1E8', fontFamily: '"Inter", -apple-system, sans-serif' }}>
            <span className="block" style={{ fontSize: 'clamp(36px, 11vw, 76px)', lineHeight: '1.05', paddingTop: '0.04em', paddingBottom: '0.02em' }}>NGUYỄN</span>
            <span className="block gold-text" style={{ fontSize: 'clamp(36px, 11vw, 76px)', lineHeight: '1.05', paddingTop: '0.02em', paddingBottom: '0.04em' }}>QUANG THIỆN</span>
          </h1>

          <p className="text-lg md:text-xl font-sans font-semibold" style={{ color: '#D6A84F' }}>
            Media &amp; Livestream Executive
          </p>

          <p className="text-base md:text-lg font-sans leading-relaxed" style={{ color: '#AFA89A', whiteSpace: 'pre-line' }}>
            {hero.description}
          </p>

          {/* BADGES ROW */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-3 pt-2 w-full max-w-lg">
            {hero.badges.map((badge, idx) => (
              <div 
                key={idx} 
                className={`hero-badge flex flex-col justify-center py-2.5 px-4 border border-gold-border bg-[#0E0E0E]/90 backdrop-blur-md rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] ${idx === 2 ? 'col-span-2 md:col-span-1' : ''}`}
              >
                <span className="text-2xl md:text-2xl font-display font-extrabold gold-text tracking-tight shrink-0">{badge.number}</span>
                <span className="text-[10px] md:text-[11px] font-sans tracking-wider uppercase text-text-secondary font-semibold mt-0.5">{badge.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-3 w-full">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="cta-primary !text-sm !py-3.5 !px-7 cursor-pointer animate-pulse-subtle min-h-[44px]"
            >
              {hero.cta1} <span>→</span>
            </button>
            <a 
              href="/assets/CV-NguyenQuangThien.jpg" 
              download="CV-NguyenQuangThien.jpg" 
              className="cta-secondary !text-sm !py-3.5 !px-7 min-h-[44px]"
            >
              {hero.cta2}
            </a>
          </div>
        </div>

        {/* RIGHT — Portrait */}
        <div className="w-full md:w-1/2 fade-rise">
          <div className="relative mx-auto" style={{ maxWidth: '480px' }}>
            <div className="absolute -inset-8 rounded-3xl blur-3xl pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(214,168,79,0.1) 0%, transparent 70%)' }}></div>

            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-gold-border shadow-2xl shadow-black/50">
              <img src={hero.image} alt="Nguyễn Quang Thiện" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-base/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
