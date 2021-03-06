import React from "react";
import CommonSection1 from "../../Common/CommonSection1";
import sectionCover from '../../../assets/images/vuejs-section-1-cover.svg';

const Section1 = ({handleFunction}) => {
    return (
        <CommonSection1
            handleFunction={handleFunction}
            title={`Vue JS Development`}
            subtitle1={`Stay AHEAD in the game with Vue JS!`}
            subtitle2={`Get high-performing, reactive apps ready in a snap!`}
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