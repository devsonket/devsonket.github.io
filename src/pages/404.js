import React from "react"

import ErrorContainer from "../components/layout/ErrorContainer"

import { Button } from "../components/common"

import errorBanner from "../assets/images/lost.svg"

export default () => (
  <ErrorContainer>
    <img src={errorBanner} alt="error" />
    <h2>এখানে কিছু পাওয়া যায় নি!</h2>
    <p>
      আপনি চাইলে নতুন আরেকটি চিটশিট যুক্ত করতে পারেন অথবা আমাদেরকে জানাতে পারেন।
      আর যদি মনে করেন এটা কোনো বাগ তাহলে সেটাও জানাতে ভুলবেন না।
    </p>
    <div className="action-btn">
      <Button bgColor="#5e7986" to="/">
        হোম
      </Button>
      <Button
        target="_blank"
        rel="noopener noreferrer"
        bgColor="#4caf50"
        href="https://github.com/devsonket/devsonket.github.io/issues/new?title=%E0%A6%95%E0%A6%BF%E0%A6%B8%E0%A7%87%E0%A6%B0%20%E0%A6%9A%E0%A6%BF%E0%A6%9F%E0%A6%B6%E0%A7%80%E0%A6%9F%20%E0%A6%9A%E0%A6%BE%E0%A6%A8?&body=%E0%A6%95%E0%A6%BF%20%E0%A6%95%E0%A6%BF%20%E0%A6%9A%E0%A6%BE%E0%A6%A8%20%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A4%20%E0%A6%B2%E0%A6%BF%E0%A6%96%E0%A7%81%E0%A6%A8&labels=%E0%A6%A8%E0%A6%A4%E0%A7%81%E0%A6%A8%20%E0%A6%86%E0%A6%B0%E0%A7%87%E0%A6%95%E0%A6%9F%E0%A6%BE"
      >
        নতুন আরেকটা
      </Button>
      <Button
        target="_blank"
        rel="noopener noreferrer"
        bgColor="#f44336"
        className="btn btn-bug"
        href="https://github.com/devsonket/devsonket.github.io/issues/new?title=%E0%A6%B8%E0%A6%AE%E0%A6%B8%E0%A7%8D%E0%A6%AF%E0%A6%BE&body=%E0%A6%B8%E0%A6%AE%E0%A6%B8%E0%A7%8D%E0%A6%AF%E0%A6%BE%20%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A4&labels=%E0%A6%B8%E0%A6%AE%E0%A6%B8%E0%A7%8D%E0%A6%AF%E0%A6%BE"
      >
        বাগ
      </Button>
    </div>
  </ErrorContainer>
)
