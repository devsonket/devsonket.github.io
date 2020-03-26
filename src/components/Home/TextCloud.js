import React from "react"
import styled from "@emotion/styled"

const texts = [
  "জাভাস্ক্রিপ্ট",
  "রিঅ্যাক্ট",
  "জাভা",
  "সি",
  "সি-শার্প",
  "অ্যাডোবি ফটোশপ",
]

const TagCloudContainer = styled.ul`
  position: relative;
  list-style: none;
  li {
    position: absolute;
  }
`

const TextCloud = () => {
  return (
    <div>
      <TagCloudContainer>
        {texts.map(text => (
          <li
            style={{
              left: Math.random() * 1349,
              top: Math.random() * 406,
            }}
          >
            {text}
          </li>
        ))}
      </TagCloudContainer>
    </div>
  )
}

export default TextCloud
