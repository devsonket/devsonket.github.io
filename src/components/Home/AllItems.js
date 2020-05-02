import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Items from "./Items"

import { Card } from "../common"

import { organizedData } from "../../utils"

const ContentContainer = styled.div`
  margin-bottom: 25px;
  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    > * {
      width: calc(100% / 3 - 10px);
      margin-right: 15px;
      @media (min-width: 769px) {
        :nth-child(3n + 3) {
          margin-right: 0;
        }
      }
      @media (max-width: 768px) {
        width: calc(100% / 2 - 10px);
        :nth-child(2n + 2) {
          margin-right: 0;
        }
      }
      @media (max-width: 480px) {
        width: calc(100%);
        margin-right: 0;
      }
    }
`

const AllItems = () => (
  <Items title="সবগুলো">
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
      render={({ allFile: { edges } }) =>
        Object.keys(organizedData(edges)).map((char, index) => (
          <ContentContainer key={index}>
            <h3>{char}</h3>
            <div className="items">
              {organizedData(edges)[char].map(({ id, title }) => (
                <Card key={id} id={id} title={title} />
              ))}
            </div>
          </ContentContainer>
        ))
      }
    />
  </Items>
)

export default AllItems
