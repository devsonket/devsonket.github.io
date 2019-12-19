import React from "react"
import styled from "@emotion/styled"

import { Container } from "./common"

const ItemsContainer = styled.div`
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
  }
  .items > div {
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
