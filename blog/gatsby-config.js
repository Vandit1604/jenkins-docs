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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content`,
        imagesdir: `${__dirname}/content/post-images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post-images`,
        path: `${__dirname}/content/post-images`,
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
