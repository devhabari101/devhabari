const path = require('path');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: 'MASJID TAQWA(ILALA-BUNGONI)',
    titleTemplate: '',
    description: 'Elimu ya qur-aan na sunnah',
    url: '', // No trailing slash allowed!
    image: '/logo.png', // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: '',
    defaultTitle: 'MASJID TAQWA(ILALA-BUNGONI)',
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    `gatsby-read-time-estimate`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          `gatsby-remark-responsive-iframe`,
          {
            resolve: 'gatsby-remark-embedded-codesandbox',
            options: {
              directory: `${__dirname}/src/_examples/`,
              protocol: 'embedded-codesandbox://',
              embedOptions: {
                view: 'preview',
                hidenavigation: 1,
              },
              getIframe: url => `<iframe src="${url}" class="embedded-codesandbox" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>`
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        content: [
          path.join(process.cwd(), 'src/**/!(*.d).{ts,js,jsx,tsx,md,mdx}'),
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },
  ],
};
