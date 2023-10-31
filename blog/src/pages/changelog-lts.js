import React from "react"
import { Link, graphql } from "gatsby"
import Seo from "../components/Seo"
import IndexPageLayout from "../layouts"
import jenkinsLogo from "../../../docs/images/modules/ROOT/assets/images/logos/jenkins/jenkins.png"
import { iconlegend, image, security, bug, rfe, feedback, sunny, cloudy, storm, rateoffset} from "../css/changelog.module.css";
import typography from "../utils/typography"
const { rhythm } = typography

const ChangelogLTS = ({ data }) => {
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
      <div style={{ textAlign: "end" }}>
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
        </div>
        <div style={{ margin: "10px", padding: "10px", backgroundColor: "#FFFFCE" }}>
          See the <Link to="/upgrade-guide">LTS upgrade guide</Link> advice on upgrading Jenkins.
        </div>
        {this.props.data.allLtsYaml.edges.map(({ node }) =>
          <>
            <h3>What's new in {node.version}({node.date}) </h3>
            <img className={rateoffset} src="../../images/images/changelog/sunny.svg" alt="Sunny" title="No major issue with this release" />
            <img className={rateoffset} src="../../images/images/changelog/cloudy.svg" alt="Cloudy" title="I experienced notable issues" />
            <img className={rateoffset} src="../../images/images/changelog/storm.svg" alt="Storm" title="I had to roll back" />
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
              {node.lts_changes?.map((references) => {
                return (
                  <li>
                    <span dangerouslySetInnerHTML={{ __html: references.message }} />
                    {(() => {
                      if (references.issue != null) {
                        return (
                          <span><a href={"https://issues.jenkins.io/browse/JENKINS-" + references.issue}> issue {references.issue},</a></span>
                        )
                      }
                    })()}
                    {(() => {
                      if (references.pull != null) {
                        return (
                          <span><a href={"https://github.com/jenkinsci/jenkins/pull/" + references.pull}> pull {references.pull},</a></span>
                        )
                      }
                    })()}
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

export const Head = () => <Seo title="Jenkins LTS Changelogs" />

export default ChangelogLTS

export const pageQuery = graphql`
query{
  allLtsYaml(sort: {date: DESC}) {
    edges {
      node {
        version
        date(formatString: "DD-MM-YYYY")
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
