import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import sectionCover from "../../../assets/images/social-marketing-section-1-cover.webp"
const Section1 = ({handleFunction}) => {
  return (
    <CommonSection1
      fullbackground={true}
      handleFunction={handleFunction}
      title={`Social Media Marketing`}
      subtitle1={`Win over social media. Enable your brand’s success.`}
      subtitle2={''}
      sectionCover={sectionCover}
      btnText={`Let's talk`}
      background={"#F4F8FF"}
      boxShadow={true}
      isColored={false}
      titleColor={`#C31F5D`}
      viewBtn={true}
    />
  );
};

export default Section1;
