import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import { authorinfo } from "../css/authorpost.module.css"
import { Link, graphql } from "gatsby"
import IndexPageLayout from "../layouts"
import { blogauthor, bloglisting, blogpost, blogtitle } from "../css/blogpost.module.css"

const Author = () => {
  console.log(this.props.data.allAsciidoc);
  return (
    <section>
      {this.props.data.allAsciidoc.edges.map(({ node }) => {
        return (<>
          <h1>About the Author</h1>
          <div style={{ display: "flex" }}>
            <img src={("../../images/images/avatars/" + node.pageAttributes.author + ".jpg" ?? "../../images/images/avatars/" + node.pageAttributes.author + ".png") ?? "../../images/images/avatars/" + node.pageAttributes.author + ".jpeg"} style={{ height: "1rem", width: "1rem", borderRadius: "50%", display: "inline", position: "relative", top: ".3rem" }} alt={""} />
            <p className={blogauthor}>{node.pageAttributes.author}</p>
            <span>
              {node.fields.slug}
            </span>
          </div>
          <div>
            {node.pageAttributes.description}
          </div>
          <div className={authorinfo}>
            <br />
            <a href={"https://github.com/" + node.pageAttributes.github} className="github"> <BsGithub /></a>
            <br />
            <a href={"https://linkedin.com/in/" + node.pageAttributes.linkedin} className="linkedin"><BsLinkedin /></a>
            <br />
            <a href={"https://twitter.com/" + node.pageAttributes.twitter} className="twitter"><BsTwitter /></a>
            <br />
            <a href={node.pageAttributes.blog} className="blog"><BsBook /></a>
          </div>
          <BsTwitter />
          < IndexPageLayout >
            <ul className={bloglisting}>
              {this.props.data.allAsciidoc.edges.map(({ node }) => {
                if (node.document.title !== "Author") {
                  return (
                    <li key={node.fields.slug} className={blogpost}>
                      <Link to={node.fields.slug} style={{ textDecoration: "none" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            src={node.pageAttributes.opengraph ?? "../../images/gsoc/opengraph.png"}
                            alt={node.document.title}
                            height="250px"
                            width="100%"
                          />
                        </div>
                        <span className={blogtitle}>{node.document.title}</span>
                      </Link>
                      <br />
                      <div style={{ display: "flex" }}>
                        <img src={("../../images/images/avatars/" + node.pageAttributes.author + ".jpg" ?? "../../images/images/avatars/" + node.pageAttributes.author + ".png") ?? "../../images/images/avatars/" + node.pageAttributes.author + ".jpeg"} style={{ height: "1rem", width: "1rem", borderRadius: "50%", display: "inline", position: "relative", top: ".3rem" }} alt={""} />
                        <p className={blogauthor}>{node.pageAttributes.author}</p>
                        <span>
                          {node.fields.slug}
                        </span>
                      </div>
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </IndexPageLayout >
        </>
        );
      })}
    </section>
  );
}

export default Author;

export const pageQuery = graphql`
query {
  allAsciidoc(filter: {document: {title: {eq: "Author"}}}) {
    edges {
      node {
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
}`


