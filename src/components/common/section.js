import React from "react"
import styled from "@emotion/styled"

const SectionContainer = styled.div`
  padding: 100px 0;
  @media (max-width: 768px) {
    padding: 50px 0;
  }
`

const Section = ({ children }) => {
  return <SectionContainer>{children}</SectionContainer>
}

export { Section }
