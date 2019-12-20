import React from "react"
import styled from "@emotion/styled"
import Contributors from "../contributors"

const DescriptionContainer = styled.div`
  text-align: center;
  h1 {
    margin: 0;
    font-size: 72px;
    color: ${props =>
      props.islightcolor ? `var(--accentwhite)` : `var(--accentdark)`};
  }
  p {
    font-size: 22px;
    color: ${props =>
      props.islightcolor ? `var(--accentwhite)` : `var(--accentdark)`};
  }
`

const Description = ({ title, description, islightcolor, contributors }) => {
  console.log(contributors)
  return (
    <DescriptionContainer islightcolor={islightcolor}>
      <h1>{title}</h1>
      <p>{description}</p>
      {contributors && <Contributors contributors={contributors} />}
    </DescriptionContainer>
  )
}

export { Description }
