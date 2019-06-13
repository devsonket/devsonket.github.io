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

const SheetTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  & a {
    text-decoration: none;
    background: #00000080;
    color: #fff;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 13px;
    padding: 1px 10px;
    border-radius: 4px;
    margin-bottom: 15px;
    opacity: 0;
  }
`

export default ({ data }) => (
  <SingleContent>
    {data.contents.map(({ title, items, code: onlyCode }, index) => (
      <Sheet id={index + 1} key={index}>
        <SheetTitle className="sheet-title">
          <h3>{title}</h3>
          <a href={`/${data.slug}/#${index + 1}`}>Link</a>
        </SheetTitle>
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
