import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/Context";
import sectionCover from "../../../assets/images/skill-mine-section4-cover.png";

const Section4 = () => {
  const [isMobile] = useContext(AppContext);
  return (
    <div className="row Home-area4 about" style={{ margin: 0, padding: 0 }}>
      <div
        className={`col-12 Home-main-area2`}
        style={{
          paddingLeft: !isMobile ? "70px" : "20px",
          paddingRight: !isMobile ? "70px" : 20,
        }}
      >
        <div className="row">
          <div className={`${isMobile ? "col-12 mb-4" : "col-4"}`}>
            <img className="w-100" src={sectionCover} alt="portfolio-1" />
          </div>
          <div className={`${isMobile ? "col-12 mb-4" : "col-4"}`}>
            <img className="w-100" src={sectionCover} alt="portfolio-2" />
          </div>
          <div className={`${isMobile ? "col-12 mb-4" : "col-4"}`}>
            <img className="w-100" src={sectionCover} alt="portfolio-2" />
          </div>
        </div>
        <div className={`row ${!isMobile ? "ps-4 mt-5" : "mt-2"}`}>
          <div
            className={`${isMobile ? "col-12" : "col-5 my-auto"}`}
            style={{
              marginTop: isMobile && "40px",
              textAlign: isMobile && "center",
              paddingLeft: !isMobile && 100,
            }}
          >
            <p className="sectionContent small grey mb-0">CLIENT:</p>
            <p className="sectionContent small mb-0">Skillmine Technologies</p>
            <p className="sectionContent small grey mb-0">SERVICES:</p>
            <p className="sectionContent small mb-0">
              Branding, Design, Development
            </p>
            <p className="sectionContent small grey mb-0">PROJECT LINK:</p>
            <p className="sectionContent small mb-0">Skill-mine.com</p>
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
              <p className="sectionContent black small">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
              <p className="sectionContent black small">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
