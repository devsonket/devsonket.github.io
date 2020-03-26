import React from "react"

import AppContainer from "../components/layout/AppContainer"
import HeroContainer from "../components/layout/HeroContainer"
import ContentContainer from "../components/layout/ContentContainer"

import Footer from "../components/Footer"

import { SEO } from "../components/common"

import { isItDark } from "../utils"

const CheatSheet = ({ pageContext: { data, filename, contributors } }) => {
  const { colorPref } = data
  const islightcolor = isItDark(colorPref)
  return (
    <AppContainer>
      <SEO
        title={data.title}
        description={data.description}
        image={`${data.id}.jpg`}
      />
      <HeroContainer
        islightcolor={islightcolor.toString()}
        colorpref={colorPref}
        filename={filename}
        data={data}
        contributors={contributors}
      />
      <ContentContainer data={data} colorPref={colorPref} />
      <Footer />
    </AppContainer>
  )
}

export default CheatSheet
