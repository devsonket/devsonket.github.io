import React from "react"

import SEO from "../components/seo"
import App from "../components/app"
import PrintContent from "../components/printcontent"
import SinglePage from "../pages/singlepage"

const PrintSheet = ({ pageContext: { data, contributors } }) => {
  return (
    <SinglePage>
      <App data={data} noFooter>
        <SEO title={data.title} description={data.description} lang="bn" />
        <PrintContent contributors={contributors} data={data} />
      </App>
    </SinglePage>
  )
}

export default PrintSheet
