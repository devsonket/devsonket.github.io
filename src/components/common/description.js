import React from "react"
import styled from "@emotion/styled"

const DescriptionContainer = styled.div`
  text-align: center;
  h1 {
    margin: 0;
    font-size: 72px;
  }
  p {
    font-size: 22px;
  }
`

const Description = ({ title, description }) => {
  return (
    <DescriptionContainer>
      <h1>{title}</h1>
      <p>{description}</p>
    </DescriptionContainer>
  )
}

export { Description }
