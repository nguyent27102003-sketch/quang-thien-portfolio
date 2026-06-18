import React from 'react';
import { workflow } from '../data/portfolioData';

export default function WorkflowSection() {
  return (
    <section id="workflow" className="w-full py-16 md:py-24 px-6 md:px-20 lg:px-28 relative" style={{ backgroundColor: '#0B0B0B' }}>
      <div className="w-full z-10 relative">
        <div className="text-center mb-12 fade-rise">
          <div className="section-divider mx-auto"></div>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight" style={{ color: '#F5F1E8', textWrap: 'balance' }}>
            {workflow.title}
          </h2>
          <p className="text-base mt-3 max-w-2xl mx-auto" style={{ color: '#AFA89A', textWrap: 'balance', whiteSpace: 'pre-line' }}>{workflow.description}</p>
        </div>

        {/* DESKTOP — Horizontal Timeline */}
        <div className="hidden md:block relative fade-rise">
          <div className="workflow-line"></div>
          <div className="grid grid-cols-4 gap-5">
            {workflow.steps.map((step, i) => (
              <div key={i} className="workflow-step">
                <div className="workflow-dot"></div>
                <div className="glass-card !rounded-xl p-6 space-y-3">
                  <span className="text-2xl font-display font-bold gold-text">{step.number}</span>
                  <h4 className="text-lg font-display font-bold" style={{ color: '#F5F1E8' }}>{step.name}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: '#AFA89A', whiteSpace: 'pre-line' }}>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE — Vertical Timeline */}
        <div className="md:hidden relative fade-rise">
          <div className="workflow-line-mobile"></div>
          <div className="space-y-5 pl-7">
            {workflow.steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="workflow-dot-mobile absolute left-[-21px] top-1"></div>
                <div className="glass-card !rounded-xl p-5 space-y-2">
                  <span className="text-xl font-display font-bold gold-text">{step.number}</span>
                  <h4 className="text-base font-display font-bold" style={{ color: '#F5F1E8' }}>{step.name}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: '#AFA89A', whiteSpace: 'pre-line' }}>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
