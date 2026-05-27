import React from 'react';
import PROJ from '../constants/designTokens';
import ScrollReveal from './ScrollReveal';

export function ProjectCard({ proj, idx }) {
  const flip = idx % 2 === 1;
  return (
    <ScrollReveal delay={0.1}>
      <div 
        className="project-card-container"
        style={{
          display: 'grid',
          gridTemplateColumns: flip ? '1fr 1.1fr' : '1.1fr 1fr',
          gap: 60,
          alignItems: 'center',
          padding: '80px 0',
          borderBottom: `1px solid ${PROJ.line}`
        }}
      >
        {/* Mock preview */}
        <div 
          className="project-mock-container"
          style={{ 
            order: flip ? 2 : 1, 
            position: 'relative',
            width: '100%'
          }}
        >
          <div style={{
            position: 'absolute',
            inset: -2,
            background: `linear-gradient(135deg, ${proj.accent}, transparent 60%)`,
            opacity: 0.4,
            borderRadius: 14,
            filter: 'blur(30px)',
            pointerEvents: 'none'
          }} />
          <div style={{
            position: 'relative',
            aspectRatio: '16/10',
            borderRadius: 14,
            border: `1px solid ${PROJ.line}`,
            overflow: 'hidden',
            boxShadow: `0 30px 80px -30px ${proj.accent}40`,
            background: PROJ.panel2
          }}>
            <img 
              src={proj.image} 
              alt={proj.title} 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div 
          className="project-content-container"
          style={{ order: flip ? 1 : 2 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
            <span style={{
              fontFamily: PROJ.mono,
              fontWeight: 800,
              fontSize: 42,
              color: proj.accent,
              letterSpacing: '-0.04em',
              lineHeight: 1
            }}>{proj.n}</span>
            <span style={{ 
              fontFamily: PROJ.mono, 
              fontSize: 12, 
              color: PROJ.dim, 
              letterSpacing: '0.18em', 
              fontWeight: 600, 
              textTransform: 'uppercase' 
            }}>
              {proj.tag}
            </span>
          </div>

          <h3 style={{
            fontFamily: PROJ.sans,
            fontWeight: 950,
            fontSize: 'clamp(32px, 4vw, 56px)',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            margin: 0
          }}>{proj.title}</h3>

          <div style={{ 
            fontFamily: PROJ.mono, 
            fontSize: 14, 
            color: proj.accent, 
            marginTop: 8, 
            fontWeight: 600 
          }}>
            {proj.role}
          </div>

          <p style={{ 
            fontFamily: PROJ.sans, 
            fontSize: 18, 
            lineHeight: 1.6, 
            color: PROJ.dim, 
            marginTop: 22, 
            maxWidth: 520 
          }}>
            {proj.pitch}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 22 }}>
            {proj.stack.map((s) => (
              <span 
                key={s} 
                style={{
                  fontFamily: PROJ.mono,
                  fontSize: 11,
                  padding: '5px 10px',
                  background: PROJ.panel,
                  border: `1px solid ${PROJ.line}`,
                  color: PROJ.text,
                  borderRadius: 6,
                  fontWeight: 500
                }}
              >
                {s}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 0, marginTop: 28, borderTop: `1px solid ${PROJ.line}` }}>
            {proj.results.map(([k, v], i, a) => (
              <div 
                key={k} 
                style={{
                  flex: 1,
                  padding: '18px 0',
                  borderRight: i < a.length - 1 ? `1px solid ${PROJ.line}` : 'none',
                  paddingLeft: i > 0 ? 16 : 0
                }}
              >
                <div style={{ 
                  fontFamily: PROJ.mono, 
                  fontSize: 10, 
                  color: PROJ.dim, 
                  letterSpacing: '0.15em', 
                  fontWeight: 600, 
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }} title={k}>
                  {k}
                </div>
                <div style={{ 
                  fontFamily: PROJ.sans, 
                  fontSize: 'clamp(20px, 2.5vw, 26px)', 
                  fontWeight: 800, 
                  color: PROJ.text, 
                  letterSpacing: '-0.02em', 
                  marginTop: 4 
                }}>
                  {v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 1024px) {
          .project-card-container {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding: 50px 0 !important;
          }
          .project-mock-container {
            order: 1 !important;
          }
          .project-content-container {
            order: 2 !important;
          }
        }
      `}</style>
    </ScrollReveal>
  );
}

export default ProjectCard;
