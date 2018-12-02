import React, { PureComponent } from "react";
import styled from "@emotion/styled";

import NavBar from "./NavBar";
import SocialShare from "./SocialShare";
import { HeaderIntro } from "./HeaderIntro";

export const HeaderEl = styled.div`
  width: 940px;
  margin: 0 auto;

  @media only screen and (max-width: 940px) {
    width: 100%;
  }
`;

const HeaderContent = props => {
  const { title, description, contributor } = props;
  return (
    <header className="header-area">
      <HeaderEl>
        <NavBar />
        <HeaderIntro>
          <h1>{title}</h1>
          <p>{description}</p>
          {contributor && (
            <ul className="contributor no-print">
              <p>কন্ট্রিবিউটর</p>
              {Object.keys(contributor).map(oneContributor => (
                <li key={oneContributor}>
                  <div className="contributor-profile">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={contributor[oneContributor].html_url}
                    >
                      <img
                        alt={contributor[oneContributor].login}
                        src={contributor[oneContributor].avatar_url}
                      />
                    </a>
                    <span>{contributor[oneContributor].count}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="print no-print">
            <button className="btn btn-print" onClick={() => window.print()}>
              প্রিন্ট করুন
            </button>
          </div>
          <SocialShare title={title} description={description} />
        </HeaderIntro>
      </HeaderEl>
    </header>
  );
};

export default HeaderContent;
