import React from "react"
import styled from "@emotion/styled"

import { Sheet } from "./common"

const SingleContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  & > div {
    margin: 15px;
    flex: 1 1 calc(50% - 30px);
    @media print {
      margin: 15px 50px;
    }
    @media only screen and (max-width: 668px) {
      flex-basis: calc(100% - 20px);
      margin: 0 10px;
      margin-bottom: 15px;
    }
    @media print {
      flex-basis: 100%;
    }
  }
`

export default ({ data }) => (
  <SingleContent>
    {data.contents.map(({ title, items, code: onlyCode }, index) => (
      <Sheet key={index}>
        <h3>{title}</h3>
        <ul className="single-item">
          {items ? (items.map(({ definition, code }, index) => (
          <li key={index} className="item">
            {definition && (
              <p
                className="def"
                dangerouslySetInnerHTML={{ __html: definition }}
              />
            )}
            {code && (
              <pre className="code">
                <code>{code}</code>
              </pre>
            )}
          </li>
          ))) : (
            <pre className="code">
              <code>{onlyCode}</code>
            </pre>
          )}
        </ul>
      </Sheet>
    )) }
  </SingleContent>
)
