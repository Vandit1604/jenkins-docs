import React from "react"
import { Link } from "gatsby"
import IndexPageLayout from "../layouts"
import { vendors, vendorsList } from "../css/download.module.css"
import jenkinsLogo from "../../../docs/images/modules/ROOT/assets/images/logos/jenkins/jenkins.png"
import typography from "../utils/typography"
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
          Jenkins download and deployment
        </h3>
        <p>The Jenkins project produces two release lines: Stable (LTS) and regular (Weekly). Depending on your organization's needs, one may be preferred over the other. See the links below for more information and recommendations about the release lines.</p>
        <section>
          <h2>Stable (LTS) and Regular Releases</h2>
          <p>The Jenkins project produces two release lines: Stable (LTS) and regular (Weekly). Depending on your organization's needs, one may be preferred over the other. See the links below for more information and recommendations about the release lines.</p>
          <div >
            <div >
              <div >
                <h4>Stable (LTS)</h4>
                <p>Long-Term Support (LTS) release baselines are chosen every 12 weeks from the stream of regular releases. Every 4 weeks, we release stable releases which include bug and security fix backports.</p>
                <a href="lts">Learn more…</a>
                <p>
                  <Link to="/changelog-lts">Changelog</Link> |
                  <Link to="/upgrade-guide">Upgrade Guide</Link> |
                  <a href="https://get.jenkins.io/war-stable/">Past Releases</a>
                </p>
              </div>
              <div >
                <h4>Regular releases (Weekly)</h4>
                <p>This release line delivers bug fixes and new features rapidly to users and plugin developers who need them. It is generally delivered on a weekly cadence.</p>
                <a href="weekly">Learn more…</a>
                <p >
                  <a href="">Changelog</a> |
                  <a href="https://get.jenkins.io/war/">Past Releases</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2>Downloading Jenkins</h2>
          <p>Jenkins is distributed as WAR files, native packages, installers, and Docker images. Follow these installation steps:</p>
          <ol>
            <li>Before downloading, please take a moment to review the <strong><a href="/doc/book/installing/#prerequisites">Hardware and Software requirements</a></strong> section of the User Handbook.</li>
            <li>Select one of the packages below and follow the download instructions.</li>
            <li>Once a Jenkins package has been downloaded, proceed to the <strong><a href="/doc/book/getting-started/installing/">Installing Jenkins</a></strong> section of the User Handbook.</li>
            <li>You may also want to verify the package you downloaded. <a href="/download/verify">Learn more about verifying Jenkins downloads</a>.</li>
          </ol>

          <div >
            <div >
              <div >
                <div >
                  <strong><ion-icon name="download-outline"></ion-icon> Download Jenkins</strong>
                  <a href="https://get.jenkins.io/war-stable/<%= site.jenkins.stable %>/jenkins.war">
                    <span >Generic Java package (.war)</span>
                    <div style={{ fontSize: "x-small", overflowWrap: "break-word", wordWrap: "break-word" }}>
                      <span>
                        <button style={{ border: "transparent", padding: "6px", "data-toggle": "tooltip", "data-placement": "bottom" }} title="Click to copy">
                          <ion-icon name="copy-outline" id="copy-icon"></ion-icon>
                        </button>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div >
                <strong><ion-icon name="download-outline"></ion-icon> Download Jenkins</strong>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <p>NOTE: Packages with the <ion-icon name="library-outline"></ion-icon> library icon are maintained by third parties. Such packages may not be as frequently updated as packages supported by the Jenkins project directly.</p>
        <section>
          <h2>Deploying Jenkins in public cloud</h2>
          <p style={{ marginBottom: "1cm" }}>Many public cloud vendors provide their own Jenkins installation guides and packages. The guides provide instructions to deploy, maintain, and upgrade on the specific public cloud. Such guides may be used to quickly deploy Jenkins and, in many cases, to get an instance preconfigured to be used within the public cloud (e.g. bundled plugins, integrations with public cloud services, etc.).</p>
          <div>
            <div className={vendorsList}>
              <div className={vendors}>
                <a href="https://aws.amazon.com/blogs/devops/setting-up-a-ci-cd-pipeline-by-integrating-jenkins-with-aws-codebuild-and-aws-codedeploy/">
                  <img class="vendors-image" src="../../images/images/amazon_web_services.png" width="320" />
                </a>
                <p >
                  Jenkins with AWS CodeBuild and AWS CodeDeploy
                </p>
              </div>
              <div className={vendors}>
                <a href="https://docs.microsoft.com/en-us/azure/developer/jenkins/">
                  <img src="../../images/images/microsoft_azure.png" width="320" />
                </a>
                <p>
                  Jenkins quickstarts, tutorials, samples, and resources for Azure
                </p>
              </div>
              <div className={vendors}>
                <a href="https://cloud.google.com/jenkins">
                  <img src="../../images/images/google_cloud.png" width="320" />
                </a>
                <p>
                  Jenkins at scale on Google Kubernetes Engine
                </p>
              </div>
              <div className={vendors}>
                <a href="https://docs.oracle.com/en/solutions/jenkins-master-agent-mode/">
                  <img src="../../images/images/oracle_cloud_infrastructure.png" width="320" />
                </a>
                <p>
                  Jenkins Reference Architecture and one-click deployment on Oracle Cloud Infrastructure
                </p>
              </div>
              <div className={vendors}>
                <a href="https://github.com/civo/kubernetes-marketplace/tree/master/jenkins">
                  <img src="../../images/images/civo.png" width="320" />
                </a>
                <p>
                  Jenkins one-click deployment on <a class="item" href="https://www.civo.com/"> Civo Kubernetes
                  </a>
                </p>
              </div>
              <div className={vendors}>
                <a href="https://bitnami.com/stack/jenkins/cloud">
                  <img src="../../images/images/bitnami.png" width="320" />
                </a>
                <p>
                  Images for <a class="item" href="https://bitnami.com/stack/jenkins/cloud/aws"> Amazon Web Services,
                  </a> <a class="item" href="https://bitnami.com/stack/jenkins/cloud/azure"> Azure, </a> and <a class="item" href="https://bitnami.com/stack/jenkins/cloud/google"> Google Cloud
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </IndexPageLayout >
    );
  }
}

export default IndexPage

