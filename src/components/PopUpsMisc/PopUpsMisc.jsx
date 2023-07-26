/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsSmallRight } from "../IconsSmallRight";
import "./style.css";

export const PopUpsMisc = ({
  className,
  mask = "https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/mask-1.svg",
  productNameClassName,
  text = "Jaida Performance Sports Bra",
  priceClassName,
  text1 = "$9.99",
  productLayoutsMiscClassName,
}) => {
  return (
    <div className={`pop-ups-misc ${className}`}>
      <div className="overlap-group-3">
        <div className="mask-wrapper">
          <img className="mask" alt="Mask" src={mask} />
        </div>
        <div className={`product-name ${productNameClassName}`}>{text}</div>
        <div className={`price ${priceClassName}`}>{text1}</div>
        <IconsSmallRight className="icons-small-right-instance" />
        <div className={`product-layouts-misc-2 ${productLayoutsMiscClassName}`} />
      </div>
    </div>
  );
};

PopUpsMisc.propTypes = {
  mask: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
};
