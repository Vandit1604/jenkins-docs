import React from "react";
import { Link, graphql } from "gatsby";
import IndexPageLayout from "../layouts/index.js";
import {
  blogauthor,
  bloglisting,
  blogpost,
  blogtitle,
  blogteaser,
  blogauthorinfo
} from "../css/blogpost.module.css";
import jenkinsLogo from "../../../docs/images/modules/ROOT/assets/images/logos/jenkins/jenkins.png";
import typography from "../utils/typography";

const { rhythm } = typography;

class BlogIndex extends React.Component {
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
    return `${monthNames[formattedDate.getMonth()]
      } ${formattedDate.getDate()}, ${formattedDate.getFullYear()}`;
  }

  render() {
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1)
    const nextPage = (currentPage + 1)
    console.log(prevPage)
    console.log(currentPage)
    console.log(nextPage)
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
          {this.props.data.allAsciidoc.edges.map(({ node, idx }) => {
            if (node.document.title !== "Author") {
              const formattedDate = this.formatDate(node.fields.slug);
              const authorNames = node.pageAttributes.author ?? "author"
              const authorNamesWoSpaces = authorNames.replace(/\s/g, '')
              const authorArray = authorNamesWoSpaces.split(",")
              authorArray.forEach(element => {
                element = "../../images/images/avatars/" + element + ".jpg"
                console.log(element)
              });

              const opengraphImageSource =
                node.pageAttributes.opengraph ||
                "../../images/gsoc/opengraph.png";
              return (
                <li key={`${node.fields.slug}-${node.document.title}-${idx}`} className={blogpost}>
                  <Link
                    to={node.fields.slug}
                    style={{ textDecoration: "none", display: "flex", gap: "1.25rem", flexDirection: "column" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "15rem"
                      }}
                    >
                      <img
                        src={opengraphImageSource}
                        alt={node.document.title}
                        height="250px"
                        width="100%"
                      />
                    </div>
                    <h5 className={blogtitle}>{node.document.title}</h5>
                    <div className={blogteaser}>
                      Will include the blog teaser
                      Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
                    </div>
                    <div
                      style={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <div className={blogauthorinfo}>
                        <img
                          // src={authorImageSource}
                          src={opengraphImageSource}
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
                  </Link>
                </li>
              );
            }
            return null;
          })}
        </ul>
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent:"center",
            gap:"1rem",
            alignItems: 'center',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {!isFirst && (
            <Link to={"/blog/"+prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
          {!isLast && (
            <Link to={"/blog/"+nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </ul>
      </IndexPageLayout>
    );
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query pageQuery($skip: Int!, $limit: Int!){
    allAsciidoc(
      sort: { fields: { slug: DESC } }
      filter: { document: { title: { nin: ["Author", "Jenkins Changelog Styleguide"] } } }
      limit: $limit
      skip: $skip
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
