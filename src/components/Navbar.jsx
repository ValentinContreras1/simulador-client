import React, { useRef, useEffect, useState } from 'react';

export const Navbar = ({children, consumo=20}) => {
  
  return (
    <nav className="container">
      <div className="navbar bg-dark mt-4 ps-4 pe-4 rounded-4">
        <div className="col-6">
          <div className="col-2 float-start fs-4 text-white text-end">Consumo:</div>
          <div class="progress col-9 m-2 float-end" role="progressbar" aria-label="Example with label" aria-valuenow={consumo} aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar" style={{ width: `${consumo}%` }}>{consumo}%</div>
          </div>
        </div>
        <div className="col-6 text-end">
          {children}
        </div>
      </div>
  </nav>
  )
}
