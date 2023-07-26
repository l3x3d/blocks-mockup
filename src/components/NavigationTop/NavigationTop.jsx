/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsMediumLeft } from "../IconsMediumLeft";
import "./style.css";

export const NavigationTop = ({
  className,
  cap = "https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/cap-1.svg",
  wifi = "https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/wifi-1.svg",
  cellularConnection = "https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/cellular-connection-1.svg",
  timeClassName,
  override = (
    <IconsMediumLeft
      className="icons-medium-left-arrow"
      iconsMediumLeft="https://generation-sessions.s3.amazonaws.com/b4a96f03e53e5be9e50f36c40b8d5fe2/img/icons---medium---left-arrow-1.svg"
    />
  ),
  hClassName,
  text = "Create Account",
}) => {
  return (
    <div className={`navigation-top ${className}`}>
      <div className="navigation-top-full">
        <div className="iphone-x-status-bars">
          <div className="battery">
            <div className="overlap-group">
              <div className="capacity" />
            </div>
            <img className="cap" alt="Cap" src={cap} />
          </div>
          <img className="wifi" alt="Wifi" src={wifi} />
          <img className="cellular-connection" alt="Cellular connection" src={cellularConnection} />
          <div className="time-style">
            <div className={`time ${timeClassName}`}>
              <span className="text-wrapper">9:4</span>
              <span className="span">1</span>
            </div>
          </div>
        </div>
        <div className="top-nav-back">
          {override}
          <div className={`h ${hClassName}`}>{text}</div>
        </div>
      </div>
    </div>
  );
};

NavigationTop.propTypes = {
  cap: PropTypes.string,
  wifi: PropTypes.string,
  cellularConnection: PropTypes.string,
  text: PropTypes.string,
};
