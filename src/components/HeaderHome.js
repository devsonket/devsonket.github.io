import React, { PureComponent } from 'react';

import NavBar from './NavBar';

export default class HeaderHome extends PureComponent {
  render() {
    const { searchAItem } = this.props;

    return (
      <header className="header-area">
        <div className="header">
          <NavBar />
          <div className="intro">
            <h1>ডেভেলপার চিটশিট</h1>
            <p>বাংলা চিটশিটের ভান্ডার। নিজের মাতৃভাষায় চিটশিটের ভান্ডার সমৃদ্ধ করতে আপনিও যোগ দিন</p>
            <input onChange={(e) => searchAItem(e.target.value)} placeholder="কিসের উপর চিটশিট চাচ্ছেন?" />
          </div>
        </div>
      </header>
    )
  }
}
