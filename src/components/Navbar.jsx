import React from 'react';

export const Navbar = () => {
  const navbarStyle = {
    backgroundColor: '#1e1e1e',
    width: '90%',
    margin: 'auto',
    padding: '20px 40px 20px 40px',
    color: 'white',
    borderRadius: '20px',
  };

const textStyle = {
    float: 'left',
    width: '50%',
    fontSize: '25px',
}

  const buttonStyle = {
    textAlign: 'right',
    width: '50%',
    color: '#fff',
    fontSize: '25px',
    background: 'none',
    border: 'none',
    paddingRight: '50px',
  };

  return (
    <div style={navbarStyle}>
      <div style={textStyle}>Consumo:</div>
      <button style={buttonStyle}>+ Crear</button>
    </div>
  );
};


