import React from "react"
import typography from "../utils/typography"
import { Header, Footer } from "@jenkinsci/jenkins-io-components"
const { rhythm } = typography

class IndexPageLayout extends React.Component {
  render() {
    return (
      <>
        <Header />
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
          {this.props.children}
        </div>
        <Footer />
      </>
    );
  }
}

export default IndexPageLayout
