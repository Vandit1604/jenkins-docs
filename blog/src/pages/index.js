import React from "react"
import { Link, graphql } from "gatsby"

import IndexPageLayout from "../layouts"

class IndexPage extends React.Component {
  render() {
    console.log(this.props.data.allAsciidoc.edges)

    return (
      <IndexPageLayout>
        <ul>
          {this.props.data.allAsciidoc.edges.map(({ node }) => (
            <li key={node.id}>
              <Link to={node.fields.slug}>
                <img src={node.opengraph} alt="." width="200px" height="200px"></img>
                {node.document.title}</Link>
              <p>{node.pageAttributes.author}</p>
            </li>
          ))}
        </ul>
      </IndexPageLayout>
    );
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
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
          pageAttributes{
            author
            tags
            opengraph
          }
        }
      }
    }
  }
`
