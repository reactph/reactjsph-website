// eslint-disable-next-line import/no-extraneous-dependencies
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const FACEBOOK_PAGE_ID = 431794124327063 // ReactJS PH Facebook Page ID

module.exports = {
  siteMetadata: {
    title: `ReactJS Philippines`,
    description: `We are a group of Filipino developers dedicated to nation-building through our community and shared enthusiasm for React and for excellence overall.`,
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
        description: `We are a group of Filipino developers dedicated to nation-building through our community and shared enthusiasm for React and for excellence overall.`,
        start_url: `/`,
        background_color: `#0c1d60`,
        theme_color: `#0c1d60`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
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
