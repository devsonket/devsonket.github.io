import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const LogoContainer = styled(Link)`
  text-decoration: none;
  font-size: 26px;
  color: ${props =>
    props.islightcolor === "true" ? "var(--accentwhite)" : "var(--accentdark)"};
  font-weight: 800;
  @media only screen and (max-width: 460px) {
    display: block;
    text-align: center;
  }
  span {
    background-color: ${props =>
      props.islightcolor === "true"
        ? "var(--accentwhite)"
        : "var(--accentdark)"};
    color: ${props => props.colorpref};
    padding: 0 8px;
    border-radius: 4px;
    margin-right: 5px;
  }
`

const Logo = ({ colorpref, noColor, islightcolor }) => (
  <LogoContainer
    islightcolor={islightcolor}
    colorpref={colorpref}
    style={noColor && { color: "transparent", textShadow: "0 0 0 #fff" }}
    to="/"
  >
    <span style={noColor && { backgroundColor: "#fff", color: "#333" }}>
      ডেভ
    </span>
    সংকেত
  </LogoContainer>
)

Logo.defaultProps = {
  colorpref: "var(--accentwhite)",
}

export { Logo }
