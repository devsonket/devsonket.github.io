import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const CardContainer = styled.div`
  margin: 8px;
  h4 {
    font-size: 20px;
    margin-bottom: 0;
  }
  p {
    margin-bottom: 0;
    opacity: 0.85;
  }
  a {
    text-decoration: none;
    display: block;
    padding: 20px 25px;
    line-height: 24px;
    background: #fff;
    color: var(--sub-headline);
    box-shadow: rgba(0, 0, 0, 0.03) 0px 6px 8px, rgba(0, 0, 0, 0.3) 0px 1px 2px;
  }
`

export const Card = ({ id, title, description }) => (
  <CardContainer key={id}>
    <Link to={`/${id}`}>
      <h4>{title}</h4>
      {description && <p>{description}</p>}
    </Link>
  </CardContainer>
)
