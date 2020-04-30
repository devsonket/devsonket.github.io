import React from "react"
import styled from "@emotion/styled"

const ThinContainerContainer = styled.div`
  padding: 0 100px;
  @media (max-width: 991px) {
    padding: 0 50px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
  @media (max-width: 480px) {
    padding: 0 0;
  }
`

const ThinContainer = ({ children }) => {
  return <ThinContainerContainer>{children}</ThinContainerContainer>
}

export { ThinContainer }
