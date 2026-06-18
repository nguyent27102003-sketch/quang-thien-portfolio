import React from 'react';

export default function GalleryShowcase({ data }) {
  const handleImgError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600";
  };

  return (
    <section className="min-h-[80vh] w-full flex items-center justify-center p-4 md:p-16 relative">
      <div className="max-w-7xl w-full z-10 space-y-10">
        
        <div className="fade-rise">
          <div className="section-divider"></div>
          <h3 className="text-[11px] font-mono tracking-broadcast text-gold-500 uppercase mb-2 font-bold">
            {data.secondaryTitle}
          </h3>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-warm-white tracking-tight">
            {data.primaryTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 fade-rise">
          {data.items?.map((item, idx) => (
            <div key={idx} className="gallery-card aspect-[4/3] group cursor-pointer">
              <img 
                src={item.image} 
                alt={item.caption}
                onError={handleImgError}
                className="w-full h-full object-cover opacity-85" 
              />
              <div className="gallery-overlay">
                <span className="text-[9px] font-mono uppercase tracking-widest text-gold-500 font-bold mb-1">
                  {item.tag}
                </span>
                <span className="text-sm font-sans text-warm-white/90 leading-relaxed">
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
