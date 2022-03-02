import React, { useContext } from "react";
import { AppContext } from "../../context/Context";
import BookCallButton from "../BookCallButton";

const CommonConsultSection = ({ btnText, type2, text, extraBold, applyRadius }) => {
  const [isMobile] = useContext(AppContext);

  const getText = (center) => {
    return (
      <p
        className={`mb-0 ${type2 && "small"} ${
          center ? "text-center" : ""
        } ${extraBold ? 'sliderHead2' : 'seoHead'}`}
      >
        {text}
      </p>
    );
  };
  const btn = (center) => {
    // console.log(type2)
    return (
      <p className={`${center ? "text-center mt-4" : "mb-0"}`}>
        <BookCallButton
          className={null}
          isColored={true}
          showImage={false}
          text={btnText}
          smallText={type2}
          applyRadius={applyRadius}
        />
      </p>
    );
  };

  return (
    <div
      className={`row Home-areaSEO ${type2 ? "type2" : ""}`}
      style={{ margin: 0, padding: 0 }}
    >
      <div
        className={`col-12 Home-main-areaSEO`}
        style={{
          paddingLeft: !isMobile ? "70px" : "15px",
          paddingRight: !isMobile && "70px",
        }}
      >
        <div
          className={`row ${type2 ? "" : "col-12"}`}
          style={{ paddingLeft: isMobile && 30 }}
        >
          {type2 ? (
            <>
              <div className="col-6 my-auto text-end">{getText(false)}</div>
              <div className="col-6 my-auto">{btn(false)}</div>
            </>
          ) : (
            <>
              {getText(true)}
              {btn(true)}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommonConsultSection;