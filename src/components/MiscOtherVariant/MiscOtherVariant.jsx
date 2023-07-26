/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconsSmallDown } from "../IconsSmallDown";
import "./style.css";

export const MiscOtherVariant = ({ className, textClassName, textClassNameOverride }) => {
  return (
    <div className={`misc-other-variant ${className}`}>
      <div className="overlap">
        <div className="div">
          <img
            className="top-line"
            alt="Top line"
            src="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/top-line-1.svg"
          />
          <img
            className="middle-line"
            alt="Middle line"
            src="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/middle-line-1.svg"
          />
          <img
            className="bottom-line"
            alt="Bottom line"
            src="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/top-line-1.svg"
          />
        </div>
        <div className="left-side">
          <div className={`text ${textClassName}`}>XS</div>
          <IconsSmallDown
            className="icons-small-down-instance"
            iconsSmallDown="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/icons---small---down-arrow-7.svg"
          />
        </div>
        <div className="right-side">
          <div className={`text ${textClassNameOverride}`}>BLACK</div>
          <IconsSmallDown
            className="icons-small-down-instance"
            iconsSmallDown="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/icons---small---down-arrow-7.svg"
          />
        </div>
      </div>
    </div>
  );
};
