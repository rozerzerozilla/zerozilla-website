import React, { useContext } from "react";
import sectionCover from "../../../assets/images/home-section-3-cover.webp";
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
          <div className="container">
            <div className="row">
              <Fade left>
                <div
                  className={`${isMobile ? "col-12" : "col-6 my-auto"}`}
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
                  className={`${isMobile ? "col-12" : "col-6 my-auto ps-3"}`}
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
                  <div className={`row ${isMobile && "m-0"}`}>
                    <div className="col-12">
                      <div className="section4Head mb-4">How we help our customers?</div>
                      <div className="sectionContent">
                        Call us an integrated team of enthusiastic and creative professionals <br />on a mission- Empower your business and take it to the Top!
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-10" style={{ marginTop: "20px" }}>
                      <ButtonComponent
                        path={"/web-design"}
                        image={webDev}
                        name="Website Development"
                        isMobile={isMobile}
                      />

                    </div>
                    <div className="col-xs-12 col-md-10" style={{ marginTop: "10px" }}>
                      <ButtonComponent
                        path={"/software-development"}
                        image={applicationDev}
                        name="Software Development"
                        isMobile={isMobile}
                      />
                    </div>
                    <div className="col-xs-12 col-md-10" style={{ marginTop: "10px" }}>
                      <ButtonComponent
                        path={"/mobile-app-development"}
                        image={customSoftware}
                        name="Mobile Application Development"
                        isMobile={isMobile}
                      />
                    </div>
                    <div className="col-xs-12 col-md-10" style={{ marginTop: "10px" }}>
                      <ButtonComponent
                        path={"/digital-marketing"}
                        image={digitalMarketing}
                        name="Digital Marketing"
                        isMobile={isMobile}
                      />
                    </div>

                  </div>
                </div>
              </Fade>
            </div>
          </div>
          
        </div>
      </div>
      
    </Reveal>
  );
};

export default Section4;
