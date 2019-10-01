import React from "react";
import { StaticQuery, graphql } from "gatsby";

const Benefits = () => {
  return (
    <StaticQuery
      query={graphql`
        query benefitsSection {
          markdownRemark(frontmatter: { templateKey: { eq: "benefits" } }) {
            id
            html
            frontmatter {
              title
            }
          }
        }
      `}
      render={data => {
        return (
          <div style={{ color: "white" }}>
            <h2 className="title">{data.markdownRemark.frontmatter.title}</h2>
            <div>
              <div
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
              />
            </div>
          </div>
        );
      }}
    />
  );
};

export default Benefits;
