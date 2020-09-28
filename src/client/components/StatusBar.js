import React from 'react';
import '../styles/StatusBar.scss'

const StatusLine = ({ status }) => {
  return (
    <footer id="status-line">
      <p>{status}</p>
    </footer>
  );
};

export { StatusLine };
