import React from 'react';
import { contact, meta } from '../data/portfolioData';

export default function ContactSection() {
  const filteredInfo = contact.info.filter(
    (item) => item.label !== 'Khu vực làm việc' && item.label !== 'Trạng thái'
  );

  return (
    <section id="contact" className="w-full py-12 md:py-24 px-6 md:px-20 lg:px-28 relative" style={{ backgroundColor: '#0B0B0B' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse, rgba(214,168,79,0.07) 0%, transparent 65%)', filter: 'blur(80px)' }}></div>

      <div className="max-w-5xl mx-auto z-10 relative">
        <div className="text-center mb-10 fade-rise">
          <div className="section-divider mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-snug max-w-3xl mx-auto" style={{ color: '#F5F1E8', whiteSpace: 'pre-line' }}>
            {contact.title}
          </h2>
          <p className="text-base mt-3 max-w-xl mx-auto" style={{ color: '#AFA89A', whiteSpace: 'pre-line' }}>{contact.description}</p>
        </div>

        {/* Contact Card */}
        <div className="glass-card !rounded-2xl p-7 md:p-10 fade-rise">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredInfo.map((item, i) => (
              <div key={i} className="text-center border-b md:border-b-0 md:border-r border-gold-border/15 last:border-0 pb-4 md:pb-0 px-4">
                <span className="text-xs font-sans uppercase tracking-[0.18em] font-semibold block mb-2" style={{ color: 'rgba(214,168,79,0.5)' }}>
                  {item.label}
                </span>
                {item.href ? (
                  <a href={item.href} className="text-lg font-sans font-semibold hover:text-gold transition-colors block" style={{ color: '#F5F1E8' }}>
                    {item.value}
                  </a>
                ) : (
                  <span className="text-lg font-sans font-semibold block" style={{ color: 'rgba(245,241,232,0.85)' }}>{item.value}</span>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-7 mt-6 border-t border-gold-border/15">
            <a href="mailto:ng.thien27@gmail.com" className="cta-primary !text-sm !py-3 !px-7">
              Gửi email ✉
            </a>
            <a href="tel:0349386979" className="cta-secondary !text-sm !py-3 !px-7">
              Gọi ngay 📞
            </a>
            <a href="#" className="cta-secondary !text-sm !py-3 !px-7">
              Tải CV 📄
            </a>
          </div>
        </div>

        {/* Thank you + highlight message */}
        <div className="text-center mt-16 fade-rise space-y-3">
          <p className="text-xs md:text-sm font-sans tracking-[0.2em] uppercase font-semibold" style={{ color: 'rgba(214,168,79,0.7)' }}>
            Cảm ơn nhà tuyển dụng đã xem
          </p>
          <p className="text-3xl md:text-5xl font-bold gold-text leading-snug py-2" style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontStyle: 'italic', letterSpacing: '0.02em' }}>
            “Cùng nhau, hãy tạo nên sự khác biệt”
          </p>
        </div>

        {/* Footer */}
        <div className="text-center pt-12 fade-rise">
          <p className="text-sm font-sans tracking-wide" style={{ color: 'rgba(175,168,154,0.35)', fontFamily: '"Inter", sans-serif' }}>
            {meta.footer}
          </p>
        </div>
      </div>
    </section>
  );
}
