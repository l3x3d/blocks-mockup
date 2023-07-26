/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const ButtonSmallApple = ({ className }) => {
  return (
    <div className={`button-small-apple ${className}`}>
      <div className="overlap-group-2">
        <div className="button-small-2">
          <div className="background" />
        </div>
        <img
          className="apple-pay-logo"
          alt="Apple pay logo"
          src="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/apple-pay-logo-1@2x.png"
        />
      </div>
    </div>
  );
};
