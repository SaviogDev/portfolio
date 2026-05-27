import React, { useState, useEffect } from 'react';
import PROJ from '../constants/designTokens';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    ['Sobre', '#sobre'],
    ['Stack', '#stack'],
    ['Projetos', '#projetos'],
    ['Processo', '#processo']
  ];

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '14px 48px' : '22px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrolled ? 'rgba(5, 8, 7, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? `1px solid ${PROJ.line}` : '1px solid transparent',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        {/* Logo */}
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: PROJ.text }}>
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
          <span style={{ fontFamily: PROJ.mono, fontSize: 13, color: PROJ.dim }}>
            <span style={{ color: PROJ.green }}>{'~/'}</span>savio.dev
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div 
          className="desktop-nav"
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 32, 
            fontFamily: PROJ.mono, 
            fontSize: 13 
          }}
        >
          {navLinks.map(([label, href]) => (
            <a 
              key={href} 
              href={href} 
              style={{ color: PROJ.dim, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.target.style.color = PROJ.green}
              onMouseOut={(e) => e.target.style.color = PROJ.dim}
            >
              <span style={{ color: PROJ.green }}>$</span> {label}
            </a>
          ))}
          <a 
            href="#contato" 
            style={{
              background: PROJ.green, 
              color: PROJ.ink, 
              padding: '10px 18px', 
              borderRadius: 8,
              fontWeight: 700, 
              textDecoration: 'none', 
              fontFamily: PROJ.mono, 
              fontSize: 13,
              transition: 'all 0.15s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = `0 4px 15px -3px ${PROJ.green}80`;
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            orçamento →
          </a>
        </div>

        {/* Hamburger Toggle (Mobile Only) */}
        <button 
          className="mobile-nav-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            flexDirection: 'column',
            gap: 5,
            padding: 8,
            zIndex: 110
          }}
        >
          <div style={{
            width: 22,
            height: 2,
            background: PROJ.text,
            transition: 'all 0.3s ease',
            transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
          }} />
          <div style={{
            width: mobileMenuOpen ? 0 : 22,
            height: 2,
            background: PROJ.text,
            transition: 'all 0.3s ease',
            opacity: mobileMenuOpen ? 0 : 1
          }} />
          <div style={{
            width: 22,
            height: 2,
            background: PROJ.text,
            transition: 'all 0.3s ease',
            transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
          }} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: 'rgba(5, 8, 7, 0.98)',
          zIndex: 95,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 24,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)'
        }}
      >
        {navLinks.map(([label, href]) => (
          <a 
            key={href} 
            href={href} 
            onClick={() => setMobileMenuOpen(false)}
            style={{ 
              color: PROJ.text, 
              fontSize: 22, 
              fontFamily: PROJ.mono, 
              textDecoration: 'none', 
              transition: 'color 0.2s' 
            }}
            onMouseOver={(e) => e.target.style.color = PROJ.green}
            onMouseOut={(e) => e.target.style.color = PROJ.text}
          >
            <span style={{ color: PROJ.green }}>$</span> {label}
          </a>
        ))}
        <a 
          href="#contato" 
          onClick={() => setMobileMenuOpen(false)}
          style={{
            background: PROJ.green, 
            color: PROJ.ink, 
            padding: '14px 28px', 
            borderRadius: 8,
            fontWeight: 700, 
            textDecoration: 'none', 
            fontFamily: PROJ.mono, 
            fontSize: 16,
            marginTop: 12
          }}
        >
          orçamento →
        </a>
      </div>

      {/* Add styling rules directly to style tag or in index.css */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}

export default Nav;
