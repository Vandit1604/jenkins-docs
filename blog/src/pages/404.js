import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts"

const NotFound = () => {
  return (
    <Layout>
      <h1>404: Page Not Found</h1>
      <p>
        <Link to="/">Go back to Home page</Link>
      </p>
    </Layout>
  );
};

export default NotFound;
