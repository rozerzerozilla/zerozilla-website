import React, { useContext } from "react";
import { AppContext } from "../../context/Context";
import { sliderAreaStyle } from "../../helper";
import BookCallButton from "../BookCallButton";
import BreadCrumbs from "../BreadCrumbs";
import Fade from 'react-reveal/Fade';

const Section1 = ({ handleFunction}) => {
  const [isMobile, setIsMobile] = useContext(AppContext);
  return (
    <div className="row Home-area1 about" style={{ margin: 0, padding: 0 }}>
      <div
        className="col-12 slider-main-area-1"
        style={sliderAreaStyle(isMobile, { paddingBottom: "100px" })}
      >
        <div className={`${isMobile ? "mobile" : "desktop"}`}>
          <div className="row">
            <div className={`${isMobile ? "col-12" : "col-6"}`}>
              <Fade top>
                <div
                className="row"
                style={
                  isMobile ? { padding: "0px 20px", textAlign: "center" } : null
                }
              >
                <p
                  className="sliderHead1 no-underline light"
                  style={{ textAlign: "left" }}
                >
                  <BreadCrumbs className={null} />
                </p>
                <p className="sliderHead2 mb-0" style={{ marginTop: "50px" }}>
                  A bunch of enthusiastic & creative minds
                </p>
                </div>
              </Fade>
              <Fade bottom>
                <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-12">
                  <p
                    className="sliderHead1 mb-0 no-underline"
                    style={{ textAlign: isMobile && "center" }}
                  >
                    We live and breathe digital services powered by data.
                    {!isMobile && <br />}
                    What drives us is making a lasting impact on your growth.
                  </p>
                </div>
                </div>
              </Fade>
              <Fade>
                <div className="row" style={{ marginTop: "70px" }}>
                <div className="col-12">
                  <div className={`${!isMobile ? "row" : "customFlexBox"}`}>
                    <div className={`${!isMobile ? "col-5" : ""}`}>
                        <BookCallButton
                          handleFunction={handleFunction}
                        className={null}
                        isColored={false}
                        text={`Let's talk`}
                        showImage={false}
                      />
                    </div>
                  </div>
                </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
