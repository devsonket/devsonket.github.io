const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('src/templates/cheatsheet.js')
  return new Promise((resolve, reject) => {
    graphql(`
      query {
        allFile(filter: {extension: {eq: "json"}, relativeDirectory: {nin: "demo", ne: "draft"}}, limit: 1000) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `).then(res => {
      if(res.errors) {
        return Promise.reject(res.errors)
      }
      res.data.allFile.edges.map(( { node }) => {
        const data = require(`${__dirname}/data/${node.name}`)
        createPage({
          path: `/${data.id}/`,
          component: postTemplate,
          context: {
            id: `${data.id}`,
            data
          }
        })
        resolve();
      })
    })
  })
}
