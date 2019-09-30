import React from "react";
import Layout from "../components/Layout";
import SiteWrapper from "../components/site-wrapper";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <SiteWrapper>
    <section className="section background-animate">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="page">
                <h1 className="title">404</h1>
                <p>
                 Not found!
                </p>
                <div style={{marginTop: 25, marginBottom:20 }}>
                  <Link to="/" className="submit-btn">Go to Home</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </SiteWrapper>
);

export default NotFoundPage;
