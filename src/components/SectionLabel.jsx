import React from 'react';
import PROJ from '../constants/designTokens';

export function SectionLabel({ n, label }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 32,
      fontFamily: PROJ.mono,
      fontSize: 12,
      color: PROJ.dim,
      letterSpacing: '0.2em',
      fontWeight: 600,
      textTransform: 'uppercase'
    }}>
      <span style={{ color: PROJ.green }}>{`// ${n}`}</span>
      <span style={{ flex: 1, height: 1, background: PROJ.line }} />
      <span>{label}</span>
    </div>
  );
}

export default SectionLabel;
