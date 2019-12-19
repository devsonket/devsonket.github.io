import React from "react"
import styled from "@emotion/styled"

const SectionContainer = styled.div`
  padding: 100px 0;
`

const Section = ({ children }) => {
  return <SectionContainer>{children}</SectionContainer>
}

export { Section }
