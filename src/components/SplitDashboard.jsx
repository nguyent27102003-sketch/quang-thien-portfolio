import React from 'react';

export default function SplitDashboard({ data, imgPosition }) {
  const isImgLeft = imgPosition === 'left';

  return (
    <section className="min-h-screen w-full flex items-center justify-center p-4 md:p-16 relative">
      <div className={`max-w-7xl w-full liquid-glass rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 md:gap-20 relative z-10 ${isImgLeft ? '' : 'md:flex-row-reverse'}`}>
        
        {/* Khung trưng bày hình ảnh */}
        <div className="w-full md:w-1/2 relative fade-rise">
          <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl border border-white/5 relative bg-black/40">
            <img src={data.assets[0]} alt={data.primaryTitle} className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>

        {/* Khối nội dung chiến lược */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
          <h3 className="text-xs font-mono tracking-broadcast text-studio-accent uppercase fade-rise">
            {data.secondaryTitle}
          </h3>
          <h2 className="text-4xl md:text-6xl font-serif italic font-normal tracking-wide text-studio-light leading-tight fade-rise">
            {data.primaryTitle}
          </h2>
          <p className="text-md md:text-lg leading-relaxed text-studio-light/80 font-sans font-light fade-rise">
            {data.bodyContent}
          </p>
          {data.highlights && (
            <ul className="space-y-3 pt-6 border-t border-white/5 fade-rise">
              {data.highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-studio-accent/60 mt-2 flex-shrink-0"></span>
                  <span className="text-sm font-sans font-light text-studio-light/70 leading-normal">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </section>
  );
}
