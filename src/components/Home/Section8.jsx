import React, { useContext } from "react";
import { AppContext } from "../../context/Context";
import { commonColPadding } from "../../helper";
import { FaPhoneAlt } from "react-icons/fa";
import Fade from 'react-reveal/Fade';

const Section8 = ({ handleFunction}) => {
  const [isMobile, setIsMobile] = useContext(AppContext);
  return (
    <Fade>
      <div className="row Home-area8" style={{ margin: 0, padding: 0, backgroundColor:"#4c2e88", color:"white" }}>
        <div
          className={`col-12 Home-main-area8`}
          style={commonColPadding(isMobile)}
        >
          <div className="row">
            <div
              className="row col-12"
              style={{ paddingLeft: isMobile && "25px" }}
            >
              <p className="section3Head white mb-0">Ready to get started?</p>
              <p className="sectionContent mt-1">
                Take your first step towards business transformation!
              </p>
            </div>
          </div>
          <div className={`mx-auto ${isMobile ? "col-12" : "col-3"}`}>
            <button
              className={`sliderBtns colored`}
              onClick={handleFunction}
            >
              <span style={{ marginRight: "10px" }}>
                <FaPhoneAlt />
              </span>
              <span className={`sectionContent small`}>
                Book an Intro Call
              </span>
            </button>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Section8;
