import React from "react";
import { graphql } from "gatsby";
import IndexPageLayout from "../layouts";
import Seo from "../components/Seo";
import PageName from "../components/PageName";
import {
  iconlegend,
  image,
  security,
  bug,
  rfe,
  feedback,
  sunny,
  cloudy,
  storm,
  rateoffset,
} from "../css/changelog.module.css";

const ChangelogWeekly = ({ data }) => (
  <IndexPageLayout>
    <PageName title={"Weekly Changelog"} />
    <div style={{ textAlign: "end" }}>
      <div className={iconlegend}>
        Legend:
        <ul className={image}>
          <li className={security}>security fix</li>
          <li className={bug}>major bug fix</li>
          <li className={bug}>bug fix</li>
          <li className={rfe}>major enhancement</li>
          <li className={rfe}>enhancement</li>
        </ul>
      </div>
      <div style={{ margin: "10px 0", width: "100%" }}>
        <div className={iconlegend}>
          Community feedback:
          <ul className={feedback}>
            <li className={sunny}>no major issues</li>
            <li className={cloudy}>notable issues</li>
            <li className={storm}>required rollback</li>
          </ul>
        </div>
      </div>
    </div>
    {data.allWeeklyYaml.edges.map(({ node }) => (
      <>
        <section style={{ margin: "2rem 0" }}>
          {(() => {
            if (node.banner != null) {
              return (
                <div style={{ margin: "10px", padding: "10px", backgroundColor: "#FFFFCE" }}>
                  <span dangerouslySetInnerHTML={{ __html: node.banner }} />
                </div>
              );
            }
            return null;
          })()}
          <h3>
            What's new in {node.version} ({node.date}){" "}
          </h3>
          <img
            className={rateoffset}
            src="../../images/images/changelog/sunny.svg"
            alt="Sunny"
            title="No major issue with this release"
          />
          <img
            className={rateoffset}
            src="../../images/images/changelog/cloudy.svg"
            alt="Cloudy"
            title="I experienced notable issues"
          />
          <img
            className={rateoffset}
            src="../../images/images/changelog/storm.svg"
            alt="Storm"
            title="I had to roll back"
          />
          <p>Community reported issues : </p>
          {node.changes?.map((change) => (
            <li key={change.key}>
              <span dangerouslySetInnerHTML={{ __html: change.message }} />
              {change.references && change.references.length > 0 ? (
                change.references.map((ref) => (
                  <span key={ref.key}>
                    {ref.issue && (
                      <span>
                        <a href={"https://issues.jenkins.io/browse/JENKINS-" + ref.issue}>
                          {" issue " + ref.issue + ", "}
                        </a>
                      </span>
                    )}
                    {ref.url && (
                      <span>
                        <a href={ref.url}>{ref.title},</a>
                      </span>
                    )}
                    {ref.pull && (
                      <span>
                        <a href={"https://github.com/jenkinsci/jenkins/pull/" + ref.pull}>
                          {" pull " + ref.pull + ", "}
                        </a>
                      </span>
                    )}
                  </span>
                ))
              ) : (
                <>
                  {change.issue && (
                    <span>
                      <a href={"https://issues.jenkins.io/browse/JENKINS-" + change.issue}>
                        {" issue " + change.issue + ", "}
                      </a>
                    </span>
                  )}
                  {change.url && (
                    <span>
                      <a href={change.url}>{change.title}, </a>
                    </span>
                  )}
                  {change.pull && (
                    <span>
                      <a href={"https://github.com/jenkinsci/jenkins/pull/" + change.pull}>
                        {" pull " + change.pull + ", "}
                      </a>
                    </span>
                  )}
                </>
              )}
              {change.issue && (
                <span>
                  <a href={"https://issues.jenkins.io/browse/JENKINS-" + change.issue}>
                    {" issue " + change.issue + ","}
                  </a>
                </span>
              )}
              {change.url && (
                <span>
                  <a href={change.url}>{change.title},</a>
                </span>
              )}
              {change.pull && (
                <span>
                  <a href={"https://github.com/jenkinsci/jenkins/pull/" + change.pull}>
                    {" pull " + change.pull + ","}
                  </a>
                </span>
              )}
            </li>
          ))}
        </section>
      </>
    ))}
  </IndexPageLayout>
);

export const Head = () => <Seo title="Jenkins Weekly Changelogs" />;

export default ChangelogWeekly;

export const pageQuery = graphql`
  query {
    allWeeklyYaml(sort: { date: DESC }, limit: 30) {
      edges {
        node {
          date(formatString: "YYYY-MM-DD")
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
  }
`;
