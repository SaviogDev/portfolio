import React from 'react';
import PROJ from '../constants/designTokens';
import SectionLabel from './SectionLabel';
import Pill from './Pill';
import ScrollReveal from './ScrollReveal';

export function Sobre() {
  const tags = [
    '+5 anos código',
    'solo product builder',
    'foco mobile-first',
    'stack 2026',
    'clean architecture',
    'SEO técnico'
  ];

  return (
    <section id="sobre" style={{ padding: '120px 48px', position: 'relative', background: PROJ.ink }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <ScrollReveal>
          <SectionLabel n="01" label="Sobre" />
        </ScrollReveal>

        <div 
          className="grid-2-col"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: 80, 
            alignItems: 'start' 
          }}
        >
          <ScrollReveal delay={0.1}>
            <div>
              <h2 style={{
                fontFamily: PROJ.sans,
                fontWeight: 900,
                fontSize: 'clamp(38px, 5vw, 68px)',
                lineHeight: 0.95,
                letterSpacing: '-0.04em'
              }}>
                Dev de verdade.<br />
                Não <span style={{ color: PROJ.green }}>"social media"</span><br />
                vestido de dev.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <p style={{ fontFamily: PROJ.sans, fontSize: 20, lineHeight: 1.6, color: PROJ.text }}>
                Comecei a programar aos 16. Hoje, aos 21, curso Sistemas de Informação e desenvolvi sozinho a <b style={{ color: PROJ.green }}>Monity</b> — plataforma SaaS de gestão financeira, do banco de dados ao deploy.
              </p>
              <p style={{ fontFamily: PROJ.sans, fontSize: 18, lineHeight: 1.6, color: PROJ.dim }}>
                Já entreguei landing page convertendo para academia, e-commerce completo de loja de time, dashboards internos. Trabalho com a stack mais atual do mercado — não com plugin de WordPress comprado no Envato.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
                {tags.map((t) => (
                  <Pill key={t} dim>{t}</Pill>
                ))}
              </div>

              <div style={{
                marginTop: 24,
                padding: 24,
                background: PROJ.panel,
                borderRadius: 14,
                border: `1px solid ${PROJ.line}`,
                borderLeft: `3px solid ${PROJ.green}`
              }}>
                <div style={{ 
                  fontFamily: PROJ.mono, 
                  fontSize: 11, 
                  color: PROJ.green, 
                  letterSpacing: '0.2em', 
                  fontWeight: 700, 
                  marginBottom: 10 
                }}>
                  // MANIFESTO
                </div>
                <div style={{ fontFamily: PROJ.sans, fontSize: 18, lineHeight: 1.5, fontStyle: 'italic' }}>
                  "Site não é portfólio do designer.<br />É vendedor 24/7. Se não vende, é despesa."
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
