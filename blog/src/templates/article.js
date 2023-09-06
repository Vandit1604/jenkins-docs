import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts"

class Article extends React.Component {
  render() {
    return (
      <Layout>
        <h1>{this.props.data.allAsciidoc.document} </h1>
        {this.props.data.allAsciidoc.author && (
          <table>
            <tbody>
              <tr>
                <th>{this.props.data.allAsciidoc.pageAttributes.author}</th>
              </tr>
            </tbody>
          </table>
        )}
        <div
          dangerouslySetInnerHTML={{ __html: this.props.data.allAsciidoc.html }}
        />
      </Layout>
    )
  }
}

export default Article

export const pageQuery = graphql`
  query{
    allAsciidoc {
      edges {
        node {
          html
          document {
            title
          }
           pageAttributes{
            author
            tags
          }
        }
      }
    }
  }
`
