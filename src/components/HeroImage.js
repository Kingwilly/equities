import React from "react";

import { Layout } from "antd";
import { NavLink } from "react-router-dom";

export const HeroImage = props => {
  let textPosition;
  if (props.textPosition === "center") {
    textPosition = "home-hero-arrow-center";
  } else if (props.textPosition === "right") {
    textPosition = "home-hero-arrow-right";
  }
  const arrow = `arrow-${props.arrowDirection}`;
  const width = ` ${props.width}`;
  var url = "";
  if (props.url) {
    url = props.url;
  }
  return (
    <Layout
      className={props.fadeOnHover ? "hero-background" : "barn-background"}
      style={  props.centerCenter ?
        {
          minHeight: props.height + "vh",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundImage: `url(${props.background})`
        }

        :{
        minHeight: props.height + "vh",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundImage: `url(${props.background})`
      }}
    >
      {props.largeCall && (
        <div className="hero-callout-block-outer">
          <div className="hero-block ">
            <h3
              className="hero-intro"
              style={{
                letterSpacing: 4 + "px"
              }}
            >
              {props.smallCall}
            </h3>
            <h1 className="hero-title">{props.largeCall}</h1>
            <h4 className="hero-learn">
              <a
                style={{
                  color: "white"
                }}
              >
                {props.linkText}
                <NavLink to={url}>
                  <div className={`home-hero-arrow ${textPosition} ${arrow}`}>
                    <span className={`arrow ${width}`}>
                      <span
                        className="arrow-before"
                        style={{ backgroundColor: "white" }}
                      />
                      <span
                        className="arrow-after"
                        style={{ borderColor: "white" }}
                      />
                    </span>
                  </div>
                </NavLink>
              </a>
            </h4>
          </div>
        </div>
      )}
      {props.bottomHeader ? (
        <div className="hero-bottom">
          <h1 className="hero-bottom-header">{props.bottomHeader}</h1>
        </div>
      ) : null}
    </Layout>
  );
};

export default HeroImage;
