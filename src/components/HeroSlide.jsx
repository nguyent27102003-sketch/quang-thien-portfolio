import React from 'react';

export default function HeroSlide({ data, alignment }) {
  const isCenter = alignment === 'center';

  return (
    <section className="min-h-screen w-full flex items-center justify-center p-6 relative">
      <div className={`max-w-4xl w-full liquid-glass rounded-[40px] p-12 md:p-20 z-10 fade-rise ${isCenter ? 'text-center mx-auto' : 'text-left mr-auto'}`}>
        <h3 className="text-xs font-mono tracking-broadcast text-studio-accent uppercase mb-6 block">
          {data.secondaryTitle}
        </h3>
        <h1 className="text-5xl md:text-8xl font-serif italic font-normal tracking-wide text-studio-light mb-8 leading-none">
          {data.primaryTitle}
        </h1>
        <p className={`text-md md:text-xl text-studio-light/70 font-sans font-light mb-10 leading-relaxed max-w-2xl ${isCenter ? 'mx-auto' : 'mr-auto'}`}>
          {data.bodyContent}
        </p>
        <button className="px-8 py-3.5 bg-studio-light text-studio-dark font-sans font-medium uppercase tracking-widest text-xs rounded-full hover:bg-studio-accent transition-all duration-300 shadow-xl cursor-pointer">
          {data.ctaText}
        </button>
      </div>
    </section>
  );
}
