import React, { useContext } from "react";
import sectionCover from "../../../assets/images/seo-section-3-cover.png";
import { AppContext } from "../../../context/Context";

const Section3 = () => {
  const [isMobile] = useContext(AppContext);
  return (
    <div className="row Home-area3" style={{ margin: 0, padding: 0 }}>
      <div
        className={`col-12 Home-main-area3`}
        style={{
          paddingLeft: !isMobile ? "70px" : "15px",
          paddingRight: !isMobile && "70px",
        }}
      >
        <div className="row">
          <div
            className={`${isMobile ? "col-12" : "col-7 my-auto"}`}
            style={
              isMobile ? { padding: "0px 20px", textAlign: "center" } : null
            }
          >
            <div className={`row col-12 ${isMobile && "m-0"}`}>
              <p className="section3Head black extra-bold">
                Engaging in fruitful partnerships for a successful outcome
              </p>
              <p className="sectionContent">
                Most of us rely on the professionals that is, deep sea divers
                and perhaps, marine experts to enlighten us about underwater
                existence. If the experts like what they see, they will bring it
                to the surface for us to appreciate and utilize. You see… that’s
                their main job.
              </p>
              <p className="sectionContent">
                Search engines are like deep sea marine experts. As a player in
                the market you are somewhere in this sea, whether you like it or
                not! Your buyers do not have the time, ability or inclination to
                enter the unknown waters and look for you. So they wait, all
                along the shoreline to grab what pops up!
              </p>
              <p className="sectionContent large bold secondary-color">
                If you don’t surface soon, you will drown.
              </p>
              <p className="sectionContent">
                The same way in which if you are on the Internet, and not
                optimized, you will be obsolete.
              </p>
              <p className="sectionContent large bold secondary-color">
                Another thing
              </p>
              <p className="sectionContent">
                These “deep sea experts” are getting smarter every day (enhanced
                algorithms such as GoogleRankBrain). It takes a lot more than
                bright, neon colors (a standard website) to attract their
                attention. You need to be interesting, valuable and of optimum
                quality.
              </p>
            </div>
          </div>
          <div
            className={`${isMobile ? "col-12" : "col-5 my-auto"}`}
            style={{
              marginTop: isMobile && "40px",
              textAlign: isMobile ? "center" : "right",
            }}
          >
            <img
              src={sectionCover}
              alt="sectionVideo"
              style={{ width: "90% " }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
