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
        title: `Robin on the way`,
        author: {
            name: `Robin Till`,
            summary: `who walks on the way to anywhere it leads. No question asked.`,
        },
        description: `who walks on the way to anywhere it leads. No question asked.`,
        siteUrl: `https://robinontheway.com/`,
        social: {
            github: `Snory`,
        },
    },
    plugins: [
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/blog`,
                name: `blog`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 630,
                            showCaptions: true
                        },
                    },
                    {
                        resolve: `gatsby-remark-table-of-contents`,
                        options: {
                            exclude: "Table of Contents",
                            tight: false,
                            ordered: false,
                            fromHeading: 1,
                            toHeading: 6,
                            className: "table-of-contents"
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-autolink-headers`,
                    `gatsby-remark-prismjs`,                    
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMarkdownRemark } }) => {
                            return allMarkdownRemark.nodes.map(node => {
                                return Object.assign({}, node.frontmatter, {
                                    description: node.excerpt,
                                    date: node.frontmatter.date,
                                    url: site.siteMetadata.siteUrl + node.fields.slug,
                                    guid: site.siteMetadata.siteUrl + node.fields.slug,
                                    custom_elements: [{ "content:encoded": node.html }],
                                })
                            })
                        },
                        query: `{
              allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }`,
                        output: "/rss.xml",
                        title: "Robin on the way RSS Feed",
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Robin on the way`,
                short_name: `RobinOnTheWay`,
                start_url: `/`,
                background_color: `#ffffff`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/logo450.png`, // This path is relative to the root of the site.
            },
        },
    ],
}
