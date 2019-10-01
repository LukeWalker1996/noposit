import React from "react";
import { StaticQuery, graphql } from "gatsby";

const About = () => {
  return (
    <StaticQuery
      query={graphql`
        query aboutSection {
          markdownRemark(frontmatter: { templateKey: { eq: "about" } }) {
            frontmatter {
              title
              body
            }
          }
        }
      `}
      render={d => {
        console.log("static query");
        console.log(d);
        return <div>
        </div>;
      }}
    />
  );
};

export default About;
