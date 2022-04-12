import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import sectionCover from '../../../assets/images/nodejs-section-1-cover.svg';
const Section1 = ({handleFunction}) => {
    return (
        <CommonSection1
            handleFunction={handleFunction}
            title={`Java Development`}
            subtitle1={`Get dynamic and responsive apps`}
            subtitle2={`Go an EXTRA mile with apps that perform EXTRA!`}
            sectionCover={"https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"}
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