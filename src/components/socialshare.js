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
  return (
    <SocialShareContainer islightcolor={islightcolor}>
      <h4>শেয়ার করুন</h4>
      <ul>
        <li>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${
              site.siteMetadata.siteUrl
            }/${id}`}
          >
            Fa
          </a>
        </li>
        <li>
          <a
            href={`https://twitter.com/intent/tweet?url=${
              site.siteMetadata.siteUrl
            }/${id}&text=${description}`}
          >
            Tw
          </a>
        </li>
        <li>
          <a
            onClick={() =>
              console.log(
                `Copy ${site.siteMetadata.siteUrl}/${id} to the clipboard`
              )
            }
          >
            Link
          </a>
        </li>
      </ul>
    </SocialShareContainer>
  )
}

export default SocialShare
