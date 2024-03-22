const _ = require(`lodash`);
const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = ({ graphql, actions }) => {

  const { createPage, createRedirect } = actions;
  createRedirect({
    fromPath: `/node/`,
    toPath: `/blog/`,
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  });

  return graphql(`
        {
            allAsciidoc {
                edges {
                    node {
                        id
                        html
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
                            authoravatar
                        }
                    }
                }
            }
        }
    `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // authors page | passing the authors info the pages via pageContext
    const authorPostTemplate = path.resolve(`src/templates/author-pages.js`);
    const authors = result.data.allAsciidoc.edges;
    const filteredAuthors = authors.filter(
      (author) => author.node.document.title === "About the Author",
    );
    filteredAuthors.forEach(({ node }) => {
      createPage({
        path: `author/${node.pageAttributes.github}`,
        component: authorPostTemplate,
        context: {
          // asterisk's as we're using inbuilt glob in gatsby
          authorName: `*${node.pageAttributes.github}*`,
          filteredAuthors,
        },
      });
    });

    // Create blog-list pages
    const posts = result.data.allAsciidoc.edges;
    const filteredPosts = posts.filter((post) => post.node.document.title !== "Author");
    const postsPerPage = 9;
    const numPages = Math.ceil(filteredPosts.length / postsPerPage);
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve("./src/templates/blog-list-template.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          filteredAuthors,
        },
      });
    });

    // Create Asciidoc pages.
    const articleTemplate = path.resolve(`./src/templates/article.js`);
    _.each(result.data.allAsciidoc.edges, (edge) => {
      // Gatsby uses Redux to manage its internal state.
      // Plugins and sites can use functions like "createPage"
      // to interact with Gatsby.
      createPage({
        // Each page is required to have a `path` as well
        // as a template component. The `context` is
        // optional but is often necessary so the template
        // can query data specific to each page.
        path: "blog" + edge.node.fields.slug,
        component: slash(articleTemplate),
        context: {
          id: edge.node.id,
          authorname: edge.node.pageAttributes.author_name,
          author: edge.node.pageAttributes.author,
          filteredAuthors,
        },
      });
    });
  });
};

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Asciidoc`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
