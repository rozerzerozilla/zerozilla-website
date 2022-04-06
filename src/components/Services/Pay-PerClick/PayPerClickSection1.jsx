import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import sectionCover from "../../../assets/images/pay-per-section-1-cover.webp"

const Section1 = ({handleFunction}) => {
  return (
    <CommonSection1
      handleFunction={handleFunction}
      title={`Pay-Per Click`}
      subtitle1={`You don’t pay till your customer is 50% committed.`}
      subtitle2={"That’s the beauty of PPC and we know how to make it happen!"}
        sectionCover={sectionCover}
      btnText={`Let's talk`}
      background={"#E8C5CE"}
      boxShadow={true}
      isColored={false}
      titleColor={`#C31F5D`}
      viewBtn={true}
    />
  );
};

export default Section1;
