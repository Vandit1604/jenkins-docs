import React from "react"
import IndexPageLayout from "../layouts"

class IndexPage extends React.Component {
  render() {
    return (
      <IndexPageLayout>
        {this.props.data.ltsYaml.edges.map(({ node }) => {
          <h1>LTS Changelog</h1>
        {node.version}
        })}
      </IndexPageLayout>
    );
  }
}

export default IndexPage

export const pageQuery = graphql`
query MyQuery {
  allLtsYaml {
    edges {
      node {
        version
        date
        changes {
          type
          category
          issue
          message
          pull
          pr_title
        }
      }
    }
  }
}`
