// import React from "react"

// import SEO from "../components/seo"
// import App from "../components/app"
// import Desc from "../components/desc"
// import Content from "../components/content"
// import { Container } from "../components/common"
// import SinglePage from "../pages/singlepage"

// const CheatSheet = ({ pageContext: { data, filename } }) => {
//   return (
//     <SinglePage>
//       <App data={data}>
//         <SEO title={data.title} description={data.description} lang="bn" />
//         <Desc filename={filename} data={data} />
//         <Container>
//           <Content data={data} />
//         </Container>
//       </App>
//     </SinglePage>
//   )
// }

// export default CheatSheet

import React from "react"

import App from "../components/app"
import Intro from "../components/intro"
import Content from "../components/content"
import Footer from "../components/footer"
import { isItDark } from "../utils"

export default ({ pageContext: { data, filename } }) => {
  const { colorPref } = data
  const isLightColor = isItDark(colorPref)
  return (
    <App>
      <Intro
        isLightColor={isLightColor}
        colorPref={colorPref}
        filename={filename}
        data={data}
      />
      <Content data={data} colorPref={colorPref} />
      <Footer />
    </App>
  )
}
