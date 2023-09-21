import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Author = () => {
  return (
    <section>
      <h1>About the Author</h1>
      <img
        src="https://imgs.search.brave.com/a0XKWpP5aFxCO47ErRXq1jDq966IBNfW6Vu9yKo4SEY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L3Bv/cnRhbHdvcmxkc2dh/bWUvaW1hZ2VzL2Ev/YTcvUmVkX0Jsb2Nr/LnBuZy9yZXZpc2lv/bi9sYXRlc3Qvc2Nh/bGUtdG8td2lkdGgt/ZG93bi8xMjg_Y2I9/MjAxOTA2MTExMTAz/NTQ"
        alt="Avatar"
        style={{ float: "left", width: "90px", height: "90px", "border-radius": "50%" }}
      ></img>
      <>
        {this.props.data.allAsciidoc.edges.map(({ node }) => {
          if (node.document.title === "Author") {
            return (
              <>
                <h2>{node.pageAttributes.author_name}</h2>
                <p><span dangerouslySetInnerHTML={{ __html: node.pageAttributes.description }} /></p>
                <a href={node.pageAttributes.github}><BsGithub /></a>
                <a href={node.pageAttributes.twitter}><BsTwitter /></a>
              </>
            )
          } else {
            return null; // Skip rendering cards with title other than "Author"
          }
        })}
      </>
      <a href={"#"}>
        <FontAwesomeIcon icon="fa-brands fa-github" />
      </a>
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
