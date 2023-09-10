import React from 'react';

export const Grid = ({ children }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '25% 25% 25% 25%',
    marginTop: '20px'
  };

  return (
    <div style={gridStyle}>
        {children}
    </div>
  );
};