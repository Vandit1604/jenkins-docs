import React from "react"
import { Link, graphql } from "gatsby"
import IndexPageLayout from "../layouts"
import { bloglisting, blogpost } from "../css/blogpost.module.css"
import { blogtitle, blogauthor } from "../css/blogpost.module.css"

class IndexPage extends React.Component {
  render() {
    return (
      <IndexPageLayout>
        <ul className={bloglisting}>
          {this.props.data.allAsciidoc.edges.map(({ node }) =>(
           <li key={node.fields.slug} className={blogpost}>
             <Link to={node.fields.slug} style={{"text-decoration":"none"}}>
               <div
                 style={{
                   display: "flex",
                   flexDirection: "column",
                   alignItems: "center",
                   justifyContent: "center",
                 }}
               >
                 <img 
                   src={node.pageAttributes.opengraph /* ?? "../../images/gsoc/opengraph.png" */}
                   alt={node.document.title}
                   height="250px"
                   width="100%"
                 />
               </div>
               <p className={blogtitle}>{node.document.title}</p>
             </Link>
             <br></br>
             <img
               src="https://www.jenkins.io/images/avatars/markewaite.jpg"
               alt="Mark Waite"
               style={{
                 width: "20px",
                 height: "20px",
                 borderRadius: "50%",
               }}
             />
             <p className={blogauthor}>{node.pageAttributes.author}</p>
           </li>))}
        </ul>
      </IndexPageLayout>
    );
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
  allAsciidoc(sort: {fields: {slug: DESC}}) {
    edges {
      node {
        fields {
          slug
        }
        document {
          title
        }
        pageAttributes {
          author
          tags
          opengraph
        }
      }
    }
  }
}
`;
