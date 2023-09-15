import React from "react"
import { Link, graphql } from "gatsby"
import IndexPageLayout from "../layouts"

class IndexPage extends React.Component {
  render() {
    return (
      <IndexPageLayout>
        <h3
          style={{
            color: `black`,
            marginBottom: rhythm(1.5),
            "font-family": "Georgia,serif",
            "font-size": "40px",
            display: "flex",
            "flex-direction": "row",
            "flex-wrap": "nowrap",
            "justify-content": "center",
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
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h4>Stable (LTS)</h4>
                <p>Long-Term Support (LTS) release baselines are chosen every 12 weeks from the stream of regular releases. Every 4 weeks, we release stable releases which include bug and security fix backports.</p>
                <a href="lts">Learn more…</a>
                <p class="details">
                  <a class="item" href="">Changelog</a> |
                  <a class="item" href="">Upgrade Guide</a> |
                  <a class="item" href="https://get.jenkins.io/war-stable/">Past Releases</a>
                </p>
              </div>
              <div class="col-md-6">
                <h4>Regular releases (Weekly)</h4>
                <p>This release line delivers bug fixes and new features rapidly to users and plugin developers who need them. It is generally delivered on a weekly cadence.</p>
                <a href="weekly">Learn more…</a>
                <p class="details">
                  <a class="item" href="">Changelog</a> |
                  <a class="item" href="https://get.jenkins.io/war/">Past Releases</a>
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

          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="list-group">
                  <strong><ion-icon name="download-outline"></ion-icon> Download Jenkins</strong>
                  <a class="list-group-item list-group-item-action" href="https://get.jenkins.io/war-stable/<%= site.jenkins.stable %>/jenkins.war">
                    <span class="title">Generic Java package (.war)</span>
                    <div style="font-size: x-small;overflow-wrap: break-word; word-wrap: break-word;">
                      <span class="sha-256" data-clipboard_text="<%= sha256_value %>">
                        <button class="btn btn-outline-secondary copy-button" onclick="event.preventDefault();copyToClipboard(event); changeIcon('copy-icon')" data-clipboard_target=".sha-256" style="border:transparent;padding:6px;" data-toggle="tooltip" data-placement="bottom" title="Click to copy">
                          <ion-icon name="copy-outline" id="copy-icon"></ion-icon>
                        </button>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div class="col-md-6">
                <strong><ion-icon name="download-outline"></ion-icon> Download Jenkins</strong>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <p>NOTE: Packages with the <ion-icon name="library-outline"></ion-icon> library icon are maintained by third parties. Such packages may not be as frequently updated as packages supported by the Jenkins project directly.</p>
        <section>
          <h2>Deploying Jenkins in public cloud</h2>
          <p>Many public cloud vendors provide their own Jenkins installation guides and packages. The guides provide instructions to deploy, maintain, and upgrade on the specific public cloud. Such guides may be used to quickly deploy Jenkins and, in many cases, to get an instance preconfigured to be used within the public cloud (e.g. bundled plugins, integrations with public cloud services, etc.).</p>
          <div class="vendors-list">
          </div>
        </section>
      </IndexPageLayout >
    );
  }
}

export default IndexPage

export const pageQuery = graphql`
{
  allAsciidoc(filter: {document: {title: {eq: "Author"}}}) {
    edges {
      node {
        fields {
          slug
        }
        document {
          title
        }
        pageAttributes {
          author_name
          github
          opengraph
          linkedin
          blog
          twitter
          medium
          irc
          description
        }
      }
    }
  }
}
`
