import React from "react"
import styled from "@emotion/styled"

import Header from "./header"
import IntroHome from "./introhome"
import IntroItem from "./introitem"

import { Container, ThinContainer } from "./common"

const IntroContainer = styled.div`
  background: ${props => props.colorpref};
`

const Intro = ({ data, filename, islightcolor, colorpref, contributors }) => {
  return (
    <IntroContainer colorpref={colorpref}>
      <Container>
        <Header
          filename={filename}
          colorpref={colorpref}
          islightcolor={islightcolor}
        />
        <ThinContainer>
          {!data ? (
            <IntroHome />
          ) : (
            <IntroItem
              islightcolor={islightcolor}
              data={data}
              contributors={contributors}
            />
          )}
        </ThinContainer>
      </Container>
    </IntroContainer>
  )
}

Intro.defaultProps = {
  colorpref: "var(--accentwhite)",
  isLightText: true,
}

export default Intro
