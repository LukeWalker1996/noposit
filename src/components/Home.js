import React from "react";
import Logo from "../img/white-on-colour.svg";
import Zoom from "react-reveal/Zoom";

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Zoom delay={200}>
        <img src={Logo} alt="noposit" className="home-logo" />
      </Zoom>
    </div>
  );
};

export default Home;
