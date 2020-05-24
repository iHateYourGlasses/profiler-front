module.exports = {
  siteMetadata: {
    title: `Анкета Анона`,
    description: `Создай свою анкету и запости ее где хочешь -  пусть все увидят твою снежинковость!`,
    author: `@sprintbutcher`,
  },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prettier`,
            options: {
              // Look for local .prettierrc file.
              // The same as `prettier.resolveConfig(process.cwd())`
              usePrettierrc: true,
              // Overwrite prettier options, check out https://prettier.io/docs/en/options.html
              prettierOptions: {}
            },
          },
          // any highlight plugin should be after
          `gatsby-remark-prismjs`,
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
