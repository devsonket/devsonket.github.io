import React from "react";
import Card from "./Card";
import styled from "@emotion/styled";

import colors from "../utils/colors";

const Top = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > div {
    flex-grow: 1;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(102, 119, 136, 0.55);
    overflow: hidden;
    text-shadow: 0 1px 1px rgba(51, 68, 85, 0.5);
  }
`;

const WantButton = styled.a`
  margin: 0 auto;
  padding: 50px 0;

  & > a {
    display: inline-block;
    text-decoration: none;
    padding: 8px 18px;
    border-radius: 4px;
    font-weight: 600;
    line-height: 1;
    text-align: center;
    transition: 0.2s all ease;

    background: #8BC34A;
    box-shadow: 8px 10px 20px 0 rgba(46, 61, 73, 0.15);
    color: #fff;
    text-shadow: 0 1px 3px #86888e;
  }

  & > a:hover {
    box-shadow: 2px 4px 8px 0 rgba(46, 61, 73, 0.2);
  }

`;

export default ({ tops }) => (
  <Top className="top">
    {tops.length > 0 ?
      tops.map(({ id, title, description }) => (
        <Card
          id={id}
          key={id}
          title={title}
          description={description}
          style={{
            backgroundColor: colors[Math.floor(Math.random() * colors.length)]
          }}
        />
      )) : <WantButton>
      <a href="https://github.com/devsonket/devsonket.github.io/issues/new?title=%E0%A6%95%E0%A6%BF%E0%A6%B8%E0%A7%87%E0%A6%B0%20%E0%A6%9A%E0%A6%BF%E0%A6%9F%E0%A6%B6%E0%A7%80%E0%A6%9F%20%E0%A6%9A%E0%A6%BE%E0%A6%A8?&body=%E0%A6%95%E0%A6%BF%20%E0%A6%95%E0%A6%BF%20%E0%A6%9A%E0%A6%BE%E0%A6%A8%20%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A4%20%E0%A6%B2%E0%A6%BF%E0%A6%96%E0%A7%81%E0%A6%A8&labels=%E0%A6%A8%E0%A6%A4%E0%A7%81%E0%A6%A8%20%E0%A6%86%E0%A6%B0%E0%A7%87%E0%A6%95%E0%A6%9F%E0%A6%BE">নতুন চিটশিট রিকোয়েস্ট</a>
    </WantButton>}
  </Top>
);
