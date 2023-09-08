import React from 'react';

export const Laguna = ({children}) => {
  const cardStyle = {
    backgroundColor: '#1e1e1e',
    width: '25%',
    padding: '20px 40px 20px 40px',
    color: 'white',
    borderRadius: '20px',
    margin: '20px',
    textAlign: 'left',
    textIndent: '20px',
    float: 'left'
  };

const titleStyle = {
    color: 'white',
    fontSize: '30px',
    marginBottom: '30px',
}

  const sensorStyle = {
    color: 'white',
    fontSize: '20px',
    marginBottom: '5px'
  };

  return (
    <div style={cardStyle}>
      <div style={titleStyle}>Laguna</div>
      <div style={sensorStyle}>Sensor 1: Lectura</div>
      <div style={sensorStyle}>Sensor 2: Lectura</div>
      {children}
    </div>
  );
};

