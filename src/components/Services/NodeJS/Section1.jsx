import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import sectionCover from '../../../assets/images/nodejs-section-1-cover.svg';

const Section1 = ({handleFunction}) => {
    return (
        <CommonSection1
            handleFunction={handleFunction}
            title={`Node JS Development`}
            subtitle1={`Get Optimized or Get Out!`}
            subtitle2={`Let us help you Stay on Top of the Internet!`}
            sectionCover={sectionCover}
            background={`#F4F8FF`}
            btnText={`Get a quote`}
            boxShadow={false}
            extraText={false}
            isColored={false}
            titleColor={`#4C2E88`}
            viewBtn={true}
        />
    );
};

export default Section1;