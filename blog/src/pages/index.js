import React from "react"
import { Link, graphql } from "gatsby"

import IndexPageLayout from "../layouts"
import IndexPageLayout from "../layouts"
import { bloglisting } from "../css/blogpost.module.css"

class IndexPage extends React.Component {
  render() {
    return (
      <IndexPageLayout>
        <ul className={bloglisting}>
          {this.props.data.allAsciidoc.edges.map(({ node }) => (
            <li key={node.id} className={bloglisting}>
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
          fields {
            slug
          }
          html
          revision {
            date
            number
            remark
          }
          document {
            title
          }
          pageAttributes {
            author
            tags
            opengraph
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
`;
