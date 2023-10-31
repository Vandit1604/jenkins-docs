import React from "react"
import { Link, graphql } from "gatsby"
import IndexPageLayout from "../layouts"
import jenkinsLogo from "../../../docs/images/modules/ROOT/assets/images/logos/jenkins/jenkins.png"
import typography from "../utils/typography"
import Seo from "../components/Seo"
const { rhythm } = typography

const UpgradeGuide = () => {
  return (
    < IndexPageLayout >
      <Link style={{ textDecoration: `none` }} to="/">
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
            }}
          />{" "}
          Jenkins LTS Upgrade Guide
        </h3>
      </Link>
      <p>This section highlights important changes for administrators upgrading Jenkins LTS. Each section covers the upgrade from the previous LTS release, sections on versions x.y.1 cover the upgrade from the last release of the previous LTS line. if you are skipping LTS releases when upgrading, it is recommended to read the sections for all releases in between.
      </p>
      <>
      </>
    </IndexPageLayout >
  );
}

export const Head = () => <Seo title="Jenkins Upgrade Guide" />

export default UpgradeGuide

export const pageQuery = graphql`
query{
  allLtsYaml {
    edges {
      node {
        version
        date
        lts_predecessor
        lts_baseline
        lts_changes {
          type
          category
          pull
          issue
          message
          pr_title
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
