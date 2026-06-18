import React from 'react';

export default function MosaicGallery({ data }) {
  return (
    <section className="min-h-screen w-full flex items-center justify-center p-4 md:p-16 relative">
      <div className="max-w-7xl w-full z-10 space-y-10">
        
        <div className="fade-rise">
          <h3 className="text-xs font-mono tracking-broadcast text-studio-accent uppercase mb-2">
            {data.secondaryTitle}
          </h3>
          <h2 className="text-4xl md:text-6xl font-serif italic text-studio-light font-extrabold leading-none">
            {data.primaryTitle}
          </h2>
        </div>

        {/* Kiến trúc khít ô Zero-Gap có bọc đường viền tinh tế */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 rounded-2xl overflow-hidden bg-white/5 p-2 fade-rise">
          {data.assets?.map((img, idx) => (
            <div key={idx} className="relative group aspect-square overflow-hidden rounded-lg bg-black">
              <img src={img} alt="Gallery item" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex items-end">
                <span className="text-xs font-mono uppercase tracking-widest text-studio-light">{data.bodyContent}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
