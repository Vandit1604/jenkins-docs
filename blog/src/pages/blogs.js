import React from "react"
import { Link, graphql } from "gatsby"
import IndexPageLayout from "../layouts"
import { bloglisting, blogpost } from "../css/blogpost.module.css"
import { blogtitle, blogauthor } from "../css/blogpost.module.css"

import jenkinsLogo from "../../../docs/images/modules/ROOT/assets/images/logos/jenkins/jenkins.png"
import typography from "../utils/typography"
const { rhythm } = typography

class IndexPage extends React.Component {
  render() {
    return (
      <IndexPageLayout>
        <Link style={{ textDecoration: `none` }} to="/">
          <h3
            style={{
              color: `black`,
              marginBottom: rhythm(1.5),
              "font-family": "Georgia,serif",
              "font-size": "40px",
              display: "flex",
              "flex-direction": "row",
              "flex-wrap": "nowrap",
              "justify-content": "center",
              gap: "15px",
            }}
          >
            <img
              src={jenkinsLogo}
              alt="Jenkins Logo"
              style={{
                height: "80px",
              }}
            />{" "}
            The Jenkins Blog
          </h3>
        </Link>
        <ul className={bloglisting}>
          {this.props.data.allAsciidoc.edges.map(({ node }) => {
            if (node.document.title !== "Author") {
              return (
                <li key={node.fields.slug} className={blogpost}>
                  <Link to={node.fields.slug} style={{ textDecoration: "none" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={node.pageAttributes.opengraph ?? "../../images/gsoc/opengraph.png"}
                        alt={node.document.title}
                        height="250px"
                        width="100%"
                      />
                    </div>
                    <span className={blogtitle}>{node.document.title}</span>
                  </Link>
                  <br />
                  <p className={blogauthor}>{node.pageAttributes.authors}</p>
                </li>
              );
            }
          })}
        </ul>
      </IndexPageLayout>
    );
  }
}

export default IndexPage

export const pageQuery = graphql`
query{
  allAsciidoc(sort: {fields: {slug: DESC}}) {
    edges {
      node {
        fields {
          slug
        }
        document {
          title
        }
        pageAttributes {
          tags
          author
          author_name
          github
          opengraph
          linkedin
        }
      }
    }
  }
}
`
