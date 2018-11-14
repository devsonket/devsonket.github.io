import React from 'react';

import NavBar from './NavBar';
import SocialShare from './SocialShare';

export default({title, description}) => (
  <header className="header-area">
    <div className="header">
      <NavBar />
      <div className="intro">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="print no-print">
          <button className="btn btn-print" onClick={() => window.print()}>প্রিন্ট করুন</button>
        </div>
        <SocialShare title={title} description={description} />
      </div>
    </div>
  </header>
)
