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
          <div>
            <div>
              <img src="https://imgs.search.brave.com/NfIQa1WuQg7zysvi7bcNV5mV8CCTa5r7wBHBEqP8puM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuYm9yZWRwYW5k/YS5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/My82MDRhMjUyZmVh/M2ZlX3NrbDkwMmRq/endsNjFfXzcwMC5q/cGc" style={{ borderRadius: "50%" }} width={128} height={128} />
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
