import React from 'react';

export default function ContactFooter({ data }) {
  return (
    <section className="min-h-[70vh] w-full flex items-center justify-center p-4 md:p-16 relative">
      <div className="ambient-orb w-[500px] h-[300px] bg-gold-500/[0.04] bottom-0 left-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-5xl w-full z-10 space-y-10">
        
        <div className="text-center fade-rise">
          <div className="section-divider mx-auto"></div>
          <h3 className="text-[11px] font-mono tracking-broadcast text-gold-500 uppercase font-bold mb-3">
            {data.secondaryTitle}
          </h3>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-warm-white tracking-tight mb-6">
            {data.primaryTitle}
          </h2>
          <p className="text-base text-warm-white/60 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            {data.bodyContent}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="glass-card rounded-2xl p-8 md:p-10 fade-rise">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.metadata && Object.entries(data.metadata).map(([key, value], idx) => (
              <div key={idx} className="border-b border-warm-white/5 pb-4">
                <span className="text-[10px] font-mono uppercase tracking-broadcast text-gold-500/70 font-semibold block mb-1.5">
                  {key}
                </span>
                <span className="text-base font-sans text-warm-white/90 font-medium">
                  {value}
                </span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 pt-8 mt-6 border-t border-warm-white/5">
            <a href="mailto:nq.thien27@gmail.com" className="cta-gold">
              Gửi Email
              <span>✉</span>
            </a>
            <a href="tel:0349386979" className="cta-outline">
              Gọi ngay
              <span>📞</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-4 fade-rise">
          <p className="font-mono text-[10px] tracking-wider text-warm-white/20">
            © 2026 NGUYỄN QUANG THIỆN — OPERATION EXECUTIVE PORTFOLIO
          </p>
        </div>
      </div>
    </section>
  );
}
