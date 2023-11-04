import React from "react"
import { graphql } from "gatsby"
import IndexPageLayout from "../layouts"
import Seo from "../components/Seo"
import PageName from "../components/PageName"
import { iconlegend, image, security, bug, rfe, feedback, sunny, cloudy, storm, rateoffset } from "../css/changelog.module.css";
import "../css-asciidoc/doc.css"

const ChangelogWeekly = ({ data }) => {
  return (
    < IndexPageLayout >
      <PageName children={'Weekly Changelog'} />
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
          </div>
        </div ></div>
      {data.allFile.nodes.map(({ childrenWeeklyYaml }) => (
        <div>
          {childrenWeeklyYaml.map((node) => {
            return (
              <>
                <section style={{ margin: "2rem 0" }}>
                  <div>
                    {node.banner ? <div style={{ margin: "10px", padding: "10px", backgroundColor: "#FFFFCE" }}><span dangerouslySetInnerHTML={{ __html: node.banner }} /></div> : null}
                    <h3>What's new in {node.version} ({node.date}) </h3>
                    <div>
                      <img className={rateoffset} src="../../images/images/changelog/sunny.svg" alt="Sunny" title="No major issue with this release" />
                      <img className={rateoffset} src="../../images/images/changelog/cloudy.svg" alt="Cloudy" title="I experienced notable issues" />
                      <img className={rateoffset} src="../../images/images/changelog/storm.svg" alt="Storm" title="I had to roll back" />
                    </div>
                    <p>Community reported issues : </p>
                    <ul>
                      {node.changes?.map((change) => {
                        { console.log(change) }
                        return (
                          < li >
                            <span dangerouslySetInnerHTML={{ __html: change.message }} />
                            {change.issue ? <span><a href={"https://issues.jenkins.io/browse/JENKINS-" + change.issue}>(issue {change.issue}) </a></span> : null}
                            {change.pull ? <span><a href={"https://github.com/jenkinsci/jenkins/pull/" + change.pull}>(pull {change.pull}) </a></span> : null}
                          </li>
                        );
                      })}
                    </ul>
                  </div >
                </section >
              </>
            )
          })}
        </div>
      ))
      }
    </IndexPageLayout >
  );
}

export const Head = () => <Seo title="Jenkins Weekly Changelogs" />

export default ChangelogWeekly

export const pageQuery = graphql`
query ChangelogWeekly {
  allFile(
    filter: {sourceInstanceName: {eq: "changelogs"}, childrenWeeklyYaml: {elemMatch: {version: {ne: ""}}}}
    sort: {childrenWeeklyYaml: {date: DESC}}
    limit: 30
  ) {
    nodes {
      childrenWeeklyYaml {
        banner
        date(formatString: "YYYY-MM-DD")
        version
        changes {
          references {
            issue
            url
            title
            pull
          }
          authors
          category
          issue
          message
          pr_title
          pull
          type
        }
      }
    }
  }
}`
