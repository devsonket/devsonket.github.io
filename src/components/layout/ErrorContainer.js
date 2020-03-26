import React from "react"
import styled from "@emotion/styled"

import { Container } from "../common"

const Error = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 640px;
  @media (max-width: 768px) {
    width: 100%;
  }
  height: 100vh;
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
  .action-btn > * {
    margin-right: 15px;
  }
`

const ErrorContainer = ({ children }) => (
  <div className="error-area not-found">
    <Container>
      <Error>{children}</Error>
    </Container>
  </div>
)

export default ErrorContainer
