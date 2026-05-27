import React from 'react';
import PROJ from '../constants/designTokens';
import SectionLabel from './SectionLabel';
import ScrollReveal from './ScrollReveal';

export function Processo() {
  const steps = [
    { d: 'D-7', t: 'Briefing direto', txt: 'Call de 30min. Sem questionário de 50 perguntas. Eu pergunto o que importa: objetivo, público, prazo, orçamento.' },
    { d: 'D-5', t: 'Wireframe + copy', txt: 'Mando o esqueleto da página antes de pixelar. Copy de cada bloco já pensado em conversão. Aprovou? Continuo.' },
    { d: 'D-2', t: 'Design + dev em paralelo', txt: 'Componente desenhado já vira componente em código. Sem retrabalho. Stack moderna, performance de fábrica.' },
    { d: 'D-0', t: 'Deploy + entrega', txt: 'Site no ar. Domínio configurado. Analytics, pixel, formulário, WhatsApp tudo testado. Treino você pra editar textos.' },
    { d: 'D+30', t: 'Acompanhamento', txt: '1 mês de suporte incluído. Ajustes, bugs, dúvidas. Depois disso, mensalidade simbólica ou one-off.' }
  ];

  return (
    <section id="processo" style={{ padding: '120px 48px', background: PROJ.panel, position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <ScrollReveal>
          <SectionLabel n="04" label="Processo" />
        </ScrollReveal>

        <div 
          className="grid-2-col"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1.5fr', 
            gap: 60, 
            marginBottom: 60 
          }}
        >
          <ScrollReveal delay={0.1}>
            <h2 style={{
              fontFamily: PROJ.sans,
              fontWeight: 900,
              fontSize: 'clamp(38px, 5vw, 64px)',
              lineHeight: 0.95,
              letterSpacing: '-0.04em'
            }}>
              Do brief ao<br />deploy em<br /><span style={{ color: PROJ.green }}>7 dias.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p style={{ 
              fontFamily: PROJ.sans, 
              fontSize: 18, 
              lineHeight: 1.6, 
              color: PROJ.dim, 
              alignSelf: 'end' 
            }}>
              Sem reuniões inúteis. Sem "vou pensar e te volto na semana que vem".<br />
              Processo enxuto, comunicação direta, entrega no prazo.
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline Container */}
        <div style={{ position: 'relative' }}>
          {/* Timeline Vertical Line */}
          <div 
            className="timeline-line"
            style={{
              position: 'absolute',
              left: 60,
              top: 30,
              bottom: 30,
              width: 2,
              background: `linear-gradient(${PROJ.green}, ${PROJ.greenDeep})`,
              opacity: 0.4
            }} 
          />

          {steps.map((s, index) => (
            <ScrollReveal key={s.d} delay={0.1 + index * 0.1}>
              <div 
                className="timeline-step"
                style={{
                  display: 'flex',
                  gap: 40,
                  marginBottom: 32,
                  position: 'relative'
                }}
              >
                {/* Bullet Column */}
                <div 
                  className="timeline-step-container"
                  style={{
                    width: 120,
                    flexShrink: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative'
                  }}
                >
                  <div 
                    className="timeline-step-bullet"
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: PROJ.ink,
                      border: `2px solid ${PROJ.green}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: PROJ.mono,
                      fontSize: 13,
                      fontWeight: 800,
                      color: PROJ.green,
                      zIndex: 2,
                      boxShadow: `0 0 10px ${PROJ.green}20`,
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.boxShadow = `0 0 18px ${PROJ.green}50`;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = `0 0 10px ${PROJ.green}20`;
                    }}
                  >
                    {s.d}
                  </div>
                </div>

                {/* Step Card Content */}
                <div 
                  style={{
                    flex: 1,
                    background: PROJ.ink,
                    border: `1px solid ${PROJ.line}`,
                    borderRadius: 14,
                    padding: 24,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = PROJ.green;
                    e.currentTarget.style.boxShadow = `0 10px 25px -10px ${PROJ.green}10`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = PROJ.line;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    fontFamily: PROJ.sans,
                    fontWeight: 800,
                    fontSize: 24,
                    letterSpacing: '-0.02em'
                  }}>
                    {s.t}
                  </div>
                  <div style={{
                    fontFamily: PROJ.sans,
                    fontSize: 16,
                    color: PROJ.dim,
                    marginTop: 8,
                    lineHeight: 1.6
                  }}>
                    {s.txt}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Processo;
