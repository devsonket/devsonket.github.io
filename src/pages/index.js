import React from "react"

import AppContainer from "../components/layout/AppContainer"
import HeroContainer from "../components/layout/HeroContainer"
import ContentContainer from "../components/layout/ContentContainer"

import Footer from "../components/Footer"

import { SEO } from "../components/common"

export default () => {
  return (
    <AppContainer>
      <SEO
        title="বাংলা ডেভেলপার চিটশিট"
        description="ডেভেলপারদের জন্য, ডেভেলপারদের দ্বারা, মাতৃভাষা বাংলায় সবচেয়ে বড় চিটশিট ভান্ডার"
      />
      <HeroContainer />
      <ContentContainer />
      <Footer />
    </AppContainer>
  )
}
