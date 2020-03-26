import React from "react"
import styled from "@emotion/styled"

import SearchResult from "./SearchResult"

import { ThinContainer, Description } from "../common"

const HeroHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  padding-bottom: 240px;
`

const HeroHome = () => {
  return (
    <ThinContainer>
      <HeroHomeContainer>
        <Description
          title="বাংলা ডেভেলপার চিটশিট"
          description="ডেভেলপারদের জন্য, ডেভেলপারদের দ্বারা, মাতৃভাষা বাংলায় সবচেয়ে বড়
            চিটশিট ভান্ডার"
        />
        <SearchResult />
      </HeroHomeContainer>
    </ThinContainer>
  )
}

export default HeroHome
