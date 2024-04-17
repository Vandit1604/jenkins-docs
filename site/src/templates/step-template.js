import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const StepTemplate = () => {
    const data = useStaticQuery(graphql`
        query {
            asciidoc {
                document {
                    title
                }
                html
            }
        }
    `);

    const { document, html } = data.asciidoc;

    return (
        <div>
            <h1>{document.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
};

export default StepTemplate;
