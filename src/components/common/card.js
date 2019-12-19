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
    background: #fff;
    color: var(--sub-headline);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    ${props =>
      props.contentCard &&
      `
      color: var(--sub-headline);
      transition: 0.1s all ease;
      border-radius: 8px;
      transition: 0.2s all;
        &:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
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
