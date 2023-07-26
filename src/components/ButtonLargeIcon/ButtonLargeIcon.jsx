/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsSmallShare2 } from "../../icons/IconsSmallShare2";
import "./style.css";

export const ButtonLargeIcon = ({
  className,
  overlapGroupClassName,
  contentClassName,
  icon = <IconsSmallShare2 className="icons-small-share" color="white" />,
  textClassName,
  text = "Button Text",
}) => {
  return (
    <div className={`button-large-icon ${className}`}>
      <div className={`content-wrapper ${overlapGroupClassName}`}>
        <div className={`content ${contentClassName}`}>
          {icon}
          <div className={`text-3 ${textClassName}`}>{text}</div>
        </div>
      </div>
    </div>
  );
};

ButtonLargeIcon.propTypes = {
  text: PropTypes.string,
};
