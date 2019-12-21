import React from "react"
import { useStaticQuery } from "gatsby"
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

const SocialShare = ({ id, description, islightcolor }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const url = `${site.siteMetadata.siteUrl}/${id}`
  const urlLength = String(url).length

  const handleCopy = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(url).then(() => {
        console.log("Copied!", url)
      })
    }
  }

  return (
    <SocialShareContainer islightcolor={islightcolor}>
      <h4>শেয়ার করুন</h4>
      <ul>
        <li>
          <a
            target="__blank"
            rel="noopener noreferrer"
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          >
            Fa
          </a>
        </li>
        <li>
          <a
            target="__blank"
            rel="noopener noreferrer"
            href={`https://twitter.com/intent/tweet?url=${url}&text=${String(
              description
            ).substr(0, 280 - urlLength)}${
              String(description).length > 280 - urlLength ? "..." : ""
            }`}
          >
            Tw
          </a>
        </li>
        <li>
          <a onClick={handleCopy}>Link</a>
        </li>
      </ul>
    </SocialShareContainer>
  )
}

export default SocialShare
