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
              subtitle
              main
            }
            pageAttributes {
              tags
              author
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
    })
  )
}

export default Author
