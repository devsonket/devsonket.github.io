import React from "react";
import styled from "@emotion/styled";

const SingleItems = styled.div`
  & h3 {
    font-size: 18px;
    margin-bottom: 15px;
    color: rgba(0, 0, 0, 0.5);

    @media print {
      color: #000;
    }
  }

  .single-item {
    background-color: #fff;
    padding: 25px;
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
    margin-bottom: 15px;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 15px;

    @media print {
      flex: 2 2 50%;
      padding: 0 15px;
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

  pre.code {
    overflow-y: hidden;
    white-space: pre-wrap;
    overflow: hidden;
    word-wrap: break-word;
  }
`;

export function SingleItem({ title, items, code: onlyCode }) {
  return (
    <SingleItems>
      <h3>{title}</h3>
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
    </SingleItems>
  );
}
