import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Items from "./items"

import { Card } from "./common"
import { getData } from "../utils"

const Content = styled.div`
  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > * {
      width: calc(100% / 3 - 10px);
    }
  }
`

const PopularItems = () => (
  <Items title="জনপ্রিয়">
    <StaticQuery
      query={graphql`
        query {
          allFile(
            filter: {
              extension: { eq: "json" }
              relativeDirectory: { nin: "demo", ne: "draft" }
            }
            skip: 10
            limit: 9
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
      render={({ allFile: { edges } }) => (
        <Content>
          <div className="items">
            {getData(edges).map(({ id, title, colorPref, description }) => (
              <Card
                key={id}
                id={id}
                title={title}
                description={description}
                colorPref={colorPref}
              />
            ))}
          </div>
        </Content>
      )}
    />
  </Items>
)

export default PopularItems
