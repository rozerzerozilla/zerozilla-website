import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import sectionCover from "../../../assets/images/php-section-1-cover.webp";

const Section1 = ({handleFunction}) => {
    return (
        <CommonSection1
            handleFunction={handleFunction}
            title={`PHP Development `}
            subtitle1={`THE BEST PHP development services`}
            subtitle2={`Robust, appealing and feature-rich-Get them HERE!`}
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