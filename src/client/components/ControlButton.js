import React from 'react';

export const ControlButton = ({ title, handler }) => (

  <div className="control-button" onClick={handler}>
    <p>{title}</p>
  </div>
  
);

