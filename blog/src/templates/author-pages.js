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
import { authoravataricons, authorinfo, authorpageavatar, blog, github, linkedin, twitter } from "../css/authorpost.module.css";
import {
  blogauthor,
  blogauthorinfo,
  bloglisting,
  blogpost,
  blogteaser,
  blogtitle
} from "../css/blogpost.module.css";
import IndexPageLayout from "../layouts";
import { formatDate } from "../utils/formatDate";
import { Height } from '@mui/icons-material';

const AuthorPage = ({ data, pageContext, path }) => {
  const { authors } = pageContext
  const filteredAuthors = authors.filter(author => author.node.document.title == 'Author');
  return (
    < IndexPageLayout >
      <PageName title={'Jenkins Community Blog Contributors'} />
      <ul>
        {
          data.allFile.nodes.map(({ childrenAsciidoc }) => {
            return (
              <>
                {
                  filteredAuthors.map((node) => {
                    const author = path.slice(8, -1);
                    return (
                      <>
                        {
                          (node.node.pageAttributes.github == author) ? <>
                            <div className={authorpageavatar} >
                              <img src={node.node.pageAttributes.authoravatar ? node.node.pageAttributes.authoravatar : "../../images/images/avatars/no_image.svg"} alt={node.node.pageAttributes.author_name} />
                            </div>
                            <h2>{node.node.pageAttributes.author_name}</h2>
                            <p><span dangerouslySetInnerHTML={{ __html: node.node.pageAttributes.description }} /></p>
                            <div className={authoravataricons} style={{ width: "10rem" }}>
                              {node.node.pageAttributes.github ? <a href={"https://github.com/" + node.node.pageAttributes.github} ><Avatar sx={{ bgcolor: "rgb(60, 60, 60)" }}> <GitHubIcon className={github} /></Avatar></a> : null}
                              {node.node.pageAttributes.linkedin ? <a href={"https://linkedin.com/in/" + node.node.pageAttributes.linkedin} ><Avatar sx={{ bgcolor: blue[700] }}><LinkedInIcon className={linkedin} /></Avatar></a> : null}
                              {node.node.pageAttributes.twitter ? <a href={"https://twitter.com/" + node.node.pageAttributes.twitter} ><Avatar sx={{ bgcolor: cyan[50] }}> <TwitterIcon className={twitter} /></Avatar></a> : null}
                              {node.node.pageAttributes.blog ? <a href={node.node.pageAttributes.blog} ><Avatar sx={{ bgcolor: indigo[50] }}><ImportContactsIcon className={blog} /></Avatar></a> : null}
                            </div>
                          </> : null
                        }
                      </>
                    )
                  })
                }
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
    limit:1
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
