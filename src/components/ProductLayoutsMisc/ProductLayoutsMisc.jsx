/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsLargePdp } from "../IconsLargePdp";
import { IconsSmallDown } from "../IconsSmallDown";
import "./style.css";

export const ProductLayoutsMisc = ({
  className,
  iconsSmallDownIconsSmallDown = "https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/icons---small---down-arrow-4.svg",
  iconsLargePdpIconsSmallHeartIconsSmallHeart = "https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/icons--small---heart-3.svg",
}) => {
  return (
    <div className={`product-layouts-misc ${className}`}>
      <IconsSmallDown className="icons-small-down-arrow" iconsSmallDown={iconsSmallDownIconsSmallDown} />
      <img
        className="dot-indicators"
        alt="Dot indicators"
        src="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/dot-indicators-1@2x.png"
      />
      <IconsLargePdp
        className="icons-large-PDP-favorite-icon"
        iconsSmallHeartIconsSmallHeart={iconsLargePdpIconsSmallHeartIconsSmallHeart}
      />
    </div>
  );
};

ProductLayoutsMisc.propTypes = {
  iconsSmallDownIconsSmallDown: PropTypes.string,
  iconsLargePdpIconsSmallHeartIconsSmallHeart: PropTypes.string,
};
