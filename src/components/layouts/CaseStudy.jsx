import React from 'react';

export default function CaseStudy({ data }) {
  const isImgLeft = data.imgPosition === 'left';

  const handleImgError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200";
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center p-4 md:p-16 relative">
      <div className={`max-w-7xl w-full glass-card rounded-[32px] p-8 md:p-14 flex flex-col md:flex-row items-stretch gap-10 md:gap-14 relative z-10 ${isImgLeft ? '' : 'md:flex-row-reverse'}`}>
        
        {/* Project Image */}
        <div className="w-full md:w-5/12 relative fade-rise">
          <div className="rounded-2xl overflow-hidden aspect-[4/5] border border-gold-500/8 relative bg-dark-700 shadow-2xl shadow-black/40">
            <img 
              src={data.assets?.[0]} 
              alt={data.primaryTitle}
              onError={handleImgError}
              className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Case Study Content */}
        <div className="w-full md:w-7/12 flex flex-col justify-center space-y-6">
          <div className="space-y-3 fade-rise">
            <div className="section-divider"></div>
            <span className="case-tag">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse"></span>
              {data.secondaryTitle}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight gold-text leading-[1.15]">
              {data.primaryTitle}
            </h2>
          </div>

          {/* Context → Role → Results */}
          <div className="space-y-5">
            {/* Context */}
            <div className="process-step fade-rise">
              <h4 className="text-[10px] font-mono tracking-broadcast text-gold-500/70 uppercase mb-1.5 font-semibold">Bối cảnh</h4>
              <p className="text-sm text-warm-white/65 font-sans font-light leading-relaxed">
                {data.context}
              </p>
            </div>

            {/* Role */}
            <div className="process-step fade-rise">
              <h4 className="text-[10px] font-mono tracking-broadcast text-gold-500/70 uppercase mb-1.5 font-semibold">Vai trò</h4>
              <p className="text-sm text-warm-white/65 font-sans font-light leading-relaxed">
                {data.role}
              </p>
            </div>

            {/* Results */}
            <div className="fade-rise">
              <h4 className="text-[10px] font-mono tracking-broadcast text-gold-500 uppercase mb-3 font-bold">
                ✦ Thành quả đạt được
              </h4>
              <ul className="space-y-2.5">
                {data.results?.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="highlight-dot mt-1.5"></span>
                    <span className="text-sm font-sans text-warm-white/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tags */}
          {data.tags && (
            <div className="flex flex-wrap gap-2 pt-2 fade-rise">
              {data.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-gold-500/60 border border-gold-500/10 bg-gold-500/[0.03]">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
