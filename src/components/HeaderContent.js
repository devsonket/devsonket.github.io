import React from "react";
import styled from "@emotion/styled";

import NavBar from "./NavBar";
import SocialShare from "./SocialShare";
import { HeaderIntro } from "./HeaderIntro";

export const HeaderEl = styled.div`
  width: 940px;
  margin: 80px auto 0 auto;

  @media only screen and (max-width: 940px) {
    width: 100%;
  }
`;

export const HeaderArea = styled.header`
  background-color: #f8f9fa;

  .contributor {
    list-style: none;
    margin-bottom: 15px;
  }

  .contributor p {
    margin-bottom: 10px;
    font-weight: 900;
  }

  .contributor li {
    display: inline-block;
    position: relative;
    margin: 0 5px;
  }

  .contributor-profile span {
    position: absolute;
    bottom: 5px;
    right: -2px;
    font-weight: bold;
    background-color: #4caf50;
    color: #fff;
    font-size: 11px;
    width: 15px;
    height: 15px;
    line-height: 15px;
    border-radius: 40px;
  }

  .contributor-profile img {
    width: 40px;
    border-radius: 40px;
    border: 3px solid #ffc107;
  }
`;

const HeaderContent = props => {
  const { title, description, contributor } = props;
  return (
    <HeaderArea>
      <NavBar />
      <HeaderEl>
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
    </HeaderArea>
  );
};

export default HeaderContent;
