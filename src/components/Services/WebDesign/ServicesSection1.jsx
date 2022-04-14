import React from "react";
import sectionCover from "../../../assets/images/Common-Section-1-Cover.webp";
import CommonSection1 from "../../Common/CommonSection1";

const Section1 = ({handleFunction}) => {
  return (
    <CommonSection1
      imageWidth={"100%"}
      handleFunction={handleFunction}
      title={`Web Design & Development`}
      subtitle1={`We live and breathe digital services powered by data.`}
      subtitle2={`What drives us is making a lasting impact on your growth.`}
      sectionCover={sectionCover}
      btnText={`Let's talk`}
      background={"#F8F5FF"}
      boxShadow={false}
      isColored={false}
      titleColor={`#C31F5D`}
      viewBtn={true}
    />
  );
};

export default Section1;
