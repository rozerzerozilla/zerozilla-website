import React from "react";
import CommonSection1 from "../Common/CommonSection1";

const Section1 = ({ handleFunction}) => {
  return (
    <CommonSection1
      handleFunction={handleFunction}
      title={`Contact us`}
      subtitle1={`We are here for you.`}
      subtitle2={`We are pioneers with a penchant to help customers find and implement THE better way to do things.`}
      subtitle3="Let us do it TOGETHER!"
      sectionCover={""}
      // btnText={`Let's talk`}
      background={`transparent url(${require(`../../assets/images/contact-section1-cover.webp`)})`}
      boxShadow={true}
      isColored={false}
      titleColor={`#fff`}
      type2={true}
      opacity={0.8}
      viewBtn={false}
    />
  );
};

export default Section1;
