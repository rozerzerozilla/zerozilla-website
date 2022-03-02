import React, { useContext } from "react";
import sectionCover from "../../../assets/images/section4Cover.png";
import webDev from "../../../assets/icons/webDev.svg";
import applicationDev from "../../../assets/icons/appDevelopment.svg";
import customSoftware from "../../../assets/icons/customSoftware.svg";
import digitalMarketing from "../../../assets/icons/digitalMarketing.svg";
import { FaLongArrowAltRight } from "react-icons/fa";
import ButtonComponent from "./Button";
import { AppContext } from "../../../context/Context";

const Section4 = () => {
  const [isMobile, setIsMobile] = useContext(AppContext);
  return (
    <div className="row Home-area4" style={{ margin: 0, padding: 0 }}>
      <div
        className={`col-12 Home-main-area4`}
        style={{
          paddingLeft: !isMobile ? 0 : "15px",
          paddingTop: 0,
          paddingBottom: !isMobile && 0,
          paddingRight: !isMobile && "70px",
        }}
      >
        <div className="row">
          <div
            className={`${isMobile ? "col-12" : "col-7 my-auto"}`}
            style={
              isMobile
                ? { marginTop: "40px", textAlign: "center" }
                : { paddingLeft: 0 }
            }
          >
            <img
              src={sectionCover}
              alt="sectionPic"
              style={{ width: "90% " }}
            />
          </div>
          <div
            className={`${isMobile ? "col-12" : "col-5 my-auto"}`}
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
              <p className="section4Head">What we do?</p>
              <p className="sectionContent">
                We are a bunch of enthusiastic & creative minds, intending to
                help you, Empower YOUR Business with seamless web solutions
                ranging from Web Designing & Development, Mobile Application,
                Custom Software Development & Digital Marketing Services.
              </p>
            </div>
            <div className="row-col-12" style={{ marginTop: "20px" }}>
              <ButtonComponent
                image={webDev}
                name="Web Design & Development"
                isMobile={isMobile}
              />
              <ButtonComponent
                image={applicationDev}
                name="Application Developments"
                isMobile={isMobile}
              />
              <ButtonComponent
                image={customSoftware}
                name="Custom Software"
                isMobile={isMobile}
              />
              <ButtonComponent
                image={digitalMarketing}
                name="Digital Marketing"
                isMobile={isMobile}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
