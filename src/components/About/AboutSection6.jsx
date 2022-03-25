import React, { useContext } from "react";
import { AppContext } from "../../context/Context";
import sectionCover from "../../assets/images/About-Section6-Cover.png";
import Fade from 'react-reveal/Fade';

const Section6 = () => {
  const [isMobile, setIsMobile] = useContext(AppContext);
  return (
    <div className="row Home-area3" style={{ margin: 0, padding: 0 }} id="journey">
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
            <Fade right>
            <img
              src={sectionCover}
              alt="sectionPic"
              style={{ width: "90% " }}
              />
            </Fade>
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
            <Fade left>
              <div className={`row col-12 ${isMobile && "m-0"}`}>
                <p className="section3Head black extra-bold">
                  <span className="section3Head black">Journey of Zerozilla</span>
                  <br />
                  The Amazing {parseInt(new Date().getFullYear()) - 2015}+ Years
                </p>
                <p className="sectionContent">
                  Our commitment and sincerity in defining what user experience
                  can be is what sets us apart. We are a team of high-quality IT
                  professionals, with a deep commitment to learn and implement, to
                  help B2B, B2C, governments, and other stakeholders and thus
                  improve the industry scenario.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
