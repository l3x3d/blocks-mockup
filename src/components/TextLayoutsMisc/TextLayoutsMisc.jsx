/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { LogosSmallAfterpay } from "../LogosSmallAfterpay";
import "./style.css";

export const TextLayoutsMisc = ({
  className,
  textClassName,
  textClassNameOverride,
  logosSmallAfterpayLogosSmallAfterpay = "https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/logos---small---afterpay.svg",
}) => {
  return (
    <div className={`text-layouts-misc ${className}`}>
      <div className={`text-7 ${textClassName}`}>Buy now, pay later.</div>
      <p className={`p ${textClassNameOverride}`}>4 interest-free payments of $9.87</p>
      <LogosSmallAfterpay
        className="logos-small-afterpay-instance"
        logosSmallAfterpay={logosSmallAfterpayLogosSmallAfterpay}
      />
    </div>
  );
};

TextLayoutsMisc.propTypes = {
  logosSmallAfterpayLogosSmallAfterpay: PropTypes.string,
};
