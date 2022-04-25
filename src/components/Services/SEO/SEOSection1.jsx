import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import sectionCover from '../../../assets/images/seo-section-1-cover.webp';

const Section1 = ({handleFunction}) => {
  return (
    <CommonSection1
      handleFunction={handleFunction}
      title={`Enterprise <br/> SEO`}
      subtitle1={`Let us help you Stay on Top of the Internet!`}
      subtitle2={`SEO solutions that generate actual results!`}
      subtitle3={null}
      sectionCover={sectionCover}
      background={`#F4F8FF`}
      btnText={`Rank your Page #1`}
      boxShadow={false}
      extraText={false}
      isColored={false}
      titleColor={`#4C2E88`}
      viewBtn={true}
    />
  );
};

export default Section1;
