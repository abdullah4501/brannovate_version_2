// Loading.js
import React from 'react';
import './Loading.css'; // Optional styling
import logo from '../assets/images/logo.gif'; // Import your logo

function Loading() {
  return (
    <div className="loading-container">
      <img src={logo} alt="Loading..." className="loading-logo" />
      <div className="loading-spinner"></div> {/* Optional spinner */}
    </div>
  );
}

export default Loading;