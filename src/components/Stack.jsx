import React from 'react';
import PROJ from '../constants/designTokens';
import SectionLabel from './SectionLabel';
import ScrollReveal from './ScrollReveal';

export function Stack() {
  const groups = [
    { title: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Framer Motion', 'shadcn/ui'] },
    { title: 'Backend', items: ['Node.js', 'Express', 'Fastify', 'Prisma ORM', 'REST', 'GraphQL'] },
    { title: 'Database', items: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'Supabase'] },
    { title: 'Cloud/DX', items: ['Vercel', 'AWS', 'Docker', 'GitHub Actions', 'Cloudflare', 'Sentry'] },
    { title: 'Pagamentos', items: ['Stripe', 'Mercado Pago', 'Pix · Asaas', 'Pagar.me'] },
    { title: 'Integrações', items: ['WhatsApp Cloud', 'Resend', 'OpenAI', 'Google APIs', 'Meta Pixel'] }
  ];

  return (
    <section id="stack" style={{ padding: '120px 48px', background: PROJ.panel, position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <ScrollReveal>
          <SectionLabel n="02" label="Stack" />
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
              A stack mais<br />atual do<br /><span style={{ color: PROJ.green }}>mercado.</span>
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
              Sem framework de 2014, sem template comprado, sem "tenho um sobrinho que mexe com isso". 
              Mesma stack que Vercel, Linear, Cal.com e os melhores produtos do mundo usam — mas com preço de freela brasileiro.
            </p>
          </ScrollReveal>
        </div>

        {/* Stack Groups Grid */}
        <div 
          className="stack-grid"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: 14 
          }}
        >
          {groups.map((g, index) => (
            <ScrollReveal key={g.title} delay={0.1 + index * 0.08} style={{ display: 'flex' }}>
              <div 
                style={{
                  background: PROJ.ink,
                  border: `1px solid ${PROJ.line}`,
                  borderRadius: 14,
                  padding: 24,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = PROJ.green;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = `0 10px 25px -10px ${PROJ.green}15`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = PROJ.line;
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  fontFamily: PROJ.mono,
                  fontSize: 11,
                  color: PROJ.green,
                  letterSpacing: '0.18em',
                  fontWeight: 700,
                  marginBottom: 18
                }}>
                  // {g.title.toUpperCase()}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 'auto' }}>
                  {g.items.map((it) => (
                    <span 
                      key={it} 
                      style={{
                        fontFamily: PROJ.mono,
                        fontSize: 12,
                        padding: '6px 10px',
                        background: PROJ.panel2,
                        border: `1px solid ${PROJ.line}`,
                        borderRadius: 6,
                        color: PROJ.text,
                        fontWeight: 500
                      }}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stack;
