import React from "react"
import { graphql } from "gatsby"

import BlogPost from "../components/BlogPost"

const Article = ({ data }) => {
  return (
    <BlogPost>
      <h1>{data.asciidoc.document.title} </h1>
      {data.asciidoc.pageAttributes.author && (
        <table>
          <tbody>
            <tr>
              <th style={{ width: "20px" }}>{data.asciidoc.pageAttributes.author}</th>
              <tr><img href={data.asciidoc.pageAttributes.author + ".png"} /></tr>
            </tr>
          </tbody>
        </table>
      )}
      <div
        dangerouslySetInnerHTML={{ __html: data.asciidoc.html }}
      />
    </BlogPost>
  );
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
        author_name
        author
        tags
        opengraph
      }
    }
  }
`;
