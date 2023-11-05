import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import React from "react"
import Seo from "../components/Seo"
import PageName from "../components/PageName"
import { Link, graphql } from "gatsby"
import IndexPageLayout from "../layouts"
import { authorlisting, authorpost, authorname, authorinfo, github, linkedin, twitter, blog } from "../css/authorpost.module.css"

const AuthorPage = ({ data }) => {
  return (
    < IndexPageLayout >
      <PageName title={'Jenkins Community Blog Contributors'} />
      <ul className={authorlisting}>
        {
          data.allFile.nodes.map(({ childrenAsciidoc }) => {
            console.log(childrenAsciidoc);
            return (
              < li key={childrenAsciidoc[0].fields.slug} className={authorpost} >
                <Link to={childrenAsciidoc[0].fields.slug} style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "1rem",
                    }}
                  >
                    <center>
                      <span className={authorname}>{childrenAsciidoc[0].pageAttributes.author_name}</span>
                    </center>
                    <img
                      src={"../../images/gsoc/opengraph.png"}
                      alt={childrenAsciidoc[0].document.title}
                    />
                  </div>
                  <div className={authorinfo}>
                    <br />
                    <a href={"https://github.com/" + childrenAsciidoc[0].pageAttributes.github} > <GitHubIcon className={github} /></a>
                    <br />
                    <a href={"https://linkedin.com/in/" + childrenAsciidoc[0].pageAttributes.linkedin} ><LinkedInIcon className={linkedin} /></a>
                    <br />
                    <a href={"https://twitter.com/" + childrenAsciidoc[0].pageAttributes.twitter} > <TwitterIcon className={twitter} /></a>
                    <br />
                    <a href={childrenAsciidoc[0].pageAttributes.blog} ><ImportContactsIcon className={blog} /></a>
                    <br />
                  </div>
                </Link>
              </li>
            )
          })
        }
      </ul>
    </IndexPageLayout >
  )
}

export const Head = () => <Seo title="Jenkins Blog Contributors" />

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

