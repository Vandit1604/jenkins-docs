import React from "react"
import { Link, graphql } from "gatsby"
import IndexPageLayout from "../layouts"
import {
  authorpost,
  authorlisting,
  authorname,
  authorinfo,
} from "../css/authorpost.module.css"

import jenkinsLogo from "../../../docs/images/modules/ROOT/assets/images/logos/jenkins/jenkins.png"
import typography from "../utils/typography"
const { rhythm } = typography

class IndexPage extends React.Component {
  render() {
    return (
      <IndexPageLayout>
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
          Jenkins Community Blog Contributors
        </h3>
        <ul className={authorlisting}>
          {this.props.data.allAsciidoc.edges.map(({ node }) => {
            if (node.document.title === "Author") {
              return (
                <li key={node.fields.slug} className={authorpost}>
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
                        src={"../../images/gsoc/opengraph.png"}
                        alt={node.document.title}
                      />
                    </div>
                    <center>
                      <span className={authorname}>{node.pageAttributes.author_name}</span>
                    </center>
                    <div className={authorinfo}>
                      <br />
                      <a href={"https://github.com/" + node.pageAttributes.github}>Github</a>
                      <br />
                      <a href={"https://linkedin.com/in/" + node.pageAttributes.linkedin}>LinkedIn</a>
                      <br />
                      <a href={"https://twitter.com/" + node.pageAttributes.twitter}>Twitter</a>
                    </div>
                  </Link>
                  <br />
                </li>
              );
            } else {
              return null; // Skip rendering cards with title other than "Author"
            }
          })}
        </ul>
     </IndexPageLayout >
    );
  }
}

export default IndexPage

export const pageQuery = graphql`
{
  allAsciidoc(filter: {document: {title: {eq: "Author"}}}) {
    edges {
      node {
        fields {
          slug
        }
        document {
          title
        }
        pageAttributes {
          author_name
          github
          opengraph
          linkedin
          blog
          twitter
          medium
          irc
          description
        }
      }
    }
  }
}
`
