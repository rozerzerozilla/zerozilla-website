import React from "react";
import sectionCover from "../../../assets/images/ecommerce-web-section-1-cover.webp";
import CommonSection1 from "../../Common/CommonSection1";

const Section1 = ({handleFunction}) => {
  return (
    <CommonSection1
      handleFunction={handleFunction}
      title={`E-Commerce Development`}
      subtitle1={`Bring the BEST to your customers with our ULTIMATE services.`}
      subtitle2={``}
      sectionCover={sectionCover}
      btnText={`Let's talk`}
      background={"#F8F5FF"}
      boxShadow={true}
      isColored={false}
      titleColor={`#4C2E88`}
      viewBtn={true}
    />
  );
};

export default Section1;
