import React from "react"
import styled from "@emotion/styled"

import AllItems from "../Home/AllItems"
import PopularItems from "../Home/PopularItems"
import Item from "../Item/Item"

import { Curve, Section, ThinContainer } from "../common"

const Content = styled.div`
  background: ${props => props.colorPref};
`

const ContentContainer = ({ data, colorPref }) => (
  <Content colorPref={colorPref}>
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
  </Content>
)

ContentContainer.defaultProps = {
  colorPref: "var(--accentwhite)",
}

export default ContentContainer
