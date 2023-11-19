import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import {
  authorimagecontainer
} from "../css/authorpost.module.css"
import {
  blogauthor,
  blogauthorimage,
  blogauthorinfo,
  bloglisting,
  blogpost,
  blogteaser,
  blogtitle,
} from "../css/blogpost.module.css"
import IndexPageLayout from "../layouts"
import { blogAuthorImage, formatDate, getImageSrc } from "../utils/index.js"

const RecentBlogPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {sourceInstanceName: {eq: "pages"}, childrenAsciidoc: {elemMatch: {document: {title: {ne: "About the Author"}}}}}
        sort: {childrenAsciidoc: {fields: {slug: DESC}}}
        limit: 9
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
  `)
  return <IndexPageLayout>
    <h2>Recent Posts</h2>
    <ul className={bloglisting}>
      {data.allFile.nodes.map(({ childrenAsciidoc }) => {
        // formats
        const formats = ['jpg', 'png', 'jpeg']
        const authorList = blogAuthorImage(childrenAsciidoc[0].pageAttributes.author)
        // date
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
                  {
                    authorList.map((auth) => {
                      const imageSrc = getImageSrc(auth, formats)
                      return (
                        imageSrc ? <img
                          loading="lazy"
                          src={imageSrc}
                          className={blogauthorimage}
                          alt={""}
                        /> : <img
                          loading="lazy"
                          src="../../images/images/avatars/no_image.svg"
                          className={blogauthorimage}
                          alt={""}
                        />
                      )
                    })
                  }
                  {" "}
                  {authorList.length < 3 && <p className={blogauthor}>{childrenAsciidoc[0].pageAttributes.author}</p>}
                </div>
                <span>{formattedDate}</span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  </IndexPageLayout>
}

export default RecentBlogPosts
