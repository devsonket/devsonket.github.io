import React from "react"
import styled from "@emotion/styled"

const ContainerContainer = styled.div`
  margin: 0 auto;
  padding: 0 25px;
  max-width: 1260px;
  @media (min-width: 480px) {
    padding: 0 25px;
  }
`

const Container = ({ children }) => {
  return <ContainerContainer>{children}</ContainerContainer>
}

export { Container }
