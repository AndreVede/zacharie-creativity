import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Zacharie-Creativity`,
    description: 'Portfolio présentant les compétences de Zacharie Boisnard.',
    author: 'Zacharie Boisnard',
    siteUrl: `https://www.yourdomain.tld`,
    lang: 'fr',
    menuLinks: [
      {
        name: 'Accueil',
        link: '/'
      },
      {
        name: 'post 1',
        link: '/post-1/'
      }
    ]
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  // "gatsby-plugin-google-gtag" à configurer
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-styled-components", "gatsby-transformer-remark", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "post",
        "path": "./src/content"
      }
    }, {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat:300,400,500,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }]
};

export default config;
