import React from "react"
import styled from "@emotion/styled"

import NavBar from "./navbar"

const HeaderArea = styled.header`
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
`

const HeaderEl = styled.div`
  width: 940px;
  margin: 80px auto 0 auto;
  @media only screen and (max-width: 940px) {
    width: 100%;
  }
`

export default ({ children }) => (
  <HeaderArea>
    <NavBar />
    <HeaderEl>{children}</HeaderEl>
  </HeaderArea>
)
