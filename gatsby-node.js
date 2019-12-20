const path = require("path")
const axios = require("axios")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
      res.data.allFile.edges.map(async ({ node }, index) => {
        const filename = node.name
        const data = require(`${__dirname}/data/${filename}`)
        try {
          const { data: contributorsRaw } = await axios.get(
            `https://api.github.com/repos/devsonket/devsonket.github.io/commits?path=data/${filename}.json`,
            {
              headers: {
                Authorization: `Bearer ${process.env.GATSBY_GITHUB_TOKEN}`,
              },
            }
          )
          console.log(index + 1, contributorsRaw)
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
        } catch (err) {
          console.log(err)
        }
        resolve()
      })
    })
  })
}
