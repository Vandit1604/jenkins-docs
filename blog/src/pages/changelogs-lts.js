import React from "react"
import IndexPageLayout from "../layouts"
import { graphql } from 'gatsby'

class IndexPage extends React.Component {
  render() {
    return (
      <IndexPageLayout>
        {this.props.data.ltsYaml.edges.map(({ node }) => {
          return (
            <div>
              <h1>LTS Changelog</h1>
              {node.version}
            </div>
          )
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
