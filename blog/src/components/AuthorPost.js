import * as React from "react"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { authorinfo } from "../css/authorpost.module.css"
import { Link, graphql, useStaticQuery } from "gatsby"
import IndexPageLayout from "../layouts"
import { authorinfo, github, linkedin, twitter, blog, authoravatar } from "../css/authorpost.module.css"
import { blogauthor, bloglisting, blogpost, blogtitle } from "../css/blogpost.module.css"


const AuthorPost = () => {
  const data = useStaticQuery(graphql`query {
      allFile(
        filter: {childrenAsciidoc: {elemMatch: {document: {title: {eq: "Author"}}}}}
      ) {
        edges {
          node {
            childrenAsciidoc {
              fields {
                slug
              }
              document {
                title
                subtitle
                main
              }
              pageAttributes {
                tags
                author
                opengraph
                author_name
                github
                twitter
                blog
                irc
                description
                authoravatar
                linkedin
                medium
              }
            }
          }
        }
      }
    }
  `)
  return (
    <section>
      {data.allFile.nodes.map(({ childrenAsciidoc }) => {
        <>
          <h1>{node.pageAttributes.author_name}</h1>
          <div style={{ display: "flex" }}>
            <img src={"../../images/images/avatars/" + node.pageAttributes.authoravatar} style={{ height: "1rem", width: "1rem", borderRadius: "50%", display: "inline", position: "relative", top: ".3rem" }} alt={""} />
          </div>
          <div>
            {node.pageAttributes.description}
          </div>
          <div className={authorinfo}>
            {childrenAsciidoc[0].pageAttributes.github ? <a href={"https://github.com/" + childrenAsciidoc[0].pageAttributes.github} ><Avatar sx={{ bgcolor: "rgb(60, 60, 60)" }}> <GitHubIcon className={github} /></Avatar></a> : null}
            {childrenAsciidoc[0].pageAttributes.linkedin ? <a href={"https://linkedin.com/in/" + childrenAsciidoc[0].pageAttributes.linkedin} ><Avatar sx={{ bgcolor: blue[700] }}><LinkedInIcon className={linkedin} /></Avatar></a> : null}
            {childrenAsciidoc[0].pageAttributes.twitter ? <a href={"https://twitter.com/" + childrenAsciidoc[0].pageAttributes.twitter} ><Avatar sx={{ bgcolor: cyan[50] }}> <TwitterIcon className={twitter} /></Avatar></a> : null}
            {childrenAsciidoc[0].pageAttributes.blog ? <a href={childrenAsciidoc[0].pageAttributes.blog} ><Avatar sx={{ bgcolor: indigo[50] }}><ImportContactsIcon className={blog} /></Avatar></a> : null}
          </div>
          {/* Add the Blogposts of each author */}
        </>
      })}
    </section>
  )
}

export default AuthorPost

