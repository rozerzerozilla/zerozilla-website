import React from "react";
import Bullets from "../../assets/icons/seo-bullets.svg";

const CommonTypesOfLinks = ({ title, isMobile, image, data }) => {
  return (
    <div className={`row mt-4 ${!isMobile ? "ps-4" : ""}`}>
      <div
        className={`${isMobile ? "col-12" : "col-5 my-auto"}`}
        style={{
          marginTop: isMobile && "40px",
          textAlign: isMobile && "center",
        }}
      >
        <img src={image} alt="sectionVideo" style={{ width: "80% " }} />
      </div>
      <div
        className={`${isMobile ? "col-12" : "col-7 my-auto"}`}
        style={
          isMobile
            ? {
                padding: "0px 20px",
                textAlign: "center",
                marginTop: "40px",
              }
            : null
        }
      >
        <div className={`row col-12 ${isMobile && "m-0"}`}>
          <p className="section3Head black extra-bold small">{title}</p>
          {data.map((strategy, idx) => (
            <div className="row sectionContent mb-2 small" key={idx + 1}>
              <div className={`col-1 ${!isMobile ? "" : ""} text-center`}>
                <img src={Bullets} alt="bullet" height="16px" />
              </div>
              <div
                className={`col-11 ${!isMobile ? "" : ""}`}
                style={{
                  paddingLeft: !isMobile && 0,
                  textAlign: isMobile && "left",
                }}
              >
                {strategy.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommonTypesOfLinks;
