/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconsMediumLeft = ({
  className,
  iconsMediumLeft = "https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/icons---medium---left-arrow.svg",
}) => {
  return <img className={`icons-medium-left ${className}`} alt="Icons medium left" src={iconsMediumLeft} />;
};

IconsMediumLeft.propTypes = {
  iconsMediumLeft: PropTypes.string,
};
