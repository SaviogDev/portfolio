import React from 'react';
import PROJ from '../constants/designTokens';

export function Pill({ children, color = PROJ.green, dim = false }) {
  return (
    <span style={{
      fontFamily: PROJ.mono,
      fontSize: 11,
      padding: '5px 10px',
      border: `1px solid ${dim ? PROJ.line : color}`,
      color: dim ? PROJ.dim : color,
      borderRadius: 6,
      letterSpacing: '0.08em',
      fontWeight: 600,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }}>
      {children}
    </span>
  );
}

export default Pill;
