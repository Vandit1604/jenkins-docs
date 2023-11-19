import React from "react"
import { Link } from "gatsby"
import IndexPageLayout from "../layouts"
import Seo from "../components/Seo"
import { vendors, vendorsList, listGroup, downloadTable, thirdPartyIcon} from "../css/download.module.css"
import jenkinsLogo from "../../../docs/images/modules/ROOT/assets/images/logos/jenkins/jenkins.png"
import typography from "../utils/typography"
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
const { rhythm } = typography

const DownloadPage = () => (
  <IndexPageLayout>
    <h3
      style={{
        color: `black`,
        marginBottom: rhythm(1.5),
        fontFamily: "Georgia,serif",
        fontSize: "2.7rem",
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
          height: "5rem",
        }} />{" "}
      Jenkins download and deployment
    </h3>
    <p>The Jenkins project produces two release lines: Stable (LTS) and regular (Weekly). Depending on your organization's needs, one may be preferred over the other. See the links below for more information and recommendations about the release lines.</p>
    <section>

      <h2>Stable (LTS) and Regular Releases</h2>
      <p>The Jenkins project produces two release lines: Stable (LTS) and regular (Weekly). Depending on your organization's needs, one may be preferred over the other. See the links below for more information and recommendations about the release lines.</p>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "50%" }}>
            <h3>Stable (LTS)</h3>
            <p>Long-Term Support (LTS) release baselines are chosen every 12 weeks from the stream of regular releases. Every 4 weeks, we release stable releases which include bug and security fix backports. <a href="/changelog-lts"> Learn more…</a></p>
            <p>
              <Link to="/changelog-lts">Changelog</Link> |
              <Link to="/upgrade-guide">Upgrade Guide</Link> |
              <a href="https://get.jenkins.io/war-stable/"> Past Releases</a>
            </p>
          </div>
          <div style={{ width: "50%" }}>
            <h3>Regular releases (Weekly)</h3>
            <p>This release line delivers bug fixes and new features rapidly to users and plugin developers who need them. It is generally delivered on a weekly cadence. <a href="/changelog-weekly"> Learn more…</a></p>
            <p>
              <a href="#">Changelog</a> |
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
      <div className={downloadTable}>
        <div style={{ width: "45%" }}>
          <strong>Download Jenkins 2.414.2 LTS for:</strong>
          <ul className={listGroup}>
            <li><a href="To be added">Generic Java Package (.war)<br />SHA-256:</a></li>
            <li><a rel="noreferrer" target="_blank" href="https://hub.docker.com/r/jenkins/jenkins">Docker</a></li>
            <li><a rel="noreferrer" target="_blank" href="https://artifacthub.io/packages/helm/jenkinsci/jenkins">Kubernetes</a></li>
            <li><a rel="noreferrer" target="_blank" href="https://pkg.jenkins.io/debian-stable/">Ubuntu/Debian</a></li>
            <li><a rel="noreferrer" target="_blank" href="https://pkg.jenkins.io/redhat-stable/">Red Hat/Fedora/Alma/Rocky/CentOS</a></li>
            <li><a rel="noreferrer" target="_blank" href="https://www.jenkins.io/download/thank-you-downloading-windows-installer-stable">Windows</a></li>
            <li><a rel="noreferrer" target="_blank" href="https://pkg.jenkins.io/opensuse-stable/">openSUSE</a></li>
            <li><a rel="noreferrer" target="_blank" href="https://www.freshports.org/devel/jenkins-lts" title="This is a package supported by a third `party which may be not as frequently updated as packages supported by the Jenkins project directly">FreeBSD <span><CollectionsBookmarkOutlinedIcon className={thirdPartyIcon} /></span></a></li>
            <li><a rel="noreferrer" target="_blank" href="https://packages.gentoo.org/packages/dev-util/jenkins-bin" title="This is a package supported by a third `party which may be not as frequently updated as packages supported by the Jenkins project directly">Gentoo <span><CollectionsBookmarkOutlinedIcon className={thirdPartyIcon} /></span></a></li>
            <li><a rel="noreferrer" target="_blank" href="https://www.jenkins.io/download/lts/macos" title="This is a package supported by a third `party which may be not as frequently updated as packages supported by the Jenkins project directly">macOS <span><CollectionsBookmarkOutlinedIcon className={thirdPartyIcon} /></span></a></li>
            <li><a rel="noreferrer" target="_blank" href="https://openports.pl/path/devel/jenkins/stable" title="This is a package supported by a third `party which may be not as frequently updated as packages supported by the Jenkins project directly">OpenBSD <span><CollectionsBookmarkOutlinedIcon className={thirdPartyIcon} /></span></a></li>
            <li><a rel="noreferrer" target="_blank" href="https://pkg.openindiana.org/hipster/en/search.shtml?token=jenkins-core-lts" title="This is a package supported by a third `party which may be not as frequently updated as packages supported by the Jenkins project directly">OpenIndiana Hipster <span><CollectionsBookmarkOutlinedIcon className={thirdPartyIcon} /></span></a></li>
          </ul>
        </div>
        <div style={{ width: "45%" }}>
          <strong>Download Jenkins 2.428 LTS for:</strong>
          <ul className={listGroup}>
            <li><a href="google.com">Generic Java Package (.war)<br />SHA-256:</a></li>
            <li><a rel="noreferrer" target="_blank" href="https://hub.docker.com/r/jenkins/jenkins">Docker</a></li>
            <li><a rel="noreferrer" target="_blank" href="https://pkg.jenkins.io/debian/">Ubuntu/Debian</a></li>
            <li><a rel="noreferrer" target="_blank" href="https://pkg.jenkins.io/redhat/">Red Hat/Fedora/Alma/Rocky/CentOS</a></li>
            <li><a rel="noreferrer" target="_blank" href="https://www.jenkins.io/download/thank-you-downloading-windows-installer">Windows</a></li>
            <li><a rel="noreferrer" target="_blank" href="https://pkg.jenkins.io/opensuse/">openSUSE</a></li>
            <li><a rel="noreferrer" target="_blank" href="https://archlinux.org/packages/extra/any/jenkins/" title="This is a package supported by a third `party which may be not as frequently updated as packages supported by the Jenkins project directly">Arch Linux <span><CollectionsBookmarkOutlinedIcon className={thirdPartyIcon} /></span></a></li>
            <li><a rel="noreferrer" target="_blank" href="https://www.freshports.org/devel/jenkins" title="This is a package supported by a third `party which may be not as frequently updated as packages supported by the Jenkins project directly">FreeBSD <span><CollectionsBookmarkOutlinedIcon className={thirdPartyIcon} /></span></a></li>
            <li><a rel="noreferrer" target="_blank" href="https://packages.gentoo.org/packages/dev-util/jenkins-bin" title="This is a package supported by a third `party which may be not as frequently updated as packages supported by the Jenkins project directly">Gentoo <span><CollectionsBookmarkOutlinedIcon className={thirdPartyIcon} /></span></a></li>
            <li><a rel="noreferrer" target="_blank" href="https://www.jenkins.io/download/weekly/macos" title="This is a package supported by a third `party which may be not as frequently updated as packages supported by the Jenkins project directly">macOS <span><CollectionsBookmarkOutlinedIcon className={thirdPartyIcon} /></span></a></li>
            <li><a rel="noreferrer" target="_blank" href="https://openports.pl/path/devel/jenkins/devel" title="This is a package supported by a third `party which may be not as frequently updated as packages supported by the Jenkins project directly">OpenBSD <span><CollectionsBookmarkOutlinedIcon className={thirdPartyIcon} /></span></a></li>
            <li><a rel="noreferrer" target="_blank" href="https://pkg.openindiana.org/hipster/en/search.shtml?token=jenkins-core-weekly" title="This is a package supported by a third `party which may be not as frequently updated as packages supported by the Jenkins project directly">OpenIndiana Hipster <span><CollectionsBookmarkOutlinedIcon className={thirdPartyIcon} /></span></a></li>
          </ul>
        </div>
      </div>
    </section>
    <hr style={{ height: "1px", background: "gray", marginTop: "1rem" }} />
    <p>NOTE: Packages with the <ion-icon name="library-outline"></ion-icon> library icon are maintained by third parties. Such packages may not be as frequently updated as packages supported by the Jenkins project directly.</p>
    <section>
      <h2>Deploying Jenkins in public cloud</h2>
      <p style={{ marginBottom: "1cm" }}>Many public cloud vendors provide their own Jenkins installation guides and packages. The guides provide instructions to deploy, maintain, and upgrade on the specific public cloud. Such guides may be used to quickly deploy Jenkins and, in many cases, to get an instance preconfigured to be used within the public cloud (e.g. bundled plugins, integrations with public cloud services, etc.).</p>
      <div>
        <div className={vendorsList}>
          <div className={vendors}>
            <a href="https://aws.amazon.com/blogs/devops/setting-up-a-ci-cd-pipeline-by-integrating-jenkins-with-aws-codebuild-and-aws-codedeploy/">
              <img class="vendors-image" src="../../images/images/amazon_web_services.png" alt="AWS" width="320" />
            </a>
            <p>
              Jenkins with AWS CodeBuild and AWS CodeDeploy
            </p>
          </div>
          <div className={vendors}>
            <a href="https://docs.microsoft.com/en-us/azure/developer/jenkins/">
              <img src="../../images/images/microsoft_azure.png" alt="Microsoft Azure" width="320" />
            </a>
            <p>
              Jenkins quickstarts, tutorials, samples, and resources for Azure
            </p>
          </div>
          <div className={vendors}>
            <a href="https://cloud.google.com/jenkins">
              <img src="../../images/images/google_cloud.png" alt="GCP" width="320" />
            </a> <span><CollectionsBookmarkOutlinedIcon className={thirdPartyIcon} /></span>
            <p>
              Jenkins at scale on Google Kubernetes Engine
            </p>
          </div>
          <div className={vendors}>
            <a href="https://docs.oracle.com/en/solutions/jenkins-master-agent-mode/">
              <img src="../../images/images/oracle_cloud_infrastructure.png" alt="Oracle Gloud Infrastructure" width="320" />
            </a>
            <p>
              Jenkins Reference Architecture and one-click deployment on Oracle Cloud Infrastructure
            </p>
          </div>
          <div className={vendors}>
            <a href="https://github.com/civo/kubernetes-marketplace/tree/master/jenkins">
              <img src="../../images/images/civo.png" alt="CIVO" width="320" />
            </a>
            <p>
              Jenkins one-click deployment on <a class="item" href="https://www.civo.com/"> Civo Kubernetes
              </a>
            </p>
          </div>
          <div className={vendors}>
            <a href="https://bitnami.com/stack/jenkins/cloud">
              <img src="../../images/images/bitnami.png" alt="Bitami" width="320" />
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
  </IndexPageLayout>
)

export const Head = () => <Seo title="Jenkins Download Page" />

export default DownloadPage

