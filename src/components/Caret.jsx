import React from 'react';
import PROJ from '../constants/designTokens';

export function Caret({ color = PROJ.green }) {
  return (
    <span 
      className="animate-caret"
      style={{
        display: 'inline-block',
        width: '0.6em',
        height: '1em',
        background: color,
        marginLeft: 4,
        verticalAlign: '-0.12em'
      }} 
    />
  );
}

export default Caret;
