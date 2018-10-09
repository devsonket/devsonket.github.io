import React from 'react';

import NavBar from './NavBar';

export default({searchAItem}) => (
  <header className="header-area">
    <div className="header">
      <NavBar />
      <div className="intro">
        <h1>Single Item</h1>
        <p>বাংলা চিটশিটের ভান্ডার। নিজের মাতৃভাষায় চিটশিটের ভান্ডার সমৃদ্ধ করতে আপনিও যোগ দিন</p>
      </div>
    </div>
  </header>
)
