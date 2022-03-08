import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import lottieJson from './lottieAWS.json';

const Section1 = () => {

  // const imagesrc = JSON.parse(lottieJson)
  console.log(lottieJson)
  return (
    <CommonSection1
      title={`AWS Managed Services and Support`}
      subtitle1={`Unchain your business with cloud technology`}
      subtitle2={`Unlock optimum computing power now`}
      subtitle3={'CTA: Maximize your cloud potential.'}
      sectionCover={""}
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
