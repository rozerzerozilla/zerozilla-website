import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import sectionCover from "../../../assets/images/Custom-App-Section-1-Cover.png";

const Section1 = () => {
  return (
    <CommonSection1
      title={`Custom Application Development`}
      subtitle1={`Be a part of the app revolution with best Mobile App`}
      subtitle2={`Development Support.`}
      sectionCover={sectionCover}
      btnText={`Let's talk`}
      background={"#fff"}
      boxShadow={true}
      isColored={false}
      titleColor={`#C31F5D`}
      viewBtn={true}
    />
  );
};

export default Section1;
