import React, { useState, useEffect } from 'react';
import PROJ from '../constants/designTokens';
import Caret from './Caret';
import ScrollReveal from './ScrollReveal';

// Simulação de Terminal Dinâmico Autodigitado
function AutotypingTerminal() {
  const [line1, setLine1] = useState('');
  const [showRes1, setShowRes1] = useState(false);
  const [line2, setLine2] = useState('');
  const [showRes2, setShowRes2] = useState(false);
  const [line3, setLine3] = useState('');
  const [showRes3Step, setShowRes3Step] = useState(0); // 0: none, 1: line 1, 2: line 1+2, 3: all
  const [currentPrompt, setCurrentPrompt] = useState(1); // 1, 2, 3, 4

  useEffect(() => {
    let active = true;
    const runTerminal = async () => {
      const type = async (text, setter, delay = 80) => {
        for (let i = 0; i <= text.length; i++) {
          if (!active) return;
          setter(text.slice(0, i));
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      };

      const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

      while (active) {
        // Reset state
        setLine1('');
        setShowRes1(false);
        setLine2('');
        setShowRes2(false);
        setLine3('');
        setShowRes3Step(0);
        setCurrentPrompt(1);
        await wait(600);

        // Type whoami
        await type('whoami', setLine1);
        await wait(450);
        if (!active) return;
        setShowRes1(true);
        await wait(900);

        // Move to line 2
        if (!active) return;
        setCurrentPrompt(2);
        await type('stack --list', setLine2);
        await wait(450);
        if (!active) return;
        setShowRes2(true);
        await wait(900);

        // Move to line 3
        if (!active) return;
        setCurrentPrompt(3);
        await type('deliver --speed', setLine3);
        await wait(450);
        
        if (!active) return;
        setShowRes3Step(1);
        await wait(300);
        
        if (!active) return;
        setShowRes3Step(2);
        await wait(300);
        
        if (!active) return;
        setShowRes3Step(3);
        await wait(3000); // Hold final output for 3s

        // Type restart prep
        if (!active) return;
        setCurrentPrompt(4);
        await wait(1800);
      }
    };

    runTerminal();
    return () => {
      active = false;
    };
  }, []);

  return (
    <div style={{ padding: '22px 24px', lineHeight: 1.8, color: PROJ.text, minHeight: 215 }}>
      {/* Line 1 */}
      <div>
        <span style={{ color: PROJ.green }}>savio@dev</span> <span style={{ color: PROJ.dim }}>~</span> <span style={{ color: PROJ.green }}>$</span> {line1}
        {currentPrompt === 1 && <Caret />}
      </div>
      {showRes1 && (
        <div style={{ color: PROJ.dim, paddingLeft: 12 }}>
          → dev full stack · 21yo · monity creator
        </div>
      )}

      {/* Line 2 */}
      {currentPrompt >= 2 && (
        <div style={{ marginTop: 6 }}>
          <span style={{ color: PROJ.green }}>savio@dev</span> <span style={{ color: PROJ.dim }}>~</span> <span style={{ color: PROJ.green }}>$</span> {line2}
          {currentPrompt === 2 && <Caret />}
        </div>
      )}
      {showRes2 && (
        <div style={{ color: PROJ.dim, paddingLeft: 12 }}>
          → next · react · node · postgres · prisma
        </div>
      )}

      {/* Line 3 */}
      {currentPrompt >= 3 && (
        <div style={{ marginTop: 6 }}>
          <span style={{ color: PROJ.green }}>savio@dev</span> <span style={{ color: PROJ.dim }}>~</span> <span style={{ color: PROJ.green }}>$</span> {line3}
          {currentPrompt === 3 && <Caret />}
        </div>
      )}
      {showRes3Step >= 1 && (
        <div style={{ color: PROJ.dim, paddingLeft: 12 }}>
          → <span style={{ color: PROJ.green }}>7 dias</span> · landing
        </div>
      )}
      {showRes3Step >= 2 && (
        <div style={{ color: PROJ.dim, paddingLeft: 26 }}>
          → <span style={{ color: PROJ.green }}>14 dias</span> · site institucional
        </div>
      )}
      {showRes3Step >= 3 && (
        <div style={{ color: PROJ.dim, paddingLeft: 26 }}>
          → <span style={{ color: PROJ.green }}>30 dias</span> · e-commerce
        </div>
      )}

      {/* Final line cursor */}
      {currentPrompt === 4 && (
        <div style={{ marginTop: 6 }}>
          <span style={{ color: PROJ.green }}>savio@dev</span> <span style={{ color: PROJ.dim }}>~</span> <span style={{ color: PROJ.green }}>$</span> <Caret />
        </div>
      )}
    </div>
  );
}

export function Hero() {
  const stats = [
    ['21', 'anos · construindo desde os 16'],
    ['3+', 'produtos em produção'],
    ['7d', 'entrega média de landing'],
    ['100%', 'foco em conversão · não em "bonito"']
  ];

  return (
    <section id="top" style={{
      minHeight: '100vh',
      padding: '140px 48px 80px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: PROJ.ink
    }}>
      {/* grid background */}
      <div className="grid-bg" />
      
      {/* glow element */}
      <div className="glow-bg" />

      <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', position: 'relative', zIndex: 10 }}>
        {/* Availability Strip */}
        <ScrollReveal delay={0.1}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 14, 
            marginBottom: 32,
            flexWrap: 'wrap'
          }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: PROJ.panel,
              border: `1px solid ${PROJ.line}`,
              borderRadius: 99,
              padding: '8px 16px',
              fontFamily: PROJ.mono,
              fontSize: 13
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
              <span style={{ color: PROJ.dim }}>disponível</span>
              <span style={{ color: PROJ.text }}>· 2 vagas/mês</span>
            </span>
            <span style={{ fontFamily: PROJ.mono, fontSize: 13, color: PROJ.dim }}>
              dev full stack · 21 anos · sistemas de informação
            </span>
          </div>
        </ScrollReveal>

        {/* Hero Headline */}
        <ScrollReveal delay={0.2}>
          <h1 style={{
            fontFamily: PROJ.sans,
            fontWeight: 950,
            fontSize: 'clamp(44px, 7vw, 110px)',
            lineHeight: 0.95,
            letterSpacing: '-0.05em',
            margin: '0 0 40px 0'
          }}>
            Sites que<br />
            <span style={{ position: 'relative', display: 'inline-block' }}>
              <span style={{ color: PROJ.green }}>vendem</span>
              <Caret />
            </span><br />
            <span style={{ color: PROJ.dim }}>não que</span> <span style={{
              textDecoration: 'line-through',
              textDecorationColor: PROJ.green,
              textDecorationThickness: 'clamp(4px, 0.8vw, 8px)'
            }}>"ficam bonitos".</span>
          </h1>
        </ScrollReveal>

        {/* Hero Content Grid */}
        <div 
          className="grid-2-col"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 48,
            marginTop: 40,
            alignItems: 'center'
          }}
        >
          <ScrollReveal delay={0.3}>
            <div>
              <p style={{
                fontFamily: PROJ.sans,
                fontSize: 'clamp(18px, 2vw, 22px)',
                lineHeight: 1.5,
                color: PROJ.dim,
                maxWidth: 600,
                fontWeight: 500
              }}>
                Sou <b style={{ color: PROJ.text }}>Sávio Gabriel</b>, dev full stack. Construo plataformas e landings com stack moderna, foco em conversão e entrega em <span style={{ color: PROJ.green, fontFamily: PROJ.mono }}>~7 dias</span>.
              </p>

              <div 
                className="hero-buttons"
                style={{ display: 'flex', gap: 14, marginTop: 36 }}
              >
                <a 
                  href="#projetos" 
                  style={{
                    background: PROJ.green,
                    color: PROJ.ink,
                    padding: '18px 28px',
                    borderRadius: 10,
                    fontWeight: 800,
                    textDecoration: 'none',
                    fontFamily: PROJ.sans,
                    fontSize: 16,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    transition: 'transform 0.15s ease, box-shadow 0.15s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = `0 8px 20px -5px ${PROJ.green}60`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Ver projetos
                  <span style={{ fontSize: 20 }}>→</span>
                </a>
                <a 
                  href="#contato" 
                  style={{
                    background: 'transparent',
                    color: PROJ.text,
                    padding: '18px 28px',
                    borderRadius: 10,
                    fontWeight: 700,
                    textDecoration: 'none',
                    fontFamily: PROJ.sans,
                    fontSize: 16,
                    border: `1.5px solid ${PROJ.line}`,
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = PROJ.green;
                    e.currentTarget.style.background = 'rgba(0, 255, 102, 0.02)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = PROJ.line;
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  Quero meu site
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Terminal Mockup */}
          <ScrollReveal delay={0.4}>
            <div style={{
              background: PROJ.panel,
              border: `1px solid ${PROJ.line}`,
              borderRadius: 14,
              padding: 0,
              fontFamily: PROJ.mono,
              fontSize: 13,
              overflow: 'hidden',
              boxShadow: `0 30px 60px -30px ${PROJ.green}30`,
              width: '100%',
              position: 'relative'
            }}>
              {/* Subtle Scanline Overlay */}
              <div style={{
                position: 'absolute',
                top: 0, right: 0, bottom: 0, left: 0,
                background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                backgroundSize: '100% 4px, 6px 100%',
                pointerEvents: 'none',
                opacity: 0.4,
                zIndex: 5
              }} />

              {/* Header bar */}
              <div style={{
                padding: '12px 16px',
                borderBottom: `1px solid ${PROJ.line}`,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: PROJ.panel2,
                position: 'relative',
                zIndex: 10
              }}>
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5e5e' }} />
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ffb84d' }} />
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: PROJ.green }} />
                <span style={{ marginLeft: 12, color: PROJ.dim, fontSize: 12 }}>~/savio · zsh</span>
              </div>
              
              {/* Dynamic typed contents */}
              <AutotypingTerminal />
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Strip */}
        <ScrollReveal delay={0.5}>
          <div 
            className="stats-strip"
            style={{
              marginTop: 80,
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 0,
              borderTop: `1px solid ${PROJ.line}`,
              borderBottom: `1px solid ${PROJ.line}`
            }}
          >
            {stats.map(([number, label], i, arr) => (
              <div 
                key={label} 
                style={{
                  padding: '28px 24px',
                  borderRight: i < arr.length - 1 ? `1px solid ${PROJ.line}` : 'none'
                }}
              >
                <div style={{
                  fontFamily: PROJ.mono,
                  fontSize: 'clamp(36px, 4vw, 48px)',
                  fontWeight: 800,
                  color: PROJ.green,
                  letterSpacing: '-0.04em',
                  lineHeight: 1
                }}>
                  {number}
                </div>
                <div style={{
                  fontFamily: PROJ.mono,
                  fontSize: 12,
                  color: PROJ.dim,
                  marginTop: 8,
                  lineHeight: 1.4
                }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Hero;
