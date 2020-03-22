import React from "react"

import App from "../components/app"
import { SEO } from "../components/common"
import PrintContent from "../components/printcontent"

const PrintSheet = ({ pageContext: { data, filename, contributors } }) => (
  <App data={data} noFooter>
    <SEO title={data.title} description={data.description} lang="bn" />
    <PrintContent filename={filename} data={data} contributors={contributors} />
  </App>
)

export default PrintSheet
