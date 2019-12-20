import React from "react"
import styled from "@emotion/styled"

const SocialShareContainer = styled.div`
  margin-top: 25px;
  text-align: center;
  h4 {
    font-size: 18px;
    margin-bottom: 10px;
    color: ${props =>
      props.islightcolor === "true"
        ? "var(--accentlight)"
        : "var(--accentdark)"};
  }
  ul {
    display: flex;
    list-style: none;
    li {
      margin: 0 15px;
    }
  }
`

const SocialShare = ({ islightcolor }) => {
  return (
    <SocialShareContainer islightcolor={islightcolor}>
      <h4>শেয়ার করুন</h4>
      <ul>
        <li>Fa</li>
        <li>Tw</li>
        <li>Link Copy</li>
      </ul>
    </SocialShareContainer>
  )
}

export default SocialShare
