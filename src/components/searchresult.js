import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import { Button, Card } from "./common"
import { colors } from "../utils"

const ButtonContainer = styled.span`
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 45px 0;
  text-align: center;
`

export default ({ input }) => (
  <StaticQuery
    query={graphql`
      query {
        allFile(
          filter: {
            extension: { eq: "json" }
            relativeDirectory: { nin: "demo", ne: "draft" }
          }
          limit: 1000
        ) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `}
    render={({ allFile: { edges } }) => {
      const isEng = String(input[0]).charCodeAt() < 128
      let matchNums
      const uniInput = String(input)
        .trim()
        .toLowerCase()
      if (isEng) {
        matchNums = Object.keys(edges).filter(edge =>
          String(edges[edge].node.name)
            .toLowerCase()
            .includes(uniInput)
        )
      } else {
        matchNums = Object.keys(edges).filter(edge => {
          const data = require(`../../data/${edges[edge].node.name}`)
          if (
            String(data.title)
              .toLowerCase()
              .includes(uniInput)
          ) {
            return edge
          }
        })
      }
      const data = matchNums.map(one => edges[one])
      if (!data.length) {
        return (
          <ButtonContainer>
            <Button
              href="https://github.com/devsonket/devsonket.github.io/issues/new?title=%E0%A6%95%E0%A6%BF%E0%A6%B8%E0%A7%87%E0%A6%B0%20%E0%A6%9A%E0%A6%BF%E0%A6%9F%E0%A6%B6%E0%A7%80%E0%A6%9F%20%E0%A6%9A%E0%A6%BE%E0%A6%A8?&body=%E0%A6%95%E0%A6%BF%20%E0%A6%95%E0%A6%BF%20%E0%A6%9A%E0%A6%BE%E0%A6%A8%20%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A4%20%E0%A6%B2%E0%A6%BF%E0%A6%96%E0%A7%81%E0%A6%A8&labels=%E0%A6%A8%E0%A6%A4%E0%A7%81%E0%A6%A8%20%E0%A6%86%E0%A6%B0%E0%A7%87%E0%A6%95%E0%A6%9F%E0%A6%BE"
              text="নতুন চিটশিট রিকোয়েস্ট"
              bgColor="rgb(139, 195, 74)"
            />
          </ButtonContainer>
        )
      }
      return data.map(edge => {
        const { id, title, description } = require(`../../data/${
          edge.node.name
        }.json`)
        return (
          <Card
            id={id}
            key={id}
            title={title}
            description={description}
            style={{
              backgroundColor:
                colors[Math.floor(Math.random() * colors.length)],
            }}
          />
        )
      })
    }}
  />
)
