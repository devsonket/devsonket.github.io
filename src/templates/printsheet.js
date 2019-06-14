import React, { useEffect } from "react"

import SEO from "../components/seo"
import App from "../components/app"
import PrintContent from "../components/printcontent"
import SinglePage from "../pages/singlepage"

const PrintSheet = ({ pageContext: { data, contributors } }) => {
  useEffect(() => {
    const printTimeout = setTimeout(() => {
      window.print()
    }, 3000)
    return () => {
      clearTimeout(printTimeout)
    }
  })
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
