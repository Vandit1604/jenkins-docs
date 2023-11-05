import GitHubIcon from '@mui/icons-material/GitHub';
import Avatar from '@mui/material/Avatar';
import { blue, indigo, cyan } from '@mui/material/colors';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import React from "react"
import { authorinfo, github, linkedin, twitter, blog } from "../css/authorpost.module.css"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import IndexPageLayout from "../layouts"
import PageName from "../components/PageName"

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
                  {childrenAsciidoc[0].pageAttributes.blog ? <a href={childrenAsciidoc[0].pageAttributes.blog} ><Avatar sx={{ bgcolor: indigo[50] }}><ImportContactsIcon className={blog} /></Avatar></a> : null}                </div>
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
    filter: {sourceInstanceName: {eq: "authors"}, childrenAsciidoc: {elemMatch: {document: {title: {eq: "Author"}}}}}
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
`
