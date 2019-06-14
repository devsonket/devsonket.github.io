const path = require("path")
const axios = require("axios")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve("src/templates/cheatsheet.js")
  const printTemplate = path.resolve("src/templates/printsheet.js")
  return new Promise((resolve, reject) => {
    graphql(`
      query {
        allFile(
          filter: {
            extension: { eq: "json" }
            relativeDirectory: { nin: "demo", ne: "draft" }
          }
          limit: 1000
        ) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `).then(res => {
      if (res.errors) {
        return Promise.reject(res.errors)
      }
      return res.data.allFile.edges.map(async ({ node }) => {
        const data = require(`${__dirname}/data/${node.name}`)
        const { data: contributors } = await axios(
          `https://api.github.com/repos/devsonket/devsonket.github.io/commits?path=data/${
            node.name
          }.json`,
          {
            headers: {
              Authorization: `Bearer ${process.env.GATSBY_GITHUB_TOKEN}`,
            },
          }
        )
        createPage({
          path: `/${data.id}/`,
          component: postTemplate,
          context: {
            id: `${data.id}`,
            data,
          },
        })
        createPage({
          path: `/print/${data.id}/`,
          component: printTemplate,
          context: {
            id: `${data.id}`,
            data,
            contributors,
          },
        })
        resolve()
      })
    })
  })
}
