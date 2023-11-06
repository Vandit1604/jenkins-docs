import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { github, linkedin, twitter, blog } from "../css/authorpost.module.css"
import {
  blogauthor,
  bloglisting,
  blogpost,
  blogtitle,
  blogteaser,
  blogauthorinfo
} from "../css/blogpost.module.css";
import { Link } from "gatsby";
import { formatDate } from "../utils/formatDate";

import Avatar from '@mui/material/Avatar';
import { blue, indigo, cyan } from '@mui/material/colors';

const Author = () => {
  const data = useStaticQuery(graphql`
    query {
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
              authoravatar
            }
          }
        }
      }
    }
  `)
  return (
    data.allFile.nodes.map(({ childrenAsciidoc }) => {
      return (
        <>
          <h3>About the Author</h3>
          <div>
            <div>
              <img src="childrenAsciidoc[0].pageAttributes.authoravatar" style={{ borderRadius: "50%" }} width={128} height={128} />
              <h4>{childrenAsciidoc[0].pageAttributes.author_name}</h4>
            </div>
            <div dangerouslySetInnerHTML={{ __html: childrenAsciidoc[0].pageAttributes.description }}
            />
            <br />
            <div style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
              {childrenAsciidoc[0].pageAttributes.github ? <a href={"https://github.com/" + childrenAsciidoc[0].pageAttributes.github} ><Avatar sx={{ bgcolor: "rgb(60, 60, 60)" }}> <GitHubIcon className={github} /></Avatar></a> : null}
              {childrenAsciidoc[0].pageAttributes.linkedin ? <a href={"https://linkedin.com/in/" + childrenAsciidoc[0].pageAttributes.linkedin} ><Avatar sx={{ bgcolor: blue[700] }}><LinkedInIcon className={linkedin} /></Avatar></a> : null}
              {childrenAsciidoc[0].pageAttributes.twitter ? <a href={"https://twitter.com/" + childrenAsciidoc[0].pageAttributes.twitter} ><Avatar sx={{ bgcolor: cyan[50] }}> <TwitterIcon className={twitter} /></Avatar></a> : null}
              {childrenAsciidoc[0].pageAttributes.blog ? <a href={childrenAsciidoc[0].pageAttributes.blog} ><Avatar sx={{ bgcolor: indigo[50] }}><ImportContactsIcon className={blog} /></Avatar></a> : null}            </div>
          </div>
          {/* <ul className={bloglisting}> */}
          {/*   {data.allFile.nodes.map(({ childrenAsciidoc }) => { */}
          {/*     const formattedDate = formatDate(childrenAsciidoc[0].fields.slug); */}
          {/*     const opengraphImageSource = */}
          {/*       childrenAsciidoc[0].pageAttributes.opengraph || */}
          {/*       "../../images/gsoc/opengraph.png"; */}
          {/*     return ( */}
          {/*       <li key={`${childrenAsciidoc[0].fields.slug}-${childrenAsciidoc[0].document.title}`} className={blogpost}> */}
          {/*         <Link */}
          {/*           to={childrenAsciidoc[0].fields.slug} */}
          {/*           style={{ textDecoration: "none", display: "flex", gap: "1.25rem", flexDirection: "column" }} */}
          {/*         > */}
          {/*           <div */}
          {/*             style={{ */}
          {/*               display: "flex", */}
          {/*               flexDirection: "column", */}
          {/*               alignItems: "center", */}
          {/*               justifyContent: "center", */}
          {/*               height: "15rem" */}
          {/*             }} */}
          {/*           > */}
          {/*             <img */}
          {/*               src={opengraphImageSource} */}
          {/*               alt={childrenAsciidoc[0].document.title} */}
          {/*               height="250px" */}
          {/*               width="100%" */}
          {/*             /> */}
          {/*           </div> */}
          {/*           <h5 className={blogtitle}>{childrenAsciidoc[0].document.title}</h5> */}
          {/*           <div className={blogteaser}> */}
          {/*             Will include the blog teaser */}
          {/*             Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. */}
          {/*           </div> */}
          {/*           <div */}
          {/*             style={{ display: "flex", justifyContent: "space-between" }} */}
          {/*           > */}
          {/*             <div className={blogauthorinfo}> */}
          {/*               <img */}
          {/*                 src={childrenAsciidoc[0].pageAttributes.authoravatar ? "../../images/images/avatars/" + childrenAsciidoc[0].pageAttributes.authoravatar : "../../images/images/avatars/no_image.svg"} */}
          {/*                 style={{ */}
          {/*                   height: "1rem", */}
          {/*                   width: "1rem", */}
          {/*                   borderRadius: "50%", */}
          {/*                   display: "inline", */}
          {/*                   position: "relative", */}
          {/*                   top: ".3rem", */}
          {/*                 }} */}
          {/*                 alt={""} */}
          {/*               /> */}
          {/*               <p className={blogauthor}>{childrenAsciidoc[0].pageAttributes.author_name}</p> */}
          {/*             </div> */}
          {/*             <span>{formattedDate}</span> */}
          {/*           </div> */}
          {/*         </Link> */}
          {/*       </li> */}
          {/*     ); */}
          {/*   })} */}
          {/* </ul> */}
        </>
      )
    })
  )
}

export default Author
