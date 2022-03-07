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
                  Which Platform is best for you?
                  <br />
                  Where your customers hanging out?
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
                <div className="service-card">
                  <p className="sectionContent large bold secondary-color">
                    Finding the Right Platform
                  </p>
                  <p className="sectionContent">
                    Every social media Platform doesn’t fit right to reach your
                    ideal customers. Reaching out to them where they are
                    spending more time is the best way to generate engaged
                    audience as well as potential buyers. As per your audience
                    category we optimise your profiles on right channel.
                  </p>
                  </div>
                </Fade>
              </div>
              <div
                className={`${!isMobile ? "col-4" : "col-12"}`}
                style={{ marginBottom: "40px" }}
              >
                <Fade bottom>
                <div className="service-card">
                  <p className="sectionContent large bold secondary-color">
                    Targeting Perfection
                  </p>
                  <p className="sectionContent">
                    Everyone is not your Target Audience. Successful outcomes
                    are strategically planned & implemented. By understanding
                    your audience pain points & their behaviour, we craft a
                    campaign which resonates with them & make them take action
                    which results in fruitful results.
                  </p>
                  </div>
                </Fade>
              </div>
              <div
                className={`${!isMobile ? "col-4" : "col-12"}`}
                style={{ marginBottom: "40px" }}
              >
                <Fade top>
                <div className="service-card">
                  <p className="sectionContent large bold secondary-color">
                    Performance Tracking
                  </p>
                  <p className="sectionContent">
                    Measuring the performance & tracking the results helps in
                    adopting the results based approach. We ensure to audit the
                    campaigns regularly for successful outcomes. Detailed
                    reporting gives a clarity on where you stand and what should
                    we do to improve for the better.
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
