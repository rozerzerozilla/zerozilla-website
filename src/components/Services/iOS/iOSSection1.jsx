import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import sectionCover from '../../../assets/images/iphone-section1-cover.webp';

const Section1 = ({handleFunction}) => {
    return (
        <CommonSection1
            handleFunction={handleFunction}
            title={`iOS Application Development`}
            subtitle1={`Expand your reach to Apple users!`}
            subtitle2={`Develop an app that stands out! `}
            sectionCover={sectionCover}
            background={`#F4F8FF`}
            btnText={`Get a qoute`}
            boxShadow={false}
            extraText={false}
            isColored={false}
            titleColor={`#4C2E88`}
            viewBtn={true}
        />
    );
};

export default Section1;