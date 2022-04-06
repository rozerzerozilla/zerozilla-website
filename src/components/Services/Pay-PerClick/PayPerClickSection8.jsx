import React, { useContext } from "react";
import { AppContext } from "../../../context/Context";
import { commonColPadding } from "../../../helper";
import BookCallButton from "../../BookCallButton";

const Section8 = ({handleFunction}) => {
  const [isMobile] = useContext(AppContext);
  return (
    <div className="row Home-area4 about" style={{ margin: 0, padding: 0 }}>
      <div
        className={`col-12 Home-main-area8`}
        style={commonColPadding(isMobile)}
      >
        <div className="row">
          <div
            className="row col-12"
            style={{ paddingLeft: isMobile && "25px" }}
          >
            <p className="section3Head black mb-0 small">
              Ready to grow your business with us?
            </p>
            <p className="sectionContent small">
              Take the first step towards your BRAND EVOLUTION!
            </p>
          </div>
        </div>
        <div
          className={`row ${isMobile ? "mt-4" : ""}`}
          style={{ marginTop: !isMobile && "40px" }}
        >
          {!isMobile && <div className="col-5"></div>}
          <div className={`${isMobile ? "col-12" : "col-2"}`}>
            <BookCallButton
              handleFunction={handleFunction}
              className={null}
              isColored={true}
              showImage={false}
              text={`Let's Talk`}
            />
          </div>
          {!isMobile && <div className="col-5"></div>}
        </div>
      </div>
    </div>
  );
};

export default Section8;
