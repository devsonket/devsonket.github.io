import React, { PureComponent } from "react";
import styled from "@emotion/styled";

import NavBar from "./NavBar";
import SocialShare from "./SocialShare";

export const HeaderEl = styled.div`
  width: 940px;
  margin: 0 auto;

  @media only screen and (max-width: 940px) {
    width: 100%;
  }
`;

export const HeaderIntro = styled.div`
  padding: 0 50px;
  text-align: center;
  padding-bottom: 100px;

  @media only screen and (max-width: 460px) {
    padding: 0 15px;
    padding-bottom: 15px;
  }

  @media print {
    padding-bottom: 0px;
  }

  input {
    width: 100%;
    border: none;
    padding: 15px;
    border-radius: 4px;
    box-shadow: 0 6px 8px rgba(102, 119, 136, 0.03),
      0 1px 2px rgba(102, 119, 136, 0.3);
    transition: 0.2s all ease;
  }

  input:focus {
    outline: none;
    box-shadow: 0 0 0 4px #d6dcdb;
  }

  p {
    margin-top: 0px;
    color: #485663;
    font-size: 15px;
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
