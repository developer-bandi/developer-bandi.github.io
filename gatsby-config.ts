/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `개발자 반디의 기술블로그`,
    description: `프론트엔드 개발자로 일하고있는 반디의 기술블로그 입니다`,
    author: `반디`,
    keyword: "Frontend, Javascript, React",
    siteUrl: `https://developer-bandi.github.io`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `반디의 개발 블로그`,
        short_name: `반디의 개발 블로그`,
        start_url: `/`,
        background_color: `#34A1BC`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 940,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-external-links`,
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-DMDSSM1HZ8`,
        head: true,
      },
    },
    "gatsby-plugin-sitemap",
  ],
}
