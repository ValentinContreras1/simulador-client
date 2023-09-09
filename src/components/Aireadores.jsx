import React from 'react';

export const Aireadores = ({children}) => {
  const navbarStyle = {
    backgroundColor: '#9d9d9d',
    width: '100%',
    height: '150px',
    margin: 'auto',
    color: 'white',
    borderRadius: '20px',
    marginTop: '30px',
    overflowY: 'scroll',
    paddingTop: '10px'
  };


  return (
    <ul style={navbarStyle}>
      {children}
    </ul>
  );
};