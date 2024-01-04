import React from "react";
import { Link, graphql } from "gatsby";
import Seo from "../components/Seo";
import PageName from "../components/PageName";
import IndexPageLayout from "../layouts";
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
    banner,
} from "../css/changelog.module.css";

const ChangelogLTS = ({ data }) => (
    <IndexPageLayout>
        <PageName title={"LTS Changelog"} />
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
        <div style={{ margin: "10px", padding: "10px", backgroundColor: "#FFFFCE" }}>
            See the <Link to="/upgrade-guide">LTS upgrade guide</Link> advice on upgrading Jenkins.
        </div>
        {data.allLtsYaml.edges.map(({ node }) => (
            <>
                <h3>
                    What's new in {node.version}({node.date}){" "}
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
                {node.banner ? (
                    <div className={banner}>
                        <span dangerouslySetInnerHTML={{ __html: node.banner }} />
                    </div>
                ) : null}
                <h4>Changes since {node.lts_baseline ?? ""}:</h4>
                {node.changes?.map((change) => (
                    <li key={change.key}>
                        <span dangerouslySetInnerHTML={{ __html: change.message }} />
                        {change.references && change.references.length > 0 ? (
                            change.references.map((ref) => (
                                <span key={ref.key}>
                                    {ref.issue && (
                                        <span>
                                            <a
                                                href={
                                                    "https://issues.jenkins.io/browse/JENKINS-" +
                                                    ref.issue
                                                }
                                            >
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
                                            <a
                                                href={
                                                    "https://github.com/jenkinsci/jenkins/pull/" +
                                                    ref.pull
                                                }
                                            >
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
                                        <a
                                            href={
                                                "https://issues.jenkins.io/browse/JENKINS-" +
                                                change.issue
                                            }
                                        >
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
                                        <a
                                            href={
                                                "https://github.com/jenkinsci/jenkins/pull/" +
                                                change.pull
                                            }
                                        >
                                            {" pull " + change.pull + ", "}
                                        </a>
                                    </span>
                                )}
                            </>
                        )}
                        {change.issue && (
                            <span>
                                <a
                                    href={
                                        "https://issues.jenkins.io/browse/JENKINS-" + change.issue
                                    }
                                >
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
                                <a
                                    href={
                                        "https://github.com/jenkinsci/jenkins/pull/" + change.pull
                                    }
                                >
                                    {" pull " + change.pull + ","}
                                </a>
                            </span>
                        )}
                    </li>
                ))}

                <h4>Notable changes since {node.lts_predecessor ?? ""}:</h4>
                <ul>
                    {node.lts_changes?.map((references) => (
                        <li key={references.key}>
                            <span dangerouslySetInnerHTML={{ __html: references.message }} />
                            {references.references && references.references.length > 0 ? (
                                references.references.map((ref) => (
                                    <span key={ref.key}>
                                        {ref.issue && (
                                            <span>
                                                <a
                                                    href={
                                                        "https://issues.jenkins.io/browse/JENKINS-" +
                                                        ref.issue
                                                    }
                                                >
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
                                                <a
                                                    href={
                                                        "https://github.com/jenkinsci/jenkins/pull/" +
                                                        ref.pull
                                                    }
                                                >
                                                    {" pull " + ref.pull + ", "}
                                                </a>
                                            </span>
                                        )}
                                    </span>
                                ))
                            ) : (
                                <>
                                    {references.issue && (
                                        <span>
                                            <a
                                                href={
                                                    "https://issues.jenkins.io/browse/JENKINS-" +
                                                    references.issue
                                                }
                                            >
                                                {" issue " + references.issue + ", "}
                                            </a>
                                        </span>
                                    )}
                                    {references.url && (
                                        <span>
                                            <a href={references.url}>{references.title}, </a>
                                        </span>
                                    )}
                                    {references.pull && (
                                        <span>
                                            <a
                                                href={
                                                    "https://github.com/jenkinsci/jenkins/pull/" +
                                                    references.pull
                                                }
                                            >
                                                {" pull " + references.pull + ", "}
                                            </a>
                                        </span>
                                    )}
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </>
        ))}
    </IndexPageLayout>
);

export const Head = () => <Seo title="Jenkins LTS Changelogs" />;

export default ChangelogLTS;

export const pageQuery = graphql`
    {
        allLtsYaml(sort: { date: DESC }) {
            edges {
                node {
                    version
                    date(formatString: "YYYY-MM-DD")
                    lts_predecessor
                    banner
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
                        authors
                    }
                    changes {
                        type
                        category
                        issue
                        message
                        pull
                        pr_title
                        authors
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
