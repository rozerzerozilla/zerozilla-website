import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import sectionCover from "../../../assets/images/social-media-section3-cover.png";
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
                Engaging in fruitful partnerships for a successful outcome
              </p>
              <p className="sectionContent">
                Right now, at this very moment, 77% of World’s citizens are
                either posting, sharing, clicking, liking, following or thinking
                “Let’s see what’s up on FB today!”. That’s the social media
                craze that’s hit our masses and like how! By 2025, there will be
                close to 5 billion social media users on this planet. A Big
                “Like” to that, we say!
              </p>
              <p className="sectionContent">
                Why? ‘Cos now we know where, how, and when your customer eats,
                drinks, sleeps, travels, purchases and what! But like everything
                else, social media marketing (SMM) needs to be done right.
              </p>
              <p className="sectionContent">
                SMM is the new avatar of Internet Marketing but of course,
                better. It’s more focused, refined, interactive and effective.
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
