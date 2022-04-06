import React, { useContext } from "react";
import { AppContext } from "../../../../context/Context";
import sectionCover from "../../../../assets/images/Service-Section-3-Cover.webp";
import KeySkills from "./KeySkills";
import Fade from 'react-reveal/Fade';

const Section3 = () => {
  const [isMobile] = useContext(AppContext);
  return (
    <div className="row Home-area3" style={{ margin: 0, padding: 0 }}>
      <div
        className={`col-12 Home-main-area2`}
        style={{
          paddingLeft: !isMobile ? "70px" : "20px",
          paddingRight: !isMobile && "70px",
        }}
      >
        <div className="row">
          <div
            className={`${isMobile ? "col-12" : "col-8 my-auto"}`}
            style={
              isMobile
                ? { padding: "0px 20px", textAlign: "center" }
                : { paddingLeft: "40px", paddingRight: 0 }
            }
          >
            <Fade>
              <div className={`row`}>
                <div className={`${isMobile ? "col-12" : "col-8"}`}>
                  <p
                    className={`section3Head black extra-bold text-${
                      isMobile ? "center" : "left"
                    }`}
                  >
                    Because{" "}
                    <span className="highlightedSectionText">you matter</span>
                  </p>
                  <p
                    className={`sectionContent text-${
                      isMobile ? "center" : "left"
                    }`}
                  >
                    You are in safe hands. With over 8 years of experience in
                    designing & developing websites for various niche around the
                    world, we ensure to provide great services which match your
                    budget & taste.
                  </p>
                </div>
              </div>
            </Fade>
            <div className="row col-12">
              <img
                src={sectionCover}
                alt="because-you-matter"
                style={{ marginLeft: !isMobile && "-10%", paddingRight: 0 }}
              />
            </div>
          </div>
          <div
            className={`${isMobile ? "col-12 mt-4" : "col-4 my-auto"}`}
            style={{
              marginLeft: !isMobile && "-2px",
              paddingLeft: 0,
              paddingRight: isMobile && "25px",
            }}
          >
            <KeySkills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
