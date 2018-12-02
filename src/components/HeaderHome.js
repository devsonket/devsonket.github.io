import React, { PureComponent } from "react";
import NavBar from "./NavBar";

import { HeaderEl } from "./HeaderContent";
import { HeaderIntro } from "./HeaderIntro";

const HeaderHome = props => {
  const { searchAItem } = props;
  return (
    <header className="header-area">
      <HeaderEl>
        <NavBar />
        <HeaderIntro>
          <h1>ডেভেলপার চিটশিট</h1>
          <p>
            বাংলা চিটশিটের ভান্ডার। নিজের মাতৃভাষায় চিটশিটের ভান্ডার সমৃদ্ধ করতে
            আপনিও যোগ দিন
          </p>
          <input
            onChange={e => searchAItem(e.target.value)}
            placeholder="কিসের উপর চিটশিট চাচ্ছেন?"
          />
        </HeaderIntro>
      </HeaderEl>
    </header>
  );
};

export default HeaderHome;
