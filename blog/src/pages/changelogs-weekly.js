import React from "react"
import IndexPageLayout from "../layouts"

class IndexPage extends React.Component {
  render() {
    return (
      <IndexPageLayout>
        <ul>
          {this.props.data.allWeeklyYaml.edges.map(({ node }) => {

          })}
        </ul >
      </IndexPageLayout >
    );
  }
}

export default IndexPage

export const pageQuery = graphql`
query MyQuery {
  allWeeklyYaml {
    edges {
      node {
        version
        date
        changes {
          type
          category
          pull
          pr_title
          message
          issue
          references {
            url
            title
            issue
            pull
          }
        }
      }
    }
  }
}
`;
