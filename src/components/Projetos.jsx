import React from 'react';
import PROJ from '../constants/designTokens';
import PROJECTS from '../constants/projectsData';
import SectionLabel from './SectionLabel';
import ProjectCard from './ProjectCard';
import ScrollReveal from './ScrollReveal';

export function Projetos() {
  return (
    <section id="projetos" style={{ padding: '120px 48px', background: PROJ.ink }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <ScrollReveal>
          <SectionLabel n="03" label="Projetos · cases reais" />
        </ScrollReveal>

        <div 
          className="grid-2-col"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: 60, 
            marginBottom: 40, 
            alignItems: 'end' 
          }}
        >
          <ScrollReveal delay={0.1}>
            <h2 style={{
              fontFamily: PROJ.sans,
              fontWeight: 900,
              fontSize: 'clamp(38px, 5vw, 72px)',
              lineHeight: 0.95,
              letterSpacing: '-0.04em'
            }}>
              O que eu já<br /><span style={{ color: PROJ.green }}>construí.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p style={{ fontFamily: PROJ.sans, fontSize: 18, lineHeight: 1.6, color: PROJ.dim }}>
              Não é template comprado. Não é landing genérica.<br />
              É código escrito linha por linha — incluindo um <b style={{ color: PROJ.green }}>SaaS inteiro feito sozinho</b>.
            </p>
          </ScrollReveal>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} proj={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projetos;
