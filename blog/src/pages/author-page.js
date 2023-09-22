import jenkinsLogo from "../../../docs/images/modules/ROOT/assets/images/logos/jenkins/jenkins.png"
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import React from "react"
import { graphql } from "gatsby"
import IndexPageLayout from "../layouts"
import typography from "../utils/typography";
const { rhythm } = typography

class IndexPage extends React.Component {
  render() {
    return (
      <IndexPageLayout>
        <h3
          style={{
            color: `black`,
            marginBottom: rhythm(1.5),
            fontFamily: "Georgia,serif",
            fontSize: "40px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "center",
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
        {this.props.data.allAsciidoc.edges.map(({ node }) => {
          if (node.document.title === "Author") {
            return (
              <>
                <h2>{node.pageAttributes.author_name}</h2>
                <p><span dangerouslySetInnerHTML={{ __html: node.pageAttributes.description }} /></p>
                <a href={node.pageAttributes.github}><BsGithub /></a>
                <a href={node.pageAttributes.twitter}><BsTwitter /></a>
              </>
            )
          } else {
            return null; // Skip rendering cards with title other than "Author"
          }
        })}
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
