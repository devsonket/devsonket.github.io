import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const CardContainer = styled.div`
  background: ${props =>
    props.bg.backgroundColor ? props.bg.backgroundColor : "#fff"};
  margin: 8px;
  h4 {
    font-size: 20px;
    margin-bottom: 0;
    ${props => props.contentCard && `font-size: 18px;`}
  }
  p {
    margin-bottom: 0;
  }
  a {
    text-decoration: none;
    display: block;
    padding: 15px 20px;
    color: var(--sub-headline);
    ${props =>
      props.contentCard &&
      `
        color: var(--sub-headline);
        border: 3px solid var(--icon-stroke);
        transition: 0.1s all ease;
        border-radius: 3px;
        &:hover {
          background: #f7f7f7;
        }
      `}
  }
`

export const Card = ({ id, title, style = {}, contentCard = false }) => (
  <CardContainer contentCard={contentCard} key={id} bg={style}>
    <Link to={`/${id}`}>
      <h4>{title}</h4>
    </Link>
  </CardContainer>
)
