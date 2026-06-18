import React from 'react';

export default function AdaptiveShowcase({ data }) {
  // Fallback ảnh kỹ thuật nếu link bị lỗi
  const handleImgError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600";
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center p-4 md:p-16 relative">
      <div className="max-w-7xl w-full z-10 flex flex-col justify-between space-y-10">
        
        <div className="w-full md:w-2/3 space-y-4 fade-rise">
          <div className="section-divider"></div>
          <h3 className="text-[11px] font-mono tracking-broadcast text-studio-accent uppercase font-bold">
            {data.secondaryTitle}
          </h3>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-studio-text tracking-tight">
            {data.primaryTitle}
          </h2>
          <p className="text-sm text-studio-text/70 font-sans font-light leading-relaxed">
            {data.bodyContent}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full fade-rise">
          {data.assets?.map((img, index) => (
            <div key={index} className="aspect-video md:aspect-[4/3] rounded-xl overflow-hidden border border-studio-accent/10 bg-studio-text/5 shadow-xl shadow-black/20 group">
              <img 
                src={img} 
                alt={`Technical frame ${index + 1}`} 
                onError={handleImgError}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110" 
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
