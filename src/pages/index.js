import React from "react"

import App from "../components/app"
import Intro from "../components/intro"
import Content from "../components/content"
import Footer from "../components/footer"

export default () => {
  return (
    <App>
      <Intro />
      <Content />
      <Footer />
    </App>
  )
}
