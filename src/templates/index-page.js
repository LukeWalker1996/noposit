import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

// import Layout from "../components/Layout";
// import Features from "../components/Features";
// import BlogRoll from "../components/BlogRoll";

import SiteWrapper from "../components/site-wrapper";
import Home from "../components/Home";
import Fade from "react-reveal/Fade";
import Contact from "../pages/contact/index";
import Benefits from "./benefits";
import Logo from "../img/white-on-colour.svg";
import Helmet from "react-helmet";
import About from "./about";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  // <div>
  //   <div
  //     className="full-width-image margin-top-0"
  //     style={{
  //       backgroundImage: `url(${
  //         !!image.childImageSharp ? image.childImageSharp.fluid.src : image
  //       })`,
  //       backgroundPosition: `top left`,
  //       backgroundAttachment: `fixed`,
  //     }}
  //   >
  //     <div
  //       style={{
  //         display: 'flex',
  //         height: '150px',
  //         lineHeight: '1',
  //         justifyContent: 'space-around',
  //         alignItems: 'left',
  //         flexDirection: 'column',
  //       }}
  //     >
  //       <h1
  //         className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
  //         style={{
  //           boxShadow:
  //             'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
  //           backgroundColor: 'rgb(255, 68, 0)',
  //           color: 'white',
  //           lineHeight: '1',
  //           padding: '0.25em',
  //         }}
  //       >
  //         {title}
  //       </h1>
  //       <h3
  //         className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
  //         style={{
  //           boxShadow:
  //             'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
  //           backgroundColor: 'rgb(255, 68, 0)',
  //           color: 'white',
  //           lineHeight: '1',
  //           padding: '0.25em',
  //         }}
  //       >
  //         {subheading}
  //       </h3>
  //     </div>
  //   </div>
  //   <section className="section section--gradient">
  //     <div className="container">
  //       <div className="section">
  //         <div className="columns">
  //           <div className="column is-10 is-offset-1">
  //             <div className="content">
  //               <div className="content">
  //                 <div className="tile">
  //                   <h1 className="title">{mainpitch.title}</h1>
  //                 </div>
  //                 <div className="tile">
  //                   <h3 className="subtitle">{mainpitch.description}</h3>
  //                 </div>
  //               </div>
  //               <div className="columns">
  //                 <div className="column is-12">
  //                   <h3 className="has-text-weight-semibold is-size-2">
  //                     {heading}
  //                   </h3>
  //                   <p>{description}</p>
  //                 </div>
  //               </div>
  //               <Features gridItems={intro.blurbs} />
  //               <div className="columns">
  //                 <div className="column is-12 has-text-centered">
  //                   <Link className="btn" to="/products">
  //                     See all products
  //                   </Link>
  //                 </div>
  //               </div>
  //               <div className="column is-12">
  //                 <h3 className="has-text-weight-semibold is-size-2">
  //                   Latest stories
  //                 </h3>
  //                 <BlogRoll />
  //                 <div className="column is-12 has-text-centered">
  //                   <Link className="btn" to="/blog">
  //                     Read more
  //                   </Link>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // </div>
  <div className="background-animate">
    <section className="section">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div id="Home" className="page">
                <Fade>
                  <Home />
                </Fade>
              </div>
              <div id="About" className="page">
                <Fade>
                  <About />
                
                </Fade>
              </div>
              <div id="Benefits" className="page">
                <Fade>
              <Benefits />
                </Fade>
              </div>
              <div id="Contact" className="page">
                <Fade>
                  <Contact />
                </Fade>
              </div>
             
                <Fade>
                  <div style={{marginBottom: 20, marginTop: 20}} className="columns">
                    <div className="column">
                      <img src={Logo} alt="noposit" style={{ width: 100 }} />
                    </div>
                    <div className="column">
                      <ul style={{ color: "white" }}>
                        <li>Find us:</li>
                        <li>Woodlands Court</li>
                        <li>Truro Business Park</li>
                        <li>Truro</li>
                        <li>TR4 9NH</li>
                      </ul>
                    </div>
                  </div>
                </Fade>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <SiteWrapper
      PageLink="/terms-and-conditions"
      PageLinkName="Terms & Conditions"
    >
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta name="description" content='Reposit – The tenancy deposit alternative'/>
        <meta name="keywords" content="Student, Deposit, No Deposit, my deposits, Rent With Zero Deposit, Pay Zero Deposit, zerodeposit, Sturents, reposit.com‎, NSHEP, Student housing " />
        <title>The simple alternative to paying a cash deposit | NoPosit</title>
        <html lang="en" />
        {/* Google / Search Engine Meta Tags */}
        <meta itemprop="name" content="Innovate Web Solutions LTD" /> />
        <meta
          itemprop="description"
          content='Reposit – The tenancy deposit alternative'
        />
        <meta itemprop="image" content="https://iws-image-repo.s3-eu-west-1.amazonaws.com/noposit-seo.jpg" /> />
        {/* Facebook OG */}
        <meta property="og:url" content="https://noposit.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="The simple alternative to paying a cash deposit | NoPosit" />
        <meta
          property="og:description"
          content="Reposit – The tenancy deposit alternative"
        />
        <meta property="og:image" content="https://iws-image-repo.s3-eu-west-1.amazonaws.com/noposit-seo.jpg" />
      </Helmet>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </SiteWrapper>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
