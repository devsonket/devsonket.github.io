import React, { PureComponent } from "react";
import axios from 'axios';
import styled from "@emotion/styled";

import NavBar from "./NavBar";
import SocialShare from "./SocialShare";
import { HeaderIntro } from "./HeaderIntro";

import contributorMap from "../utils/contributorMap";

export const HeaderEl = styled.div`
  width: 940px;
  margin: 0 auto;
  padding-top: 100px;

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

class HeaderContent extends PureComponent {
  state = {
    contributor: ""
  }

  componentDidMount() {
    if(navigator.userAgent !== 'ReactSnap') {
      this.getContributor(this.props.id);
    }
  }

  getContributor = async id => {
    if (!localStorage.getItem("devCon")) {
      localStorage.setItem("devCon", "{}");
    }
    let contributor;
    try {
      const getLocalContributor = JSON.parse(localStorage.getItem("devCon"));
      const getCurrentId = getLocalContributor[id];
      const getCurrentTime = Date.now();
      let compareTime = 1000 * 60 * 60;
      if (getCurrentId && getCurrentId[1] + compareTime >= getCurrentTime) {
        contributor = getCurrentId[0];
      } else {
        contributor = await axios(
          `https://api.github.com/repos/devsonket/devsonket.github.io/commits?path=data/${id}.json`
        );
        contributor = contributorMap(contributor.data);
        let dataForLocalStorage = [contributor, Date.now()];
        getLocalContributor[id] = dataForLocalStorage;
        localStorage.setItem("devCon", JSON.stringify(getLocalContributor));
      }
    } catch (e) {
      contributor = null;
    }
    this.setState({contributor});
  }

  render() {
    const { title, description } = this.props;
    const { contributor } = this.state;
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
  }
}


export default HeaderContent;
