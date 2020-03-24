const Config = require('./Config')
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Social Assemble - Assemble for Socially Distant Learning',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/media`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-event-calendar',
        short_name: 'starter-calendar',
        start_url: '/',
        background_color: Config.theme.background,
        theme_color: Config.theme.brand,
        display: 'minimal-ui',
        icon: 'media/icon.svg',
      },
    },
    // `gatsby-transformer-yaml`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `./content/`,
    //   },
    // },
    'gatsby-plugin-offline',
  ],
}
