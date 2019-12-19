import React from "react"
import styled from "@emotion/styled"
import SearchResult from "./searchresult"
import { ThinContainer, Description } from "./common"

const IntroItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  padding-bottom: 240px;
`

const IntroItem = ({ data: { title, description } }) => {
  return (
    <ThinContainer>
      <IntroItemContainer>
        <Description title={title} description={description} />
      </IntroItemContainer>
    </ThinContainer>
  )
}

export default IntroItem
