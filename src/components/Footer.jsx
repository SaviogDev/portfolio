import React from 'react';
import PROJ from '../constants/designTokens';

export function Footer() {
  const groups = [
    { 
      title: 'Navegação', 
      items: [
        ['Sobre', '#sobre'], 
        ['Stack', '#stack'], 
        ['Projetos', '#projetos'], 
        ['Processo', '#processo']
      ] 
    },
    { 
      title: 'Serviços', 
      items: [
        ['Landing page', '#contato'], 
        ['Site institucional', '#contato'], 
        ['E-commerce', '#contato'], 
        ['Plataforma SaaS', '#contato']
      ] 
    },
    { 
      title: 'Contato', 
      items: [
        ['Email', 'mailto:saviog.dev@gmail.com'], 
        ['WhatsApp', 'https://wa.me/5582987335690'], 
        ['LinkedIn', 'https://www.linkedin.com/in/saviog-dev/?skipRedirect=true'], 
        ['Instagram', 'https://www.instagram.com/saviog.dev?igsh=MW1sYzRpeXdhYTlubQ=='], 
        ['GitHub', 'https://github.com/SaviogDev']
      ] 
    }
  ];

  return (
    <footer style={{
      padding: '60px 48px 40px',
      borderTop: `1px solid ${PROJ.line}`,
      background: PROJ.ink
    }}>
      <div 
        className="footer-grid"
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: 60
        }}
      >
        {/* Brand info */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{
              width: 36,
              height: 36,
              border: `1.5px solid ${PROJ.green}`,
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: PROJ.mono,
              fontWeight: 800,
              fontSize: 16,
              letterSpacing: '-0.06em'
            }}>
              S<span style={{ color: PROJ.green }}>G</span>
            </div>
            <span style={{ fontFamily: PROJ.sans, fontWeight: 800, fontSize: 18 }}>Sávio Gabriel</span>
          </div>
          <div style={{ fontFamily: PROJ.mono, fontSize: 13, color: PROJ.dim, lineHeight: 1.7 }}>
            Dev Full Stack · 21 anos<br />
            <span style={{ color: PROJ.green }}>{'</> '}</span>construindo sites que vendem<br />
            Brasil · remoto worldwide
          </div>
        </div>

        {/* Link Groups */}
        {groups.map((g) => (
          <div key={g.title}>
            <div style={{ 
              fontFamily: PROJ.mono, 
              fontSize: 11, 
              color: PROJ.green, 
              letterSpacing: '0.2em', 
              fontWeight: 700, 
              marginBottom: 14 
            }}>
              // {g.title.toUpperCase()}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {g.items.map(([label, href]) => (
                <a 
                  key={label} 
                  href={href || '#'} 
                  target={href.startsWith('http') ? '_blank' : '_self'}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
                  style={{
                    fontFamily: PROJ.sans,
                    fontSize: 14,
                    color: PROJ.text,
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    width: 'fit-content'
                  }}
                  onMouseOver={(e) => e.target.style.color = PROJ.green}
                  onMouseOut={(e) => e.target.style.color = PROJ.text}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Bottom Strip */}
      <div style={{
        maxWidth: 1280,
        margin: '48px auto 0',
        paddingTop: 24,
        borderTop: `1px solid ${PROJ.line}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: PROJ.mono,
        fontSize: 12,
        color: PROJ.dim,
        flexWrap: 'wrap',
        gap: 14
      }}>
        <div>
          <span style={{ color: PROJ.green }}>$</span> echo "© 2026 Sávio Gabriel. Construído em <span style={{ color: PROJ.green }}>React + Vite</span>, com café."
        </div>
        <div>v.1.0 · last_deploy <span style={{ color: PROJ.green }}>now</span></div>
      </div>
    </footer>
  );
}

export default Footer;
