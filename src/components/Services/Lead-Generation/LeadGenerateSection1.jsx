import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import sectionCover from "../../../assets/images/lead-gen-section-1-cover.webp";

const Section1 = ({handleFunction}) => {
  return (
    <CommonSection1
      handleFunction={handleFunction}
      title={`Lead Generation Services`}
      subtitle1={`Evoke interest, inform, and re-affirm with US!`}
      subtitle2={`Get a list of customers and grow BIG!`}
      // subtitle3={`customers in full bloom!`}
      sectionCover={sectionCover}
      background={`#F8F8F8`}
      btnText={`Let’s Talk`}
      boxShadow={false}
      extraText={false}
      isColored={false}
      titleColor={`#4C2E88`}
      imageWidth={'80%'}
      viewBtn={true}
    />
  );
};

export default Section1;
