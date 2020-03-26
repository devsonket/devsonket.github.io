import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { FiFacebook, FiTwitter, FiLink } from "react-icons/fi"

const SocialShareContainer = styled.div`
  margin: 25px 0;
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
    align-items: center;
    list-style: none;
    li {
      margin: 0 5px;
      a,
      span {
        cursor: pointer;
        display: inline-block;
        background: ${props =>
          props.islightcolor === "true"
            ? "var(--accentlight)"
            : "var(--accentdark)"};
        color: ${props =>
          props.islightcolor === "true"
            ? "var(--accentdark)"
            : "var(--accentlight)"};
        line-height: 36px;
        width: 30px;
        height: 30px;
        border-radius: 8px;
        text-decoration: none;
      }
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
            <FiFacebook />
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
            <FiTwitter />
          </a>
        </li>
        <li>
          <span onClick={handleCopy}>
            <FiLink />
          </span>
        </li>
      </ul>
    </SocialShareContainer>
  )
}

export default SocialShare
