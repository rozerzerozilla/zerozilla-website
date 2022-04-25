import React, { useContext } from "react";
import { AppContext } from "../../context/Context";
import sectionCover from "../../assets/images/About-Section-4-Cover.webp";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";

const Section4 = () => {
  const [isMobile] = useContext(AppContext);
  return (
    <div className="row Home-main-area3" style={{ margin: 0, padding: 0 }}>
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
              <p className="section3Head black extra-bold"></p>
              <p className="sectionContent">
                  Digital consumers signal their individuality in all kinds of ways. We build winning marketing strategies based on a deep understanding of your consumers and what drives their decision-making across all channels.

                  
              </p>
              <p className="sectionContent">
                  Know who your customers are, where to find them, how to connect with them, and if it's working.
              </p>
              <p className="sectionContent">
                  That's how we amplify results and deliver award-winning digital advertising, SEO, social, analytics, and digital creative services.  
              </p>
              </div>
            </Fade>
            <div
              className="row-col-12"
              style={{ marginTop: !isMobile ? "30px" : "20px" }}
            >
              <Link to="/career"><button className="appBtn">Join our Team</button></Link>
            </div>
          </div>
          <div
            className={`${isMobile ? "col-12" : "col-7 my-auto"}`}
            style={
              isMobile
                ? { marginTop: "40px", textAlign: "center" }
                : { paddingLeft: 0, textAlign: "right" }
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
        </div>
      </div>
    </div>
  );
};

export default Section4;
