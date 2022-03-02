import React from "react";
import CommonSection1 from "../../Common/CommonSection1";

const Section1 = () => {
  return (
    <CommonSection1
      title={`Social Media Marketing`}
      subtitle1={`Enabling your brand’s success via social media`}
      subtitle2={''}
    //   sectionCover={sectionCover}
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
