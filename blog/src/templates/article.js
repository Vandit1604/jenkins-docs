import GitHubIcon from '@mui/icons-material/GitHub';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Avatar from '@mui/material/Avatar';
import { blue, cyan, indigo } from '@mui/material/colors';
import { graphql } from "gatsby";
import React from "react";
import BlogPost from "../components/BlogPost";
import { authoravataricons, authorpageavatar, blog, github, linkedin, twitter } from "../css/authorpost.module.css";
import { blogAuthorImage } from "../utils/index.js";

const Article = ({ data, pageContext }) => {
  const { filteredAuthors } = pageContext
  const authorList = blogAuthorImage(data.asciidoc.pageAttributes.author)
  return (
    <BlogPost>
      <h1>{data.asciidoc.document.title} </h1>
      {data.asciidoc.pageAttributes.author && (
        <table>
          <tbody>
            <tr>
              {/* TODO: add tweet functionality */}
              {/* <th><p>{data.asciidoc.pageAttributes.author}</p></th> */}
              <tr><img href={data.asciidoc.pageAttributes.author + ".png"} /></tr>
            </tr>
          </tbody>
        </table>
      )}
      <div
        dangerouslySetInnerHTML={{ __html: data.asciidoc.html }}
      />
      <div style={{display:"flex",flexDirection:"column"}}>
        <h2>About the Author</h2>
        {
          filteredAuthors.map((node) => {
            return (
              <>
                {authorList.map((auth) => (
                  <>
                    {(node.node.pageAttributes.github == auth) ? <> <div className={authorpageavatar}>
                      <img src={node.node.pageAttributes.authoravatar} />
                    </div>
                      <h2>{node.node.pageAttributes.author_name}</h2>
                      <div dangerouslySetInnerHTML={{ __html: node.node.html }} />
                      <div className={authoravataricons} style={{ width: "10rem" }}>
                        {node.node.pageAttributes.github ? <a href={"https://github.com/" + node.node.pageAttributes.github}><Avatar sx={{ bgcolor: "rgb(60, 60, 60)" }}> <GitHubIcon className={github} /></Avatar></a> : null}
                        {node.node.pageAttributes.linkedin ? <a href={"https://linkedin.com/in/" + node.node.pageAttributes.linkedin}><Avatar sx={{ bgcolor: blue[700] }}><LinkedInIcon className={linkedin} /></Avatar></a> : null}
                        {node.node.pageAttributes.twitter ? <a href={"https://twitter.com/" + node.node.pageAttributes.twitter}><Avatar sx={{ bgcolor: cyan[50] }}> <TwitterIcon className={twitter} /></Avatar></a> : null}
                        {node.node.pageAttributes.blog ? <a href={node.node.pageAttributes.blog}><Avatar sx={{ bgcolor: indigo[50] }}><ImportContactsIcon className={blog} /></Avatar></a> : null}
                      </div>
                    </> : null}
                  </>
                ))}
              </>
            );
          })
        }
      </div>
    </BlogPost>
  );
}

export default Article

export const pageQuery = graphql`
  query ($id: String!) {
    asciidoc(id: { eq: $id }) {
      html
      document {
        title
        main
      }
      author {
        fullName
      }
      pageAttributes {
        author_name
        author
        tags
        opengraph
      }
    }
  }
`;
