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
import PageName from "../components/PageName"
import { formatDate } from "../utils/formatDate";
const fg = require('fast-glob');
import {globby} from 'globby';

const paths = await globby(['*', '!cake']);

console.log(paths);
const BlogIndex = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1)
  const nextPage = (currentPage + 1)
  return (
    <IndexPageLayout>
      <PageName title={'The Jenkins Blog'} />
      <ul className={bloglisting}>
        {data.allFile.nodes.map(({ childrenAsciidoc }) => {
          const formattedDate = formatDate(childrenAsciidoc[0].fields.slug);
          const authorNames = childrenAsciidoc[0].pageAttributes.author ?? "author"
          const authorNamesWoSpaces = authorNames.replace(/\s/g, '')
          const authorArray = authorNamesWoSpaces.split(",")
          // tried searching for all the js files
          const entries = fg.globSync(['**/*.js'], { dot: true });
          // searching for png files
          const entries1 = fg.globSync(['static/images/images/avatars/*.png'], { dot: true });
          console.log(entries)
          console.log(entries1)

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
                    <p className={blogauthor}>{childrenAsciidoc[0].pageAttributes.author_name}</p>
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
          gap: "1rem",
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
    </IndexPageLayout>
  );
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndex($skip: Int!, $limit: Int!) {
  allFile(
    filter: {sourceInstanceName: {eq: "pages"}, childrenAsciidoc: {elemMatch: {document: {title: {ne: "Author"}}}}}
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
`;
