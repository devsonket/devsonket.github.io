const path = require("path")
const axios = require("axios")

const contributorMap = require("./scripts/contributorMap")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve("src/templates/CheatSheet.js")
  const printTemplate = path.resolve("src/templates/PrintSheet.js")

  let contributors = {}

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
    `).then(async res => {
      if (res.errors) {
        return Promise.reject(res.errors)
      }
      const edges = res.data.allFile.edges
      for (let i = 0; i < edges.length; i++) {
        const filename = edges[i].node.name
        try {
          const { data: contributorsRaw } = await axios.get(
            `https://api.github.com/repos/devsonket/devsonket.github.io/commits?path=data/${filename}.json`,
            {
              headers: {
                Authorization: `Bearer ${process.env.GATSBY_GITHUB_TOKEN}`,
              },
            }
          )
          contributors[filename] = contributorMap(contributorsRaw)
        } catch {
          contributors[filename] = {}
        }
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
            contributors: contributors[filename],
          },
        })
        createPage({
          path: `/print/${data.id}/`,
          component: printTemplate,
          context: {
            id: `${data.id}`,
            data,
            filename,
            contributors: contributors[filename],
          },
        })
        resolve()
      })
    })
  })
}
