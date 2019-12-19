import React from "react"
import styled from "@emotion/styled"

const ThinContainerContainer = styled.div``

const ThinContainer = ({ children }) => {
  return <ThinContainerContainer>{children}</ThinContainerContainer>
}

export { ThinContainer }
