import React, { useContext } from "react";
import sectionCover from "../../assets/images/section6Cover.png";
import { AppContext } from "../../context/Context";

const Section6 = () => {
  const [isMobile] = useContext(AppContext);
  return (
    <div className="row Home-area6" style={{ margin: 0, padding: 0 }}>
      <div
        className={`col-12 Home-main-area6`}
        style={{
          paddingLeft: !isMobile ? "70px" : "15px",
          paddingRight: !isMobile && "70px",
          paddingTop: !isMobile && "70px",
        }}
      >
        <div className="row">
          <div
            className={`${isMobile ? "col-12" : "col-5 my-auto"}`}
            style={{
              marginTop: isMobile && "40px",
              textAlign: "center",
            }}
          >
            <img
              src={sectionCover}
              alt="sectionVideo"
              style={{ width: "90% " }}
            />
          </div>
          <div
            className={`${isMobile ? "col-12" : "col-7 my-auto"}`}
            style={
              isMobile
                ? { padding: "0px 20px", textAlign: "center" }
                : { paddingLeft: "70px" }
            }
          >
            <div className={`row ${isMobile && "m-0"}`}>
              <div className={`${!isMobile ? "col-9" : "col-12 mt-4"}`}>
                <p className="section3Head">
                  Multiple Thoughts but{" "}
                  <span className="highlightedSectionText">
                    Unified Approach
                  </span>
                </p>
              </div>
            </div>
            <div className={`row ${isMobile && "m-0"}`}>
              <div className={`${!isMobile ? "col-9" : "col-12"}`}>
                <p className="sectionContent">
                  Our ideas are diversified but we make sure to work as a team &
                  with a unified approach that propels your business on the
                  paths of success.
                </p>
              </div>
            </div>
            <div className={`row ${isMobile && "m-0"}`}>
              <div className={`${!isMobile ? "col-7" : "col-12"}`}>
                <div className="row">
                  <div className="col-6">
                    <p className="successRate mb-0 section3Head">95%</p>
                    <p className="sectionContent">Success Rate</p>
                  </div>
                  <div className="col-6">
                    <p className="successRate mb-0 section3Head">132%</p>
                    <p className="sectionContent">Traffic Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
