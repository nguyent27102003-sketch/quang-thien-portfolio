import React from 'react';

export default function BentoGrid({ data, isFooter }) {
  return (
    <section className="min-h-screen w-full flex items-center justify-center p-4 md:p-16 relative">
      <div className="max-w-7xl w-full z-10">
        
        <div className="mb-10 text-left fade-rise">
          <div className="section-divider"></div>
          <h3 className="text-[11px] font-mono tracking-broadcast text-studio-accent uppercase mb-3 font-bold">
            {data.secondaryTitle}
          </h3>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-studio-text tracking-tight">
            {data.primaryTitle}
          </h2>
        </div>

        {!isFooter ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {data.blocks?.map((block, i) => (
              <div key={i} className="liquid-glass rounded-2xl p-7 flex flex-col justify-between space-y-6 border border-studio-accent/8 fade-rise hover:border-studio-accent/25 transition-all duration-300 group">
                <div className="icon-box group-hover:shadow-md group-hover:shadow-studio-accent/10 transition-all duration-300">{block.icon}</div>
                <div className="space-y-3">
                  <h4 className="text-base font-display font-bold tracking-wide text-studio-text">{block.title}</h4>
                  <p className="text-sm font-sans font-light text-studio-text/65 leading-relaxed">{block.content}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Mục tiêu nghề nghiệp */}
            <div className="liquid-glass rounded-2xl p-8 md:p-10 space-y-5 border border-studio-accent/8 fade-rise">
              <p className="text-sm font-sans font-light text-studio-text/80 leading-relaxed">{data.bodyContent}</p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 pt-4">
                <div className="stat-card">
                  <div className="stat-number">150+</div>
                  <div className="stat-label">Phiên Livestream</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Viewers đồng thời</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">Khách dự sự kiện</div>
                </div>
              </div>
              
              <div className="pt-4 font-mono text-[10px] tracking-wider text-studio-text/30">© 2026 NGUYỄN QUANG THIỆN. OPERATION EXECUTIVE PORTFOLIO.</div>
            </div>

            {/* Thông tin liên hệ */}
            <div className="liquid-glass rounded-2xl p-8 md:p-10 grid grid-cols-1 gap-3.5 border border-studio-accent/8 fade-rise">
              {data.metadata && Object.entries(data.metadata).map(([key, value], idx) => (
                <div key={idx} className="border-b border-studio-text/8 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-studio-accent font-bold block mb-1">{key}</span>
                  <span className="text-sm font-sans text-studio-text/90 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
