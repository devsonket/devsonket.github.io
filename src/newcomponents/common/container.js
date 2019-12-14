import React from "react"
import styled from "@emotion/styled"

const ContainerContainer = styled.div`
  margin: 0 auto;
  max-width: 1232px;
`

const Container = ({ children }) => {
  return <ContainerContainer>{children}</ContainerContainer>
}

export { Container }
