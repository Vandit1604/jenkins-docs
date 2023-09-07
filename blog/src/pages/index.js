import React from "react"
import { Link, graphql } from "gatsby"

import IndexPageLayout from "../layouts"
import { bloglisting, blogpost } from "../css/blogpost.module.css"

class IndexPage extends React.Component {
  render() {
    return (
      <IndexPageLayout>
        <ul className={bloglisting}>
          {this.props.data.allAsciidoc.edges.map(({ node }) => (
            <li key={node.id} className={blogpost}>
              <Link to={node.fields.slug}>
                <img
                  src={node.opengraph}
                  alt="."
                  width="200px"
                  height="200px"
                  display="block"
                ></img>
                {node.document.title}
              </Link>
              <br></br>
              <img
                src="https://www.jenkins.io/images/avatars/markewaite.jpg"
                alt="Mark Waite"
                style={{
                  width: "20px",
                  height: "20px",
                  "border-radius": "50%",
                }}
              ></img><p>{node.pageAttributes.author}</p>
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
          html
          fields {
            slug
          }
          document {
            title
          }
          pageAttributes {
            author
            tags
            opengraph
          }
        }
      }
    }
  }
`;
