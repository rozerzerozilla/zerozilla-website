import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import sectionCover from '../../../assets/images/hybrid-section1-cover.webp';

const Section1 = ({handleFunction}) => {
    return (
        <CommonSection1
            handleFunction={handleFunction}
            title={`Hybrid Application Development`}
            subtitle1={`Experience versatility with Hybrid apps!`}
            subtitle2={`Trendy Hybrid apps that can take you to the top!`}
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