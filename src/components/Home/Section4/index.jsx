import React, { useContext } from "react";
import sectionCover from "../../../assets/images/section4Cover.png";
import webDev from "../../../assets/icons/webDev.svg";
import applicationDev from "../../../assets/icons/appDevelopment.svg";
import customSoftware from "../../../assets/icons/customSoftware.svg";
import digitalMarketing from "../../../assets/icons/digitalMarketing.svg";
import { FaLongArrowAltRight } from "react-icons/fa";
import ButtonComponent from "./Button";
import { AppContext } from "../../../context/Context";
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

const Section4 = () => {
  const [isMobile, setIsMobile] = useContext(AppContext);
  return (
    <Reveal effect="fadeInUp">
      <div className="row Home-area4" style={{ margin: 0, padding: 0 }} id="what-we-do">
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
          <Fade left>
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
              style={{ width: "100% " }}
            />
            </div>
          </Fade>
          <Fade right>
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
                Call us an integrated team of enthusiastic and creative professionals on a mission- Empower your business and take it to the Top! Our expertise lies in providing seamless web solutions ranging from Web Designing & Development,
                    <b>Pay-per-click Advertising, Lead Generation Marketing, Mobile Application Development Services, Custom Software Development, Search Engine Optimization, Content Marketing, Social Media Marketing, and Digital Marketing Services.</b>
              </p>
            </div>
            <div className="row-col-12" style={{ marginTop: "20px" }}>
              <ButtonComponent
                path={"/web-design"}
                image={webDev}
                name="Website Development"
                isMobile={isMobile}
              />
              <ButtonComponent
                path={"/software-development"}
                image={applicationDev}
                    name="Software Development"
                isMobile={isMobile}
              />
              <ButtonComponent
                path={"/mobile-app-devlopment"}
                image={customSoftware}
                name="Mobile Application Development"
                isMobile={isMobile}
              />
              <ButtonComponent
                path={"/digital-marketing"}
                image={digitalMarketing}
                name="Digital Marketing"
                isMobile={isMobile}
              />
            </div>
            </div>
          </Fade>
        </div>
      </div>
      </div>
    </Reveal>
  );
};

export default Section4;
