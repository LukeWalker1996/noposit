import React from "react";
import { StaticQuery, graphql } from "gatsby";

const About = () => {
  return (
    <StaticQuery
      query={graphql`
        query aboutSection {
          markdownRemark(frontmatter: { templateKey: { eq: "about" } }) {
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
          <div>
            <h2 className="title">{data.markdownRemark.frontmatter.title}</h2>
            <div className="card">
              <div className="card-content">
                <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default About;
