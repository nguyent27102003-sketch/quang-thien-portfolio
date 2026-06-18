import React from 'react';

export default function AdaptiveShowcase({ data }) {
  return (
    <section className="min-h-screen w-full flex items-center justify-center p-4 md:p-16 relative">
      <div className="max-w-7xl w-full z-10 flex flex-col justify-between space-y-12">
        
        <div className="w-full md:w-2/3 space-y-4 fade-rise">
          <h3 className="text-xs font-mono tracking-broadcast text-studio-accent uppercase">
            {data.secondaryTitle}
          </h3>
          <h2 className="text-4xl md:text-6xl font-serif italic text-studio-light font-extrabold leading-none">
            {data.primaryTitle}
          </h2>
          <p className="text-md text-studio-light/75 font-sans font-light leading-relaxed">
            {data.bodyContent}
          </p>
        </div>

        {/* Cấu trúc dàn ngang cố định chuẩn tỉ lệ Cinematic Still */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full fade-rise">
          {data.assets?.map((img, index) => (
            <div key={index} className="aspect-video md:aspect-[21/9] rounded-xl overflow-hidden border border-white/10 bg-black/50 shadow-xl">
              <img src={img} alt={`Cinematic frame ${index}`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
