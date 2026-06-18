import React from 'react';

export default function SplitDashboard({ data, imgPosition }) {
  const isImgLeft = imgPosition === 'left';

  // Fallback ảnh kỹ thuật sự kiện nếu ảnh chính bị lỗi
  const handleImgError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200"; 
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center p-4 md:p-16 relative">
      <div className={`max-w-7xl w-full liquid-glass rounded-[32px] p-8 md:p-14 flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10 ${isImgLeft ? '' : 'md:flex-row-reverse'}`}>
        
        {/* Khung ảnh — Dark frame với viền amber */}
        <div className="w-full md:w-1/2 relative fade-rise">
          <div className="rounded-2xl overflow-hidden aspect-[4/5] border border-studio-accent/10 relative bg-studio-text/5 shadow-2xl shadow-black/30">
            <img 
              src={data.assets && data.assets[0]} 
              alt={data.primaryTitle} 
              onError={handleImgError}
              className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700" 
            />
            {/* Gradient overlay phía dưới ảnh — light fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Khối nội dung — Dark text with amber accents */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-5">
          <div className="section-divider"></div>
          <h3 className="text-[11px] font-mono tracking-broadcast text-studio-accent uppercase font-bold fade-rise">
            {data.secondaryTitle}
          </h3>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-studio-text leading-[1.15] fade-rise">
            {data.primaryTitle}
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-studio-text/70 font-sans font-light fade-rise">
            {data.bodyContent}
          </p>
          
          {data.highlights && (
            <ul className="space-y-3 pt-4 border-t border-studio-accent/10 fade-rise">
              {data.highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  {/* Indicator amber dot */}
                  <span className="w-1.5 h-1.5 rounded-full bg-studio-accent mt-2 flex-shrink-0 shadow-sm shadow-studio-accent/40"></span>
                  <span className="text-sm font-sans font-normal text-studio-text/75 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </section>
  );
}
