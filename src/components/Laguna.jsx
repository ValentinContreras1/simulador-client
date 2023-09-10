import React from 'react';

import "./Knob.css"

export const Laguna = ({children}) => {
  const cardStyle = {
    backgroundColor: '#1e1e1e',
    padding: '20px 40px 20px 40px',
    color: 'white',
    borderRadius: '20px',
    margin: '20px',
    textAlign: 'left',
    // textIndent: '20px',
  };

  const leftSyle = {
    float: 'left',
    width: '60%',
  }

  const rightSyle = {
    float: 'right',
    width: '40%',
    textAlign: 'center'
  }

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
      <div style={leftSyle}>
        <div style={titleStyle}>Laguna</div>
        <div style={sensorStyle}>Sensor 1: Lectura</div>
        <div style={sensorStyle}>Sensor 2: Lectura</div>
      </div>
      <div style={rightSyle}>
        <div>
          <input type="range" id="volume" name="volume" min="0" max="11" />
          <label for="volume">Frecuencia</label>
        </div>
        <div>
          <input type="range" id="volume" name="volume" min="0" max="11" />
          <label for="volume">Frecuencia</label>
        </div>
      </div>
      {children}
    </div>
  );
};

