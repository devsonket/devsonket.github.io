import React from "react";
import styled from "@emotion/styled";

const Logo = styled.a`
  text-decoration: none;
  font-size: 26px;
  color: #333;

  @media only screen and (max-width: 460px) {
    display: block;
    text-align: center;
  }

  span {
    background-color: #333;
    color: #fff;
    padding: 0 8px;
    border-radius: 4px;
    margin-right: 5px;
  }

  @media print {
    color: #fff;
    filter: invert(100%);

    span {
      background-color: #fff;
      color: #000;
      padding: 0 8px;
      font-weight: 900;
    }
  }
`;

export function BrandLogo() {
  return (
    <Logo href="/">
      <span>ডেভ</span>সংকেত
    </Logo>
  );
}
