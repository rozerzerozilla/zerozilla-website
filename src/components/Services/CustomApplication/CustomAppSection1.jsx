import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import sectionCover from "../../../assets/images/Custom-App-Section-1-Cover.webp";
import { Container } from "react-bootstrap";

const Section1 = ({handleFunction}) => {
  return (
    <CommonSection1
      handleFunction={handleFunction}
      title={`Mobile Application Development`}
      subtitle1={`Be a part of the app revolution!`}
      subtitle2={`Get high-end mobile apps developed by expert hands. `}
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
