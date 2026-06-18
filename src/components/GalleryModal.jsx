import React, { useEffect } from 'react';

export default function GalleryModal({ images, title, role, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-content w-full max-w-5xl">
        {/* Header */}
        <div className="flex justify-between items-start mb-6 pb-4 border-b border-gold-border/10">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-gold uppercase font-bold">
              Vai trò: {role || "Media & Livestream Operations"}
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-extrabold text-text-primary mt-1">{title}</h3>
            <p className="text-xs text-text-secondary mt-2 max-w-2xl leading-relaxed">
              Hình ảnh thực tế ghi lại quá trình trực tiếp setup, vận hành, sản xuất nội dung truyền thông và điều phối kỹ thuật tại hiện trường dự án. ({images.length} hình ảnh)
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#0E0E0E] border border-gold-border flex items-center justify-center text-text-secondary hover:text-gold hover:border-gold transition-all cursor-pointer shrink-0 ml-4"
          >
            ✕
          </button>
        </div>

        {/* Image Grid: Desktop 3 columns, Mobile 1 column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden border border-gold-border/40 aspect-[4/3] bg-base-warm shadow-md group relative">
              <img
                src={img}
                alt={`${title} ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600'; }}
              />
              <div className="absolute bottom-2 left-2 bg-[#0E0E0E]/80 border border-gold-border/20 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-mono text-gold/80">
                Ảnh {idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Close button bottom */}
        <div className="text-center mt-8 pt-4 border-t border-gold-border/10">
          <button 
            onClick={onClose} 
            className="cta-secondary !text-xs !py-2.5 !px-6 cursor-pointer"
          >
            ĐÓNG
          </button>
        </div>
      </div>
    </div>
  );
}
