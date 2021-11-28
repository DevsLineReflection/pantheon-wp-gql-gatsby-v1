module.exports = {
  siteMetadata: {
    title: `Almamun's Blog`,
    description: `This a decoupled gatsby blog using wordpres`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://dev-wp-almamun-blog.pantheonsite.io/graphql`,
        baseUrl: `dev-wp-almamun-blog.pantheonsite.io`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
      },
    },
  ],
}

// module.exports = {
//   siteMetadata: {
//     title: `Gatsby WordPress Tutorial`,
//     description: `An example to learn how to source data from WordPress.`,
//     author: `@gatsbyjs`,
//   },
//   plugins: [
//     // https://public-api.wordpress.com/wp/v2/sites/gatsbyjsexamplewordpress.wordpress.com/pages/
//     /*
//      * Gatsby's data processing layer begins with “source”
//      * plugins. Here the site sources its data from WordPress.
//      */

//     /**
//      * The following plugins aren't required for gatsby-source-wordpress,
//      * but we need them so the default starter we installed above will keep working.
//      **/
//     `gatsby-plugin-react-helmet`,
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `images`,
//         path: `${__dirname}/src/images`,
//       },
//     },
//     `gatsby-transformer-sharp`,
//     `gatsby-plugin-sharp`,
//     {
//       resolve: `gatsby-plugin-manifest`,
//       options: {
//         name: `gatsby-starter-default`,
//         short_name: `starter`,
//         start_url: `/`,
//         background_color: `#663399`,
//         theme_color: `#663399`,
//         display: `minimal-ui`,
//         icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
//       },
//     },
//     {
//       resolve: `gatsby-source-wordpress`,
//       options: {
//         url: `https://dev-wp-almamun-blog.pantheonsite.io/graphql`,
//         baseUrl: `dev-wp-almamun-blog.pantheonsite.io`,
//         protocol: `https`,
//         hostingWPCOM: false,
//         useACF: true,
//       },
//     },
//   ],
// }
