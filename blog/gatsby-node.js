const _ = require(`lodash`)
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  // The “graphql” function allows us to run arbitrary
  // queries against the local Drupal graphql schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  return graphql(
    `
      {
  allAsciidoc(limit: 1000) {
    edges {
      node {
        id
        
        document {
          title
        }
        fields {
          slug
        }
        pageAttributes {
          author
          tags
          author_name
          blog
          description
          github
          irc
          linkedin
          medium
          opengraph
          twitter
        }
      }
    }
  }
}
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog-list pages
    const posts = result.data.allAsciidoc.edges
    const filteredPosts = posts.filter(post => post.node.document.title !== 'Author');
    const postsPerPage = 9
    const numPages = Math.ceil(filteredPosts.length / postsPerPage);
    // const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve("./src/templates/blog-list-template.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })

    // Create Asciidoc pages.
    const articleTemplate = path.resolve(`./src/templates/article.js`)
    _.each(result.data.allAsciidoc.edges, edge => {
      // Gatsby uses Redux to manage its internal state.
      // Plugins and sites can use functions like "createPage"
      // to interact with Gatsby.
      createPage({
        // Each page is required to have a `path` as well
        // as a template component. The `context` is
        // optional but is often necessary so the template
        // can query data specific to each page.
        path: edge.node.fields.slug,
        component: slash(articleTemplate),
        context: {
          id: edge.node.id,
        },
      })
    })
  })
}

exports.onCreateNode = async ({ node, actions, getNode, loadNodeContent }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Asciidoc`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// didn't add the stage prop as we want gatsby to apply this polyfill to gatsby develop command
exports.onCreateWebpackConfig = ({ actions, config }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        stream: false,
        url: false,
        fs: false,
        path: false,
        util: require.resolve('util'),
        os: require.resolve('os-browserify/browser'),
      },
    },
  })
}
