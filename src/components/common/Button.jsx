import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const ButtonContainer = styled.span``

const btnStyle = `
text-decoration: none;
  display: inline-block;
  padding: 12px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  line-height: 1;
  transition: 0.2s all ease;
  background: #02b3e4;
  color: white;
  text-shadow: 0 1px 3px #86888e;
  @media print {
    display: none;
  }
  &:hover {
    background-color: #02b7e9;
  }
`

const ButtonAnchor = styled.a`
  ${btnStyle}
`

const ButtonLinkAnchor = styled(Link)`
  ${btnStyle}
`

export const Button = ({
  children,
  bgColor,
  href,
  to,
  onClick,
  target,
  rel,
}) => {
  return (
    <ButtonContainer>
      {!to ? (
        <ButtonAnchor
          target={target ? "_blank" : "self"}
          rel={rel ? rel : ""}
          onClick={onClick && onClick}
          style={{ backgroundColor: bgColor }}
          href={href}
        >
          {children}
        </ButtonAnchor>
      ) : (
        <ButtonLinkAnchor to={to}>{children}</ButtonLinkAnchor>
      )}
    </ButtonContainer>
  )
}

Button.defaultProps = {
  text: `button`,
  bgColor: "#333",
}

Button.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
}
