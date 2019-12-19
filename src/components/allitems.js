import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Items from "./items"

import { Card } from "./common"

import { organizedData } from "../utils"

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
          <React.Fragment key={index}>
            <div className="content">
              <h3>{char}</h3>
              <div className="items">
                {organizedData(edges)[char].map(({ id, title }) => (
                  <Card key={id} id={id} title={title} />
                ))}
              </div>
            </div>
          </React.Fragment>
        ))
      }
    />
  </Items>
)

export default AllItems
