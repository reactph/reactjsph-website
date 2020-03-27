// eslint-disable-next-line import/no-extraneous-dependencies
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const FACEBOOK_PAGE_ID = 431794124327063 // ReactJS PH Facebook Page ID

module.exports = {
  siteMetadata: {
    title: `ReactJS Philippines`,
    description: `ReactJS Enthusiasts in the Philippines`,
    author: `ReactJS PH`,
    email: `reactjs.ph@yahoo.com`,
    cover: `/meta-image-cover.jpg`,
    url: `https://reactjs.org.ph`,
    social: {
      facebook: `https://www.facebook.com/reactjsphilippines/`,
      messenger: `https://m.me/reactjsphilippines`,
      meetup: `https://www.meetup.com/ReactJS-Philippines/`,
      linkedin: `https://www.linkedin.com/company/reactjs-philippines/`,
    },
  },
  pathPrefix: `/reactjsph-website`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ReactJS Philippines`,
        short_name: `ReactJS PH`,
        description: `ReactJS Enthusiasts in the Philippines`,
        start_url: `/`,
        background_color: `#0c1d60`,
        theme_color: `#0c1d60`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `icons/icon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `icons/icon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `icons/icon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `icons/icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `icons/icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `icons/icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
          {
            src: `icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `icons/icon-384x384.png`,
            sizes: `384x384`,
            type: `image/png`,
          },
          {
            src: `icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `icons/apple-icon-57x57.png`,
            sizes: `57x57`,
            rel: `apple-touch-icon`,
          },
          {
            src: `icons/apple-icon-60x60.png`,
            sizes: `60x60`,
            rel: `apple-touch-icon`,
          },
          {
            src: `icons/apple-icon-72x72.png`,
            sizes: `72x72`,
            rel: `apple-touch-icon`,
          },
          {
            src: `icons/apple-icon-114x114.png`,
            sizes: `114x114`,
            rel: `apple-touch-icon`,
          },
          {
            src: `icons/apple-icon-120x120.png`,
            sizes: `120x120`,
            rel: `apple-touch-icon`,
          },
          {
            src: `icons/apple-icon-144x144.png`,
            sizes: `144x144`,
            rel: `apple-touch-icon`,
          },
          {
            src: `icons/apple-icon-152x152.png`,
            sizes: `152x152`,
            rel: `apple-touch-icon`,
          },
          {
            src: `icons/apple-icon-180x180.png`,
            sizes: `180x180`,
            rel: `apple-touch-icon`,
          },
        ],
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-facebook-graphql`,
      options: {
        // Facebook account or page ID
        pageId: FACEBOOK_PAGE_ID,
        params: {
          fields: ["events.limit(3)"],
        },
        // Access Token from Facebook Graph API
        accessToken: process.env.FACEBOOK_GRAPH_TOKEN,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
