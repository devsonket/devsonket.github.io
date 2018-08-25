import React from 'react';

import NavBar from './NavBar';

export default({searchAItem}) => (
  <header className="header-area">
    <div className="header">
      <NavBar />
      <div className="search">
        <h1>ডেভেলপার চিটশিট</h1>
        <input onChange={(e) => searchAItem(e.target.value)} placeholder="কিসের উপর চিটশিট চাচ্ছেন?" />
        <p>বাংলা চিটশিটের ভান্ডার। নিজের নিজের মাতৃভাষায় চিটশিটের ভান্ডার সমৃদ্ধ করতে আপনিও যোগ দিন</p>
      </div>
    </div>
  </header>
)
