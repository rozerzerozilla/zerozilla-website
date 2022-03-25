import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import sectionCover from '../../../assets/images/seo-section-1-cover.png';

const Section1 = ({handleFunction}) => {
    return (
        <CommonSection1
            handleFunction={handleFunction}
            title={`ReactJS Application`}
            subtitle1={`Get Optimized or Get Out!`}
            subtitle2={`Let us help you Stay on Top of the Internet!`}
            sectionCover={"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"}
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
