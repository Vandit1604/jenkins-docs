import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Author = () => {
  const data = useStaticQuery(graphql` 
    query{
  allAsciidoc(filter: {document: {title: {eq: "Author"}}}) {
    edges {
      node {
        fields {
          slug
        }
        document {
          title
          main
        }
        pageAttributes {
          tags
          author_name
          github
          blog
          linkedin
          description
          opengraph
          irc
          twitter
          medium
        }
      }
    }
  }
}
  `)
  return (
    data.allAsciidoc.edges.map(({ node }) => {
      return (
        <>
          <h3>About the Author</h3>
          <div >
            <div>
              <img src="https://imgs.search.brave.com/7L4GDDrWn6V2T2S8W1BmMXcXeLj0KW5FsVdZkqpOz-c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L3Bv/cnRhbHdvcmxkc2dh/bWUvaW1hZ2VzL2Ev/YTcvUmVkX0Jsb2Nr/LnBuZy9yZXZpc2lv/bi9sYXRlc3Qvc2Nh/bGUtdG8td2lkdGgt/ZG93bi8xMjg_Y2I9/MjAxOTA2MTExMTAz/NTQ.jpeg" style={{ borderRadius: "50%" }} width={128} height={128} />
              <h4>{node.pageAttributes.author_name}</h4>
            </div>
            <div dangerouslySetInnerHTML={{ __html: node.pageAttributes.description }}
            />
          </div>
        </>
      )
    })
  )
}

export default Author
