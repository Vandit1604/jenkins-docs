
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/vandit/gsoc-project-demo/antora-jenkins/blog-gatsby-test/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/home/vandit/gsoc-project-demo/antora-jenkins/blog-gatsby-test/src/pages/index.js")),
  "component---src-templates-article-js": preferDefault(require("/home/vandit/gsoc-project-demo/antora-jenkins/blog-gatsby-test/src/templates/article.js"))
}

