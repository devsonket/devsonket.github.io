import React, { useState } from "react"

import App from "../components/app"
import SEO from "../components/seo"
import Intro from "../components/intro"
import View from "../components/view"
import Library from "../components/library"

import "./index.css"

export default () => {
  const [searchInput, setsearchInput] = useState("")

  const handleInputChange = e => {
    setsearchInput(e.target.value)
  }

  return (
    <App>
      <SEO
        title="ডেভেলপার চিটশিট"
        description="বাংলা চিটশিটের ভান্ডার। নিজের মাতৃভাষায় চিটশিটের ভান্ডার সমৃদ্ধ করতে আপনিও যোগ দিন"
        lang="bn"
      />
      <Intro input={searchInput} handleInputChange={handleInputChange} />
      <View input={searchInput} />
      <Library />
    </App>
  )
}
