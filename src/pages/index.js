import React from "react"

import App from "../components/app"
import Intro from "../components/intro"
import Content from "../components/content"
import Footer from "../components/footer"
import { SEO } from "../components/common"

export default () => {
  return (
    <App>
      <SEO
        title="বাংলা ডেভেলপার চিটশিট"
        description="ডেভেলপারদের জন্য, ডেভেলপারদের দ্বারা, মাতৃভাষা বাংলায় সবচেয়ে বড় চিটশিট ভান্ডার"
      />
      <Intro />
      <Content />
      <Footer />
    </App>
  )
}
