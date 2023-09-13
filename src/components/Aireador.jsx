import React from 'react';

export const Aireador = ({children, frecuencia}) => {
const textStyle = {
    textAlign: 'left',
    fontSize: '25px',
    textIndent: '20px',
}


  return (
    <li style={textStyle}>Aireador: {frecuencia}</li>
  );
};