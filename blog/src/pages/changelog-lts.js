import React from "react"
import { Link, graphql } from "gatsby"
import IndexPageLayout from "../layouts"
import { iconlegend, image, security, bug, rfe, feedback, sunny, cloudy, storm, rateoffset, banner } from "../css/changelog.module.css";
import Seo from "../components/Seo"
import PageName from "../components/PageName";

const ChangelogLTS = ({ data }) => {
  return (
    < IndexPageLayout >
      <PageName children={'LTS Changelog'} />
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
        </div >
      </div>
      <div style={{ margin: "10px", padding: "10px", backgroundColor: "#FFFFCE" }}>
        See the <Link to="/upgrade-guide">LTS upgrade guide</Link> advice on upgrading Jenkins.
      </div>
      {data.allFile.nodes.map(({ childrenLtsYaml }) => (
        <div>
          {childrenLtsYaml.map((node) => {
            return (
              <>
                {<h2>What's new in {node.version}({node.date}) </h2>}
                <div>
                  <img className={rateoffset} src="../../images/images/changelog/sunny.svg" alt="Sunny" title="No major issue with this release" />
                  <img className={rateoffset} src="../../images/images/changelog/cloudy.svg" alt="Cloudy" title="I experienced notable issues" />
                  <img className={rateoffset} src="../../images/images/changelog/storm.svg" alt="Storm" title="I had to roll back" />
                </div>
                <p>Community reported issues : </p>
                {node.lts_baseline ? <h4>Changes since {node.lts_baseline}:</h4> : null}
                {node.banner ? <div className={banner} ><span dangerouslySetInnerHTML={{ __html: node.banner }} /></div> : null}
                <ul>
                  {node.changes?.map((change) => {
                    return (
                      <li>
                        <span dangerouslySetInnerHTML={{ __html: change.message }} />
                        {change.issue ? <span><a href={"https://issues.jenkins.io/browse/JENKINS-" + change.issue}>(issue {change.issue})</a></span> : null}
                      </li>
                    );
                  })}
                </ul>
                {node.lts_predecessor ? <h4>Notable changes since {node.lts_predecessor}:</h4> : null}
                <ul>
                  {node.lts_changes?.map((references) => {
                    return (
                      <li className={node.lts_changes.type}>
                        <span dangerouslySetInnerHTML={{ __html: references.message }} />
                        {references.url ? <span><a href={references.url}> issue {references.title},</a></span> : null}
                        {(references.url && references.title) ? <span><a href={references.url}>{references.title}</a></span> : null}
                        {references.issue ? <span><a href={"https://issues.jenkins.io/browse/JENKINS-" + references.issue}> issue {references.issue},</a></span> : null}
                        {references.pull ? <span><a href={"https://github.com/jenkinsci/jenkins/pull/" + references.pull}> pull {references.pull},</a></span> : null}
                      </li>
                    );
                  })}
                </ul >
              </>
            )
          })}
        </div>
      ))}
    </IndexPageLayout >
  );
}

export const Head = () => <Seo title="Jenkins LTS Changelogs" />

export default ChangelogLTS

export const pageQuery = graphql`
query ChangelogLTS {
  allFile(
    filter: {sourceInstanceName: {eq: "changelogs"}, childrenLtsYaml: {elemMatch: {version: {ne: "null"}}}}
  ) {
    nodes {
      childrenLtsYaml {
        banner
        date(formatString: "YYYY-MM-DD")
        version
        changes {
          type
          message
          pull
          issue
          category
          pr_title
        }
        lts_baseline
        lts_changes {
          type
          category
          pull
          issue
          pr_title
          message
          references {
            url
            title
            issue
            pull
          }
          authors
        }
        lts_predecessor
        
      }
    }
  }
}`
