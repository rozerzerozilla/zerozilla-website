import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Section4 = () => {
  const [isMobile] = useContext(AppContext);
  return (
    <div className="row Home-area4 about" style={{ margin: 0, padding: 0 }}>
      <div
        className={`col-12 Home-main-area2`}
        style={{
          paddingLeft: !isMobile ? "70px" : "20px",
          paddingRight: !isMobile && "70px",
        }}
      >
        <div className="row">
          <div
            className={"col-12"}
            style={
              isMobile
                ? { paddingLeft: 10, paddingRight: 20, textAlign: "center" }
                : null
            }
          >
            <Zoom>
            <div className={`row`}>
              {!isMobile && <div className="col-1"></div>}
              <div className={`${isMobile ? "col-12 ps-3" : "col-10"}`}>
                <p className="section3Head black extra-bold text-center">
                    Many queries on Social Media Marketing?
                    <br/>
                    Let us help you with the answers! 
                </p>
              </div>
              {!isMobile && <div className="col-1"></div>}
              </div>
            </Zoom>
            <div className="row text-center" style={{ marginTop: "40px" }}>
              <div
                className={`${!isMobile ? "col-4" : "col-12"}`}
                style={{ marginBottom: "40px" }}
              >
                <Fade top>
                <div className="service-card" style={{display:"grid"}}>
                  <p className="sectionContent large bold secondary-color">
                    Finding the Right Platform
                  </p>
                  <p className="sectionContent">
                      Not every social media platform is the right one to connect with your ideal customers. The easiest method to build engaged audiences, as well as potential buyers, is to reach out to them where they spend the most time. We optimize your profiles on the appropriate channel based on your audience
                  </p>
                  </div>
                </Fade>
              </div>
              <div
                className={`${!isMobile ? "col-4" : "col-12"}`}
                style={{ marginBottom: "40px" }}
              >
                <Fade bottom>
                  <div className="service-card" style={{ display: "grid" }}>
                  <p className="sectionContent large bold secondary-color">
                    Targeting Perfection
                  </p>
                  <p className="sectionContent">
                      Also, not everyone is your target audience. We design successful outcomes and deliver them intelligently. Through a campaign that resonates with your audience and motivates them to take action, we generate beneficial outcomes, that address their pain points. 
                  </p>
                  </div>
                </Fade>
              </div>
              <div
                className={`${!isMobile ? "col-4" : "col-12"}`}
                style={{ marginBottom: "40px" }}
              >
                <Fade top>
                  <div className="service-card" style={{ display: "grid" }}>
                  <p className="sectionContent large bold secondary-color">
                    Performance Tracking
                  </p>
                  <p className="sectionContent">
                      Measuring performance and tracking results aid in the implementation of a results-based approach. We audit the campaigns regularly to guarantee that they are producing the required results. Detailed reporting gives insights on your position and methodologies to improve the same. 
                  </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
