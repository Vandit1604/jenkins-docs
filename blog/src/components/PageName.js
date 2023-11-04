import React from "react"
import { Link } from "gatsby"
import jenkinsLogo from "../../../docs/images/modules/ROOT/assets/images/logos/jenkins/jenkins.png"
import typography from "../utils/typography"
const { rhythm } = typography

const PageName = ({ children }) => {
  return (
    <Link style={{ textDecoration: `none` }} to="/">
      <h3
        style={{
          color: `black`,
          marginBottom: rhythm(1.5),
          fontFamily: "Georgia,serif",
          fontSize: "2.7rem",
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <img
          src={jenkinsLogo}
          alt="Jenkins Logo"
          style={{
            height: "5rem",
          }}
        />{" "}
        {children}
      </h3>
    </Link>
  );
}

export default PageName;
