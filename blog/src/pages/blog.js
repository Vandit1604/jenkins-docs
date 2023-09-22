import React from "react";
import { Link, graphql } from "gatsby";
import IndexPageLayout from "../layouts";
import {
  blogauthor,
  bloglisting,
  blogpost,
  blogtitle,
} from "../css/blogpost.module.css";
import jenkinsLogo from "../../../docs/images/modules/ROOT/assets/images/logos/jenkins/jenkins.png";
import typography from "../utils/typography";

const { rhythm } = typography;

class IndexPage extends React.Component {
  formatDate(inputString) {
    const parts = inputString.split("/");
    const datePart = parts[parts.length - 2];
    const dateComponents = datePart.split("-");
    const year = parseInt(dateComponents[0]);
    const month = parseInt(dateComponents[1]);
    const day = parseInt(dateComponents[2]);
    const formattedDate = new Date(year, month - 1, day);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${
      monthNames[formattedDate.getMonth()]
    } ${formattedDate.getDate()}, ${formattedDate.getFullYear()}`;
  }

  render() {
    return (
      <IndexPageLayout>
        <Link style={{ textDecoration: `none` }} to="/">
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
            The Jenkins Blog
          </h3>
        </Link>
        <ul className={bloglisting}>
          {this.props.data.allAsciidoc.edges.map(({ node }) => {
            if (node.document.title !== "Author") {
              const formattedDate = this.formatDate(node.fields.slug);
              const authorImageSource = (
                "../../images/images/avatars/" +
                node.pageAttributes.author +
                ".jpg" ??
                "../../images/images/avatars/" +
                node.pageAttributes.author +
                ".png" ??
                "../../images/images/avatars/" +
                node.pageAttributes.author +
                ".jpeg"
              );
              const opengraphImageSource =
                node.pageAttributes.opengraph ||
                "../../images/gsoc/opengraph.png";

              return (
                <li key={node.fields.slug} className={blogpost}>
                  <Link
                    to={node.fields.slug}
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={opengraphImageSource}
                        alt={node.document.title}
                        height="250px"
                        width="100%"
                      />
                    </div>
                    <span className={blogtitle}>{node.document.title}</span>
                  </Link>
                  <br />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <img
                        src={authorImageSource}
                        style={{
                          height: "1rem",
                          width: "1rem",
                          borderRadius: "50%",
                          display: "inline",
                          position: "relative",
                          top: ".3rem",
                        }}
                        alt={""}
                      />
                      <p className={blogauthor}>{node.pageAttributes.author}</p>
                    </div>
                    <span>{formattedDate}</span>
                  </div>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </IndexPageLayout>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    allAsciidoc(
      sort: { fields: { slug: DESC } }
      filter: { document: { main: { ne: "Jenkins Changelog Styleguide" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          document {
            main
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
  }
`;

