import React from "react"
import { Link, graphql } from "gatsby"
import IndexPageLayout from "../layouts"
import Video from "../components/Video"
import { Carousel } from 'react-responsive-carousel';
import { bloglisting, blogpost } from "../css/blogpost.module.css"
import { blogtitle, blogauthor } from "../css/blogpost.module.css"

class IndexPage extends React.Component {
  render() {
    return (
      <>
        <img src="../../images/images/logos/jenkins/Jenkins-stop-the-war.svg" style={{ width: "356px", "float": "left" }}></img>
        <h1>Jenkins</h1>
        <h2>Build great things at any scale</h2>
        <p>The leading open source automation server, Jenkins provides hundreds of plugins to support building, deploying and automating any project.
          We stand with the people of Ukraine. Please assist humanitarian efforts for the Ukrainian people and those affected by the military invasion of Ukraine by supporting international aid organizations, including the <a href="https://redcross.org.ua/en/donate/">Ukrainian Red Cross</a>
        </p>
        <button>Documentation</button>
        <button>Download</button>
        <div style={{
          background: "#4799d6",
          backgroundImage: "../../images/images/cdf/cdf-background-wide.jpg" ? "url(../../images/images/cdf/cdf-background-wide.jpg)" : "inherit",
          backgroundSize: 'cover',
          margin: "2rem 0rem",
        }}
        >
          <Carousel>
            {/* autoPlay */}
            {/* interval={5000} */}
            {/* useKeyboardArrows */}
            {/* infiniteLoop */}
            {/* swipeable */}
            {/* showThumbs={true}> */}
            <div>
              <a href="">
                <img src="../../images/images/gsoc/gsoc_projects_contributors_selected.png" style={{ height: "320px" }} />
                <h2 className="legend">Welcome to GSoC 2023!
                  Google Summer of Code 2023 includes 4 Jenkins projects. Congratulations to the selected GSoC contributors.
                </h2>
                <p>Jenkins is a community-driven project. We invite everyone to join us and move it forward. Any contribution matters: code, documentation, localization, blog posts, artwork, meetups, and anything else. If you have five minutes or a few hours, you can help!</p>
                <a href=""><button>More Info</button></a>
              </a>
            </div>
            <div>
              <a href="">
                <img src="../../images/images/gsoc/gsoc_projects_contributors_selected.png" style={{ height: "320px" }} />
                <h2 className="legend">Welcome to GSoC 2023!
                  Google Summer of Code 2023 includes 4 Jenkins projects. Congratulations to the selected GSoC contributors.
                </h2>
                <p>Jenkins is a community-driven project. We invite everyone to join us and move it forward. Any contribution matters: code, documentation, localization, blog posts, artwork, meetups, and anything else. If you have five minutes or a few hours, you can help!</p>
                <a href=""><button>More Info</button></a>
              </a>
            </div>
            <div>
              <a href="">
                <img src="../../images/images/gsoc/gsoc_projects_contributors_selected.png" style={{ height: "320px" }} />
                <h2 className="legend">Welcome to GSoC 2023!
                  Google Summer of Code 2023 includes 4 Jenkins projects. Congratulations to the selected GSoC contributors.
                </h2>
                <p>Jenkins is a community-driven project. We invite everyone to join us and move it forward. Any contribution matters: code, documentation, localization, blog posts, artwork, meetups, and anything else. If you have five minutes or a few hours, you can help!</p>
                <a href=""><button>More Info</button></a>
              </a>
            </div>
          </Carousel>
        </div>
        <div className="segment" id="feature-list-segment">
          <div className="container">
            <div className="row chunks features uniform-height">
              <div className="col-md-6 col-lg-4">
                <div className="box cicd">
                  <i className="icon-arrow-shuffle" />
                  <h5>
                    Continuous Integration and Continuous Delivery
                  </h5>
                  <p>
                    As an extensible automation server, Jenkins can be used as a simple
                    CI server or turned into the continuous delivery hub for any project.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="box install">
                  <i className="icon-download" />
                  <h5>
                    Easy installation
                  </h5>
                  <p>
                    Jenkins is a self-contained Java-based program, ready to run
                    out-of-the-box, with packages for Windows, Linux, macOS and other
                    Unix-like operating systems.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="box settings">
                  <i className="icon-settings" />
                  <h5>
                    Easy configuration
                  </h5>
                  <p>
                    Jenkins can be easily set up and configured via its web interface,
                    which includes on-the-fly error checks and built-in help.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="box ecosystem">
                  <i className="icon-plug" />
                  <h5>
                    Plugins
                  </h5>
                  <p>
                    With hundreds of plugins in the Update Center, Jenkins integrates
                    with practically every tool in the continuous integration and
                    continuous delivery toolchain.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="box extend">
                  <i className="fa-solid fa-puzzle-piece"></i>
                  <h5>
                    Extensible
                  </h5>
                  <p>
                    Jenkins can be extended via its plugin architecture, providing
                    nearly infinite possibilities for what Jenkins can do.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="box distributed">
                  <i className="icon-uniE602" />
                  <h5>
                    Distributed
                  </h5>
                  <p>
                    Jenkins can easily distribute work across multiple machines,
                    helping drive builds, tests and deployments across multiple
                    platforms faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Video />
        <h2>Recent Posts</h2>
        <IndexPageLayout>
          <ul className={bloglisting}>
            {this.props.data.allAsciidoc.edges.map(({ node }) =>
              // { if (node.document.title == "Author") {
              <li key={node.fields.slug} className={blogpost}>
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
                      src={node.pageAttributes.opengraph ?? "../../images/gsoc/opengraph.png"}
                      alt={node.document.title}
                      height="250px"
                      width="100%"
                    />
                  </div>
                  <span className={blogtitle}>{node.document.title}</span>
                </Link>
                <br></br>
                {/* <img
               src="https://www.jenkins.io/images/avatars/markewaite.jpg"
               alt="Mark Waite"
               style={{
                 width: "20px",
                 height: "20px",
                 borderRadius: "50%",
               }}
             /> */}
                <p className={blogauthor}>{node.pageAttributes.author_name}</p>
              </li>
              // }}
            )}
          </ul>
        </IndexPageLayout>
        <div className="jumbotron" id="sponsorsblock">
          <div className="sponsors">
            <p>
              <strong>
                We thank the following organizations for their major commitments to
                support the Jenkins project.
              </strong>
            </p>
            <ul>
              <li>
                <a >
                  <img src="../../images/images/sponsors/cloudbees.png" />
                </a>
              </li>
              <li>
                <a >
                  <img src="../../images/images/sponsors/cloudbees.png" />
                </a>
              </li>
              <li>
                <a >
                  <img src="../../images/images/sponsors/cloudbees.png" />
                </a>
              </li>
              <li>
                <a >
                  <img src="../../images/images/sponsors/cloudbees.png" />
                </a>
              </li>
              <li>
                <a >
                  <img src="../../images/images/sponsors/cloudbees.png" />
                </a>
              </li>
              <li>
                <a >
                  <img src="../../images/images/sponsors/cloudbees.png" />
                </a>
              </li>
              <li>
                <a >
                  <img src="../../images/images/sponsors/cloudbees.png" />
                </a>
              </li>
            </ul>
          </div>
          <div className="supporters">
            <p>
              <strong>
                We thank the following organizations for their support of the Jenkins
                project through free and/or open source licensing programs.
              </strong>
            </p>
            <ul>
              <li><a href="https://atlassian.com/">Atlassian</a></li>
              <li><a href="https://www.datadoghq.com/">Datadog</a></li>
              <li><a href="https://www.digitalocean.com/">Digital Ocean</a></li>
              <li><a href="https://www.discourse.org/">Discourse</a></li>
              <li><a href="https://www.fastly.com/">Fastly</a></li>
              <li><a href="https://www.ibm.com/"></a>IBM</li>
              <li><a href="https://www.netlify.com/">Netlify</a></li>
              <li><a href="https://pagerduty.com/">Pagerduty</a></li>
              <li><a href="https://sentry.io/">Sentry</a></li>
              <li><a href="https://www.tsinghua.edu.cn/">Tsinghua University</a></li>
              <li><a href="https://xmission.com/">XMission</a></li>
           </ul>
          </div>
        </div>
      </>
    );
  }
}

export default IndexPage

export const pageQuery = graphql`
query{
  allAsciidoc(limit: 9, sort: {fields: {slug: DESC}}) {
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
          linkedin
        }
      }
    }
  }
}`
