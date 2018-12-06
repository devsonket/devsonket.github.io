import React from "react";
import styled from "@emotion/styled";

import { BrandLogo } from "./BrandLogo";

const Navbar = styled.nav`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  background: white;
  height: 60px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);

  @media (max-width: 459px) {
    padding: 0px 10px;
  }

  @media print {
    box-shadow: none;
    justify-content: center;
    align-items: center;
  }

  ul li {
    display: inline-block;
  }

  li.btn-add {
    float: right;

    @media only screen and (max-width: 460px) {
      display: none;
    }
  }

  .btn-add a {
    background-color: #4caf50;
    color: #fff;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 4px;
  }
`;

const NewButton = styled.a`
  text-decoration: none;
  display: inline-block;
  padding: 8px 18px;
  border-radius: 4px;
  font-weight: 600;
  line-height: 1;
  transition: 0.2s all ease;

  background: #02b3e4;
  box-shadow: 8px 10px 20px 0 rgba(46, 61, 73, 0.15);
  color: white;
  text-shadow: 0 1px 3px #86888e;

  @media print{
    display: none;
  }

  &:hover {
    box-shadow: 2px 4px 8px 0 rgba(46, 61, 73, 0.2);
    background-color: #02b7e9;
  }

`;

export default () => (
  <Navbar>
    <BrandLogo />
    <NewButton href="https://github.com/devsonket/devsonket.github.io/issues/new?title=%E0%A6%95%E0%A6%BF%E0%A6%B8%E0%A7%87%E0%A6%B0%20%E0%A6%9A%E0%A6%BF%E0%A6%9F%E0%A6%B6%E0%A7%80%E0%A6%9F%20%E0%A6%9A%E0%A6%BE%E0%A6%A8?&body=%E0%A6%95%E0%A6%BF%20%E0%A6%95%E0%A6%BF%20%E0%A6%9A%E0%A6%BE%E0%A6%A8%20%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A4%20%E0%A6%B2%E0%A6%BF%E0%A6%96%E0%A7%81%E0%A6%A8&labels=%E0%A6%A8%E0%A6%A4%E0%A7%81%E0%A6%A8%20%E0%A6%86%E0%A6%B0%E0%A7%87%E0%A6%95%E0%A6%9F%E0%A6%BE">
      + নতুন আরেকটা
    </NewButton>
  </Navbar>
);
