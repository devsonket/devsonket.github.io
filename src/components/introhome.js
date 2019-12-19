import React from "react"
import styled from "@emotion/styled"
import SearchResult from "./searchresult"
import { ThinContainer, Description } from "./common"

const IntroHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  padding-bottom: 240px;
`

const IntroHome = () => {
  return (
    <ThinContainer>
      <IntroHomeContainer>
        <Description
          title="বাংলা ডেভেলপার চিটশিট"
          description="ডেভেলপারদের জন্য, ডেভেলপার দ্বারা, নিজের মাতৃভাষা বাংলায় সবচেয়ে বড়
            চিটশিট ভান্ডার"
        />
        <SearchResult />
      </IntroHomeContainer>
    </ThinContainer>
  )
}

export default IntroHome
