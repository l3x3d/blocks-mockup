/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonSmall = ({ className, textClassName, text = "Button Text" }) => {
  return (
    <div className={`button-small ${className}`}>
      <div className="div-wrapper">
        <div className={`text-2 ${textClassName}`}>{text}</div>
      </div>
    </div>
  );
};

ButtonSmall.propTypes = {
  text: PropTypes.string,
};
