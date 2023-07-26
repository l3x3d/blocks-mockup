/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconsSmallShopping = ({
  className,
  iconsSmallShopping = "https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/icons---small---shopping-bag-filled-2.svg",
}) => {
  return <img className={`icons-small-shopping ${className}`} alt="Icons small shopping" src={iconsSmallShopping} />;
};

IconsSmallShopping.propTypes = {
  iconsSmallShopping: PropTypes.string,
};
