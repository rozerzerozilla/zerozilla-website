import React from "react";
import sectionCover from "../../../assets/images/Digital-Market-Section-1-Cover.png";
import CommonSection1 from "../../Common/CommonSection1";

const Section1 = () => {
  return (
    <CommonSection1
      title={`Digital Marketing`}
      subtitle1={`Sparks your business to a new peak with our digital `}
      subtitle2={`marketing services and experience consulting.`}
      sectionCover={sectionCover}
      background={`#F2EBFF`}
      btnText={`Let’s Talk`}
      boxShadow={false}
      extraText={`Qualified Leads  ·  Generate Calls  ·  Make Transitions  ·  New Clients`}
      isColored={true}
      titleColor={`#4C2E88`}
      btnColor={`#4C2E88`}
      viewBtn={true}
    />
  );
};

export default Section1;
