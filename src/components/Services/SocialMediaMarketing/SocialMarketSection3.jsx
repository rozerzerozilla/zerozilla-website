import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import sectionCover from "../../../assets/images/social-media-section3-cover.webp";
import Bullets from "../../../assets/icons/seo-bullets.svg";
import { fruitfulPartnershipsTips1 } from "../../../helper/services";
import Fade from "react-reveal/Fade";

const Section3 = () => {
  const [isMobile] = useContext(AppContext);
  return (
    <div className="row Home-area3" style={{ margin: 0, padding: 0 }}>
      <div
        className={`col-12 Home-main-area4`}
        style={{
          paddingRight: !isMobile ? 0 : "15px",
          paddingTop: 0,
          paddingBottom: !isMobile && 0,
          paddingLeft: !isMobile && "70px",
        }}
      >
        <div className="row">
          <div
            className={`${isMobile ? "col-12" : "col-7 my-auto py-5"}`}
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
            <Fade top>
            <div className={`row col-12 ${isMobile && "m-0"}`}>
              <p className="section3Head black extra-bold">
                  Have you tasted success on social media yet? It’s YUM! 
              </p>
              <p className="sectionContent">
                  What can a social media marketing services company do for me?" you might wonder. In simple words, the most significant advantage that our social media marketing company can offer you is more time and a higher ROI at a low cost. 
              </p>
              <p className="sectionContent">
                  The ability to minimize your CPA (cost per acquisition) and increase your ROI is the key to developing a successful social media management campaign (or any digital marketing campaign for that matter!).
              </p>
                <p className="sectionContent">
                  We, at Zerozilla, assist businesses like you with social media marketing services to save time and generate results.
                  More traffic, more engagement, more leads for your business. This is the motto of our SMM services.  
              </p>
              <p className="sectionContent large bold secondary-color">
                Accordingly we:
              </p>
              {fruitfulPartnershipsTips1.map((strategy, idx) => (
                <div className="row sectionContent mb-2" key={idx + 1}>
                  <div
                    className={`col-1 ${
                      !isMobile ? "my-auto" : ""
                    } text-center`}
                  >
                    <img src={Bullets} alt="bullet" height="16px" />
                  </div>
                  <div
                    className={`col-11 ${!isMobile ? "my-auto" : ""}`}
                    style={{
                      paddingLeft: !isMobile && 0,
                      textAlign: isMobile && "left",
                    }}
                  >
                    {strategy.title}
                  </div>
                </div>
              ))}
            </div>
            </Fade>
          </div>
          <div
            className={`${isMobile ? "col-12" : "col-5"}`}
            style={
              isMobile
                ? { marginTop: "40px", textAlign: "center" }
                : { paddingLeft: 0, textAlign: "right" }
            }
          >
            <Fade bottom>
            <img
              className="h-100 w-100"
              src={sectionCover}
              alt="sectionPic"
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
