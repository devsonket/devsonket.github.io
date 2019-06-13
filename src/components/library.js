import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import { Container, Card } from "./common"

import { organizedData } from "../utils"

const LibraryContainer = styled.div`
  h2 {
    text-align: center;
    font-size: 22px;
    color: rgba(0, 0, 0, 0.5);
  }
  .content h3 {
    font-size: 18px;
    padding-left: 15px;
    margin-bottom: 15px;
    color: rgba(0, 0, 0, 0.5);
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
  .items > div {
    width: calc(33.3333% - 20px);
    @media only screen and (max-width: 460px) {
      width: 100%;
    }
  }
`

export default () => (
  <LibraryContainer>
    <Container>
      <h2>সবগুলো</h2>
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
                    <Card contentCard key={id} id={id} title={title} />
                  ))}
                </div>
              </div>
            </React.Fragment>
          ))
        }
      />
    </Container>
  </LibraryContainer>
)
