import React from "react"
import { Link, graphql } from "gatsby"
import IndexPageLayout from "../layouts"
import jenkinsLogo from "../../../docs/images/modules/ROOT/assets/images/logos/jenkins/jenkins.png"
import typography from "../utils/typography"
import { iconlegend, image, security, bug, rfe, feedback, sunny, cloudy, storm } from "../css/changelog.module.css";
const { rhythm } = typography

class IndexPage extends React.Component {
  render() {
    console.log(this.props.data.allWeeklyYaml.edges)
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
            Weekly Changelog
          </h3>
        </Link>
        <div className={iconlegend}>
          Legend:
          <ul className={image}>
            <li className={security}>security fix</li>
            <li className={bug} >major bug fix</li>
            <li className={bug}>bug fix</li>
            <li className={rfe}>major enhancement</li>
            <li className={rfe}>enhancement</li>
          </ul>
        </div >
        <div style={{ margin: "10px 0", width: "100%" }}>
          <div className={iconlegend}>
            Community feedback:
            <ul className={feedback}>
              <li className={sunny}>no major issues</li>
              <li className={cloudy}>notable issues</li>
              <li className={storm}>required rollback</li>
            </ul>
          </div>
        </div >
        {
          this.props.data.allWeeklyYaml.edges.map(({ node }) =>
            <>
              <h3>What's new in {node.version} ({node.date}) </h3>
              <p>Community reported issues : </p>
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
            </>
          )
        }
      </IndexPageLayout >
    );
  }
}

export default IndexPage

export const pageQuery = graphql`
query {
  allWeeklyYaml(sort: {date: DESC}, limit: 30) {
    edges {
      node {
        date(formatString: "YYYY-DD-MM")
        version
        banner
        changes {
          type
          category
          pull
          pr_title
          message
          issue
          references {
            url
            title
            issue
            pull
          }
        }
      }
    }
  }
}`
