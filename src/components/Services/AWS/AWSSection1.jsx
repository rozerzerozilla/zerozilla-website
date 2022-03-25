import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import * as lottieJson from "./lottieAWS.json";
import AWSCover from "../../../assets/images/aws-page.gif";

const Section1 = ({handleFunction}) => {

  
  return (
    <CommonSection1
      handleFunction={handleFunction}
      animatedImage={true}
      animationData={lottieJson}
      title={`AWS Managed Services and Support`}
      subtitle1={`Unchain your business with cloud technology`}
      subtitle2={`Unlock optimum computing power now`}
      sectionCover={AWSCover}
      background={`#F2EBFF`}
      btnText={`Let’s Talk`}
      boxShadow={false}
      extraText=""
      isColored={true}
      titleColor={`#4C2E88`}
      btnColor={`#4C2E88`}
      viewBtn={true}
    />
  );
};

export default Section1;
