import React, { useState, useEffect } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import { FiMessageSquare, FiPlus } from "react-icons/fi"

const InputContainer = styled.div`
  width: 100%;
  input {
    position: relative;
    width: 100%;
    background: #f8f6f8;
    border: none;
    font-size: 18px;
    border-radius: 30px;
    padding: 15px 25px;
    z-index: 0;
    transition: 0.2s all;
    :focus {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      background: var(--accentwhite);
      outline: none;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px;
    }
  }

  ul {
    position: relative;
    list-style: none;
    box-shadow: rgba(0, 0, 0, 0.03) 0px 6px 8px, rgba(0, 0, 0, 0.3) 0px 1px 2px;
    border-top: 1px solid var(--accentlight);
    border-radius: 30px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    z-index: 2;
    li {
      background: var(--accentwhite);
      cursor: pointer;
      :hover {
        background: var(--accentlight);
      }
      a {
        text-decoration: none;
        color: inherit;
        font-weight: bold;
        display: block;
        width: 100%;
        padding: 15px 25px;
        small {
          font-weight: normal;
          opacity: 0.85;
        }
      }
    }
    .instruction {
      padding: 15px 25px;
      cursor: default;
      font-weight: bold;
      background: var(--accentlight);
      border-radius: 30px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  input:focus ul {
    background: red;
  }
`

const NotFoundColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px;
  cursor: default;
  @media (max-width: 480px) {
    flex-wrap: wrap;
    > * {
      width: 100%;
    }
  }
  .action {
    display: flex;
    align-items: center;
    @media (max-width: 480px) {
      margin-top: 5px;
    }
    a {
      display: flex;
      align-items: center;
      padding: 0;
      margin-left: 15px;
      @media (max-width: 480px) {
        margin-left: 0px;
        margin-right: 15px;
        width: auto;
      }
      svg {
        margin-right: 5px;
      }
    }
  }
`

const SearchResult = () => {
  const [active, setActive] = useState(false)
  const [input, setInput] = useState("")
  let blurTimeout
  useEffect(() => {
    return () => {
      clearTimeout(blurTimeout)
    }
  })
  const handleOnBlur = () => {
    blurTimeout = setTimeout(() => setActive(false), 300)
  }
  return (
    <InputContainer>
      <input
        onChange={e => setInput(e.target.value)}
        onFocus={() => setActive(true)}
        onBlur={handleOnBlur}
        value={input}
        placeholder="কিসের উপর চিটশিট চাচ্ছেন?"
      />
      {active && (
        <ul>
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
            render={({ allFile: { edges } }) => {
              const isEng = String(input[0]).charCodeAt() < 128
              let matchNums
              const uniInput = String(input)
                .trim()
                .toLowerCase()
              if (isEng) {
                matchNums = Object.keys(edges).filter(edge =>
                  String(edges[edge].node.name)
                    .toLowerCase()
                    .includes(uniInput)
                )
              } else {
                matchNums = Object.keys(edges).filter(edge => {
                  const data = require(`../../../data/${edges[edge].node.name}`)
                  if (
                    String(data.title)
                      .toLowerCase()
                      .includes(uniInput)
                  ) {
                    return edge
                  }
                  return false
                })
              }
              const data = matchNums.map(one => edges[one])
              if (!data.length) {
                return (
                  <li className="not-found">
                    <NotFoundColumn>
                      <div>
                        কোন চিটশিট পাওয়া যায়নি
                        <p>
                          <small>
                            <strong>{input}</strong> এর উপর চিটশিট রিকোয়েস্ট
                            করুন অথবা চাইলে নিজেও কন্ট্রিবিউট করতে পারেন
                          </small>
                        </p>
                      </div>
                      <div className="action">
                        <a
                          target="__blank"
                          rel="noopener noreferrer"
                          href="https://github.com/devsonket/devsonket.github.io/issues/new?title=%E0%A6%95%E0%A6%BF%E0%A6%B8%E0%A7%87%E0%A6%B0%20%E0%A6%9A%E0%A6%BF%E0%A6%9F%E0%A6%B6%E0%A7%80%E0%A6%9F%20%E0%A6%9A%E0%A6%BE%E0%A6%A8?&body=%E0%A6%95%E0%A6%BF%20%E0%A6%95%E0%A6%BF%20%E0%A6%9A%E0%A6%BE%E0%A6%A8%20%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A4%20%E0%A6%B2%E0%A6%BF%E0%A6%96%E0%A7%81%E0%A6%A8&labels=%E0%A6%A8%E0%A6%A4%E0%A7%81%E0%A6%A8%20%E0%A6%86%E0%A6%B0%E0%A7%87%E0%A6%95%E0%A6%9F%E0%A6%BE"
                        >
                          <FiMessageSquare /> রিকোয়েস্ট
                        </a>
                        <a
                          target="__blank"
                          rel="noopener noreferrer"
                          href="https://github.com/devsonket/devsonket.github.io#%E0%A6%95%E0%A6%BF%E0%A6%AD%E0%A6%BE%E0%A6%AC%E0%A7%87-%E0%A6%95%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%AC%E0%A6%BF%E0%A6%89%E0%A6%9F-%E0%A6%95%E0%A6%B0%E0%A6%AC%E0%A7%87%E0%A6%A8"
                        >
                          <FiPlus /> কন্ট্রিবিউট
                        </a>
                      </div>
                    </NotFoundColumn>
                  </li>
                )
              }
              return input.length
                ? data.map(edge => {
                    const { id, title, description } = require(`../../../data/${
                      edge.node.name
                    }.json`)
                    return (
                      <li key={id}>
                        <Link to={`/${id}`}>
                          {title}
                          <p>
                            <small>{description}</small>
                          </p>
                        </Link>
                      </li>
                    )
                  })
                : null
            }}
          />
          <li className="instruction">
            <p>
              <small>বাংলায় অথবা ইংরেজিতে লিখে সার্চ করুন</small>
            </p>
          </li>
        </ul>
      )}
    </InputContainer>
  )
}

export default SearchResult
