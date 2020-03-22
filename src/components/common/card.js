import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const CardContainer = styled.div`
  position: relative;
  margin-bottom: 15px;
  h4 {
    font-size: 20px;
    margin-bottom: 0;
    line-height: 24px;
  }
  p {
    margin-bottom: 0;
    opacity: 0.85;
  }
  span {
    position: absolute;
    top: 25px;
    right: 20px;
    height: 10px;
    width: 10px;
    border-radius: 100%;
  }
  a {
    text-decoration: none;
    display: block;
    padding: 20px 25px;
    line-height: 24px;
    background: #fff;
    color: var(--sub-headline);
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.03) 0px 6px 8px, rgba(0, 0, 0, 0.3) 0px 1px 2px;
  }
`

export const Card = ({ id, title, description, colorPref }) => (
  <CardContainer key={id}>
    <Link to={`/${id}`}>
      <h4>{title}</h4>
      {description && (
        <>
          <p>
            {String(description)
              .substr(0, 33)
              .trim()}
            ...
          </p>
          <span style={{ backgroundColor: colorPref }} />
        </>
      )}
    </Link>
  </CardContainer>
)
