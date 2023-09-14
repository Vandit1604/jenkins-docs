import React from "react"
import { Link } from "gatsby"

import typography from "../utils/typography"
import { BackToBlogButton } from "./BackToBlogButton"
const { rhythm } = typography

const AuthorPost = ({ children }) => {
  return (
    <div
      style={{
        margin: `0 auto`,
        marginTop: rhythm(1.5),
        marginBottom: rhythm(1.5),
        maxWidth: 900,
        paddingLeft: rhythm(3 / 4),
        paddingRight: rhythm(3 / 4),
      }}
    >
      <Link to="/authors">
        <BackToBlogButton>Back to Authors Page</BackToBlogButton>
      </Link>
      {children}
    </div>
  );
}

export default AuthorPost
