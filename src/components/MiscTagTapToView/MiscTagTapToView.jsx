/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsSmallShopping } from "../IconsSmallShopping";
import "./style.css";

export const MiscTagTapToView = ({
  className,
  iconsSmallShoppingIconsSmallShopping = "https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/icons---small---shopping-bag-filled-2.svg",
  textClassName,
}) => {
  return (
    <div className={`misc-tag-tap-to-view ${className}`}>
      <div className="content-2">
        <IconsSmallShopping
          className="icons-small-shopping-bag-filled"
          iconsSmallShopping={iconsSmallShoppingIconsSmallShopping}
        />
        <div className={`text-5 ${textClassName}`}>Tap to view products</div>
      </div>
    </div>
  );
};

MiscTagTapToView.propTypes = {
  iconsSmallShoppingIconsSmallShopping: PropTypes.string,
};
