import React from "react";
import Layout from "../components/Layout";
import SiteWrapper from "../components/site-wrapper";
import { Link, StaticQuery, graphql } from "gatsby";

const TermsAndConditions = () => (
  <StaticQuery
    query={graphql`
      query tcQuery {
        site {
          siteMetadata {
            terms
            title
            author
            imageUrl
            description
            keywords
          }
        }
      }
    `}
    render={data => {
      console.log('dataaa')
      console.log(data)
      return (
        <SiteWrapper showControls={false}>
          <section className="section background-animate">
            <div className="container">
              <div className="section">
                <div className="columns">
                  <div className="column is-10 is-offset-1">
                    <div className="page">
                      <div>
                        <h1 className="title">Terms &amp; Conditions</h1>
                        <div className="terms-conditions" dangerouslySetInnerHTML={{__html: data.site.siteMetadata.terms}} />
                        <div style={{marginTop: 25}}>
                          <Link to="/" className="submit-btn">Back to home</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SiteWrapper>
      );
    }}
  />
);

export default TermsAndConditions;
