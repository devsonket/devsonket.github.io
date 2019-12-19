import React from "react"
import styled from "@emotion/styled"
import SearchResult from "./searchresult"
import { ThinContainer } from "./common"

const IntroHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  padding-bottom: 240px;
`

const IntroContainer = styled.div`
  text-align: center;
  h1 {
    margin: 0;
    font-size: 72px;
  }
  p {
    font-size: 22px;
  }
`

const IntroHome = () => {
  return (
    <ThinContainer>
      <IntroHomeContainer>
        <IntroContainer>
          <h1>বাংলা ডেভেলপার চিটশিট</h1>
          <p>
            ডেভেলপারদের জন্য, ডেভেলপার দ্বারা, নিজের মাতৃভাষা বাংলায় সবচেয়ে বড়
            চিটশিট ভান্ডার
          </p>
        </IntroContainer>
        <SearchResult />
      </IntroHomeContainer>
    </ThinContainer>
  )
}

export default IntroHome
