import React from "react"
import { graphql } from "gatsby"

import BlogPost from "../components/BlogPost"

class Article extends React.Component {
  render() {
    console.log(this.props.data.asciidoc.document.title)
    return (
      <BlogPost>
        <h1>{this.props.data.asciidoc.document.title} </h1>
        {this.props.data.asciidoc.pageAttributes.author && (
          <table>
            <tbody>
              <tr>
                <th style={{ width: "20px" }}>{this.props.data.asciidoc.pageAttributes.author}</th>
                <tr><img href={this.props.data.asciidoc.pageAttributes.author + ".png"} /></tr>
              </tr>
            </tbody>
          </table>
        )}
        <div
          dangerouslySetInnerHTML={{ __html: this.props.data.asciidoc.html }}
        />
      </BlogPost>
    );
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
