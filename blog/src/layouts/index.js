import React from "react"
import typography from "../utils/typography"
const { rhythm } = typography

class IndexPageLayout extends React.Component {
  render() {
    return (
      <>
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
        <jio-footer></jio-footer>
      </>
    );
  }
}

export default IndexPageLayout
