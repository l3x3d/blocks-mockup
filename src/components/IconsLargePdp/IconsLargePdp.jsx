/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsSmallHeart } from "../IconsSmallHeart";
import "./style.css";

export const IconsLargePdp = ({
  className,
  iconsSmallHeartIconsSmallHeart = "https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/icons--small---heart-2.svg",
}) => {
  return (
    <div className={`icons-large-PDP ${className}`}>
      <div className="icons-small-heart-wrapper">
        <IconsSmallHeart className="icons-small-heart-instance" iconsSmallHeart={iconsSmallHeartIconsSmallHeart} />
      </div>
    </div>
  );
};

IconsLargePdp.propTypes = {
  iconsSmallHeartIconsSmallHeart: PropTypes.string,
};
