import React from "react"
import styled from "@emotion/styled"

import Header from "../Header"
import HeroHome from "../Home/HeroHome"
import HeroItem from "../Item/HeroItem"

import { Container, ThinContainer } from "../common"

const Hero = styled.div`
  background: ${props => props.colorpref};
`

const HeroContainer = ({
  data,
  filename,
  islightcolor,
  colorpref,
  contributors,
}) => {
  return (
    <Hero colorpref={colorpref}>
      <Container>
        <Header
          filename={filename}
          colorpref={colorpref}
          islightcolor={islightcolor}
        />
        <ThinContainer>
          {!data ? (
            <HeroHome />
          ) : (
            <HeroItem
              islightcolor={islightcolor}
              data={data}
              contributors={contributors}
            />
          )}
        </ThinContainer>
      </Container>
    </Hero>
  )
}

HeroContainer.defaultProps = {
  colorpref: "var(--accentwhite)",
  isLightText: true,
}

export default HeroContainer
