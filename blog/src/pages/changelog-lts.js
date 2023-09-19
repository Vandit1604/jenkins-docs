import React from "react"
import { Link, graphql } from "gatsby"
import IndexPageLayout from "../layouts"
import jenkinsLogo from "../../../docs/images/modules/ROOT/assets/images/logos/jenkins/jenkins.png"
import typography from "../utils/typography"
const { rhythm } = typography

class IndexPage extends React.Component {
  render() {
    console.log("lts_baseline:", this.props.data.allLtsYaml.edges);
    console.log("lts_baseline:", this.props.data.allLtsYaml.edges.lts_baseline);
    console.log("lts_changes:", this.props.data.allLtsYaml.edges.lts_changes);
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
            <h1>What's new in {node.version}{node.date} </h1>
            <p>Community reported issues : </p>
            <h4>Changes since {node.lts_baseline ?? ""}:</h4>
            <ul>
              {node.lts_changes?.map((change) => {
                return (
                  <li>
                    {/*{change.message} {change.pull ?? ""}*/}
                    <span dangerouslySetInnerHTML={{ __html: change.message }} />
                    (Pull #{change.pull ?? ""})
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </IndexPageLayout >
    );
  }
}

export default IndexPage

export const pageQuery = graphql`
query{
  allLtsYaml {
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
