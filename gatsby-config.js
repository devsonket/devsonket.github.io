module.exports = {
  siteMetadata: {
    title: `ডেভ সংকেত`,
    description: `বাংলা চিটশিটের ভান্ডার`,
    author: `devsonket`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ডেভ সংকেত`,
        short_name: `devsonket`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#333`,
        display: `minimal-ui`,
        icon: `src/images/devsonket-icon.png`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
