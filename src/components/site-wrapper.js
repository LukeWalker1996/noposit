import React, { useState } from "react";
import {
  FaArrowAltCircleUp,
  FaArrowCircleUp,
  FaArrowCircleDown,
  FaTwitterSquare,
  FaFacebookSquare,
  FaDownload
} from "react-icons/fa";
import Scrollspy from "react-scrollspy";
import { Link } from "gatsby";

const sections = ["Home", "About", "Benefits", "Contact"];

const SiteWrapper = ({
  children,
  showControls = true,
  PageLink = "/",
  PageLinkName = "Home"
}) => {
  const [sec, updateSec] = useState([
    {
      id: 1,
      name: "Home",
      isActive: true
    },
    {
      id: 1,
      name: "About",
      isActive: false
    },
    {
      id: 1,
      name: "Benefits",
      isActive: false
    },
    {
      id: 1,
      name: "Contact",
      isActive: false
    }
  ]);

  return (
    <div className="site-wrapper">
      {children}

      {!showControls == false ? (
        <div className="scroll-spy">
          <Scrollspy
            items={sections}
            currentClassName="circle-active"
            offset={-100}
          >
            {sections.map(d => {
              return <a href={`#${d}`} className="circle" tooltip={`${d}`} />;
            })}
          </Scrollspy>
        </div>
      ) : null}

      <div className="navigation-link">
        <Link style={{ color: "white", paddingRight: 5 }} to={PageLink}>
          {PageLinkName}
        </Link>
      </div>

      <div className="social">
        <a
          target="_blank"
          href="https://www.facebook.com/sharer/sharer.php?u=noposit.co.uk"
        >
          <FaFacebookSquare
            style={{ marginBottom: 0, marginRight: 5 }}
            color={"#fff"}
            size={20}
          />
        </a>
        <a
          target="_blank"
          href="http://twitter.com/share?text=NoPosit&url=noposit.co.uk"
        >
          <FaTwitterSquare
            style={{ marginBottom: 0 }}
            color={"#fff"}
            size={20}
          />
        </a>
      </div>
      {/* 
      <div className="navigation-buttons">
        <div>
          <FaArrowCircleUp onClick={() => up()} size={25} />
        </div>
        <div>
          <FaArrowCircleDown onClick={() => down()} size={25} />
        </div>
      </div> */}
    </div>
  );
};

export default SiteWrapper;
