import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import sectionCover from "../../../assets/images/pay-per-click-section2-cover.png";
import Bullets from "../../../assets/icons/seo-bullets.svg";
import { fruitfulPartnershipsTips2 } from "../../../helper/services";
import Fade from "react-reveal/Fade";

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
                Engaging in fruitful partnerships for a successful outcome
              </p>
              <p className="sectionContent small">
                The fact that you clicked on a link to this page means that you
                already know something about PPC Marketing. Now that you’re
                here, we will need to pay our advertiser.
              </p>
              <p className="sectionContent large bold secondary-color customized">
                That’s how it works!
              </p>
              <p className="sectionContent small">
                In case you are not completely aware of why PPC Marketing is
                such a hit, here’s a reason - Research shows us that
                Pay-per-click audiences hold 50% more chances of translating
                into purchases over a visitor created out of organic means.
                That’s pretty unbelievable for people who are familiar with the
                effects of traditional print, TV or radio advertising.
              </p>
              <p className="sectionContent small">
                The other reason is its financial convenience. You don’t pay
                till that 50% of a chance of securing a customer are confirmed.
                That’s a good deal, especially for an SME or Start-up.
              </p>
              <p className="sectionContent large bold secondary-color customized">
                Our skills lie in:
              </p>
              {fruitfulPartnershipsTips2.map((strategy, idx) => (
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
              <p className="sectionContent bold secondary-color small">
                But best of all
              </p>
              <div className="row sectionContent mb-2">
                <div
                  className={`col-1 ${!isMobile ? "my-auto" : ""} text-center`}
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
                  We know how to create a win-win without a customer feeling she
                  was tricked into it!
                </div>
              </div>
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
            <Fade right>
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

export default Section2;
