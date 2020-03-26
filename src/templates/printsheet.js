import React from "react"

import AppContainer from "../components/layout/AppContainer"
import PrintContent from "../components/Print/PrintContent"

import { SEO } from "../components/common"

const PrintSheet = ({ pageContext: { data, filename, contributors } }) => (
  <AppContainer data={data} noFooter>
    <SEO title={data.title} description={data.description} lang="bn" />
    <PrintContent filename={filename} data={data} contributors={contributors} />
  </AppContainer>
)

export default PrintSheet
