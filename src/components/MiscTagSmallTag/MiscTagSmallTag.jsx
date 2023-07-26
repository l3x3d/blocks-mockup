/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const MiscTagSmallTag = ({ className, textClassName, text = "In Store Pickup" }) => {
  return (
    <div className={`misc-tag-small-tag ${className}`}>
      <div className={`text-6 ${textClassName}`}>{text}</div>
    </div>
  );
};

MiscTagSmallTag.propTypes = {
  text: PropTypes.string,
};
