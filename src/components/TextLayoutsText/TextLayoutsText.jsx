/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsSmallRight } from "../IconsSmallRight";
import "./style.css";

export const TextLayoutsText = ({ className, textClassName, text = "SHOP ALL" }) => {
  return (
    <div className={`text-layouts-text ${className}`}>
      <div className={`text-4 ${textClassName}`}>{text}</div>
      <IconsSmallRight className="icons-small-right-arrow" />
    </div>
  );
};

TextLayoutsText.propTypes = {
  text: PropTypes.string,
};
