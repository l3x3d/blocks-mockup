/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonSmall } from "../ButtonSmall";
import "./style.css";

export const ButtonTwoButtons = ({
  className,
  override = <ButtonSmall className="button-small-instance" text="Button Text" />,
  buttonSmallText = "Button Text",
  buttonSmallTextClassName,
}) => {
  return (
    <div className={`button-two-buttons ${className}`}>
      {override}
      <ButtonSmall className="button-small-standard" text={buttonSmallText} textClassName={buttonSmallTextClassName} />
    </div>
  );
};

ButtonTwoButtons.propTypes = {
  buttonSmallText: PropTypes.string,
};
