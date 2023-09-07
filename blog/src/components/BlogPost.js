import React from "react"
import { Link } from "gatsby"

import Author from "./Author"

const BlogPost = ({children}) =>{
return(
  <>
    <Link to="/"><button>Back to Blogs</button></Link>
    {children}
    <Author />
  </>
)
}

export default BlogPost
