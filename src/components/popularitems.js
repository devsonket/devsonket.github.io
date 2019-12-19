import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Items from "./items"

import { Card } from "./common"
import { getData } from "../utils"

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
        <div className="content">
          <div className="items">
            {getData(edges).map(({ id, title, description }) => (
              <Card key={id} id={id} title={title} description={description} />
            ))}
          </div>
        </div>
      )}
    />
  </Items>
)

export default PopularItems
