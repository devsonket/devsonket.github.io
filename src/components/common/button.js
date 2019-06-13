import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const ButtonContainer = styled.span``

const ButtonAnchor = styled.a`
  text-decoration: none;
  display: inline-block;
  padding: 8px 18px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  line-height: 1;
  transition: 0.2s all ease;
  background: #02b3e4;
  box-shadow: 8px 10px 20px 0 rgba(46, 61, 73, 0.15);
  color: white;
  text-shadow: 0 1px 3px #86888e;
  @media print {
    display: none;
  }
  &:hover {
    box-shadow: 2px 4px 8px 0 rgba(46, 61, 73, 0.2);
    background-color: #02b7e9;
  }
`

export const Button = ({ text, bgColor, href, onClick, target, rel }) => (
  <ButtonContainer>
    <ButtonAnchor
      target={target ? "_blank" : "self"}
      rel={rel ? rel : ""}
      onClick={onClick && onClick}
      style={{ backgroundColor: bgColor }}
      href={href}
    >
      {text}
    </ButtonAnchor>
  </ButtonContainer>
)

Button.defaultProps = {
  text: `button`,
  bgColor: "#333",
}

Button.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
}
