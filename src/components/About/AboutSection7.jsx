import React, { useContext } from "react";
import { AppContext } from "../../context/Context";
import { commonColPadding } from "../../helper";
import BookCallButton from "../BookCallButton";
import Fade from 'react-reveal/Fade';

const Section7 = () => {
  const [isMobile, setIsMobile] = useContext(AppContext);
  return (
    <div className="row Home-area8" style={{ margin: 0, padding: 0 }}>
      <div
        className={`col-12 Home-main-area8`}
        style={commonColPadding(isMobile)}
      >
        <div className="row">
          <Fade bottom>
            <div
              className="row col-12"
              style={{ paddingLeft: isMobile && "25px" }}
            >
              <p className="section3Head black mb-0">
                Ready to be a part of The-Z team?
              </p>
              <p className="sectionContent">
                Take the first step towards your BRAND EVOLUTION!
              </p>
            </div>
          </Fade>
        </div>
        <div
          className={`row ${isMobile ? "mt-4" : ""}`}
          style={{ marginTop: !isMobile && "40px" }}
        >
          <Fade top>
          {!isMobile && <div className="col-5"></div>}
          <div className={`${isMobile ? "col-12" : "col-2"}`}>
            <BookCallButton
              className={null}
              isColored={true}
              showImage={false}
              text={"See Openings"}
            />
            </div>
          </Fade>
          {!isMobile && <div className="col-5"></div>}
        </div>
      </div>
    </div>
  );
};

export default Section7;
