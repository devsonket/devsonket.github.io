import React from "react";
import styled from "@emotion/styled";

const Navbar = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 45px 0;

    @media only screen and (max-width: 940px) {
      padding: 40px 25px;
    }

    @media print {
      margin: 0 auto;
      padding: 25px;
      text-align: center;
    }
  }

  ul li {
    display: inline-block;
  }

  @media only screen and (max-width: 460px) {
    li.brand {
      display: block;
      width: 100%;
      text-align: center;
    }
  }

  ul li.btn-add {
    float: right;

    @media only screen and (max-width: 460px) {
      display: none;
    }
  }

  .brand a {
    text-decoration: none;
    font-size: 26px;
    color: #333;
  }

  .brand span {
    background-color: #333;
    color: #fff;
    padding: 0 8px;
    border-radius: 4px;
    margin-right: 5px;
  }

  .btn-add a {
    background-color: #4caf50;
    color: #fff;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 4px;
  }

  @media print {
    .brand a {
      color: #fff;
      filter: invert(100%);
    }

    .brand span {
      background-color: #fff;
      color: #000;
      padding: 0 8px;
      font-weight: 900;
    }
  }
`;

export default () => (
  <Navbar>
    <ul className="nav">
      <li className="brand">
        <a href="/">
          <span>ডেভ</span>সংকেত
        </a>
      </li>
      <li className="btn-add no-print">
        <a href="https://github.com/devsonket/devsonket.github.io/issues/new?title=%E0%A6%95%E0%A6%BF%E0%A6%B8%E0%A7%87%E0%A6%B0%20%E0%A6%9A%E0%A6%BF%E0%A6%9F%E0%A6%B6%E0%A7%80%E0%A6%9F%20%E0%A6%9A%E0%A6%BE%E0%A6%A8?&body=%E0%A6%95%E0%A6%BF%20%E0%A6%95%E0%A6%BF%20%E0%A6%9A%E0%A6%BE%E0%A6%A8%20%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A4%20%E0%A6%B2%E0%A6%BF%E0%A6%96%E0%A7%81%E0%A6%A8&labels=%E0%A6%A8%E0%A6%A4%E0%A7%81%E0%A6%A8%20%E0%A6%86%E0%A6%B0%E0%A7%87%E0%A6%95%E0%A6%9F%E0%A6%BE">
          + নতুন আরেকটা
        </a>
      </li>
    </ul>
  </Navbar>
);
