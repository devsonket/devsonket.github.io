const path = require("path")

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
      res.data.allFile.edges.map(({ node }) => {
        const filename = node.name
        const data = require(`${__dirname}/data/${filename}`)
        createPage({
          path: `/${data.id}/`,
          component: postTemplate,
          context: {
            id: `${data.id}`,
            data,
            filename,
          },
        })
        createPage({
          path: `/print/${data.id}/`,
          component: printTemplate,
          context: {
            id: `${data.id}`,
            data,
            filename,
          },
        })
        resolve()
      })
    })
  })
}
