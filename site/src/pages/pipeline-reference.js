import { graphql } from "gatsby";
import React, { useState, useEffect } from "react";
import PageName from "../components/PageName";
import Seo from "../components/Seo";
import { TextField } from "@mui/material";
import "../css/changelog.css";
import IndexPageLayout from "../layouts";

const PipelineReference = ({ data }) => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredSteps, setFilteredSteps] = useState([]);

    useEffect(() => {
        // Filter steps based on search input
        const filtered = data.allFile.edges.filter(({ node }) => {
            const title = node.childrenAsciidoc[0].document.title.toLowerCase();
            return title.includes(searchInput.toLowerCase());
        });

        setFilteredSteps(filtered);
    }, [searchInput, data.allFile.edges]);

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    return (
        <IndexPageLayout>
            <Seo title="Jenkins Pipeline Step Reference" />
            <PageName title={"Jenkins Pipeline Step Reference"} />
            <TextField
                id="filter"
                label="Filter Steps"
                variant="outlined"
                autoFocus
                value={searchInput}
                onChange={handleSearchInputChange}
                fullWidth
                sx={{ mb: 3 }}
            />
            <div>
                <ul>
                    {filteredSteps.map(({ node }, index) => (
                        <li key={index}>{node.childrenAsciidoc[0].document.title}</li>
                    ))}
                </ul>
            </div>
        </IndexPageLayout>
    );
};

export default PipelineReference;

export const pageQuery = graphql`
    {
        allFile(filter: { sourceInstanceName: { eq: "steps" } }) {
            edges {
                node {
                    childrenAsciidoc {
                        document {
                            title
                        }
                        html
                    }
                }
            }
        }
    }
`;
