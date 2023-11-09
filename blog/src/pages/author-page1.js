import GitHubIcon from '@mui/icons-material/GitHub';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Avatar from '@mui/material/Avatar';
import { blue, cyan, indigo } from '@mui/material/colors';
import { Link, graphql } from "gatsby";
import React from "react";
import PageName from "../components/PageName";
import Seo from "../components/Seo";
import { authorinfo, blog, github, linkedin, twitter } from "../css/authorpost.module.css";
import {
  blogauthor,
  blogauthorinfo,
  bloglisting,
  blogpost,
  blogteaser,
  blogtitle
} from "../css/blogpost.module.css";
import IndexPageLayout from "../layouts";
import { formatDate} from "../utils/index.js";

const AuthorPage = ({ data }) => {
  return (
    < IndexPageLayout >
      <PageName title={'Jenkins Community Blog Contributors'} />
      <ul>
        {
          data.allFile.nodes.map(({ childrenAsciidoc }) => {
            return (
              <>
                <h2>{childrenAsciidoc[0].pageAttributes.author_name}</h2>
                <p><span dangerouslySetInnerHTML={{ __html: childrenAsciidoc[0].pageAttributes.description }} /></p>
                <div className={authorinfo} style={{ width: "10rem" }}>
                  {childrenAsciidoc[0].pageAttributes.github ? <a href={"https://github.com/" + childrenAsciidoc[0].pageAttributes.github} ><Avatar sx={{ bgcolor: "rgb(60, 60, 60)" }}> <GitHubIcon className={github} /></Avatar></a> : null}
                  {childrenAsciidoc[0].pageAttributes.linkedin ? <a href={"https://linkedin.com/in/" + childrenAsciidoc[0].pageAttributes.linkedin} ><Avatar sx={{ bgcolor: blue[700] }}><LinkedInIcon className={linkedin} /></Avatar></a> : null}
                  {childrenAsciidoc[0].pageAttributes.twitter ? <a href={"https://twitter.com/" + childrenAsciidoc[0].pageAttributes.twitter} ><Avatar sx={{ bgcolor: cyan[50] }}> <TwitterIcon className={twitter} /></Avatar></a> : null}
                  {childrenAsciidoc[0].pageAttributes.blog ? <a href={childrenAsciidoc[0].pageAttributes.blog} ><Avatar sx={{ bgcolor: indigo[50] }}><ImportContactsIcon className={blog} /></Avatar></a> : null}
                </div>
                <ul className={bloglisting}>
                  {data.allFile.nodes.map(({ childrenAsciidoc }) => {
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
                                src={childrenAsciidoc[0].pageAttributes.authoravatar ? "../../images/images/avatars/" + childrenAsciidoc[0].pageAttributes.authoravatar : "../../images/images/avatars/no_image.svg"}
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
              </>
            )
          })
        }
      </ul>
    </IndexPageLayout >
  )
}
export const Head = () => <Seo title="Jenkins Author Page" />

export default AuthorPage

export const pageQuery = graphql`
query AuthorPage {
  allFile(
    filter: {childrenAsciidoc: {elemMatch: {document: {title: {ne: "Jenkins Changelog Styleguide"}}}}}
    sort: {childrenAsciidoc: {fields: {slug: DESC}}}
    limit: 2
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
          authoravatar
        }
      }
    }
  }
}
`
