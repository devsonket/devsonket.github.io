import React from "react"
import styled from "@emotion/styled"

const LogoContainer = styled.a`
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
`

export const Logo = ({ noColor }) => (
  <LogoContainer
    style={noColor && { color: "transparent", textShadow: "0 0 0 #fff" }}
    href="/"
  >
    <span style={noColor && { backgroundColor: "#fff", color: "#333" }}>
      ডেভ
    </span>
    সংকেত
  </LogoContainer>
)
