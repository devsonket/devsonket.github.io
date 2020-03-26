import React from "react"
import styled from "@emotion/styled"

import { Container } from "../common"

const ItemsContainer = styled.div`
  margin-bottom: 45px;
  h2 {
    text-align: center;
    font-size: 22px;
    color: rgba(0, 0, 0, 0.5);
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
