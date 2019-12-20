import React from "react"
import styled from "@emotion/styled"

import { Container } from "./common"

const ItemsContainer = styled.div`
  margin-bottom: 45px;
  h2 {
    text-align: center;
    font-size: 22px;
    color: rgba(0, 0, 0, 0.5);
  }
  .content h3 {
    font-size: 18px;
    padding-left: 15px;
    margin-bottom: 15px;
    color: rgba(0, 0, 0, 0.5);
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    > div {
      flex-basis: calc(100% / 3 - 10px);
      :nth-of-type(3n - 2) {
        margin: 0;
      }
    }
  }
`

const Items = ({ children, title }) => (
  <ItemsContainer>
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  </ItemsContainer>
)

export default Items
