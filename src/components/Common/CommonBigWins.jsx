import React, { useContext } from "react";
import { AppContext } from "../../context/Context";
import bigWin1 from "../../assets/images/Service-Section-4-Big-Winds-1.webp";
import bigWin2 from "../../assets/images/Service-Section-4-Big-Winds-2.webp";
import bigWin3 from "../../assets/images/Service-Section-4-Big-Winds-3.webp";
import { FaLongArrowAltRight } from "react-icons/fa";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Link } from "react-router-dom";

const CommonBigWinsSection = ({ background, smallerText }) => {
  const [isMobile] = useContext(AppContext);
  return (
    <div
      className="row Home-area4 about"
      style={{
        margin: 0,
        padding: 0,
        background: background ? background : "",
      }}
    >
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
              isMobile ? { padding: "0px 20px", textAlign: "center" } : null
            }
          >
            <Fade>
              <div className={`row`}>
                <div className={`${isMobile ? "col-12" : "col-8"}`}>
                  <p
                    className={`sectionContent primary-color ${
                      smallerText ? "small" : ""
                    }`}
                  >
                    Our Work
                  </p>
                  <p
                    className={`section3Head black extra-bold text-${
                      isMobile ? "center" : "left"
                    } ${smallerText ? "small" : ""}`}
                  >
                    <span className="highlightedSectionText">
                      We achieve the big wins.
                    </span>
                  </p>
                  <p
                    className={`sectionContent mb-0 text-${
                      isMobile ? "center" : "left"
                    } ${smallerText ? "small" : ""}`}
                  >
                    Our client-first approach, deep technical knowledge, and
                    performance focus fuel our clients??? successes ??? and grow their
                    brands.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className="col-12 p-0">
        <div className="row g-0">
          <Zoom>
            <div className={`case-study ${isMobile ? "col-12" : "col-4"}`}>
              <img className="w-100" src={bigWin1} alt="we-win-big" />
              <div className="case-study-hover d-flex flex-column align-items-center justify-content-around">
                <br /> <br /><br /> <br />
                <Link to="/portfolio/skill-mine">
                  <button className="sliderBtns white-colored-outline">View Case</button>
                </Link>
              </div>
            </div>
          </Zoom>
          <Fade top>
            <div className={`case-study ${isMobile ? "col-12" : "col-4"}`}>
              <img className="w-100" src={bigWin2} alt="we-win-big" />
              <div className="case-study-hover d-flex flex-column align-items-center justify-content-around">
                <br /> <br /><br /><br />
                <Link to="/portfolio/skill-mine">
                  <button className="sliderBtns white-colored-outline">View Case</button>
                </Link>
              </div>
            </div>
          </Fade>
          <Zoom>
            <div className={`case-study ${isMobile ? "col-12" : "col-4"}`}>
              <img className="w-100" src={bigWin3} alt="we-win-big" />
              <div className="case-study-hover d-flex flex-column align-items-center justify-content-around">
                <br /> <br /><br /> <br />
                <Link to="/portfolio/skill-mine">
                  <button className="sliderBtns white-colored-outline">View Case</button>
                </Link>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
      <div
        className={`col-12 Home-main-area2`}
        style={{
          paddingLeft: !isMobile ? "70px" : "20px",
          paddingRight: !isMobile && "70px",
        }}
      >
        <p className={`sectionContent text-end ${smallerText ? "small" : ""}`}>
          <span className="me-2 underline">View more case studies</span>
          <FaLongArrowAltRight style={{ fontSize: 24 }} />
        </p>
      </div>
    </div>
  );
};

export default CommonBigWinsSection;
