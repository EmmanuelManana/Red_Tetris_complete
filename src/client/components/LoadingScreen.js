import React, { useState, useEffect } from 'react';
import '../styles/LoadingScreen.scss';

const LoadingScreen = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const forcedRefreshed = event => {
    
    return (window.location.href = `http://127.0.0.1:3000/#${room}[${name}]`).then(window.location.reload())
    
  };
  
  return (
    //BEM
    <div className="loadingScreen">
      <p className="loadingScreen__title">_RedTetris</p>
      <form>
        <input
          className="loadingScreen_name"
          type="text"
          placeholder="Enter username"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <input
          className="loadingScreen__room"
          type="text"
          placeholder="Enter room name"
          value={room}
          onChange={event => setRoom(event.target.value)}
        />
      </form>
      <button type="submit" onClick={forcedRefreshed}>
        <p>Enter Room</p>
      </button> 
    </div>
  );
};

export { LoadingScreen };
