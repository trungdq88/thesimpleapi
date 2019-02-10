module.exports = {
  siteMetadata: {
    title: `The Simple API`,
    description: `Just call it`,
    author: `@trungdq88`,
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
        name: `The Simple API`,
        short_name: `Simple API`,
        start_url: `/`,
        background_color: `#C73E1D`,
        theme_color: `#C73E1D`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    'gatsby-plugin-root-import',
    'gatsby-plugin-styled-components',
  ],
};
