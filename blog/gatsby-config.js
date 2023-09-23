module.exports = {
  siteMetadata: {
    title: "Jenkins",
    description:
      "Jenkins - an open source automation server which enables developers around the world to reliably build, test, and deploy their software",
    author: "@jenkinsci",
    // siteUrl: "TBD",
    twitterUsername: "@JenkinsCI",
    buildDate: new Date(),
  },
  plugins: [
    `gatsby-transformer-asciidoc`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-asciidoc`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `authors`,
        path: `${__dirname}/authors/authors`,
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `changelogs`,
        path: `${__dirname}/data/changelogs`,
      },
    },
    `gatsby-transformer-asciidoc`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `upgrades`,
        path: `${__dirname}/data/upgrades`,
      },
    },
    {
      resolve: `gatsby-transformer-asciidoc`,
      options: {
        attributes: {
          imagesdir: `/images@`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
  ],
};
