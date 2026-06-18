import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import GalleryModal from './GalleryModal';

export default function ProjectsSection() {
  const [modal, setModal] = useState(null);

  return (
    <section id="projects" className="w-full py-12 md:py-24 px-6 md:px-20 lg:px-28 relative" style={{ backgroundColor: '#0B0B0B' }}>
      {/* Fill light diagonal */}
      <div className="absolute top-[15%] left-[5%] w-[400px] h-[500px] pointer-events-none z-0" style={{ background: 'conic-gradient(from 200deg at 50% 40%, transparent 0deg, rgba(214,168,79,0.05) 30deg, rgba(214,168,79,0.08) 50deg, transparent 80deg)', filter: 'blur(90px)', transform: 'rotate(14deg)' }}></div>
      <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[400px] pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse, rgba(214,168,79,0.05) 0%, transparent 70%)', filter: 'blur(80px)' }}></div>

      <div className="w-full z-10 relative">
        <div className="text-center mb-12 fade-rise">
          <div className="section-divider mx-auto"></div>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight" style={{ color: '#F5F1E8' }}>
            {projects.title}
          </h2>
          <p className="text-base mt-3 max-w-xl mx-auto" style={{ color: '#AFA89A', whiteSpace: 'pre-line' }}>{projects.description}</p>
        </div>

        <div className="space-y-6">
          {projects.items.map((project, i) => {
            const isReversed = i % 2 !== 0;

            return (
              <div key={i} className="project-card fade-rise">
                <div className={`flex flex-col md:items-center ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

                  {/* Image side — aspect based on orientation to prevent clipping */}
                  <div className="w-full md:w-5/12 p-4 md:p-6 relative">
                    <div className="absolute inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse at center, rgba(214,168,79,0.06) 0%, transparent 60%)', filter: 'blur(40px)' }}></div>
                    <div className={`overflow-hidden relative rounded-xl border border-gold-border/20 shadow-xl ${
                      project.aspect === 'portrait'
                        ? 'aspect-[3/4] max-w-[320px] mx-auto'
                        : project.aspect === 'contain'
                        ? 'aspect-[446/379] w-full'
                        : 'aspect-[16/9] w-full'
                    }`}>
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200'; }}
                      />
                    </div>
                    {/* Result tag */}
                    <div className={`absolute top-6 ${isReversed ? 'right-6 md:right-8' : 'left-6 md:left-8'} z-10`}>
                      <span className="project-result-tag !text-xs bg-base-section/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-gold-border/40 inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                        {project.resultTag}
                      </span>
                    </div>
                  </div>

                  {/* Content side — larger text */}
                  <div className="w-full md:w-7/12 p-4 sm:p-6 md:p-10 flex flex-col justify-center space-y-5 md:space-y-6">
                    <div>
                      <span className="text-xs font-mono tracking-[0.18em] uppercase font-bold" style={{ color: '#D6A84F' }}>
                        Vai trò: {project.role}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-display font-bold mt-1" style={{ color: '#F5F1E8' }}>
                        {project.name}
                      </h3>
                    </div>

                    {/* KPI Strip */}
                    {project.kpis && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 w-full py-1">
                        {project.kpis.map((kpi, kIdx) => (
                          <div 
                            key={kIdx} 
                            className={`flex flex-col justify-center px-4 py-3 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.35)] transition-all hover:shadow-[0_4px_20px_rgba(214,168,79,0.06)] ${
                              kIdx === 2 ? 'col-span-2 sm:col-span-1' : ''
                            }`}
                            style={{ 
                              backgroundColor: 'rgba(214, 168, 79, 0.08)',
                              borderColor: 'rgba(214, 168, 79, 0.28)',
                              borderWidth: '1px',
                              borderStyle: 'solid'
                            }}
                          >
                            <span className="text-lg md:text-xl font-display font-extrabold text-[#F2C76B] tracking-tight leading-none animate-glow-subtle">
                              {kpi.number}
                            </span>
                            <span className="text-[9px] md:text-[10px] font-sans tracking-wider uppercase text-text-secondary font-bold mt-1.5 leading-tight">
                              {kpi.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="space-y-2">
                      <span className="text-xs font-mono tracking-[0.18em] uppercase font-bold text-gold/80">Mình đã làm gì:</span>
                      <ul className="space-y-2 mt-1">
                        {project.what.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-2 shrink-0"></span>
                            <span className="text-sm md:text-base leading-relaxed text-text-secondary font-medium" style={{ color: '#AFA89A', whiteSpace: 'pre-line' }}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => setModal({ images: project.gallery, title: project.name, role: project.role })}
                        className="cta-secondary !text-xs cursor-pointer !py-2.5 !px-5"
                      >
                        Xem ảnh dự án
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {modal && (
        <GalleryModal images={modal.images} title={modal.title} onClose={() => setModal(null)} />
      )}
    </section>
  );
}
