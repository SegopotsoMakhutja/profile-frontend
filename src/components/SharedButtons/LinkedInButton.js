import React from "react";

import LinkedInLogo from "../../assets/images/LinkedInLogo.png";
import "./AuthButton.css";

const LinkedInButton = (props) => {
  return (
    <button className="btn linkedin">
      <img src={LinkedInLogo} alt="LinkedIn Logo" />
      <span>{props.buttonText}</span>
    </button>
  );
};

export default LinkedInButton;
