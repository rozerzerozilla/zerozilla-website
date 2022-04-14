import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import sectionCover from "../../../assets/images/lead-gen-section2-cover.webp";
import Bullets from "../../../assets/icons/seo-bullets.svg";
import { leadGenSection2Points } from "../../../helper/services";
import Fade from 'react-reveal/Fade'

const Section2 = () => {
  const [isMobile] = useContext(AppContext);
  return (
    <div className="row Home-area4 about" style={{ margin: 0, padding: 0 }}>
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
            <Fade left>
            <div className={`row col-12 ${isMobile && "m-0"}`}>
              <p className="section3Head black extra-bold small">
              Our end-to-end lead generation services help businesses like yours to increase sales MULTIFOLD!
              </p>
              <p className="sectionContent small">
              Do you own a business and are having trouble generating high-quality leads? If your answer is yes, our lead generation services could assist you in standing out in your sector and specialization.
              </p>
              {/* <p className="sectionContent small">
                By the horse we, of course, mean your customer. By water, we
                refer to a product you’re offering, the carrot is another
                product and the dance is basically the customer delight that
                follows!
              </p> */}
              <p className="sectionContent large bold secondary-color customized">
              So, what makes us so sure?
              </p>
              <p className="sectionContent small">
              Our qualified leads are scientifically curated using intelligent data. Guesses and bets don’t work in our business. All our leads are so ready-to-buy that all you need to do is show up and deliver. That's not it.
              </p>
              <p className="sectionContent small">
              We use omnichannel marketing strategies to target audiences from both the global and domestic sectors to achieve market share. It also aids in the most efficient development of trust and credibility in your company.
              </p>
              {/* <p className="sectionContent large bold secondary-color customized">
                So, what makes us so sure?
              </p> */}
              {leadGenSection2Points.map((strategy, idx) => (
                <div className="row sectionContent mb-2" key={idx + 1}>
                  <div
                    className={`col-1 ${
                      !isMobile ? "my-auto" : ""
                    } text-center`}
                  >
                    <img src={Bullets} alt="bullet" height="16px" />
                  </div>
                  <div
                    className={`col-11 ${
                      !isMobile ? "my-auto sectionContent small" : ""
                    }`}
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
            <Fade bottom><img className="h-100 w-100" src={sectionCover} alt="sectionPic" /></Fade>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
