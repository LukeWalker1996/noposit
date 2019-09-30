import React from "react";
import SiteWrapper from "../../components/site-wrapper";
import { Link } from "gatsby";

export default () => (
  <SiteWrapper showControls={false}>
    <div className="background-animate">
      <section className="section">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="page">
                  <h1 className="title">Thank you!</h1>
                  <p style={{ color: "white" }}>
                    We have received your message successfully.
                  </p>
                  <div style={{ marginTop: 25, marginBottom: 25 }}>
                    <Link to="/" className="submit-btn">Back to home</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </SiteWrapper>
);
