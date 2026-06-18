import React from 'react';

export default function MosaicGallery({ data }) {
  // Fallback ảnh nếu link bị lỗi
  const handleImgError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600";
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center p-4 md:p-16 relative">
      <div className="max-w-7xl w-full z-10 space-y-10">
        
        <div className="fade-rise">
          <div className="section-divider"></div>
          <h3 className="text-[11px] font-mono tracking-broadcast text-studio-accent uppercase mb-2 font-bold">
            {data.secondaryTitle}
          </h3>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-studio-text tracking-tight">
            {data.primaryTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 rounded-2xl overflow-hidden border border-studio-accent/8 p-3 bg-studio-text/3 fade-rise">
          {data.assets?.map((img, idx) => (
            <div key={idx} className="relative group aspect-square overflow-hidden rounded-xl bg-studio-bg">
              <img 
                src={img} 
                alt={`Gallery ${idx + 1}`} 
                onError={handleImgError}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex items-end">
                <span className="text-[10px] font-mono uppercase tracking-widest text-studio-accent font-semibold">{data.bodyContent}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
