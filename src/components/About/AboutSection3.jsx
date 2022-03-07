import React, { useContext } from "react";
import { AppContext } from "../../context/Context";
import sectionCover from "../../assets/images/About-Section-3-Cover.png";
import Fade from 'react-reveal/Fade';

const Section3 = () => {
  const [isMobile] = useContext(AppContext);
  return (
    <div className="row Home-area4 about" style={{ margin: 0, padding: 0 }}>
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
            <Fade top>
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
            <Fade bottom>
              <div className={`row col-12 ${isMobile && "m-0"}`}>
                <p className="section3Head black extra-bold">Who we are?</p>
                <p className="sectionContent">
                  <span className="highlightedSectionText">
                    Hello! We are Zerozilla.
                  </span>
                  <br /> If there’s one thing we’ve learned about marketing in
                  these times, is that ‘if it’s not on the web, it doesn’t really
                  count!’ Out of the 7.7 billion people on earth, almost 4 billion
                  have the means to access the internet. If you have a product or
                  service to offer, your target customer is most likely to be
                  among this 4 billion segment.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
