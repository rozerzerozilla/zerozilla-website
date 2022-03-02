import React from "react";
import CommonSection1 from "../Common/CommonSection1";

const Section1 = () => {
  return (
    <CommonSection1
      title={`Contact us`}
      subtitle1={`If you’re interested in true digital reality through clear and touchable results, it’s time for you to become partner`}
      subtitle2={`with us for full-service digital solutions that fuel innovation and understand customer intent at its core.`}
      sectionCover={""}
      btnText={`Let's talk`}
      background={`transparent url(${require(`../../assets/images/contact-section1-cover.png`)})`}
      boxShadow={true}
      isColored={false}
      titleColor={`#fff`}
      type2={true}
      opacity={0.8}
      viewBtn={true}
    />
  );
};

export default Section1;
