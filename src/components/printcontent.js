import React from "react"
import styled from "@emotion/styled"

import { PrintSheet } from "./common"

const PrintSingleContent = styled.div`
  padding: 25px;
  color: #fff;
  column-count: 2;
`

const PrintSheetTitle = styled.tr`
  background: #333;
  & th {
    padding: 0;

    & h3 {
      margin-bottom: 0;
      padding: 10px 15px;
    }
  }

  & td {
    padding: 0;
    & p {
      color: #fff;
      margin-bottom: 0;
      padding: 10px 15px;
    }
  }
`

const PrintCode = styled.tr`
  & .item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    color: #333;
    padding: 10px 15px;
    & p {
      margin-bottom: 0;
    }
    & .code {
      margin-bottom: 0;
      padding: 0;
      background: none;
    }
  }
`

export default ({ data }) => (
  <PrintSingleContent>
    <PrintSheet>
      <PrintSheetTitle>
        <th>
          <h3>{data.title}</h3>
        </th>
      </PrintSheetTitle>
      <PrintSheetTitle>
        <td>
          <p>{data.description}</p>
        </td>
      </PrintSheetTitle>
    </PrintSheet>
    {data.contents.map(({ title, items, code: onlyCode }, index) => (
      <PrintSheet id={index + 1} key={index}>
        <PrintSheetTitle>
          <th>
            <h3>{title}</h3>
          </th>
        </PrintSheetTitle>
        {items ? (
          items.map(({ definition, code }, index) => (
            <PrintCode>
              <td key={index} className="item">
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
              </td>
            </PrintCode>
          ))
        ) : (
          <PrintCode>
            <td>
              <pre className="code">
                <code>{onlyCode}</code>
              </pre>
            </td>
          </PrintCode>
        )}
      </PrintSheet>
    ))}
    <PrintSheet>
      <PrintSheetTitle>
        <td>
          <p>{data.description}</p>
        </td>
      </PrintSheetTitle>
      <PrintSheetTitle>
        <th>
          <h3>{data.title}</h3>
        </th>
      </PrintSheetTitle>
    </PrintSheet>
  </PrintSingleContent>
)
