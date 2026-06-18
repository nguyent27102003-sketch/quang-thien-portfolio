import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { meta } from './data/portfolioData';

import HeroSection from './components/HeroSection';
import MetricsSection from './components/MetricsSection';
import BrandsSection from './components/BrandsSection';
import TacticalMapSection from './components/TacticalMapSection';
import ProjectsSection from './components/ProjectsSection';
import ToolsSection from './components/ToolsSection';
import ContactSection from './components/ContactSection';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      gsap.utils.toArray('.fade-rise').forEach((el) => {
        gsap.fromTo(el, {
          y: isMobile ? 16 : 40,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: isMobile ? 0.5 : 1,
          ease: 'cubic-bezier(0.25, 1, 0.5, 1)',
          scrollTrigger: {
            trigger: el,
            start: isMobile ? 'top bottom+=150' : 'top 82%',
            toggleActions: isMobile ? 'play none none none' : 'play none none reverse'
          }
        });
      });

      // Nav shrink
      gsap.to('.nav-bar', {
        backdropFilter: 'blur(20px)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '120px top',
          scrub: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen warm-base">
      {/* NOISE OVERLAY */}
      <div className="noise-overlay"></div>

      {/* NAV BAR */}
      <nav className="nav-bar fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-16 py-3 md:py-4" style={{ background: 'rgba(10,10,10,0.72)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(214,168,79,0.16)', boxShadow: '0 4px 30px rgba(0,0,0,0.45)' }}>
        <span className="font-display font-extrabold tracking-[0.16em] text-[11px] sm:text-[13px] md:text-[14px]" style={{ color: '#F5F1E8', textShadow: '0 0 10px rgba(245,241,232,0.1)' }}>
          {meta.author.toUpperCase()}
        </span>
        <span className="font-mono text-[10px] md:text-[11px] tracking-[0.24em] uppercase text-[#F2C76B] font-bold hidden md:block animate-glow-subtle">
          {meta.title}
        </span>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="cta-secondary !py-1.5 !px-3.5 sm:!py-2 sm:!px-5 !text-[10px] sm:!text-[11px] !font-bold bg-[#D6A84F]/10 hover:bg-[#D6A84F]/25 !border-[#D6A84F]/50 hover:!border-[#D6A84F] cursor-pointer transition-all shadow-[0_2px_10px_rgba(214,168,79,0.1)]"
        >
          Liên hệ
        </button>
      </nav>

      {/* MAIN CONTENT */}
      <main className="w-full relative pt-16">
        {/* ═══ GLOBAL FILL LIGHT BEAMS — Behind sections ═══ */}
        {/* Beam 1 — behind Hero */}
        <div className="fill-beam" style={{ top: '5%', left: '-5%', width: '600px', height: '800px' }}></div>
        {/* Beam 2 — behind Metrics */}
        <div className="fill-beam" style={{ top: '15%', right: '0%', width: '500px', height: '600px', transform: 'rotate(-12deg)' }}></div>
        {/* Beam 3 — behind Capabilities & Projects */}
        <div className="fill-beam" style={{ top: '32%', left: '10%', width: '550px', height: '700px' }}></div>
        {/* Beam 4 — behind Projects */}
        <div className="fill-beam" style={{ top: '48%', right: '-5%', width: '500px', height: '600px', transform: 'rotate(-16deg)' }}></div>
        {/* Beam 5 — behind Gallery */}
        <div className="fill-beam" style={{ top: '62%', left: '5%', width: '600px', height: '800px' }}></div>
        {/* Beam 6 — behind Tools & Contact */}
        <div className="fill-beam" style={{ top: '80%', right: '5%', width: '450px', height: '500px', transform: 'rotate(-14deg)' }}></div>

        <HeroSection />
        <MetricsSection />
        <BrandsSection />
        <TacticalMapSection />
        <ProjectsSection />
        <ToolsSection />
        <ContactSection />
      </main>
    </div>
  );
}
