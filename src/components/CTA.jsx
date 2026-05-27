import React from 'react';
import PROJ from '../constants/designTokens';
import ScrollReveal from './ScrollReveal';

export function CTA() {
  return (
    <section id="contato" style={{ padding: '140px 48px', position: 'relative', overflow: 'hidden', background: PROJ.ink }}>
      {/* Glow background effect */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(ellipse at center, ${PROJ.green}08, transparent 65%)`,
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', textAlign: 'center', zIndex: 10 }}>
        <ScrollReveal>
          <div style={{
            fontFamily: PROJ.mono,
            fontSize: 14,
            color: PROJ.green,
            letterSpacing: '0.2em',
            fontWeight: 700,
            marginBottom: 30
          }}>
            {'> '}vamos construir algo que vende
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 style={{
            fontFamily: PROJ.sans,
            fontWeight: 950,
            fontSize: 'clamp(38px, 6vw, 100px)',
            lineHeight: 0.95,
            letterSpacing: '-0.05em',
            margin: 0
          }}>
            Cansou de site<br />
            que <span style={{
              textDecoration: 'line-through',
              textDecorationColor: PROJ.green,
              textDecorationThickness: 'clamp(4px, 0.8vw, 8px)'
            }}>não converte?</span><br />
            <span style={{ color: PROJ.green }}>Bora trocar.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p style={{
            fontFamily: PROJ.sans,
            fontSize: 'clamp(18px, 2.2vw, 22px)',
            color: PROJ.dim,
            lineHeight: 1.6,
            margin: '36px auto 0',
            maxWidth: 680
          }}>
            Manda mensagem, marco um café virtual de <b style={{ color: PROJ.text }}>30 minutos</b>, e te falo se faz sentido a gente trabalhar junto. Sem enrolação.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          {/* Contact buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 14,
            marginTop: 48,
            flexWrap: 'wrap'
          }}>
            <a 
              href="mailto:saviog.dev@gmail.com" 
              className="animate-glow-pulse"
              style={{
                background: PROJ.green,
                color: PROJ.ink,
                padding: '20px 36px',
                borderRadius: 12,
                fontWeight: 800,
                textDecoration: 'none',
                fontFamily: PROJ.sans,
                fontSize: 18,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                transition: 'all 0.15s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>📧</span> saviog.dev@gmail.com
              <span style={{ fontSize: 22 }}>→</span>
            </a>
            <a 
              href="https://wa.me/5582987335690" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'transparent',
                color: PROJ.text,
                padding: '20px 36px',
                borderRadius: 12,
                fontWeight: 700,
                textDecoration: 'none',
                fontFamily: PROJ.sans,
                fontSize: 18,
                border: `1.5px solid ${PROJ.line}`,
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = PROJ.green;
                e.currentTarget.style.background = 'rgba(0, 255, 102, 0.02)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = PROJ.line;
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>💬</span> WhatsApp
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          {/* Availability tag */}
          <div style={{
            marginTop: 60,
            fontFamily: PROJ.mono,
            fontSize: 13,
            color: PROJ.dim,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: PROJ.panel,
            border: `1px solid ${PROJ.line}`,
            borderRadius: 99,
            padding: '10px 18px'
          }}>
            <span 
              className="animate-pulse"
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: PROJ.green,
                boxShadow: `0 0 12px ${PROJ.green}`
              }} 
            />
            resposta em até 24h · 2 vagas em aberto este mês
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default CTA;
