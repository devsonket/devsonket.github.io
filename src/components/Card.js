import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Card = styled.div`
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
    padding: 12px 20px;
    color: #fff;

    ${props =>
      props.contentCard &&
      `
        color: rgba(0, 0, 0, 0.75);
        border-radius: 4px;
        box-shadow: 0 6px 8px rgba(102, 119, 136, 0.03),
          0 1px 2px rgba(102, 119, 136, 0.3);
          `}
  }
`;

export default ({ id, title, style = {}, contentCard = false }) => (
  <Card contentCard={contentCard} key={id} bg={style}>
    <Link to={`/${id}`}>
      <h4>{title}</h4>
    </Link>
  </Card>
);
