import React from "react"
import styled from "@emotion/styled"

const DescriptionContainer = styled.div`
  text-align: center;
  h1 {
    margin: 0;
    font-size: 72px;
    @media (max-width: 768px) {
      font-size: 42px;
    }
    color: ${props =>
      props.islightcolor === "true"
        ? `var(--accentwhite)`
        : `var(--accentdark)`};
  }
  p {
    font-size: 22px;
    @media (max-width: 768px) {
      font-size: 18px;
    }
    color: ${props =>
      props.islightcolor === "true"
        ? `var(--accentwhite)`
        : `var(--accentdark)`};
  }
`

const Description = ({ title, description, islightcolor }) => {
  return (
    <DescriptionContainer islightcolor={islightcolor}>
      <h1>{title}</h1>
      <p>{description}</p>
    </DescriptionContainer>
  )
}

export { Description }
