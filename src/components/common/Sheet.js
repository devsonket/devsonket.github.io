import React from "react"
import styled from "@emotion/styled"
import { FiLink } from "react-icons/fi"

const SheetContainer = styled.div`
  & h3 {
    font-size: 20px;
    margin-bottom: 15px;
    @media print {
      color: #000;
    }
  }
  :hover a {
    opacity: 0.85;
  }
  .single-item {
    background-color: #fff;
    margin-bottom: 25px;
    border-radius: 4px;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.3);
    @media print {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      box-shadow: none;
    }
  }
  .single-item .item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 15px 20px;
    border-bottom: solid 1px var(--accentaction);
    :nth-of-type(even) {
      background: var(--accentlight);
    }
    @media print {
      margin: 0 5px;
      padding-bottom: 0px;
      flex: 2 2 calc(50% - 10px);
      border: none;
    }
  }
  .single-item .item:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
  .single-item .def {
    flex: 1 1 50%;
    padding: 5px;
  }
  .single-item .def a {
    color: #000;
  }
  .single-item .code,
  .single-item p {
    margin-bottom: 0;
  }
  .single-item pre {
    padding: 5px;
    background-color: transparent;
    color: #1565c0;
  }
  @media only screen and (max-width: 940px) {
    pre.code {
      overflow-y: hidden;
      white-space: pre-wrap;
      overflow: hidden;
      word-wrap: break-word;
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
    color: var(--accentdark);
    font-weight: 900;
    text-transform: uppercase;
    font-size: 13px;
    padding: 1px 10px;
    border-radius: 4px;
    margin-bottom: 15px;
    opacity: 0;
  }
`

export const Sheet = ({ title, slug, items, onlyCode }) => (
  <SheetContainer id={title}>
    <SheetTitle className="sheet-title">
      <h3>{title}</h3>
      <a href={`${slug}#${title}`}>
        <FiLink />
      </a>
    </SheetTitle>
    <ul className="single-item">
      {items ? (
        items.map(({ definition, code }, index) => (
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
        ))
      ) : (
        <pre className="code">
          <code>{onlyCode}</code>
        </pre>
      )}
    </ul>
  </SheetContainer>
)
