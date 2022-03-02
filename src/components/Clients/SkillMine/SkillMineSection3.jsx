import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import logo from "../../../assets/icons/skill-mine-logo.svg";
import sectionCover from "../../../assets/images/skill-mine-section3-cover.png";

const Section3 = () => {
  const [isMobile] = useContext(AppContext);
  return (
    <div className="row Home-area3 orange" style={{ margin: 0, padding: 0 }}>
      <div
        className={`col-12 Home-main-area2`}
        style={{
          paddingLeft: !isMobile ? "70px" : "20px",
          paddingRight: !isMobile ? "70px" : 20,
          paddingBottom: !isMobile && 0
        }}
      >
        <div className="row">
          <div
            className={"col-12"}
            style={isMobile ? { textAlign: "center" } : null}
          >
            <div className={`row`}>
              <div className={`${isMobile ? "col-12" : "col-8"}`}>
                <p className={`sectionContent primary-color small`}>
                  <img src={logo} alt="logo" height="30px" />
                </p>
              </div>
            </div>
            <div className={`row ${isMobile ? 'mt-4' : ''}`}>
              <div
                className={`${isMobile ? "col-12" : "col-7 my-auto"}`}
                style={
                  isMobile ? { padding: "0px 20px", textAlign: "center" } : null
                }
              >
                <div className={`row col-12 ${isMobile && "m-0"}`}>
                  <p className="section3Head black extra-bold small white font-32">
                    We integrate digital technology into every element of your
                    business, transforming the way you deliver, operate, and
                    give your consumers an advantage.
                  </p>
                </div>
              </div>
              <div
                className={`${isMobile ? "col-12" : "col-5 my-auto"}`}
                style={{
                  marginTop: isMobile && "25px",
                  textAlign: isMobile ? "center" : "right",
                }}
              >
                <img
                  src={sectionCover}
                  alt="sectionVideo"
                  style={{ width: "100% " }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
