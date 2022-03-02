import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import sectionCover from "../../../assets/images/social-market-section-6-cover.png";
import Bullets from "../../../assets/icons/seo-bullets.svg";
import { roleOfSocialMedia } from "../../../helper/services";

const Section6 = () => {
  const [isMobile] = useContext(AppContext);
  return (
    <div className="row Home-area3" style={{ margin: 0, padding: 0 }}>
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
            className={`${isMobile ? "col-12" : "col-5 my-auto"}`}
            style={
              isMobile
                ? { marginTop: "40px", textAlign: "center" }
                : { paddingRight: 0, textAlign: "left" }
            }
          >
            <img
              src={sectionCover}
              alt="sectionPic"
              style={{ width: "90% " }}
            />
          </div>
          <div
            className={`${isMobile ? "col-12" : "col-7 my-auto"}`}
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
              <p className="section3Head black extra-bold mt-4">
                <span className="section3Head black">
                  Social media plays a crucial role in
                </span>{" "}
                <span className="section3Head black extra-bold"></span>reaching
                out to masses
              </p>
              <p className={`sectionContent ${isMobile ? "mb-0" : ""}`}>
                The way you engage your audience on social media goes a long way
                in expanding your clientele. The better you engage the better
                will be your client base.
              </p>
            </div>
            <div className="row">
              {roleOfSocialMedia.map((card, idx) => (
                <div
                  key={card.id}
                  className={`${!isMobile ? "col-6 ps-0" : "col-12"}`}
                  style={
                    isMobile
                      ? { marginBottom: "25px", marginTop: idx === 0 && "25px" }
                      : null
                  }
                >
                  <div
                    className="service-card transparent text-center"
                    style={{ padding: "30px 40px 20px" }}
                  >
                    <div className="circle" style={{ padding: 40 }}>
                      <img
                        src={require(`../../../assets/icons/${card.image}`)}
                        alt={`card-content-${card.id}`}
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                    <p className="sectionContent large bold secondary-color mt-2">
                      {card.name}
                    </p>
                    <p
                      className={`sectionContent small ${
                        isMobile ? "mb-0" : ""
                      }`}
                      //   style={{ fontSize: "12px" }}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
