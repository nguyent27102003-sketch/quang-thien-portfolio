import React, { useState } from 'react';
import { gallery } from '../data/portfolioData';
import GalleryModal from './GalleryModal';

export default function GallerySection() {
  const [modal, setModal] = useState(null);

  return (
    <section id="gallery" className="w-full py-16 md:py-24 px-6 md:px-20 lg:px-28 relative">
      <div className="absolute top-[20%] left-[15%] w-[450px] h-[350px] pointer-events-none z-0" style={{ background: 'conic-gradient(from 190deg at 50% 40%, transparent 0deg, rgba(214,168,79,0.05) 25deg, rgba(214,168,79,0.08) 45deg, transparent 70deg)', filter: 'blur(90px)', transform: 'rotate(16deg)' }}></div>

      <div className="w-full z-10 relative">
        <div className="text-center mb-12 fade-rise">
          <div className="section-divider mx-auto"></div>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight" style={{ color: '#F5F1E8' }}>
            {gallery.title}
          </h2>
          <p className="text-base mt-3 max-w-xl mx-auto" style={{ color: '#AFA89A', whiteSpace: 'pre-line' }}>{gallery.description}</p>
        </div>

        {/* Gallery uses square-ish cards for variety vs project's wide cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 fade-rise">
          {gallery.categories.map((cat, i) => (
            <div
              key={i}
              className="gallery-category-card"
              onClick={() => setModal({ images: cat.images, title: cat.name })}
            >
              {/* Fan-out preview images */}
              {cat.images.slice(0, 3).map((img, idx) => (
                <div key={idx} className="fan-image w-full h-full top-0 left-0 hidden md:block">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}

              {/* Main card */}
              <div className="card-main">
                {/* Square-ish aspect for gallery (different from projects) */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={cat.cover}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600'; }}
                  />
                  {/* Desktop hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-base/90 via-base/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <span className="text-sm font-bold" style={{ color: '#F5F1E8' }}>Xem bộ ảnh</span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-display font-bold" style={{ color: '#F5F1E8' }}>{cat.name}</h3>
                  <p className="text-sm leading-relaxed line-clamp-2" style={{ color: '#AFA89A', whiteSpace: 'pre-line' }}>{cat.description}</p>

                  {/* Mobile preview thumbnails */}
                  <div className="flex gap-1.5 pt-2 md:hidden">
                    {cat.images.slice(0, 3).map((img, idx) => (
                      <div key={idx} className="w-12 h-12 rounded-lg overflow-hidden border border-gold-border/30">
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider" style={{ color: 'rgba(214,168,79,0.4)' }}>{cat.images.length} ảnh</span>
                    <span className="text-xs font-mono uppercase tracking-wider cursor-pointer" style={{ color: 'rgba(214,168,79,0.7)' }}>Xem chi tiết →</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal && (
        <GalleryModal images={modal.images} title={modal.title} onClose={() => setModal(null)} />
      )}
    </section>
  );
}
