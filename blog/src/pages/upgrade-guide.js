import React from "react";
import { graphql } from "gatsby";
import IndexPageLayout from "../layouts";
import Seo from "../components/Seo";
import PageName from "../components/PageName";

const UpgradeGuide = () => (
    <IndexPageLayout>
        <PageName title={"Jenkins Upgrade Guide"} />
        <p>
            This section highlights important changes for administrators upgrading Jenkins LTS. Each
            section covers the upgrade from the previous LTS release, sections on versions x.y.1
            cover the upgrade from the last release of the previous LTS line. if you are skipping
            LTS releases when upgrading, it is recommended to read the sections for all releases in
            between.
        </p>
    </IndexPageLayout>
);

export const Head = () => <Seo title="Jenkins Upgrade Guide" />;

export default UpgradeGuide;

export const pageQuery = graphql`
<<<<<<< HEAD
query{
  allLtsYaml {
    edges {
      node {
        version
        date
        lts_predecessor
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
=======
  query {
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
>>>>>>> 659951e29 (add prettier and eslint)
        }
      }
    }
  }
`;
