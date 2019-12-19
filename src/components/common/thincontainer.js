import React from "react"
import styled from "@emotion/styled"

const ThinContainerContainer = styled.div`
  padding: 0 100px;
`

const ThinContainer = ({ children }) => {
  return <ThinContainerContainer>{children}</ThinContainerContainer>
}

export { ThinContainer }
