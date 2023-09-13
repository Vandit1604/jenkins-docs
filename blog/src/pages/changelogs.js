import React from "react"
import { Link, graphql } from "gatsby"
import IndexPageLayout from "../layouts"
import {
  authorpost,
  authorlisting,
  authorname,
  authorinfo
} from "../css/authorpost.module.css"

class IndexPage extends React.Component {
  render() {
    return (
      <IndexPageLayout>
        <ul className={authorlisting}>
          {this.props.data.allAsciidoc.edges.map(({ node }) =>
            <li key={node.fields.slug} className={authorpost}>
              <Link to={node.fields.slug} style={{ "text-decoration": "none" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    // src={("../../images/avatars/" + node.pageAttributes.github + ".png") ?? "../../images/gsoc/opengraph.png"}
                    src={"../../images/gsoc/opengraph.png"}
                    alt={node.document.title}
                  // height="250px"
                  // width="100%"

                  />
                </div>
                <div className={authorinfo}>
                  <span className={authorname}>{node.pageAttributes.author_name}</span>
                  <br></br>
                  <a href={"https://github.com/" + node.pageAttributes.github}> Github </a>
                  <br></br>
                  <a href={"https://linkedin.com/in/" + node.pageAttributes.linkedin}> LinkedIn </a>
                  <br></br>
                  <a href={"https://twitter.com/" + node.pageAttributes.twitter}> Twitter </a>
                </div>
              </Link>
              <br></br></li >
          )}
        </ul >
      </IndexPageLayout >
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
        }
      }
    }
  }
}
`
