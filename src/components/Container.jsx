import React from 'react';

export const Container = ({ children }) => {
  const containerStyle = {
    backgroundColor: '#d9d9d9',
    width: 'auto',
    height: '1000px',
    padding: '20px',
  };

  return (
    <div style={containerStyle}>
        {children}
    </div>
  );
};