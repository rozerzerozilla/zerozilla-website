import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import sectionCover from "../../../assets/images/Custom-App-Section-3-Cover.png";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Section3 = () => {
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
            <Zoom>
            <img
              src={sectionCover}
              alt="section-cover"
              style={{ width: "90%", paddingLeft: !isMobile && 40 }}
              />
            </Zoom>
          </div>
          <div
            className={`${isMobile ? "col-12" : "col-7 my-auto"}`}
            style={
              isMobile
                ? { padding: "0px 20px", textAlign: "center" }
                : { paddingLeft: "70px" }
            }
          >
            <Fade right>
            <div className={`row ${isMobile && "m-0"}`}>
              <div className={`${!isMobile ? "col-9" : "col-12 mt-4"}`}>
                <p className="section3Head black extra-bold">
                  <span className="section3Head black">
                    Digital Transformation of business with
                  </span>
                  <br />
                  <span className="highlightedSectionText secondary-color">
                    Mobile Apps Support
                  </span>
                </p>
              </div>
            </div>
            <div className={`row ${isMobile && "m-0"}`}>
              <div className={`${!isMobile ? "col-9" : "col-12"}`}>
                <p className="sectionContent">
                  We design innovative mobile applications that are thoroughly
                  tailored to the need of your brand. That improves the reach of
                  your brand & helps you do profitable, crowd pulling business!
                </p>
              </div>
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
