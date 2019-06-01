import React from "react"
import styled from "@emotion/styled"

import { Container } from "./common"

const ErrorContainer = styled.div`
  width: 640px;
  margin: 0 auto;
  text-align: center;
  img {
    width: 240px;
  }
  h2 {
    font-size: 42px;
    line-height: 1.3;
  }
  p {
    font-size: 18px;
  }
  .action-btn>*{
    margin-right: 15px;
  }
`

export default ({ children }) => (
  <div className="error-area not-found">
    <Container>
      <ErrorContainer>
        {children}
      </ErrorContainer>
    </Container>
  </div>
)
