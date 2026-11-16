import React from 'react';

export default function TacticalMapSection() {
  const steps = [
    {
      code: "01 / READY",
      name: "Setup trước giờ chạy",
      desc: "Kiểm tra thiết bị, ánh sáng, âm thanh, góc máy, phần mềm livestream, đường truyền và checklist trước khi bắt đầu.",
      status: "CHECKLIST OK"
    },
    {
      code: "02 / ACTIVE",
      name: "Vận hành khi đang live",
      desc: "Theo dõi hình ảnh, âm thanh, tín hiệu, khung hình và phối hợp cùng team trong lúc phiên live diễn ra.",
      status: "MONITORING"
    },
    {
      code: "03 / PROCESS",
      name: "Sản xuất nội dung",
      desc: "Tham gia quay, dựng, thêm phụ đề, xử lý âm thanh, chỉnh hình ảnh và tối ưu định dạng cho TikTok, Facebook, Reels.",
      status: "EDITING"
    },
    {
      code: "04 / DELIVERY",
      name: "Bàn giao kết quả",
      desc: "Xuất file, chọn ảnh, bàn giao video, lưu trữ tài nguyên và ghi nhận điểm cần tối ưu cho lần sau.",
      status: "COMPLETED"
    }
  ];

  const tags = [
    "KOL/KOC Livestream Ops",
    "Motion Animation & Event Media",
    "Digital Activation (1,691 Shops)",
    "Sasin Livestream Ops",
    "ZCOM & Elive Academy",
    "Phim ngắn “Giải thoát”",
    "Đại học Mở TP.HCM",
    "Dai-ichi Life Gò Vấp 3"
  ];

  return (
    <section id="tactical-map" className="w-full py-12 md:py-24 px-6 md:px-20 lg:px-28 relative overflow-hidden" style={{ backgroundColor: '#050505' }}>
      {/* Background grids and fill lights */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(214,168,79,0.15) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(214,168,79,0.05) 0%, transparent 70%)', filter: 'blur(50px)' }}></div>
      
      <div className="w-full z-10 relative">
        {/* Section Header */}
        <div className="text-center mb-12 fade-rise">
          <div className="section-divider mx-auto"></div>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight" style={{ color: '#F5F1E8' }}>
            BẢN ĐỒ THỰC CHIẾN
          </h2>
          <p className="text-base mt-3 max-w-2xl mx-auto" style={{ color: '#AFA89A' }}>
            Từ lúc nhận brief đến khi chương trình lên sóng và bàn giao sản phẩm, đây là những phần việc mình có thể trực tiếp tham gia để team chạy mượt hơn.
          </p>
        </div>

        {/* Central Core status panel */}
        <div className="flex justify-center mb-10 fade-rise">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-gold/25 bg-[#0E0E0E] shadow-[0_0_25px_rgba(214,168,79,0.08)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            <span className="text-xs font-mono tracking-[0.25em] text-gold font-bold uppercase">
              MEDIA • LIVESTREAM • EVENT OPS
            </span>
          </div>
        </div>

        {/* 4 Block Columns representing the Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 fade-rise mb-12">
          {steps.map((step, idx) => (
            <div key={idx} className="glass-card !rounded-2xl p-6 flex flex-col justify-between min-h-[220px] relative overflow-hidden group">
              {/* Top corner tech detail */}
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-gold rounded-full"></div>
                <div className="absolute top-3 right-3 w-8 h-[1px] bg-gold"></div>
                <div className="absolute top-3 right-3 w-[1px] h-8 bg-gold"></div>
              </div>

              <div className="space-y-4">
                {/* Tech Code */}
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono tracking-widest text-gold/60 font-semibold">{step.code}</span>
                  <span className="text-[9px] font-mono bg-gold/10 text-gold px-2 py-0.5 rounded border border-gold/20 font-bold">{step.status}</span>
                </div>

                {/* Name */}
                <h3 className="text-lg font-display font-bold group-hover:text-gold transition-colors" style={{ color: '#F5F1E8' }}>
                  {step.name}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: '#AFA89A' }}>
                  {step.desc}
                </p>
              </div>

              {/* Console Foot Detail */}
              <div className="mt-6 pt-3 border-t border-gold/10 flex justify-between items-center text-[9px] font-mono text-text-secondary/40">
                <span>SYS_STATUS: ONLINE</span>
                <span>CH_{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Applied Tag List */}
        <div className="fade-rise bg-[#0E0E0E]/40 border border-gold/10 rounded-xl p-5 md:p-6 flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <span className="text-xs font-mono tracking-wider text-gold font-bold uppercase shrink-0">
            ĐÃ ÁP DỤNG TRONG CÁC DỰ ÁN:
          </span>
          <div className="flex flex-wrap gap-2.5 justify-center md:justify-start">
            {tags.map((tag, i) => (
              <span key={i} className="text-xs px-3.5 py-1.5 rounded-full border border-gold/10 bg-[#0E0E0E] text-text-secondary font-medium shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:border-gold/30 hover:text-text-primary transition-all duration-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
