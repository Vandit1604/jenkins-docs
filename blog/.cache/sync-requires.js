
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/vandit/gsoc-project-demo/jenkins-docs/blog/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/home/vandit/gsoc-project-demo/jenkins-docs/blog/src/pages/index.js")),
  "component---src-templates-article-js": preferDefault(require("/home/vandit/gsoc-project-demo/jenkins-docs/blog/src/templates/article.js"))
}

