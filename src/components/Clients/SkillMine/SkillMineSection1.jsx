import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import sectionCover from '../../../assets/images/skill-mine-section1-cover.png';

const Section1 = () => {
  return (
    <CommonSection1
      title={`Skillmine Technologies`}
      subtitle1={`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.`}
      subtitle2={``}
      sectionCover={sectionCover}
      background={`#E8F0FF`}
      btnText={`Let’s rank you on Page #1`}
      boxShadow={false}
      extraText={false}
      isColored={false}
      titleColor={`#4C2E88`}
      viewBtn={false}
    />
  );
};

export default Section1;
