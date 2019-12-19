import React from "react"
import styled from "@emotion/styled"

const LogoContainer = styled.a`
  text-decoration: none;
  font-size: 26px;
  color: var(--accentdark);
  font-weight: 800;
  @media only screen and (max-width: 460px) {
    display: block;
    text-align: center;
  }
  span {
    background-color: var(--accentdark);
    color: var(--accentwhite);
    padding: 0 8px;
    border-radius: 4px;
    margin-right: 5px;
  }
`

const Logo = ({ noColor }) => (
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

export { Logo }
