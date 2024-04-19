import React from "react";
import { graphql } from "gatsby";

const StepPage = ({ data }) => {
    return (
        <div>
            {console.log(data)}
            <h1>{data.asciidoc.document.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.asciidoc.html }} />
        </div>
    );
};

export default StepPage;

export const pageQuery = graphql`
    query ($id: String!) {
        asciidoc(id: { eq: $id }) {
            html
            document {
                title
                main
            }
            author {
                fullName
            }
            pageAttributes {
                author_name
                author
                tags
                opengraph
            }
        }
    }
`;
