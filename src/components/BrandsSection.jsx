import React, { useState } from 'react';
import { brands } from '../data/portfolioData';

export default function BrandsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Split brands into row 1 and row 2 for the marquee rows
  const row1Items = brands.items.filter((item) => item.row === 1);
  const row2Items = brands.items.filter((item) => item.row === 2);

  const allItems = brands.items;

  return (
    <section className="relative py-12 md:py-24 overflow-hidden border-t border-b border-[#D6A84F]/10 bg-black/90">
      {/* GLOW DECORATIONS */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-[#D6A84F]/5 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-blue-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12 relative z-10 text-center fade-rise">
        <div className="section-divider mx-auto"></div>
        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight" style={{ color: '#F5F1E8' }}>
          {brands.title}
        </h2>
        <p className="text-base mt-3 max-w-2xl mx-auto" style={{ color: '#AFA89A' }}>
          {brands.description}
        </p>
      </div>

      {/* MARQUEE CONTAINER */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 md:gap-8 pointer-events-auto py-4">
        {/* ROW 1: LEFT SCROLL (Page 05 Brands) */}
        <div className="w-full overflow-hidden relative flex">
          <div className="flex gap-4 md:gap-6 animate-marquee-left whitespace-nowrap">
            {/* First loop */}
            {row1Items.map((item, idx) => (
              <div
                key={`r1-p1-${idx}`}
                className="partner-card group flex items-center justify-center flex-shrink-0"
                title={item.name}
              >
                <img
                  src={item.path}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-[10px] md:rounded-[11px]"
                  loading="lazy"
                />
              </div>
            ))}
            {/* Second loop for infinite marquee */}
            {row1Items.map((item, idx) => (
              <div
                key={`r1-p2-${idx}`}
                className="partner-card group flex items-center justify-center flex-shrink-0"
                title={item.name}
              >
                <img
                  src={item.path}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-[10px] md:rounded-[11px]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: RIGHT SCROLL (Page 06 Brands) */}
        <div className="w-full overflow-hidden relative flex">
          <div className="flex gap-4 md:gap-6 animate-marquee-right whitespace-nowrap">
            {/* First loop */}
            {row2Items.map((item, idx) => (
              <div
                key={`r2-p1-${idx}`}
                className="partner-card group flex items-center justify-center flex-shrink-0"
                title={item.name}
              >
                <img
                  src={item.path}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-[10px] md:rounded-[11px]"
                  loading="lazy"
                />
              </div>
            ))}
            {/* Second loop for infinite marquee */}
            {row2Items.map((item, idx) => (
              <div
                key={`r2-p2-${idx}`}
                className="partner-card group flex items-center justify-center flex-shrink-0"
                title={item.name}
              >
                <img
                  src={item.path}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-[10px] md:rounded-[11px]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* VIEW MORE BUTTON */}
      <div className="mt-12 text-center relative z-10">
        <button
          onClick={() => setIsModalOpen(true)}
          className="cta-secondary inline-flex items-center gap-2 !py-2.5 !px-6 !text-[12px] font-bold bg-[#D6A84F]/10 hover:bg-[#D6A84F]/25 !border-[#D6A84F]/50 hover:!border-[#D6A84F] cursor-pointer transition-all shadow-[0_4px_15px_rgba(214,168,79,0.05)] rounded-full group"
        >
          <span>Xem thêm brand/đối tác</span>
          <span className="font-mono text-[#D6A84F] transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
        <p className="mt-2.5 font-mono text-[10px] text-[#C2BDB3]/40 tracking-wider">
          Hơn {allItems.length}+ thương hiệu từng hỗ trợ triển khai
        </p>
      </div>

      {/* MODAL - OVERLAY & FULL GRID */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity duration-300">
          <div
            className="absolute inset-0"
            onClick={() => setIsModalOpen(false)}
          ></div>

          <div
            className="relative w-full max-w-4xl max-h-[85vh] bg-[#0c0c0c] border border-[#D6A84F]/30 rounded-2xl shadow-[0_24px_50px_-12px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col z-10 animate-fade-in"
            style={{
              boxShadow: '0 0 40px rgba(214,168,79,0.1), inset 0 0 20px rgba(214,168,79,0.05)'
            }}
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-[#D6A84F]/10 bg-black/60">
              <div>
                <h3 className="font-display font-bold text-base md:text-lg text-[#F5F1E8] tracking-widest">
                  TOÀN BỘ BRAND / ĐỐI TÁC
                </h3>
                <p className="font-sans text-[11px] md:text-[12px] text-[#C2BDB3]/60 mt-1">
                  Danh sách đầy đủ các thương hiệu từng tham gia hỗ trợ triển khai thực tế ({allItems.length} đối tác)
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full border border-[#D6A84F]/20 hover:border-[#D6A84F]/80 text-[#C2BDB3] hover:text-[#F5F1E8] hover:bg-[#D6A84F]/10 transition-all cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content grid */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-5">
                {allItems.map((item, idx) => (
                  <div
                    key={`modal-${idx}`}
                    className="partner-card group flex flex-col items-center justify-center p-0 rounded-xl transition-all duration-300"
                    title={item.name}
                  >
                    <img
                      src={item.path}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-[10px] md:rounded-[11px]"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-[#D6A84F]/10 bg-black/60 text-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="cta-secondary !py-2 !px-6 !text-[11px] font-bold bg-[#D6A84F]/10 hover:bg-[#D6A84F]/25 !border-[#D6A84F]/50 hover:!border-[#D6A84F] cursor-pointer"
              >
                Đóng danh sách
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
