import React from "react"
import styled from "@emotion/styled"

import AllItems from "./allitems"

import { Curve, Section, ThinContainer } from "./common"
import PopularItems from "./popularitems"
import Item from "./item"

const ContentContainer = styled.div`
  background: ${props => props.colorPref};
`

const Content = ({ data, colorPref }) => (
  <ContentContainer colorPref={colorPref}>
    <Curve color="var(--accentlight)">
      <Section>
        <ThinContainer>
          {!data ? (
            <>
              <PopularItems />
              <AllItems />
            </>
          ) : (
            <Item data={data} />
          )}
        </ThinContainer>
      </Section>
    </Curve>
  </ContentContainer>
)

Content.defaultProps = {
  colorPref: "var(--accentwhite)",
}

export default Content
