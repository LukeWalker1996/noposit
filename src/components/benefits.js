import React from "react";
import { Link } from "gatsby";
import { FaCheckCircle } from 'react-icons/fa';

const Benefits = () => {
  return (
    <div style={{ color: "white" }}>
      <h2 className="title"> The Benefits</h2>
      <div>
        <p>
          We thought that the benefits would be straight forward. Pay less for
          deposit and keep more money in your pocket. However, we thought that
          we could do better. So NoPosit also includes*
        </p>
        <br />
        <br />
        <ul>
          <li><FaCheckCircle /> £3000 worth of personal items cover</li>
          <li><FaCheckCircle /> £2000 laptop cover</li>
          <li><FaCheckCircle /> £500 tablet cover</li>
          <li><FaCheckCircle /> £200 emergency purchases in the event of fire damage</li>
          <li>
          <FaCheckCircle /> £5000 accidental damage cover to Landlord fixtures and fittings
          </li>
          <li><FaCheckCircle /> Free membership to our exclusive Premium Discount Club</li>
          <li>
          <FaCheckCircle /> The change to Win your households rent paid for you with our monthly
            draw
          </li>
          <li><FaCheckCircle />  And more still being added</li>
        </ul>
        <br />
        <br />
        <p>
          * Yes there are going to be some Terms and Conditions to everything.
          Click <Link to="/terms-and-conditions">Here</Link> to read all the
          boring legal bits.
        </p>
      </div>
    </div>
  );
};

export default Benefits;
