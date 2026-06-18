import React from 'react';

/* ===== BRAND SVG ICONS ===== */
const BrandIcons = {
  obs: () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#FFFFFF" strokeWidth="1.5" fill="none"/>
      <circle cx="12" cy="12" r="4" fill="#FFFFFF"/>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none"/>
    </svg>
  ),
  tiktok: () => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="#FFFFFF">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.19a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.62z"/>
    </svg>
  ),
  douyin: () => (
    <svg viewBox="0 0 24 24" width="26" height="26">
      <path d="M12.53 2.02c1.31-.02 2.61-.01 3.91-.02.09 1.53.67 3.08 1.84 4.12 1.17 1.07 2.78 1.55 4.34 1.66v3.86c-1.49-.07-2.98-.46-4.27-1.22-.53-.31-1.02-.68-1.48-1.09-.01 3.62.01 7.24-.02 10.85-.1 1.72-.76 3.42-1.88 4.72-1.57 1.88-4.01 2.97-6.47 2.92-1.57.01-3.13-.43-4.47-1.22C1.76 25.35.35 22.65.63 19.85c.16-1.95 1.07-3.81 2.5-5.12 1.65-1.54 3.95-2.38 6.17-2.17v3.97c-.93-.23-1.96-.09-2.78.4-1.32.72-2.16 2.21-2.04 3.73.04 1.12.57 2.2 1.4 2.92.56.5 1.27.83 2.02.92 1.12.14 2.3-.22 3.12-1 .54-.52.88-1.2 1.01-1.93.06-.44.06-.87.06-1.31V2.02h.44z" fill="#FFFFFF"/>
    </svg>
  ),
  facebook: () => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="#FFFFFF">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
  premiere: () => (
    <svg viewBox="0 0 40 40" width="30" height="30">
      <rect x="1" y="1" width="38" height="38" rx="7" fill="#00005B" stroke="#9999FF" strokeWidth="1"/>
      <text x="20" y="26" textAnchor="middle" fill="#9999FF" fontSize="16" fontWeight="800" fontFamily="Arial, sans-serif">Pr</text>
    </svg>
  ),
  aftereffects: () => (
    <svg viewBox="0 0 40 40" width="30" height="30">
      <rect x="1" y="1" width="38" height="38" rx="7" fill="#00005B" stroke="#9999FF" strokeWidth="1"/>
      <text x="20" y="26" textAnchor="middle" fill="#9999FF" fontSize="16" fontWeight="800" fontFamily="Arial, sans-serif">Ae</text>
    </svg>
  ),
  photoshop: () => (
    <svg viewBox="0 0 40 40" width="30" height="30">
      <rect x="1" y="1" width="38" height="38" rx="7" fill="#001E36" stroke="#31A8FF" strokeWidth="1"/>
      <text x="20" y="26" textAnchor="middle" fill="#31A8FF" fontSize="16" fontWeight="800" fontFamily="Arial, sans-serif">Ps</text>
    </svg>
  ),
  illustrator: () => (
    <svg viewBox="0 0 40 40" width="30" height="30">
      <rect x="1" y="1" width="38" height="38" rx="7" fill="#330000" stroke="#FF9A00" strokeWidth="1"/>
      <text x="20" y="26" textAnchor="middle" fill="#FF9A00" fontSize="16" fontWeight="800" fontFamily="Arial, sans-serif">Ai</text>
    </svg>
  ),
  lightroom: () => (
    <svg viewBox="0 0 40 40" width="30" height="30">
      <rect x="1" y="1" width="38" height="38" rx="7" fill="#001D26" stroke="#31A8FF" strokeWidth="1"/>
      <text x="20" y="26" textAnchor="middle" fill="#31A8FF" fontSize="16" fontWeight="800" fontFamily="Arial, sans-serif">Lr</text>
    </svg>
  ),
  capcut: () => (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#FFFFFF" strokeWidth="1.5"/>
      <polygon points="10,7 18,12 10,17" fill="#FFFFFF"/>
      <line x1="2" y1="20" x2="10" y2="12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
      <line x1="2" y1="4" x2="10" y2="12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
};

export default function TechArsenal({ data }) {
  return (
    <section className="min-h-[80vh] w-full flex items-center justify-center p-4 md:p-16 relative">
      <div className="ambient-orb w-[400px] h-[400px] bg-gold-500/[0.03] top-[30%] right-[10%]"></div>
      
      <div className="max-w-7xl w-full z-10 space-y-12">
        <div className="text-center fade-rise">
          <div className="section-divider mx-auto"></div>
          <h3 className="text-[11px] font-mono tracking-broadcast text-gold-500 uppercase font-bold mb-3">
            {data.secondaryTitle}
          </h3>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-warm-white tracking-tight">
            {data.primaryTitle}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 fade-rise">
          {data.tools?.map((tool, index) => {
            const IconComponent = BrandIcons[tool.iconKey];
            return (
              <div key={index} className="tool-card group">
                <div className="tool-icon group-hover:scale-110 transition-transform duration-300">
                  {IconComponent ? <IconComponent /> : <span>?</span>}
                </div>
                <div className="tool-name">{tool.name}</div>
                <div className="tool-category">{tool.category}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
