import React from "react"
import styled from "@emotion/styled"

import Header from "./header"
import TextCloud from "./TextCloud"

const HeaderIntro = styled.div`
  padding: 0 50px;
  text-align: center;
  padding-bottom: 100px;
  h1 {
    color: var(--headline);
  }
  p {
    color: var(--paragraph);
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
    background-color: #fffffe;
    border-color: #fffffe;
    color: #272343;
    padding: 15px;
    border-radius: 3px;
    transition: 0.2s all ease;
  }
  input:focus {
    outline: none;
  }
  p {
    margin-top: 0px;
    color: #485663;
    font-size: 15px;
  }
`

export default ({ input, handleInputChange }) => (
  <Header>
    <HeaderIntro>
      <h1>ডেভেলপার চিটশিট</h1>
      <p>
        বাংলা চিটশিটের ভান্ডার। নিজের মাতৃভাষায় চিটশিটের ভান্ডার সমৃদ্ধ করতে
        আপনিও যোগ দিন
      </p>
      <input
        placeholder="কিসের উপর চিটশিট চাচ্ছেন?"
        value={input}
        onChange={handleInputChange}
      />
    </HeaderIntro>
  </Header>
)
