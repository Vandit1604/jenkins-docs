import React from "react"
import { Link, graphql } from "gatsby"
import IndexPageLayout from "../layouts"
import jenkinsLogo from "../../../docs/images/modules/ROOT/assets/images/logos/jenkins/jenkins.png"
import typography from "../utils/typography"
const { rhythm } = typography

class IndexPage extends React.Component {
  render() {
    console.log(this.props.data.allLtsYaml.edges)
    return (
      < IndexPageLayout >
        <Link style={{ textDecoration: `none` }} to="/">
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
            LTS Changelog
          </h3>
        </Link>
        <div style={{ margin: "10px", padding: "10px", backgroundColor: "#FFFFCE" }}>
          See the <Link to="/upgrade-guide">LTS upgrade guide</Link> advice on upgrading Jenkins.
        </div>
        <h2>What's new in </h2>
        {this.props.data.allLtsYaml.edges.map(({ node }) =>
          <>
            <h3>What's new in {node.version}({node.date}) </h3>
            <p>Community reported issues : </p>
            <h4>Changes since {node.lts_baseline ?? ""}:</h4>
            <ul>
              {node.changes?.map((change) => {
                return (
                  <li>
                    <span dangerouslySetInnerHTML={{ __html: change.message }} />
                    <span><a href={"https://issues.jenkins.io/browse/JENKINS-" + change.issue}>(issue {change.issue})</a></span>
                  </li>
                );
              })}
            </ul>
            <h4>Notable changes since {node.lts_predecessor ?? ""}:</h4>
            <ul>
              {node.lts_changes?.map((changes) => {
                return (
                  <li>
                    <span dangerouslySetInnerHTML={{ __html: changes.message }} />
                    <span>
                      {node.lts_changes?.map((references) => {
                        return (
                          <span><a href={"https://github.com/jenkinsci/jenkins/pull/" + references.pull}> pull {references.pull},</a></span>
                        );
                      })}
                    </span>
                  </li>
                );
              })}
            </ul >
          </>
        )
        }
      </IndexPageLayout >
    );
  }
}

export default IndexPage

export const pageQuery = graphql`
query{
  allLtsYaml(sort: {date: DESC}) {
    edges {
      node {
        version
        date
        lts_predecessor
        lts_baseline
        lts_changes {
          type
          category
          pull
          issue
          message
          pr_title
          references {
            issue
            pull
            url
            title
          }
        }
        changes {
          type
          category
          issue
          message
          pull
          pr_title
        }
      }
    }
  }
}`
