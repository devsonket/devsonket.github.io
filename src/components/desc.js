import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import axios from "axios"

import { Button } from "./common"
import Header from "./header"

import { contributorMap } from "../utils"

export const HeaderEl = styled.div`
  width: 940px;
  margin: 80px auto 0 auto;
  @media only screen and (max-width: 940px) {
    width: 100%;
  }
`

const HeaderIntro = styled.div`
  padding: 0 50px;
  text-align: center;
  padding-bottom: 100px;
  h1 {
    color: var(--headline);
  }
  @media only screen and (max-width: 460px) {
    padding: 0 15px;
    padding-bottom: 15px;
  }
  @media print {
    padding-bottom: 0px;
  }
  input {
    width: 100%;
    border: none;
    padding: 15px;
    border-radius: 4px;
    box-shadow: 0 6px 8px rgba(102, 119, 136, 0.03),
      0 1px 2px rgba(102, 119, 136, 0.3);
    transition: 0.2s all ease;
  }
  input:focus {
    outline: none;
    box-shadow: 0 0 0 4px #d6dcdb;
  }
  p {
    margin-top: 0px;
    color: #485663;
    font-size: 15px;
  }
`

export default ({ filename, data: { id, title, description } }) => {
  const [contributor, setContributor] = useState(null)

  const getContributor = async () => {
    try {
      let { data } = await axios(
        `https://api.github.com/repos/devsonket/devsonket.github.io/commits?path=data/${filename}.json`
      )
      data = contributorMap(data)
      setContributor(data)
    } catch (e) {
      setContributor(null)
    }
  }

  useEffect(() => {
    if (!contributor) {
      getContributor()
    }
  })

  return (
    <Header>
      <HeaderEl>
        <HeaderIntro>
          <h1>{title}</h1>
          <p>{description}</p>
          {contributor && (
            <ul className="contributor no-print">
              <p>কন্ট্রিবিউটর</p>
              {Object.keys(contributor).map(oneContributor => (
                <li key={oneContributor}>
                  <div className="contributor-profile">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href={contributor[oneContributor].html_url}
                    >
                      <img
                        alt={contributor[oneContributor].login}
                        src={contributor[oneContributor].avatar_url}
                      />
                    </a>
                    <span>{contributor[oneContributor].count}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="print no-print">
            <Button
              href={`/print/${id}`}
              target
              rel="noreferrer noopener"
              text="প্রিন্ট করুন"
              bgColor="#02b3e4"
            />
          </div>
        </HeaderIntro>
      </HeaderEl>
    </Header>
  )
}
