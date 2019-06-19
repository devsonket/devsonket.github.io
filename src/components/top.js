import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Card } from "./common"

import { colors } from "../utils"

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(
          filter: {
            extension: { eq: "json" }
            relativeDirectory: { nin: "demo", ne: "draft" }
          }
          limit: 8
          sort: { order: DESC, fields: birthtime }
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
      return edges.map(edge => {
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
