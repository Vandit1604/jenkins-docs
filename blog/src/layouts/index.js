import jenkinsLogo from "../../../docs/images/modules/ROOT/assets/images/logos/jenkins/jenkins.png"
import React from "react"
import { Link } from "gatsby"

import typography from "../utils/typography"
const { rhythm } = typography

class IndexPageLayout extends React.Component {
  render() {
    return (
      <div
        style={{
          margin: `0 auto`,
          marginTop: rhythm(1.5),
          marginBottom: rhythm(1.5),
          maxWidth: 1500,
          paddingLeft: rhythm(3 / 4),
          paddingRight: rhythm(3 / 4),
        }}
      >
        <Link style={{ textDecoration: `none` }} to="/">
          <img
            src={jenkinsLogo}
            alt="Jenkins Logo"
            width="150px"
            height="200px"
          />
          <h3 style={{ color: `black`, marginBottom: rhythm(1.5) }}>
            Jenkins Blog
          </h3>
        </Link>
        {this.props.children}
      </div>
    );
  }
}

export default IndexPageLayout
