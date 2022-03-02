import React from "react";
import sectionCover from "../../../assets/images/Common-Section-1-Cover.png";
import CommonSection1 from "../../Common/CommonSection1";

const Section1 = () => {
  return (
    <CommonSection1
      title={`Web Design & Development`}
      subtitle1={`We live and breathe digital services powered by data.`}
      subtitle2={`What drives us is making a lasting impact on your growth.`}
      sectionCover={sectionCover}
      btnText={`Let's talk`}
      background={"#FFEFEF"}
      boxShadow={false}
      isColored={false}
      titleColor={`#C31F5D`}
      viewBtn={true}
    />
  );
};

export default Section1;
