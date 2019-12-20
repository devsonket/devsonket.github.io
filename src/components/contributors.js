import React from "react"
import styled from "@emotion/styled"

const ContributorsContainer = styled.div`
  margin-top: 25px;
  p {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    li {
      height: 40px;
      width: 40px;
      margin: 5px;
      border-radius: 8px;
      img {
        border: solid 3px var(--accenthighlight);
        border-radius: 8px;
      }
    }
  }
`

const Contributors = ({ contributors }) => {
  return (
    <ContributorsContainer className="no-print">
      <p>কন্ট্রিবিউটর</p>
      <ul>
        {Object.keys(contributors).map(contributor => (
          <li key={contributor}>
            <div className="contributor-profile">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={contributors[contributor].html_url}
              >
                <img
                  alt={contributors[contributor].login}
                  src={contributors[contributor].avatar_url}
                />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </ContributorsContainer>
  )
}

export default Contributors
