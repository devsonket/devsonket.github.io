import React from "react";
import Container from "./Container";
import styled from "@emotion/styled";

const FooterArea = styled.footer`
  background-color: #eee;
  text-align: center;

  @media print {
    visibility: hidden;
  }

  ul {
    list-style: none;
    margin-bottom: 10px;
  }

  ul li {
    display: inline-block;
    margin: 0 5px;
  }

  ul li a {
    background: #333;
    color: #fff;
    text-decoration: none;
    padding: 2px 10px;
    font-weight: 900;
    text-transform: uppercase;
    border-radius: 4px;
    font-size: 13px;
  }
`;

export default ({ searchAItem }) => (
  <FooterArea>
    <Container>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
            href="https://github.com/devsonket/devsonket.github.io"
          >
            Star
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
            href="https://github.com/devsonket/devsonket.github.io/subscription"
          >
            Watch
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
            href="https://github.com/devsonket/devsonket.github.io/issues/new?title=%E0%A6%B8%E0%A6%AE%E0%A6%B8%E0%A7%8D%E0%A6%AF%E0%A6%BE&body=%E0%A6%B8%E0%A6%AE%E0%A6%B8%E0%A7%8D%E0%A6%AF%E0%A6%BE%20%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A4&labels=%E0%A6%B8%E0%A6%AE%E0%A6%B8%E0%A7%8D%E0%A6%AF%E0%A6%BE"
          >
            Issue
          </a>
        </li>
      </ul>
      <p>এটি সম্পূর্ণ ওপেন সোর্স একটি প্রোজেক্ট</p>
    </Container>
  </FooterArea>
);
