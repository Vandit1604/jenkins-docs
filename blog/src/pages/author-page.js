import jenkinsLogo from "../../../docs/images/modules/ROOT/assets/images/logos/jenkins/jenkins.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import IndexPageLayout from "../layouts"
import PageName from "../components/PageName";

const AuthorPage = ({ data }) => {
  return (
    < IndexPageLayout >
      <PageName children={'Jenkins Community Blog Contributors'} />
      <ul>
        {
          data.allFile.nodes.map(({ childrenAsciidoc }) => {
            console.log(childrenAsciidoc[0])
            return (
              <>
                <h2>{childrenAsciidoc[0].pageAttributes.author_name}</h2>
                <p><span dangerouslySetInnerHTML={{ __html: childrenAsciidoc[0].pageAttributes.description }} /></p>
                <a href={childrenAsciidoc[0].pageAttributes.github}><GitHubIcon /></a>
                <a href={childrenAsciidoc[0].pageAttributes.twitter}><TwitterIcon /></a>
                <a href={childrenAsciidoc[0].pageAttributes.linkedin}><LinkedInIcon /></a>
                <a href={childrenAsciidoc[0].pageAttributes.blog}><ImportContactsIcon /></a>
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
