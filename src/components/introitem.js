import React from "react"
import styled from "@emotion/styled"
import SearchResult from "./searchresult"
import { ThinContainer, Description } from "./common"
import SocialShare from "./socialshare"
import Contributors from "./contributors"

const IntroItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  padding-bottom: 240px;
`

const IntroItem = ({
  data: { id, title, description },
  islightcolor,
  contributors,
}) => {
  return (
    <ThinContainer>
      <IntroItemContainer>
        <Description
          title={title}
          description={description}
          islightcolor={islightcolor}
        />
        <Contributors islightcolor={islightcolor} contributors={contributors} />
        <SocialShare
          id={id}
          description={description}
          islightcolor={islightcolor}
        />
        <p>প্রিন্ট করুন</p>
      </IntroItemContainer>
    </ThinContainer>
  )
}

export default IntroItem
