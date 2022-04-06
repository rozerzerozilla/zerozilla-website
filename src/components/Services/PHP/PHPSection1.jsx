import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import sectionCover from "../../../assets/images/php-section-1-cover.webp";

const Section1 = ({handleFunction}) => {
    return (
        <CommonSection1
            handleFunction={handleFunction}
            title={`PHP Developers`}
            subtitle1={`Lorem ipsum dolor sit amet, consetetur`}
            subtitle2={`Lorem ipsum dolor sit amet, consetetur`}
            sectionCover={sectionCover}
            animatedImage={false}
            background={`#F4F8FF`}
            btnText={`See our plans`}
            boxShadow={false}
            extraText={false}
            isColored={false}
            titleColor={`#4C2E88`}
            viewBtn={true}
        />
    );
};

export default Section1;