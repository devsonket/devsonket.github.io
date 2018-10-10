import React from 'react';

import NavBar from './NavBar';

export default({title, description}) => (
  <header className="header-area">
    <div className="header">
      <NavBar />
      <div className="intro">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  </header>
)
