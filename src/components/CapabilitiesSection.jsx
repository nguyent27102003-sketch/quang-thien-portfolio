import React from 'react';
import { capabilities } from '../data/portfolioData';

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="w-full py-16 md:py-24 px-6 md:px-20 lg:px-28 relative">
      <div className="fill-light w-[400px] h-[300px] top-[20%] left-[10%]"></div>
      <div className="fill-light w-[350px] h-[250px] top-[40%] right-[15%]"></div>

      <div className="w-full z-10 relative">
        <div className="text-center mb-10 fade-rise">
          <div className="section-divider mx-auto"></div>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight" style={{ color: '#F5F1E8' }}>
            {capabilities.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 fade-rise">
          {capabilities.items.map((item, i) => (
            <div key={i} className={`cap-card !p-7 ${i === 1 ? '!bg-[#100E09] !border-gold-border' : ''}`}>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono font-bold" style={{ color: 'rgba(214,168,79,0.4)' }}>{item.number}</span>
                  <h3 className="text-xl md:text-2xl font-display font-bold" style={{ color: '#F5F1E8' }}>
                    {item.name}
                  </h3>
                </div>

                <div>
                  <span className="text-xs font-mono tracking-[0.2em] uppercase font-semibold" style={{ color: 'rgba(214,168,79,0.5)' }}>Mình làm gì</span>
                  <p className="text-base font-light leading-relaxed mt-1" style={{ color: '#AFA89A' }}>
                    {item.what}
                  </p>
                </div>

                <div className="pt-3 border-t border-gold-border/40">
                  <span className="text-xs font-mono tracking-[0.2em] uppercase font-semibold" style={{ color: '#D6A84F' }}>Team nhận được gì</span>
                  <p className="text-base font-medium leading-relaxed mt-1" style={{ color: 'rgba(245,241,232,0.8)' }}>
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
