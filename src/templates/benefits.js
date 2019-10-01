import React from 'react'
import { StaticQuery, graphql } from 'gatsby';

const Benefits = () => {
    return (
        <StaticQuery
            query={graphql`
            query benefitsSection {
                markdownRemark(frontmatter: { templateKey: { eq: "benefits"}}) {
                    frontmatter {
                        title
                        body
                    }
                }
            }
            `}
            render={d => {
                console.log('static query')
                console.log(d)
                return (
                    <div>
                        test
                    </div>
                )
            }}
        />
    )
}

export default Benefits;