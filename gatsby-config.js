module.exports = {
  siteMetadata: {
    title: `ReactJS Philippines`,
    description: `ReactJS Enthusiasts in the Philippines`,
    author: `ReactJS PH`,
    email: `reactjs.ph@yahoo.com`,
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
        start_url: `/`,
        background_color: `#0c1d60`,
        theme_color: `#0c1d60`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-emotion`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
