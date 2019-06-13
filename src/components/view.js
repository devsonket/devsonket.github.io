import React from "react"
import styled from "@emotion/styled"

import Top from "./top"
import SearchResult from "./searchresult"

import { Container } from "./common"

const ViewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > div {
    flex-grow: 1;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(102, 119, 136, 0.55);
    overflow: hidden;
    text-shadow: 0 1px 1px rgba(51, 68, 85, 0.5);
  }
`

export default ({ input }) => (
  <Container>
    <ViewContainer className="top">
      {input ? <SearchResult input={input} /> : <Top />}
    </ViewContainer>
  </Container>
)
