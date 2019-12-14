import React from "react"
import styled from "@emotion/styled"

import { Logo, Button } from "./common"

const Navbar = styled.nav`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  height: 60px;
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
  /* li.btn-add {
    float: right;
    @media only screen and (max-width: 460px) {
      display: none;
    }
  } */
  /* .btn-add a {
    background-color: #4caf50;
    color: #fff;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 4px;
  } */
`

export default () => (
  <Navbar>
    <Logo />
    <Button
      href="https://github.com/devsonket/devsonket.github.io#%E0%A6%95%E0%A6%BF%E0%A6%AD%E0%A6%BE%E0%A6%AC%E0%A7%87-%E0%A6%95%E0%A6%BE%E0%A6%9C-%E0%A6%95%E0%A6%B0%E0%A7%87"
      text="+ কন্ট্রিবিউট করুন"
      bgColor="#02b3e4"
    />
  </Navbar>
)
