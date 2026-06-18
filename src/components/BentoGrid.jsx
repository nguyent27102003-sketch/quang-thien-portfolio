import React from 'react';

export default function BentoGrid({ data, isFooter }) {
  return (
    <section className="min-h-screen w-full flex items-center justify-center p-4 md:p-16 relative">
      <div className="max-w-7xl w-full z-10">
        
        <div className="mb-12 text-left fade-rise">
          <h3 className="text-xs font-mono tracking-broadcast text-studio-accent uppercase mb-3">
            {data.secondaryTitle}
          </h3>
          <h2 className="text-4xl md:text-6xl font-serif italic text-studio-light font-extrabold leading-none">
            {data.primaryTitle}
          </h2>
        </div>

        {!isFooter ? (
          /* Cấu trúc lưới bento cho khối Năng lực kỹ thuật */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.blocks?.map((block, i) => (
              <div key={i} className="liquid-glass rounded-3xl p-8 flex flex-col justify-between space-y-6 border border-white/5 fade-rise hover:border-studio-accent/20 hover:scale-[1.02] transition-all duration-300">
                <div className="text-3xl">{block.icon}</div>
                <div className="space-y-3">
                  <h4 className="text-lg font-sans font-semibold tracking-wide text-studio-light">{block.title}</h4>
                  <p className="text-sm font-sans font-light text-studio-light/75 leading-relaxed">{block.content}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Cấu trúc lưới bento cho khối Footer Liên hệ */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="liquid-glass rounded-3xl p-8 md:p-12 space-y-4 border border-white/5 fade-rise flex flex-col justify-between">
              <p className="text-lg font-sans font-light text-studio-light/90 leading-relaxed">{data.bodyContent}</p>
              <div className="pt-4 font-mono text-xs text-studio-accent/60">© 2026 NGUYỄN QUANG THIỆN. ALL RIGHTS RESERVED.</div>
            </div>
            <div className="liquid-glass rounded-3xl p-8 md:p-12 grid grid-cols-1 gap-6 border border-white/5 fade-rise">
              {data.metadata && Object.entries(data.metadata).map(([key, value], idx) => (
                <div key={idx} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-studio-accent/50 block mb-1">{key}</span>
                  <span className="text-sm font-sans text-studio-light font-normal">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
