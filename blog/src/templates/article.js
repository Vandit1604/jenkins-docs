import React from "react"
import { graphql } from "gatsby"

import BlogPost from "../components/BlogPost"

class Article extends React.Component {
  render() {
    console.log(this.props.data.asciidoc.document.title)
    return (
      <BlogPost>
        <h1>{this.props.data.asciidoc.document.title} </h1>
        {this.props.data.asciidoc.author && (
          <table>
            <tbody>
              <tr>
                <th>{this.props.data.asciidoc.pageAttributes.author}</th>
              </tr>
            </tbody>
          </table>
        )}
        <div
          dangerouslySetInnerHTML={{ __html: this.props.data.asciidoc.html }}
        />
      </BlogPost>
    )
  }
}

export default Article

export const pageQuery = graphql`
  query ($id: String!) {
    asciidoc(id: { eq: $id }) {
      html
      document {
        title
        main
      }
      author {
        fullName
      }
      pageAttributes {
        author
        tags
        opengraph
      }
    }
  }
`;
