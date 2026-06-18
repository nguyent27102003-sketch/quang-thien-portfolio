import React from 'react';

export default function HeroSlide({ data }) {
  return (
    <section className="min-h-screen w-full flex items-center justify-center p-6 relative overflow-hidden">
      {/* Ambient warm orbs */}
      <div className="ambient-orb w-[500px] h-[500px] bg-gold-500/[0.06] top-[10%] left-[20%]"></div>
      <div className="ambient-orb w-[300px] h-[300px] bg-gold-500/[0.04] bottom-[20%] right-[15%]"></div>

      <div className="max-w-6xl w-full z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Text Content */}
        <div className="w-full md:w-3/5 space-y-6 fade-rise">
          <div className="section-divider"></div>
          
          <h3 className="text-[11px] font-mono tracking-broadcast text-gold-500 uppercase font-semibold">
            {data.secondaryTitle}
          </h3>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-warm-white leading-[1.05]">
            {data.primaryTitle}
          </h1>
          
          <p className="text-lg md:text-xl font-serif italic text-warm-gray leading-relaxed max-w-lg">
            {data.tagline}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button 
              onClick={() => document.getElementById('s2')?.scrollIntoView({ behavior: 'smooth' })}
              className="cta-gold"
            >
              {data.ctaText}
              <span className="text-base">→</span>
            </button>
            <button 
              onClick={() => document.getElementById('s7')?.scrollIntoView({ behavior: 'smooth' })}
              className="cta-outline"
            >
              Liên hệ ngay
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-2/5 fade-rise">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-gold-500/10 to-transparent rounded-3xl blur-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-gold-500/10 shadow-2xl shadow-black/40">
              <img 
                src={data.assets?.[0]} 
                alt={data.primaryTitle}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
