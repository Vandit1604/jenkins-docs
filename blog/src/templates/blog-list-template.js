import React from "react";
import { Link, graphql } from "gatsby";
import IndexPageLayout from "../layouts/index.js";
import { authorimagecontainer } from "../css/authorpost.module.css";
import {
  bloglisting,
  blogpost,
  blogtitle,
  blogteaser,
  blogauthorinfo,
  blogauthorimage,
} from "../css/blogpost.module.css";
import PageName from "../components/PageName"
import { formatDate, blogAuthorImage } from "../utils/index.js";

const BlogIndex = ({ pageContext, data }) => {

  const { currentPage, numPages, filteredAuthors } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1)
  const nextPage = (currentPage + 1)

  return (
    <IndexPageLayout>
      <PageName title={'The Jenkins Blog'} />
      <ul className={bloglisting}>
        {data.allFile.nodes.map(({ childrenAsciidoc }) => {
          const authorList = blogAuthorImage(childrenAsciidoc[0].pageAttributes.author)

          const formattedDate = formatDate(childrenAsciidoc[0].fields.slug);
          const opengraphImageSource =
            childrenAsciidoc[0].pageAttributes.opengraph ||
            "../../images/gsoc/opengraph.png";

          return (
            <li key={`${childrenAsciidoc[0].fields.slug}-${childrenAsciidoc[0].document.title}`} className={blogpost}>
              <Link
                to={childrenAsciidoc[0].fields.slug}
                style={{ textDecoration: "none", display: "flex", gap: "1.25rem", flexDirection: "column" }}
              >
                <div
                  className={{ authorimagecontainer }}
                >
                  <img
                    loading="lazy"
                    src={opengraphImageSource}
                    alt={childrenAsciidoc[0].document.title}
                    height="250px"
                    width="100%"
                  />
                </div>
                <h5 className={blogtitle}>{childrenAsciidoc[0].document.title}</h5>
                <div className={blogteaser}>
                  Will include the blog teaser
                  Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className={blogauthorinfo}>
                    {authorList.map((auth) => {
                      return (
                        filteredAuthors.map((node) => {
                          return node.node.pageAttributes.github === auth ? (
                            <Link className={blogauthorinfo} to={`/author/${node.node.pageAttributes.github}`}>
                              {node.node.pageAttributes.authoravatar ? <img
                                loading="lazy"
                                src={node.node.pageAttributes.authoravatar}
                                className={blogauthorimage}
                                alt={node.node.pageAttributes.author}
                              /> : <img
                                loading="lazy"
                                src="../../images/images/avatars/no_image.svg"
                                className={blogauthorimage}
                                alt={node.node.pageAttributes.author}
                              />}
                              {authorList.length < 3 ? <p>{node.node.pageAttributes.author_name}</p> : null}
                            </Link>
                          ) : null;
                        })
                      );
                    })}
                  </div>
                  <span>{formattedDate}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* pagination */}
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: "center",
          gap: "1.5rem",
          alignItems: 'center',
          listStyle: 'none',
          padding: 0,
        }}
      >
        {!isFirst && (
          <Link to={"/blog/" + prevPage} rel="prev">
            ← Previous Page
          </Link>
        )}
        {!isLast && (
          <Link to={"/blog/" + nextPage} rel="next">
            Next Page →
          </Link>
        )}
      </ul>
    </IndexPageLayout >
  );
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndex($skip: Int!, $limit: Int!) {
  allFile(
    filter: {sourceInstanceName: {eq: "pages"}, childrenAsciidoc: {elemMatch: {document: {title: {ne: "About the Author"}}}}}
    sort: {childrenAsciidoc: {fields: {slug: DESC}}}
    limit: $limit
    skip: $skip
  ) {
    nodes {
      childrenAsciidoc {
        fields {
          slug
        }
        document {
          title
        }
        pageAttributes {
          author
          author_name
          github
          opengraph
          linkedin
          blog
          twitter
          medium
          irc
          description
          authoravatar
        }
      }
    }
  }
}
`;
