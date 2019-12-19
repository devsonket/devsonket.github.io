// import React from "react"

// import SEO from "../components/seo"
// import App from "../components/app"
// import PrintContent from "../components/printcontent"
// import SinglePage from "../pages/singlepage"

// const PrintSheet = ({ pageContext: { data, filename } }) => (
//   <SinglePage>
//     <App data={data} noFooter>
//       <SEO title={data.title} description={data.description} lang="bn" />
//       <PrintContent filename={filename} data={data} />
//     </App>
//   </SinglePage>
// )

// // export default PrintSheet

import React from "react"

import App from "../components/app"
import Intro from "../components/intro"
import Content from "../components/content"
import Footer from "../components/footer"

export default ({ children }) => (
  <App>
    <Intro />
    <Content />
    <Footer />
  </App>
)
